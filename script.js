
let questions = [];
let current = 0;
let score = 0;
let startTime;
let studyMode = false;
let answered = [];
let savedKey = "linuxplus_quiz_state";

// Timer
function updateTimer() {
  const elapsed = Math.floor((Date.now() - startTime) / 1000);
  const mins = Math.floor(elapsed / 60);
  const secs = elapsed % 60;
  document.getElementById("timer").textContent = `${mins}m ${secs}s`;
  requestAnimationFrame(updateTimer);
}

// Start quiz
function startQuiz(num) {
  studyMode = document.getElementById("studyMode").checked;
  questions = shuffle([...allQuestions]).slice(0, num);
  current = 0;
  score = 0;
  answered = new Array(questions.length).fill(null);
  startTime = Date.now();
  showQuestion();
  document.getElementById("start-buttons").style.display = "none";
  document.getElementById("nav-buttons").style.display = "block";
  updateTimer();
  saveProgress();
}

// Show question
function showQuestion() {
  const q = questions[current];
  let content = "";
  if (q.type === "dragdrop") {
    content = renderDragDrop(q);
  } else {
    const choices = q.choices.map((c, i) =>
      `<label><input type="radio" name="choice" value="${"ABCD"[i]}" /> ${c}</label>`
    ).join('');
    const ctx = q.context ? `<div class="context">${q.context}</div>` : "";
    content = `${ctx}<div class="answers">${choices}</div>`;
  }
  document.getElementById("quiz-container").innerHTML = `
    <div class="question-box">
      <h3>${q.question}</h3>
      ${content}
    </div>
  `;
  document.getElementById("qNumber").textContent = current + 1;
  document.getElementById("qTotal").textContent = questions.length;
  document.getElementById("feedback").textContent = "";
  saveProgress();
  if (q.type === "dragdrop") initDragDrop();
}

// Navigation
function nextQuestion() {
  if (current < questions.length - 1) {
    current++;
    showQuestion();
  }
}
function prevQuestion() {
  if (current > 0) {
    current--;
    showQuestion();
  }
}

// Check answer
function checkAnswer() {
  const q = questions[current];
  if (q.type === "dragdrop") {
    const mapVal = document.getElementById("dd-map").value;
    if (!mapVal) return alert("Arrange the lines first.");
    const userOrder = JSON.parse(mapVal);
    // compare to q.parts in order
    let correct = true;
    for (let i=0; i<q.parts.length; i++) {
      if (userOrder[i] !== q.parts[i]) { correct = false; break; }
    }
    if (correct) {
      if (answered[current] !== true) {
        score++; answered[current] = true;
      }
      document.getElementById("feedback").textContent = "✅ Correct!" + (q.explanation ? " — " + q.explanation : "");
    } else {
      answered[current] = false;
      document.getElementById("feedback").textContent = "❌ Wrong." + (q.explanation ? " — " + q.explanation : "");
    }
  } else {
    const selected = document.querySelector('input[name="choice"]:checked');
    if (!selected) return alert("Select an answer.");
    const answer = selected.value;
    const correct = (q.answer || "A");
    if (answer === correct) {
      if (answered[current] !== true) { score++; answered[current] = true; }
      document.getElementById("feedback").textContent = "✅ Correct!" + (q.explanation ? " — " + q.explanation : "");
    } else {
      answered[current] = false;
      const corrText = q.choices && q.choices["ABCD".indexOf(correct)] ? ` Correct: ${correct} — ${q.choices["ABCD".indexOf(correct)]}` : ` Correct: ${correct}`;
      document.getElementById("feedback").textContent = "❌ Wrong." + corrText + (q.explanation ? " — " + q.explanation : "");
    }
  }
  document.getElementById("score").textContent = score;
  saveProgress();
}
    document.getElementById("feedback").textContent = "✅ Correct!";
  } else {
    answered[current] = false;
    document.getElementById("feedback").textContent = `❌ Wrong. Correct answer: ${correct}`;
  }
  document.getElementById("score").textContent = score;
  saveProgress();
}

// Dark mode
function toggleDark() {
  document.body.classList.toggle("dark-mode");
}

// Review screen
function finishQuiz() {
  document.getElementById("nav-buttons").style.display = "none";
  let html = "<h2>Review of Missed Questions</h2>";
  questions.forEach((q, i) => {
    if (answered[i] === false) {
      html += `<div class='question-box'><strong>Q${i + 1}:</strong> ${q.question}<br><em>Correct Answer:</em> ${q.choices["ABCD".indexOf(q.answer)]}</div>`;
    }
  });
  document.getElementById("review-section").innerHTML = html || "<p>✅ No missed questions!</p>";
  localStorage.removeItem(savedKey);
}

// Persistence
function saveProgress() {
  const state = { current, score, answered, questions, studyMode, startTime };
  localStorage.setItem(savedKey, JSON.stringify(state));
}
window.onload = () => {
  const saved = localStorage.getItem(savedKey);
  if (saved) {
    const state = JSON.parse(saved);
    questions = state.questions;
    current = state.current;
    score = state.score;
    answered = state.answered;
    studyMode = state.studyMode;
    startTime = state.startTime;
    document.getElementById("start-buttons").style.display = "none";
    document.getElementById("nav-buttons").style.display = "block";
    updateTimer();
    showQuestion();
  }
};

// Helper
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


// === Drag & Drop helpers ===
function renderDragDrop(q) {
  const allPieces = shuffle([...(q.parts || []), ...((q.distractors||[]))]);
  const pieceHTML = allPieces.map((p,i)=>`<div class="dd-piece" draggable="true" data-id="${i}">${escapeHtml(p)}</div>`).join('');
  const targetSlots = q.parts.map((_,i)=>`<div class="dd-slot" data-slot="${i}">Drop here</div>`).join('');

  const ctx = q.context ? `<div class="context">${q.context}</div>` : "";
  return `
    ${ctx}
    <div class="dd-bank">${pieceHTML}</div>
    <h4>Arrange in order:</h4>
    <div class="dd-targets">${targetSlots}</div>
    <input type="hidden" id="dd-map" value="[]"/>
  `;
}

function initDragDrop() {
  const pieces = document.querySelectorAll(".dd-piece");
  const slots = document.querySelectorAll(".dd-slot");

  pieces.forEach(el => {
    el.addEventListener("dragstart", ev => {
      ev.dataTransfer.setData("text/plain", el.getAttribute("data-id"));
    });
  });

  slots.forEach(slot => {
    slot.addEventListener("dragover", ev => ev.preventDefault());
    slot.addEventListener("drop", ev => {
      ev.preventDefault();
      const id = ev.dataTransfer.getData("text/plain");
      const piece = document.querySelector(`.dd-piece[data-id="${id}"]`);
      if (!piece) return;
      // Clear existing child
      slot.innerHTML = "";
      slot.appendChild(piece);
      syncDDMap();
    });
  });

  const bank = document.querySelector(".dd-bank");
  if (bank) {
    bank.addEventListener("dragover", ev => ev.preventDefault());
    bank.addEventListener("drop", ev => {
      ev.preventDefault();
      const id = ev.dataTransfer.getData("text/plain");
      const piece = document.querySelector(`.dd-piece[data-id="${id}"]`);
      if (!piece) return;
      bank.appendChild(piece);
      syncDDMap();
    });
  }
}

function syncDDMap() {
  const slots = document.querySelectorAll(".dd-slot");
  const map = [];
  slots.forEach((slot, idx) => {
    const child = slot.querySelector(".dd-piece");
    map[idx] = child ? child.textContent : null;
  });
  document.getElementById("dd-map").value = JSON.stringify(map);
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
}

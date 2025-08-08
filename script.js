
let questions = [];
let current = 0;
let score = 0;
let startTime;
let studyMode = false;
let answered = [];
let savedKey = "linuxplus_quiz_state_v2";

// Timer
function updateTimer() {
  if (!startTime) return;
  const elapsed = Math.floor((Date.now() - startTime) / 1000);
  const mins = Math.floor(elapsed / 60);
  const secs = elapsed % 60;
  document.getElementById("timer").textContent = `${mins}m ${secs}s`;
  requestAnimationFrame(updateTimer);
}

function startQuiz(num) {
  studyMode = document.getElementById("studyMode").checked;
  questions = shuffle([...allQuestions]).slice(0, num);
  current = 0;
  score = 0;
  answered = new Array(questions.length).fill(null);
  startTime = Date.now();
  document.getElementById("start-buttons").style.display = "none";
  document.getElementById("nav-buttons").style.display = "flex";
  document.getElementById("review-section").innerHTML = "";
  showQuestion();
  updateTimer();
  saveProgress();
}

function renderMCQ(q) {
  const choices = q.choices.map((c, i) =>
    `<label class="choice"><input type="radio" name="choice" value="${"ABCD"[i]}"/> ${escapeHtml(c)}</label>`
  ).join('');
  return `<div class="answers">${choices}</div>`;
}

function renderDrag(q) {
  // Create draggable tiles and drop zone
  const tiles = q.dragPieces.map((p, idx) =>
    `<div class="tile" draggable="true" data-val="${escapeHtml(p)}">${escapeHtml(p)}</div>`
  ).join('');
  return `
    <div class="drag-help">Drag tiles into the drop area from left to right.</div>
    <div class="tiles">${tiles}</div>
    <div id="dropzone" class="dropzone" data-assembled=""></div>
  `;
}

function attachDnDHandlers() {
  const tiles = document.querySelectorAll('.tile');
  const dropzone = document.getElementById('dropzone');
  tiles.forEach(t => {
    t.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', t.getAttribute('data-val'));
    });
  });
  if (dropzone) {
    dropzone.addEventListener('dragover', e => e.preventDefault());
    dropzone.addEventListener('drop', e => {
      e.preventDefault();
      const val = e.dataTransfer.getData('text/plain');
      const span = document.createElement('span');
      span.className = 'dz-piece';
      span.textContent = val + " ";
      span.dataset.val = val;
      span.addEventListener('click', () => span.remove());
      dropzone.appendChild(span);
    });
  }
}

function showQuestion() {
  const q = questions[current];
  let body = "";
  if (q.type === "drag") body = renderDrag(q);
  else body = renderMCQ(q);

  const header = `<h3>${escapeHtml(q.question)}</h3>`;
  document.getElementById("quiz-container").innerHTML = `
    <div class="question-box">
      ${header}
      ${body}
      <div id="explain" class="explain"></div>
    </div>
  `;
  document.getElementById("qNumber").textContent = current + 1;
  document.getElementById("qTotal").textContent = questions.length;
  document.getElementById("feedback").textContent = "";
  attachDnDHandlers();
  saveProgress();
}

function nextQuestion(){ if(current < questions.length -1){ current++; showQuestion(); } }
function prevQuestion(){ if(current > 0){ current--; showQuestion(); } }

function checkAnswer() {
  const q = questions[current];
  let correct = false;
  if (q.type === "drag") {
    const dz = document.getElementById('dropzone');
    const built = Array.from(dz.querySelectorAll('.dz-piece')).map(s => s.dataset.val).join(' ').trim();
    correct = (built === q.dragSolution);
  } else {
    const selected = document.querySelector('input[name="choice"]:checked');
    if (!selected) return alert("Select an answer.");
    const answer = selected.value;
    correct = (answer === q.answer);
  }

  if (correct) {
    if (answered[current] !== true) { score++; answered[current] = true; }
    document.getElementById("feedback").textContent = "✅ Correct!";
  } else {
    answered[current] = false;
    let correctText = (q.type === "drag") ? q.dragSolution : `${q.answer}. ${q.choices["ABCD".indexOf(q.answer)]}`;
    document.getElementById("feedback").innerHTML = `❌ Wrong. Correct: <code>${escapeHtml(correctText)}</code>`;
  }
  document.getElementById("score").textContent = score;
  // show explanation
  const exp = q.explanation ? `<div class="exp-header">Explanation</div><div class="exp-body">${escapeHtml(q.explanation)}</div>` : "";
  document.getElementById("explain").innerHTML = exp;
  saveProgress();
}

function finishQuiz() {
  document.getElementById("nav-buttons").style.display = "none";
  let html = "<h2>Review of Missed Questions</h2>";
  let missed = 0;
  questions.forEach((q, i) => {
    if (answered[i] === false) {
      missed++;
      const correctText = (q.type === "drag") ? q.dragSolution : `${q.answer}. ${q.choices["ABCD".indexOf(q.answer)]}`;
      html += `<div class='question-box'><strong>Q${i+1}:</strong> ${escapeHtml(q.question)}<br>
      <em>Correct:</em> <code>${escapeHtml(correctText)}</code><br>
      ${q.explanation ? `<div class="exp-mini">${escapeHtml(q.explanation)}</div>` : ""}
      </div>`;
    }
  });
  document.getElementById("review-section").innerHTML = missed ? html : "<p>✅ No missed questions!</p>";
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
    try {
      const state = JSON.parse(saved);
      questions = state.questions;
      current = state.current;
      score = state.score;
      answered = state.answered;
      studyMode = state.studyMode;
      startTime = state.startTime;
      document.getElementById("start-buttons").style.display = "none";
      document.getElementById("nav-buttons").style.display = "flex";
      updateTimer();
      showQuestion();
      return;
    } catch {}
  }
};

// Helpers
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

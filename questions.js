const allQuestions = [
  {
    "question": "A cloud engineer needs to change the secure remote login port from 22 to 49000. Which of the following files should the engineer modify to change the port n umber to the desired value?",
    "choices": [
      "/etc/host.conf",
      "/etc/ hostname",
      "/et c/servic es",
      "/etc/ssh/ sshd_config"
    ],
    "answer": "D",
    "explanation": "The file /etc/ssh/sshd_config cont ains the configuration settin gs for the SSH daemon, which handles \nthe secure remote login. To change the port number, the engineer should edit this file and modify the line that says Port 22 to Port 49000. The other files are n ot related to the SSH \nservice. Reference: CompTIA Linux+ (XK0-005) Certification Stud y Guide, Chapter 13: Managing \nNetwork Services, page 411.",
    "type": "mcq"
  },
  {
    "question": "A new file was added to a main Git repository. An administrator wants to synchronize a local copy with the contents of the main repository. Which of the followin g commands should the administrator use for this task?",
    "choices": [
      "git reflog",
      "git pull",
      "git status",
      "git push"
    ],
    "answer": "B",
    "explanation": "The command iptables -t nat -A PREROUTING -p tcp --dport 80 -j DNAT --to-destination \n192.0.2.25:3128 adds a rule to the nat table that redirects all incoming TCP packets with destination \nport 80 (HTTP) to the proxy server 192.0.2.25 on port 3128. Thi s is the correct way to achieve the \ntask. The other options are incorrect because they either delet e a rule (-D), use the wrong protocol \n(top instead of tcp), or use the wrong port (81 instead of 80). Reference: CompTIA Linux+ (XK0-005) \nCertification Study Guide, Chapt er 12: Managing Network Connect ions, page 381.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator needs to redirect all HTTP traffic tempor arily to the new proxy server 192.0.2.25 on port 3128. Which of the following commands will a ccomplish this task?",
    "choices": [
      "iptables -t nat -D PREROUTING -p tcp --sport 80 -j DNAT - -t o-destination 192.0.2.25:3128",
      "iptables -t nat -A PREROUTING -p top --dport 81 -j DNAT \"-to -destination 192.0.2.25:3129",
      "iptables -t nat -I PREROUTING -p top --sport 80 -j DNAT \"-to-destination 192.0.2.25:3129",
      "iptables -t nat -A PREROUTING -p tcp --dport 80 -j DNAT \"-to -destination 192.0.2.25:3128"
    ],
    "answer": "D",
    "explanation": "The command iptables -t nat -A PREROUTING -p tcp --dport 80 -j DNAT --to-destination \n192.0.2.25:3128 adds a rule to the nat table that redirects all incoming TCP packets with destination \nport 80 (HTTP) to the proxy server 192.0.2.25 on port 3128. Thi s is the correct way to achieve the \ntask. The other options are incorrect because they either delet e a rule (-D), use the wrong protocol \n\n(top instead of tcp), or use the wrong port (81 instead of 80). Reference: CompTIA Linux+ (XK0-005) \nCertification Study Guide, Chapt er 12: Managing Network Connect ions, page 381.",
    "type": "mcq"
  },
  {
    "question": "Developers have requested implem entation of a persistent, stati c route on the application server. Packets sent over the interface eth0 to 10.0.213.5 should be ro uted via 10.0.5.1. Which of the following commands should the administrator run to achieve this goal?",
    "choices": [
      "route -i etho -p add 10.0.213.5 10.0.5.1",
      "route modify eth0 +ipv4.routes \"10.0.213.5 10.0.5.1\"",
      "echo \"10.0.213.5 10.0.5.1 eth0\" > /proc/net/route",
      "ip route add 10.0.213.5 via 10.0.5.1 dev eth0"
    ],
    "answer": "D",
    "explanation": "The command ip route add 10.0.213.5 via 10.0.5.1 dev eth0 adds a static route to the routing \ntable that sends packets destined for 10.0.213.5 (a single host ) through the gateway 10.0.5.1 on \nthe interface eth0. This is the correct way to achieve the goal . The other options are incorrect \nbecause they either use the wrong syntax (route -i etho -p add) , the wrong command (route modify), \nor the wrong file (/proc/net/route). Reference: CompTIA Linux+ (XK0-005) Certification Study Guide, \nChapter 12: Managing Network Connections, page 379.",
    "type": "mcq"
  },
  {
    "question": "Which of the following technologies can be used as a central re pository of Linux users and groups?",
    "choices": [
      "LDAP",
      "MF A",
      "SSO",
      "PA M"
    ],
    "answer": "A",
    "explanation": "LDAP stands for Lightweight Directory Access Protocol, which is a protocol for accessing and \nmanaging a central directory of users and groups. LDAP can be u sed as a central repository of Linux \nusers and groups, allowing for centralized authentication and a uthorization across multiple Linux \nsystems. MFA, SSO, and PAM are not technologies that can be use d as a central repository of Linux \nusers and groups. MFA stands for Multi-Factor Authentication, which is a method of verifying a users \nidentity using more than one factor, such as a password, a toke n, or a biometric. SSO stands for \nSingle Sign-On, which is a feature that allows a user to log in once and access multiple applications or \nsystems without having to re-ente r credentials. PAM stands for Pluggable Authentication Modules, \nwhich is a framework that allows Linux to use different authent ication methods, such as passwords, \ntokens, or biometrics. Reference : CompTIA Linux+ (XK0-005) Cert ification Study Guide, Chapter 8: \nManaging Users and Groups",
    "type": "mcq"
  },
  {
    "question": "A systems administrator is troubleshooting connectivity issues and trying to find out why a Linux server is not able to reach other servers on the same subnet it is connected to. When listing link parameters, the following is presented: Based on the output above, which of following is the MOST proba ble cause of the issue?",
    "choices": [
      "The addr ess ac:00:11:22:33:cd is not a valid Ethernet addres s.",
      "The Ethernet broadcast address should be ac:00:11:22:33:ff i nstead.",
      "The network interface eth0 is using an old kernel module.",
      "The network interface cable i s not connected to a switch."
    ],
    "answer": "D",
    "explanation": "The most probable cause of the connectivity issue is that the n etwork interface cable is not \nconnected to a switch. This can be inferred from the output of the ip link list dev eth0 command, \nwhich shows that the network interface eth0 has the NO-CARRIER flag set. This flag indicates that there is no physical link detected on the interface, meaning th at the cable is either unplugged or \nfaulty. The other options are not valid causes of the issue. Th e address ac:00:11:22:33:cd is a valid \nEthernet address, as it follows the format of six hexadecimal octets separated by colons. The \nEthernet broadcast address shoul d be ff:ff:ff:ff:ff:ff, which i s the default value fo r all interfaces. The \nnetwork interface eth0 is not using an old kernel module, as it shows the UP flag, which indicates \nthat the interface is enabled and ready to transmit data. Reference: CompTIA Linux+ (XK0-005) \nCertification Study Guide, Chapter 14: Managing Networking",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator was asked to run a container with the httpd server inside. This container should be exposed at port 443 of a Linux host machine while it internally listens on port 8443. Which of the following commands will accomplish this task?",
    "choices": [
      "podman run -d -p 443:8443 httpd",
      "podman run -d -p 8443:443 httpd",
      "podman run \"d -e 443:8443 httpd",
      "podman exec -p 8443:443 httpd"
    ],
    "answer": "A",
    "explanation": "The command that will accomplish the task of running a containe r with the httpd server inside and \nexposing it at port 443 of the Linux host machine while it inte rnally listens on port 8443 is podman \nrun -d -p 443:8443 httpd. This command uses the podman tool, wh ich is a daemonless container \nengine that can run and manage containers on Linux systems. The -d option runs the container in \ndetached mode, meaning that it runs in the background without blocking the terminal. The -p option maps a port on the host machine to a port inside the container, using the format \nhost_port:container_port. In this case, port 443 on the host ma chine is mapped to port 8443 inside \n\nthe container, allowing external access to the httpd server. Th e httpd argument specifies the name of \nthe image to run as a container, which in this case is an image that contains the Apache HTTP Server \nsoftware. The other options are not correct commands for accomp lishing the task. Podman run -d -p \n8443:443 httpd maps port 8443 on the host machine to port 443 inside the container, which does not match the requirement. Podman run \"d -e 443:8443 httpd uses the -e option instead of the -p \noption, which sets an environment variable inside the container instead of mapping a port. Podman exec -p 8443:443 httpd uses the podman exec command instead of the podman run command, which \nexecutes a command inside an existing container instead of crea ting a new one. Reference: CompTIA \nLinux+ (XK0-005) Certification Stud y Guide, Chapter 18: Automat ing Tasks",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator needs to analyze a failing application th at is running inside a container. Which of the following commands allows the Linux administrator to ent er the running container and analyze the logs that are stored inside?",
    "choices": [
      "docker run -ti app /bin/sh",
      "pod man exec -ti app /bin/sh",
      "pod man run -d app /bin/bash",
      "docker exec -d app /bin/bash"
    ],
    "answer": "B",
    "explanation": "Podman exec -ti app /bin/sh allows the Linux administrator to enter the running container and \nanalyze the logs that are stored inside. This command uses the podman tool, which is a daemonless \ncontainer engine that can run a nd manage containers on Linux sy stems. The exec option executes a \ncommand inside an existing container, in this case app, which i s the name of the container that runs \nthe failing application. The -ti option allocates a pseudo-TTY and keeps STDIN open, allowing for \ninteractive shell access to the container. The /bin/sh argument specifies the shell command to run \ninside the container, which can be used to view and manipulate the log files. \nThe other options are not correct commands for entering a runni ng container and analyzing the logs. \nDocker run -ti app /bin/sh creates a new container from the app image and runs the /bin/sh \ncommand inside it, but does not enter the existing container th at runs the failing application. \nPodman run -d app /bin/bash also creates a new container from t he app image and runs the \n/bin/bash command inside it, but does so in detached mode, mean ing that it runs in the background \nwithout interactive shell access. Docker exec -d app /bin/bash executes the /bin/bash command \ninside the existing app container, but also does so in detached mode, without interactive shell access. \n\nReference: CompTIA Linux+ (XK0-005) Certification Study Guide, Chapter 18: Automating Tasks; View \ncontainer logs | Docker Docs; How to see the logs of a docker container - Stack Overflow",
    "type": "mcq"
  },
  {
    "question": "When trying to log in remotely to a server, a user receives the following message: The server administrator is investigating the issue on the serv er and receives the following outputs: Which of the following is causing the issue?",
    "choices": [
      "The wrong permissions are on the users home directory.",
      "The account was locked out due to three failed logins.",
      "The user entered the wrong password.",
      "The user has the wrong shell assigned to the account."
    ],
    "answer": "D",
    "explanation": "The user has the wrong shell assigned to the account, which is causing the issue. The output 1 shows \nthat the users shell is set to /bin/false, which is not a valid shell and will prevent the user from \nlogging in. The output 2 shows that the users home directory ha s the correct permissions (drwxr-xrx), \nand the output 3 shows that the user entered the correct password and was accepted by the SSH daemon, but the session was closed immediately due to the inval id shell. The other options are \nincorrect because they are not supported by the outputs. Reference: CompTIA Linux+ (XK0-005) \nCertification Study Guide, Chapter 13: Managing Network Services, page 413.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator would like to use systemd to schedule a job to run every two hours. The administrator creates timer and service definitions and restart s the server to load these new configurations. After the restart, the administrator checks the log file and notices that the job is only running daily. Which of the following is MOST likely causing th e issue?",
    "choices": [
      "The checkdiskspace.service is not running.",
      "The checkdiskspace.service needs to be enabled.",
      "The OnCalendar schedule is incorrect in the timer definition .",
      "The system-daemon services need to be reloaded."
    ],
    "answer": "C",
    "explanation": "The OnCalendar schedule is incorrect in the timer definition, w hich is causing the issue. The \nOnCalendar schedule defines when the timer should trigger the s ervice. The format of the schedule \nis OnCalendar=<year>-<month>-<day> <hour>:<minute>:<second>. If any of the fields are omitted, \nthey are assumed to be *, which means any value. Therefore, the schedule OnCalendar=*-*-* \n00:00:00 means every day at midnight, which is why the job is running daily. To make the job run every two hours, the schedule should be OnCalendar=*-*-* *:00:00, which means every hour \ndivisible by 2 at the start of the minute. The other options are incorrect because they are not related \nto the schedule. The checkdiskspace.service is running, as show n by the output of systemct1 status \ncheckdiskspace.service. The checkdiskspace.service is enabled, as shown by the output of systemct1 is-enabled checkdiskspace.service. The system-daemon services d o not need to be reloaded, as the \ntimer and service definitions are already loaded by the restart . Reference: CompTIA Linux+ (XK0-005) \nCertification Study Guide, Chapter 14: Managing Processes and S cheduling Tasks, page 437.",
    "type": "mcq"
  },
  {
    "question": "An administrator deployed a Linux server that is running a web application on port 6379/tcp. SELinux is in enforcing mode bas ed on organization policies. The port is open on the firewall. Users who are trying to connect to a local instance of the web application receive Error 13, Permission denied. The administrator ran some commands that resulted in the follow ing output: Which of the following commands should be used to resolve the i ssue?",
    "choices": [
      "semanage port -d -t http_port_t -p tcp 6379",
      "semanage port -a -t http_port_t -p tcp 6379",
      "semanage port -a http_port_t -p top 6379",
      "semanage port -l -t http_port_tcp 6379"
    ],
    "answer": "B",
    "explanation": "The command semanage port -a -t http_port_t -p tcp 6379 adds a new port definition to the SELinux policy and assigns the type http_port_t to the port 6379/tcp. T his allows the web application to run \non this port and accept connections from users. This is the correct way to resolve the issue. The other options are incorrect because they either delete a port definit ion (-d), use the wrong protocol \n(top instead of tcp), or list the existing port definitions (-l ). Reference: CompTIA Linux+ (XK0-005) \nCertification Study Guide, Chapt er 18: Securing Linux Systems, page 535.",
    "type": "mcq"
  },
  {
    "question": "An administrator needs to make some changes in the IaC declarat ion templates. Which of the following commands would maintain version control?",
    "choices": [
      "git clon e https://github.com/comptia/linu x+-.git gi t push origin",
      "git clone https://qithub.com/comptia/linux+-.gi t git fe tch New-Branch",
      "git clone https://github.com/comptia/linux+-.gi t git status",
      "git clon e https://github.com/comptia/linuxt+-.git git checkout -b <new-branch>"
    ],
    "answer": "D",
    "explanation": "The command that will maintain version control while making som e changes in the IaC declaration \ntemplates is git checkout -b <new-branch>. This command uses th e git tool, which is a distributed \nversion control system that tracks changes in source code and e nables collaboration among \ndevelopers. The checkout option switches to a different branch in the git repository, where a branch \nis a pointer to a specific commit in the history. The -b option creates a new branch with the given \nname, and switches to it. This way, the administrator can make changes in the new branch without \naffecting the main branch, and later merge them if needed. \nThe other options are not correct commands for maintaining version control while making some \nchanges in the IaC declaration te mplates. The git clone https:/ /github.com/comptia/linux\u00c2\u00b1.git \ncommand will clone an existing repository from a remote URL to a local directory, but it will not \ncreate a new branch for making changes. The git push origin com mand will push the local changes to \na remote repository named origin, but it will not create a new branch for making changes. The git \nfetch New-Branch command will fetch updates from a remote branc h named New-Branch, but it will \n\nnot create a new branch for making changes. Reference: CompTIA Linux+ (XK0-005) Certification \nStudy Guide, Chapter 19: Managing Source Code; Git - Basic Bran ching and Merging",
    "type": "mcq"
  },
  {
    "question": "An administrator attempts to rename a file on a server but rece ives the following error. The administrator then runs a few commands and obtains the foll owing output: Which of the following commands should the administrator run NE XT to allow the file to be renamed by any user?",
    "choices": [
      "chgrp reet files",
      "chacl -R 644 files",
      "chown users files",
      "chmod -t files"
    ],
    "answer": "D",
    "explanation": "The command that the administrator should run NEXT to allow the file to be renamed by any user is \nchmod -t files. This command uses the chmod tool, which is used to change file permissions and access modes. The -t option removes (or sets) the sticky bit on a directory, which restricts deletion or \nrenaming of files within that directory to only their owners or root. In this case, since files is a \ndirectory with sticky bit set (indicated by t in drwxrwxrwt), removing it will allow any user to rename \nor delete files within that directory. \nThe other options are not correct commands for allowing any use r to rename files within files \ndirectory. The chgrp reet files command will change the group o wnership of files directory to reet, \nbut it will not affect its permissions or access modes. The cha cl -R 644 files command is invalid, as \nchacl is used to change file access control lists (ACLs), not p ermissions or access modes. The chown \nusers files command will change the user ownership of files directory to users, but it will not affect its permissions or access modes. Reference: CompTIA Linux+ (XK0-005 ) Certification Study Guide, \nChapter 8: Managing Users and Groups; chmod(1) - Linux manual p age",
    "type": "mcq"
  },
  {
    "question": "Which of the following commands will display the operating syst em?",
    "choices": [
      "uname -n",
      "uname -s",
      "uname -o",
      "uname -m"
    ],
    "answer": "C",
    "explanation": "The command that will display the operating system is uname -o. This command uses the uname \ntool, which is used to print system information such as the ker nel name, version, release, machine, \nand processor. The -o option stands for operating system, and p rints the name of the operating \n\nsystem implementation (usually GNU/Linux). \nThe other options are not correct commands for displaying the o perating system. The uname -n \ncommand will display the network node hostname of the system. T he uname -s command will \ndisplay the kernel name of the system. The uname -m command wil l display the machine hardware \nname of the system. Reference: CompTIA Linux+ (XK0-005) Certifi cation Study Guide, Chapter 1: \nExploring Linux Command-Line Tools; uname(1) - Linux manual pag e",
    "type": "mcq"
  },
  {
    "question": "A systems engineer is adding a new 1GB XFS filesystem that shou ld be temporarily mounted under /ops/app. Which of the following is the correct list of command s to achieve this goal?",
    "choices": [
      "",
      "",
      "",
      ""
    ],
    "answer": "D",
    "explanation": "The list of commands in option D is the correct way to achieve the goal. The commands are as \nfollows: \nfallocate -l 1G /ops/app.img creates a 1GB file named app.img u nder the /ops directory. \nmkfs.xfs /ops/app.img formats the file as an XFS filesystem. \nmount -o loop /ops/app.img /ops/app mounts the file as a loop d evice under the /ops/app directory. \nThe other options are incorrect because they either use the wro ng commands \n(dd or truncate instead of fallocate), the wrong options (-t or -f instead of -o), or the wrong order of \narguments (/ops/app.img /ops/app instead of /ops/app /ops/app.i mg). Reference: CompTIA Linux+ \n(XK0-005) Certification Study Guide, Chapter 10: Managing Stora ge, pages 323-324.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator recently downloaded a software package th at is currently in a compressed file. Which of the following commands will extract the files?",
    "choices": [
      "unzip -v",
      "bzip2 -z",
      "gzip",
      "funzip"
    ],
    "answer": "C",
    "explanation": "The command gzip can extract files that are compressed with the gzip format, which has the \nextension .gz. This is the correct command to use for the software package. The other options are incorrect because they either com press files (bzip2 -z), unzip files that are compressed with the zip \nformat (unzip -v or funzip), or have the wrong options (-v or - z instead of -d). Reference: CompTIA \nLinux+ (XK0-005) Certification Stud y Guide, Chapter 11: Managing Files and Directories, page 353.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator is troubleshooting SSH connection issues from one of the workstations. When users attempt to log in from the workstation to a server w ith the IP address 104.21.75.76, they receive the following message: The administrator reviews the information below: Which of the following is causing the connectivity issue?",
    "choices": [
      "The workstation has the wrong IP settings.",
      "The sshd service is disabled.",
      "The servers firewall is preventing connections from being ma de.",
      "The server has an incorrect default gateway configuration."
    ],
    "answer": "C",
    "explanation": "The servers firewall is preventing connections from being made, which is causing the connectivity \nissue. The output of iptables -L -n shows that the firewall is blocking all incoming traffic on port 22, \nwhich is the default port for SSH. The output of ssh -v user@10 4.21.75.76 shows that the connection \nis refused by the server. To resolve the issue, the administrat or needs to allow port 22 on the firewall. \nThe other options are incorrect because they are not supported by the outputs. The workstation has \nthe correct IP settings, as shown by the output of ip addr show. The sshd service is enabled and running, as shown by the output of systemct1 status sshd. The s erver has the correct default gateway \nconfiguration, as shown by the output of ip route show. Referen ce: CompTIA Linux+ (XK0-005) \nCertification Study Guide, Chapter 13: Managing Network Service s, pages 406-407.",
    "type": "mcq"
  },
  {
    "question": "Which of the following files holds the system configuration for journal when running systemd?",
    "choices": [
      "/etc/systemd/journald.conf",
      "/etc/systemd/systemd-journalctl.conf",
      "/usr/lib/systemd/journalctl.conf",
      "/etc/systemd/systemd-journald.conf"
    ],
    "answer": "A",
    "explanation": "The file that holds the system configuration for journal when r unning systemd is \n/etc/systemd/journald.conf. Thi s file contains various settings that control the behavior of the \njournald daemon, which is responsible for collecting and storin g log messages from various sources. \nThe journald.conf file can be edited to change the default valu es of these settings, such as the \nstorage location, size limits, compression, and forwarding opti ons of the journal files. The file also \n\nsupports a drop-in directory /etc/systemd/journald.conf.d/ wher e additional configuration files can \nbe placed to override or extend the main file. Reference: CompTIA Linux+ (XK0-005) Certification \nStudy Guide, Chapter 18: Automating Tasks; journald.conf(5) - L inux manual page",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator is tasked with creating resources using containerization. When deciding how to create this type of deployment, the administrator identifies so me key features, including portability, high availability, and scalabili ty in production. Which of the following should the Linux administrator choose for the new design?",
    "choices": [
      "Docker",
      "On-premises systems",
      "Cloud-based systems",
      "Kubernetes"
    ],
    "answer": "D",
    "explanation": "The Linux administrator should choose Kubernetes for the new de sign that requires portability, high \navailability, and scalability in production using containerization. Kubernetes is an open-source \nplatform that automates the deployment, scaling, and management of containerized applications \nacross clusters of nodes. Kubernet es provides features such as service discovery, load balancing, \nstorage orchestration, self-heali ng, secret and configuration m anagement, and batch execution. \nKubernetes also supports multiple container runtimes, such as Docker, containerd, and CRI-O, making it portable across different platforms and clouds. Refer ence: CompTIA Linux+ (XK0-005) \nCertification Study Guide, Chapt er 18: Automating Tasks; What i s Kubernetes? | Kubernetes",
    "type": "mcq"
  },
  {
    "question": "Which of the following tools is commonly used for creating CI/C D pipelines?",
    "choices": [
      "Chef",
      "Puppet",
      "Jenkins",
      "Ansible"
    ],
    "answer": "C",
    "explanation": "The tool that is commonly used for creating CI/CD pipelines is Jenkins. Jenkins is an open-source \nautomation server that enables continuous integration and conti nuous delivery (CI/CD) of software \nprojects. Jenkins allows developers to build, test, and deploy code changes automatically and \nfrequently using various plugins and integrations. Jenkins also supports distributed builds, parallel \nexecution, pipelines as code, and real-time feedback. Reference : CompTIA Linux+ (XK0-005) \nCertification Study Guide, Chapter 19: Managing Source Code; Je nkins",
    "type": "mcq"
  },
  {
    "question": "A systems administrator requires that all files that are create d by the user named web have read-only permissions by the owner. Which of the following commands will satisfy this requirement?",
    "choices": [
      "chown web:web /home/web",
      "chmod -R 400 /home/web",
      "echo \"umask 377\" >> /home/web/.bashrc",
      "setfacl read /home/web"
    ],
    "answer": "C",
    "explanation": "The command that will satisfy the requirement of having all fil es that are created by the user named \nweb have read-only permissions by the owner is echo \u0153umask 377 >> /home/web/.bashrc. This \ncommand will append the umask 377 command to the end of the .ba shrc file in the web users home \ndirectory. The .bashrc file is a shell script that is executed whenever a new interactive shell session is \nstarted by the user. The umask command sets the file mode creat ion mask, which determines the \ndefault permissions for newly created files or directories by subtracting from the maximum permissions (666 for files and 777 for directories). The umask 377 command means that the user does not want to give any permissions to the group or others (3 = 000 in binary), and only wants to \ngive read permission to the owner (7 - 3 = 4 = 100 in binary). Therefore, any new file created by the web user will have read-only permission by the owner (400) and no permission for anyone \nelse. Reference: CompTIA Linux+ (XK0-005) Certification Study G uide, Chapter 8: Managing Users \nand Groups; Umask Command in Linux | Linuxize",
    "type": "mcq"
  },
  {
    "question": "A systems administrator is tasked with preventing logins from accounts other than root, while the file /etc/nologin exists. Which of the following PAM modules will ac complish this task?",
    "choices": [
      "pam_login.so",
      "pam_access.so",
      "pam_logindef.so",
      "pam_nologin.so"
    ],
    "answer": "D",
    "explanation": "The PAM module pam_nologin.so will prevent logins from accounts other than root, while the file \n/etc/nologin exists. This module checks for the existence of th e file /etc/nologin and displays its \ncontents to the user before denying access. The root user is ex empt from this check and can still log \nin. This is the correct module to accomplish the task. The othe r options are incorrect because they \nare either non-existent modules (pam_login.so or pam_logindef.s o) or do not perform the required \nfunction (pam_access.so controls access based on host, user, or time). Reference: CompTIA Linux+ \n(XK0-005) Certification Study Guide, Chapter 15: Managing Users and Groups, page 471.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator has been tasked with disabling the nginx service from the environment to prevent it from being automatically and manually started. Which of the following commands will accomplish this task?",
    "choices": [
      "systemct1 cancel nginx",
      "systemct1 disable nginx",
      "systemct1 mask nginx",
      "systemct1 stop nginx"
    ],
    "answer": "C",
    "explanation": "The command systemct1 mask nginx disables the nginx service fro m the environment and prevents it \nfrom being automatically and manually started. This command creates a symbolic link from the \nservice unit file to /dev/null, which makes the service impossi ble to start. This is the correct way to \naccomplish the task. The other options are incorrect because th ey either do not exist (systemct1 \ncancel nginx), do not prevent manual start (systemct1 disable nginx), or do not prevent automatic \nstart (systemct1 stop nginx). Reference: CompTIA Linux+ (XK0-00 5) Certification Study Guide, \nChapter 14: Managing Processes and Scheduling Tasks, page 429.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator is troubleshooting an issue in which an application service failed to start on a Linux server. The administrator runs a few commands and gets th e following outputs: Based on the above outputs, which of the following is the MOST likely action the administrator should take to resolve this issue?",
    "choices": [
      "Enable the logsearch.service and restart the service.",
      "Increase the TimeoutStartUSec configuration for the logsearc h.sevice.",
      "Update the OnCalendar configuration to schedule the start of the logsearch.service.",
      "Update the KillSignal configuration for the logsearch.servic e to use TERM."
    ],
    "answer": "B",
    "explanation": "The administrator should increase the TimeoutStartUSec configur ation for the logsearch.service to \nresolve the issue. The output of systemct1 status logsearch.ser vice shows that the service failed to \nstart due to a timeout. The output of cat /etc/systemd/system/l ogsearch.service shows that the \nservice has a TimeoutStartUSec configuration of 10 seconds, whi ch might be too short for the service \nto start. The administrator shoul d increase this value to a hig her number, such as 30 seconds or 1 \nminute, and then restart the service. The other options are incorrect because they are not related to \nthe issue. The service is already enabled, as shown by the outp ut of systemct1 is-enabled \nlogsearch.service. The service does not use an OnCalendar confi guration, as it is not a timer unit. The \n\nservice does not use a KillSignal configuration, as it is not b eing killed by a \nsignal. Reference: CompTIA Li nux+ (XK0-005) Certification Study Guide, Chapter 14: Managing \nProcesses and Scheduling Tasks, pages 434-435.",
    "type": "mcq"
  },
  {
    "question": "After installing some RPM packages, a systems administrator discovers the last package that was installed was not needed. Which of the following commands can b e used to remove the package?",
    "choices": [
      "dnf remove packagename",
      "apt-get remove packagename",
      "rpm -i packagename",
      "apt remove packagename"
    ],
    "answer": "A",
    "explanation": "The command that can be used to remove an RPM package that was installed by mistake is dnf \nremove packagename. This command will use the DNF package manag er to uninstall an RPM \npackage and its dependencies from a Linux system that uses RPM- based distributions, such as Red \nHat Enterprise Linux or CentOS . The DNF package manager handles dependency resolution and \nmetadata searching for RPM packages. \nThe other options are not correct commands for removing an RPM package from a Linux system. The \napt-get remove packagename and apt remove packagename commands are used to remove Debian \npackages from a Linux system that uses Debian-based distributio ns, such as Ubuntu or Debian. They \nare not compatible with RPM packages. The rpm -i packagename co mmand is used to install an RPM \npackage, not to remove it. Reference: CompTIA Linux+ (XK0-005) Certification Study Guide, Chapter \n9: Managing Software Packages; How to install/remove/query/update RPM packages in Linux (Cheat \nSheet \u00a6",
    "type": "mcq"
  },
  {
    "question": "A systems administrator is checking the system logs. The admini strator wants to look at the last 20 lines of a log. Which of the following will execute the command ?",
    "choices": [
      "tail -v 20",
      "tail -n 20",
      "tail -c 20",
      "tail -l 20"
    ],
    "answer": "B",
    "explanation": "The command tail -n 20 will display the last 20 lines of a file . The -n option specifies the number of \nlines to show. This is the correct command to execute the task. The other options are incorrect \nbecause they either use the wrong options (-v, -c, or -l) or have the wrong arguments (20 instead \nof 20 filename). Reference: CompTIA Linux+ (XK0-005) Certification Study Guide, Chapter 11: \nManaging Files and Directories, page 352.",
    "type": "mcq"
  },
  {
    "question": "An administrator is trying to diagnose a performance issue and is reviewing the following output: System Properties: CPU: 4 vCPU Memory: 40GB Disk maximum IOPS: 690 Disk maximum throughput: 44Mbps | 44000Kbps Based on the above output, which of the following BEST describe s the root cause?",
    "choices": [
      "The system has reached its maximum IOPS, causing the system to be slow.",
      "The system has reached its maximum permitted throughput, the refore iowait is increasing.",
      "The system is mostly idle, therefore the iowait is high.",
      "The system has a partitioned disk, which causes the IOPS to be doubled."
    ],
    "answer": "B",
    "explanation": "The system has reached its maximum permitted throughput, therefore iowait is increasing. The \noutput of iostat -x shows that the device sda has an average th roughput of 44.01 MB/s, which is \nequal to the disk maximum throughput of 44 Mbps. The output als o shows that the device sda has an \naverage iowait of 99.99%, which means that the CPU is waiting f or the disk to complete the I/O \nrequests. This indicates that the disk is the bottleneck and th e system is slow due to the high iowait. \nThe other options are incorrect because they are not supported by the outputs. The system has not reached its maximum IOPS, as the device sda has an average IOPS of 563.50, which is lower than the \ndisk maximum IOPS of 690. The system is not mostly idle, as the output of top shows that the CPU is \n100% busy. The system does not have a partitioned disk, as the output of lsblk shows that the device \nsda has only one partition sda1. Reference: CompTIA Linux+ (XK0 -005) Certification Study Guide, \nChapter 17: Optimizing Linux Systems, pages 513-514.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator wants to test the route between IP addr ess 10.0.2.15 and IP address 192.168.1.40. Which of the following commands will accomplish t his task?",
    "choices": [
      "route -e get to 192.168.1.40 from 10.0.2.15",
      "ip route get 192.163.1.40 from 10.0.2.15",
      "ip route 192.169.1.40 to 10.0.2.15",
      "route -n 192.168.1.40 from 10.0.2.15"
    ],
    "answer": "B",
    "explanation": "The command ip route get 192.168.1.40 from 10.0.2.15 will test the route between the IP address \n10.0.2.15 and the IP address 192.168.1.40. The ip route get com mand shows the routing decision for \na given destination and source address. This is the correct com mand to accomplish the task. The \nother options are incorrect because they either use the wrong commands (route instead of ip route), \nthe wrong options (-e or -n instead of get), or the wrong synta x (to instead \nof from). Reference: CompTIA Linux+ (XK0-005) Certification Stu dy Guide, Chapter 12: Managing \nNetwork Connections, page 379.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator was tasked with deleting all files and directories with names that are contained in the sobelete.txt file. Which of the following commands will accomplish this task?",
    "choices": [
      "xargs -f cat toDelete.txt -rm",
      "rm -d -r -f toDelete.txt",
      "cat toDelete.txt | rm -frd",
      "cat toDelete.txt | xargs rm -rf"
    ],
    "answer": "D",
    "explanation": "The command cat toDelet e.txt | xargs rm -rf will delete all files and directories with names that are \ncontained in the toDelete.txt file. The cat command reads the f ile and outputs its contents to the \nstandard output. The | operator pipes the output to the next co mmand. The xargs command \nconverts the output into arguments for the next command. The rm -rf command removes the files \nand directories recursively and forcefully. This is the correct way to accomplish the task. The other \noptions are incorrect because they either use the wrong options (-f instead of -a for xargs), the wrong \narguments (toDelete.txt instead of toDelete.txt filename for rm ), or the wrong commands \n(rm instead of xargs). Reference: CompTIA Linux+ (XK0-005) Cert ification Study Guide, Chapter 11: \nManaging Files and Directories, pages 349-350.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator is troubleshooting the root cause of a hi gh CPU load and average. Which of the following commands will permanently resolve the is sue?",
    "choices": [
      "renice -n -20 6295",
      "pstree -p 6295",
      "iostat -cy 1 5",
      "kill -9 6295"
    ],
    "answer": "D",
    "explanation": "The command that will permanently resolve the issue of high CPU load and average is kill -9 6295. \nThis command will send a SIGKILL signal to the process with the PID 6295, which is the process that is \nconsuming 99.7% of the CPU according to the top output. The SIG KILL signal will terminate the \nprocess immediately and free up the CPU resources. The kill com mand is used to send signals to \nprocesses by PID or name. The other options are not correct commands for resolving this i ssue. The renice -n -20 6295 \ncommand will change the priority (niceness) of the process with PID 6295 to -20, which is the highest priority possible. This will make the process more CPU-intensive, not less. The renice command is used to change the priority of running processes. The pstree -p 6295 command will show a tree of \nprocesses with PID 6295 as the root. This will not affect the CPU load or average, but only display information. The pstree command is used to display a tree of processes. The iostat -cy 1 5 command \n\nwill show CPU and disk I/O statistics for 5 iterations with an interval of 1 second. This will also not \naffect the CPU load or average, but only display information. T he iostat command is used to report \nCPU and I/O statistics. Reference: CompTIA Linux+ (XK0-005) Cer tification Study Guide, Chapter 11: \nTroubleshooting Linux Systems; kill(1) - Linux manual page; ren ice(1) - Linux manual page; pstree(1) - \nLinux manual page; iostat(1) - Linux manual page",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator wants to set the SUID of a file named dev_team.text with 744 access rights. Which of the following commands will achieve this goal?",
    "choices": [
      "chmod 4744 dev_team.txt",
      "chmod 744 --setuid dev_team.txt",
      "chmod -c 744 dev_team.txt",
      "chmod -v 4744 --suid dev_team.txt"
    ],
    "answer": "A",
    "explanation": "The command that will set the SU ID of a file named dev_team.txt with 744 access rights is chmod \n4744 dev_team.txt. This command will use the chmod utility to c hange the file mode bits of \ndev_team.txt. The first digit (4) represents the SUID bit, whic h means that when someone executes \ndev_team.txt, it will run with the permissions of the file owner. The next three di gits (744) represent \nthe read, write, and execute perm issions for the owner (7), gro up (4), and others (4). This means that \nthe owner can read, write, and execute dev_team.txt, while the group and others can only read it. \nThe other options are not correct commands for setting the SUID of a file with 744 access rights. The chmod 744 --setuid dev_team.txt command is invalid because ther e is no --setuid option in chmod. \nThe chmod -c 744 dev_team.txt command will change the file mode bits to 744, but it will not set the \nSUID bit. The -c option only means that chmod will report when a change is made. The chmod -v \n4744 --suid dev_team.txt command is also invalid because there is no --suid option in chmod. The -v \noption only means that chmod will output a diagnostic for every file processed. Reference: CompTIA \nLinux+ (XK0-005) Certification Stud y Guide, Chapter 8: Managing Users and Groups; chmod(1) - Linux \nmanual page",
    "type": "mcq"
  },
  {
    "question": "A developer has been unable to r emove a particular data folder that a team no longer uses. The developer escalated the issue to the systems administrator. The following output was received: Which of the following commands can be used to resolve this iss ue?",
    "choices": [
      "chgrp -R 755 data/",
      "chmod -R 777 data/",
      "chattr -R -i data/",
      "chown -R data/"
    ],
    "answer": "C",
    "explanation": "The command that can be used to resolve the issue of being unab le to remove a particular data \nfolder is chattr -R -i data/. This command will use the chattr utility to change file attributes on a Linux file system. The -R option means that chattr will recursively change attributes of directories and their \ncontents. The -i option means that chattr will remove (unset) t he immutable attribu te from files or \ndirectories. When a file or dire ctory has the immutable attribu te set, it cannot be modified, deleted, \nor renamed. The other options are not correct commands for resolving this i ssue. The chgrp -R 755 data/ \ncommand will change the group ownership of data/ and its conten ts recursively to 755, which is not \na valid group name. The chgrp command is used to change group o wnership of files or directories. \nThe chmod -R 777 data/ command will change the file mode bits o f data/ and its contents recursively \n\nto 777, which means that everyone can read, write, and execute them. However, this will not remove \nthe immutable attribute, which prevents deletion or modificatio n regardless of permissions. The \nchmod command is used to change file mode bits of files or dire ctories. The chown -R data/ \ncommand is incomplete and will produce an error. The chown comm and is used to change the user \nand/or group ownership of files or directories, but it requires at least one argument besides the file \nname. Reference: CompTIA Linux+ (XK0-005) Certification Study G uide, Chapter 7: Managing Disk \nStorage; chattr(1) - Linux manual page; chgrp(1) - Linux manual page; chmod(1) - Linux manual \npage; chown(1) - Linux manual page",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator needs to ensure that Java 7 and Java 8 ar e both locally available for developers to use when deploying containers. Currently only Java 8 is available. Which of the following commands should the administrator run to ensure both versions a re available?",
    "choices": [
      "docker image load java:7",
      "docker image pull java:7",
      "docker image import java:7",
      "docker image build java:7"
    ],
    "answer": "B",
    "explanation": "The command that the administrator should run to ensure that bo th Java 7 and Java 8 are locally \navailable for developers to use when deploying containers is do cker image pull java:7. This command \nwill use the docker image pull subcommand to download the java: 7 image from Docker Hub, which is \nthe default registry for Docker images. The java:7 image contai ns Java 7 installed on a Debian-based \nLinux system. The administrator can also specify a different re gistry by using the syntax \nregistry/repository:tag. \nThe other options are not correct commands for ensuring that bo th Java 7 and Java 8 are locally \navailable for developers to use when deploying containers. The docker image load java:7 command will load an image from a tar archive or STDIN, not from a regi stry. The docker image import java:7 \ncommand will create a new filesystem image from the contents of a tarball, not from a registry. The \ndocker image build java:7 command will build an image from a Do ckerfile, not from a \nregistry. Reference: CompTIA Linux+ (XK0-005) Certification Stu dy Guide, Chapter 18: Automating \nTasks; docker image pull | Docker Docs",
    "type": "mcq"
  },
  {
    "question": "A cloud engineer is installing pa ckages during VM provisioning. Which of the following should the engineer use to accomplish this task?",
    "choices": [
      "Cloud-init",
      "Bash",
      "Docker",
      "Sidecar"
    ],
    "answer": "A",
    "explanation": "The cloud engineer should use clou d-init to install packages during VM provisioning. Cloud-init is a \ntool that allows the customiza tion of cloud instances at boot t ime. Cloud-init can perform various \ntasks, such as setting the hostname, creating users, installing packages, configuring network, and \nrunning scripts. Cloud-init can work with different cloud platf orms and Linux distributions. This is the \ncorrect tool to accomplish the task. The other options are inco rrect because they are either not \nsuitable for cloud provisioning (Bash or Docker) or not a tool but a design pattern \n(Sidecar). Reference: CompTIA Li nux+ (XK0-005) Certification St udy Guide, Chapter 19: Managing \nCloud and Virtualization Technologies, page 563.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator is tasked with creating a cloud-based s erver with a public IP address. Which of the following technologies did the systems administrat or use to complete this task?",
    "choices": [
      "Puppet",
      "Git",
      "Ansible",
      "Terraform"
    ],
    "answer": "D",
    "explanation": "The systems administrator used Terraform to create a cloud-base d server with a public IP address. \nTerraform is a tool for building, changing, and versioning infr astructure as code. Terraform can create \nand manage resources on different cloud platforms, such as AWS, Azure, or Google Cloud. Terraform \nuses a declarative syntax to describe the desired state of the infrastructure and applies the changes \naccordingly. Terraform can also assign a public IP address to a cloud server by using the appropriate \nresource attributes. This is the correct technology that the systems administrator used to complete \n\nthe task. The other options are incorrect because they are eith er not designed for creating cloud \nservers (Puppet or Git) or not capable of assigning public IP a ddresses (Ansible). Reference: CompTIA \nLinux+ (XK0-005) Certification Stud y Guide, Chapter 19: Managing Cloud and Virtualization \nTechnologies, page 559.",
    "type": "mcq"
  },
  {
    "question": "A Linux systems administrator is setting up a new web server an d getting 404 - NOT FOUND errors while trying to access the web server pages from the browser. W hile working on the diagnosis of this issue, the Linux systems administrator executes the following commands: Which of the following commands will BEST resolve this issue?",
    "choices": [
      "sed -i 's/SELINUX=enforcing/SE LINUX=disabled/' /etc/selinux/ config",
      "restorecon -R -v /var/www/html",
      "setenforce 0",
      "setsebool -P httpd_can_network_connect_db on"
    ],
    "answer": "B",
    "explanation": "The command restorecon -R -v /var /www/html will best resolve the issue. The issue is caused by the \nincorrect SELinux context of the web server files under the /va r/www/html directory. The output of ls \n-Z /var/www/html shows that the files have the type user_home_t , which is not allowed for web \ncontent. The command restorecon restores the default SELinux co ntext of files based on the policy \nrules. The options -R and -v are used to apply the command recursively and verbosely. This command will change the type of the files to httpd_sys_content_t, which is the correct type for web content. This will allow the web server to access the files and serve th e pages to the browser. The other \noptions are incorrect because th ey either disable SELinux entirely (sed -i \n's/SELINUX=enforcing/SELINUX=disabled/' /etc/selinux/config or setenforce 0), which is not a good \nsecurity practice, or enable an unnecessary boolean (setsebool -P httpd_can_network_connect_db \n\non), which is not related to the issue. Reference: CompTIA Linu x+ (XK0-005) Certification Study \nGuide, Chapter 18: Securing Linux Systems, page 535.",
    "type": "mcq"
  },
  {
    "question": "To harden one of the servers, an administrator needs to remove the possibility of remote administrative login via the SSH service. Which of the followin g should the administrator do?",
    "choices": [
      "Add the line DenyUsers root to the /etc/hosts.deny file.",
      "Set PermitRootLogin to no in the /etc/ssh/sshd_config file.",
      "Add the line account required pam_nologin. so to the /etc/pa m.d/sshd file.",
      "Set PubKeyAuthentication to no in the /etc/ssh/ssh_config fi le."
    ],
    "answer": "B",
    "explanation": "The administrator should set PermitRootLogin to no in the /etc/ ssh/sshd_config file to remove the \npossibility of remote administrative login via the SSH service. The PermitRootLogin directive controls \nwhether the root user can log in using SSH. Setting it to no wi ll deny any remote login attempts by \nthe root user. This will harden the server and prevent unauthor ized access. The administrator should \nalso restart the sshd service after making the change. The othe r options are incorrect because they \neither do not affect the SSH service (/etc/hosts.deny or /etc/p am.d/sshd) or do not prevent remote \nadministrative login (PubKeyAuthentication). Reference: CompTIA Linux+ (XK0-005) Certification \nStudy Guide, Chapter 13: Managing Network Services, page 413.",
    "type": "mcq"
  },
  {
    "question": "Which of the following is a function of a bootloader?",
    "choices": [
      "It initializes all the devices that are required to load the OS.",
      "It mounts the root filesystem that is required to load the O S.",
      "It helps to load the different kernels to initiate the OS st artup process.",
      "It triggers the start of all the system services."
    ],
    "answer": "C",
    "explanation": "A function of a bootloader is to help load the different kernel s to initiate the OS startup process. A \n\nbootloader is a program that runs when the system is powered on and prepares the system for \nbooting the OS. A bootloader can load different kernels, which are the core components of the OS, \nand pass the control to the selected kernel. A bootloader can a lso provide a menu for the user to \nchoose which kernel or OS to boot. This is a correct function o f a bootloader. The other options are \nincorrect because they are either functions of the kernel (init ialize devices or mount root filesystem) \nor functions of the init system (trigger the start of system se rvices). Reference: CompTIA Linux+ (XK0- \n005) Certi\nfication Study Guide, Chapter 8: Managing the Linux B oot Process, page 2 65.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator configured firewall rules using firewal ld. However, after the system is rebooted, the firewall rules are not present: The systems administrator makes additional checks: Which of the following is the reason the firewall rules are not active?",
    "choices": [
      "ipta bles is conflicting with firewalld.",
      "The wrong system target is activated.",
      "FIREWALL_ARGS has no value assigned.",
      "The firewalld service is not enabled."
    ],
    "answer": "D",
    "explanation": "The reason the firewall rules are not active is that the firewa lld service is not enabled. This means \nthat the service will not start automatically at boot time or a fter a system reload. To enable the \nfirewalld service, the systems administrator needs to use the c ommand sudo systemct1 enable \nfirewalld. This will create a symbolic link from the firewalld service file to the appropriate systemd \ntarget, such as multi-user.target. Enabling the service does no t start it immediately, so the systems \nadministrator also needs to use the command sudo systemct1 star t firewalld or sudo systemct1 \nreload firewalld to activate the firewall rules. The other options are not correct reasons for the firewall rule s not being active. iptables is not \nconflicting with firewalld, because firewalld uses iptables as its backend by default. The wrong \nsystem target is not activated, b ecause firewalld is independent of the system target and can be \nenabled for any target. FIREWALL_ARGS has no value assigned, bu t this is not a problem, because \nFIREWALL_ARGS is an optional environment variable that can be u sed to pass additional arguments \nto the firewalld daemon, such as --debug or --nofork. If FIREWA LL_ARGS is empty or not defined, \nfirewalld will use its default arguments. Reference: firewalld. service(8) - Linux manual page; firewallcmd( \n1) - Linux manual page; systemct1(1) - Linux manual page",
    "type": "mcq"
  },
  {
    "question": "A newly created container has been unable to start properly, an d a Linux administrator is analyzing the cause of the failure. Which of the following will allow the administrator to determine the FIRST command that is executed inside the container right after it starts?",
    "choices": [
      "docker export <container_id>",
      "docker info <container_id>",
      "docker start <container_id>",
      "docker inspect <container_id>"
    ],
    "answer": "D",
    "explanation": "The command that will allow the administrator to determine the first command that is executed \ninside the container right after it starts is docker inspect <c ontainer_id>. This command will display \ndetailed information about the container, including its configuration, state, network settings, \nmounts, and logs. One of the configuration fields is \u0153Entrypoin t , which shows the command that is \nexecuted when the container is run. The entrypoint can be speci fied in the Docker file or overridden \nat runtime using the --entrypoint option. \nThe other options are not correct commands for determining the first command that is executed \ninside the container. The docker export <container_id> command will export the contents of the \ncontainers filesystem as a tar archive to STDOUT. This will not show the entrypoint of the container, \nbut only its files. The docker info <container_id> command is i nvalid because docker info does not \ntake any arguments. It shows system-wide information about Dock er, such as the number of \ncontainers, images, volumes, networks, and storage drivers. The docker start <container_id> \ncommand will start a stopped container and attach its STDOUT an d STDERR to the terminal. This will \nnot show the entrypoint of the container, but only its output. Reference: docker inspect | Docker \nDocs; docker export | Docker Docs; docker info | Docker Docs; d ocker start | Docker Docs",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator is scheduling a system job that runs a sc ript to check available disk space every hour. The Linux administrator does not want users to be able to start the job. Given the following: The Linux administrator attempts to start the timer service but receives the following error message: Which of the following is MOST likely the reason the timer will not start?",
    "choices": [
      "The checkdiskspace.timer unit should be enabled via systemct 1.",
      "The timers.target should be reloaded to get the new configur ation.",
      "The checkdiskspace.timer should be configured to allow manua l starts.",
      "The checkdiskspace.timer should be started using the sudo co mmand."
    ],
    "answer": "C",
    "explanation": "The most likely reason the timer will not start is that the checkdiskspace.timer should be configured to allow manual starts. By default, systemd timers do not allow manual activation via systemct1 start, \nunless they have RefuseManualStart=no in their [Unit] section. This option prevents users from accidentally starting timers that are meant to be controlled by other mechanisms, such as calendar \nevents or dependencies. To enable manual starts for checkdisksp ace.timer, the administrator should \nadd RefuseManualStart=no to its [Unit] section and reload syste md. \nThe other options are not correct reasons for the timer not sta rting. The checkdiskspace.timer unit \ndoes not need to be enabled via systemct1 enable, because enabl ing a timer only makes it start \nautomatically at boot time or aft er a system reload, but does n ot affect manual activation. The \ntimers.target does not need to be reloaded to get the new confi guration, because reloading a target \nonly affects units that have a dependency on it, but does not affect manual activation. The checkdiskspace.timer does not need to be started using the sudo command, because the \nadministrator is already running systemct1 as root, as indicated by the # \nprompt. Reference: systemd.timer(5) - Linux manual page; system ct1(1) - Linux manual page",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator wants to find out whether files from the wget package have been altered since they were installed. Which of the following commands will provi de the correct information?",
    "choices": [
      "rpm -i wget",
      "rpm -qf wget",
      "rpm -F wget",
      "rpm -V wget"
    ],
    "answer": "D",
    "explanation": "The command that will provide the correct information about whe ther files from the wget package \nhave been altered since they were installed is rpm -V wget. This command will use the rpm utility to verify an installed RPM package by comparing information about the installed files with information \nfrom the RPM database. The verification process can check various attributes of each file, such as \nsize, mode, owner, group, checksum, capabilities, and so on. If any discrepancies are found, rpm will \nreport them using a single letter code for each attribute. The other options are not correct commands for verifying an installed RPM package. The rpm -i wget \ncommand is invalid because -i is used to install a package from a file, not to verify an installed \n\npackage. The rpm -qf wget command will query which package owns wget as a file name or path \nname, but it will not verify its attributes. The rpm -F wget command will freshen (upgrade) an already installed package with wget as a file name or path name , but it will not verify its \nattributes. Reference: rpm(8) - Linux manual page; Using RPM to Verify Installed Packages",
    "type": "mcq"
  },
  {
    "question": "A Linux engineer set up two local DNS servers (10.10.10.10 and 10.10.10.20) and was testing email connectivity to the local mail server using the mail command on a local machine when the following error appeared: The local machine DNS settings are: Which of the following commands could the engineer use to query the DNS server to get mail server information?",
    "choices": [
      "dig @example.com 10.10.10.20 a",
      "dig @10.10.10.20 example.com mx",
      "dig @example.com 10.10.10.20 ptr",
      "dig @10.10.10.20 example.com ns"
    ],
    "answer": "B",
    "explanation": "The command dig @10.10.10.20 example.com mx will query the DNS server to get mail server \ninformation. The dig command is a tool for querying DNS servers and displaying the results. \n\nThe @ option specifies the DNS server to query, in this case 10 .10.10.20. The mx option specifies the \ntype of record to query, in this case mail exchange (MX) record s, which identify the mail servers for a \ndomain. The domain name to query is example.com. This command w ill show the MX records for \nexample.com from the DNS server 10.10.10.20. This is the correc t command to use to accomplish the \ntask. The other options are incorrect because they either use t he wrong syntax (@example.com \n10.10.10.20 instead of @10.10.10.20 example.com), the wrong typ e of record (a or ptr instead \nof mx), or the wrong domain name (example.com ns instead of exa mple.com \nmx). Reference: CompTIA Linux+ (XK0-005) Certification Study Gu ide, Chapter 13: Managing Network \nServices, page 415.",
    "type": "mcq"
  },
  {
    "question": "A Linux engineer has been notified about the possible deletion of logs from the file /opt/app/logs. The engineer needs to ensure the log file can only be written i nto without removing previous entries. Which of the following commands would be BEST to use to accompl ish this task?",
    "choices": [
      "chattr +a /opt/app/logs",
      "chattr +d /opt/app/logs",
      "chattr +i /opt/app/logs",
      "chattr +c /opt/app/logs"
    ],
    "answer": "A",
    "explanation": "The command chattr +a /opt/app/logs will ensure the log file ca n only be written into without \nremoving previous entries. The chattr command is a tool for cha nging file attributes on Linux file \nsystems. The +a option sets the append-only attribute, which me ans that the file can only be opened \nin append mode for writing. This prevents the file from being m odified, deleted, or renamed. This is \nthe best command to use to accomplish the task. The other optio ns are incorrect because they either \nset the wrong attributes (+d, +i, or +c) or do not affect the file at all (-a). Reference: CompTIA Linux+ \n(XK0-005) Certification Study Guide, Chapter 11: Managing Files and Directories, page 357.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator needs to check if the service systemd-r esolved.service is running without any errors. Which of the following commands will show this information?",
    "choices": [
      "systemct1 status systemd-resolved.service",
      "systemct1 enable systemd-resolved.service",
      "systemct1 mask systemd-resolved.service",
      "systemct1 show systemd-resolved.service"
    ],
    "answer": "A",
    "explanation": "The command systemct1 status systemd-resolved.service will show the information about the \nservice systemd-resolved.service. The systemct1 command is a to ol for managing system services \nand units. The status option displays the current status of a u nit, such as active, inactive, or failed. \nThe output also shows the unit description, loaded configuratio n, process ID, memory usage, and \nrecent log messages. This command will show if the service syst emd-resolved.service is running \nwithout any errors. This is the correct command to use to accom plish the task. The other options are \nincorrect because they either perform different actions (enable , mask, or show) or do not show the \nstatus of the service (systemct1 show systemd-resolved.service only shows the properties of the \nservice, not the status). Reference: CompTIA Linux+ (XK0-005) C ertification Study Guide, Chapter 14: \nManaging Processes and Scheduling Tasks, page 427.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator needs to remove software from the server. Which of the following RPM options should be used?",
    "choices": [
      "rpm -s",
      "r\u00d1\u20acm -d",
      "rpm -q",
      "rpm -e"
    ],
    "answer": "D",
    "explanation": "The RPM option -e should be used to remove software from the se rver. The rpm command is a tool \nfor managing software packages on RPM-based Linux distributions . The -e option stands for erase \nand removes the specified package from the system. This is the correct option to use to accomplish \nthe task. The other options are incorrect because they either d o not exist (-s or -d) or do not remove \nsoftware (-q stands for query and displays information about th e package). Reference: CompTIA \nLinux+ (XK0-005) Certification Stud y Guide, Chapter 16: Managing Software, page 489.",
    "type": "mcq"
  },
  {
    "question": "A Linux system fails to start and delivers the following error message: Which of the following commands can be used to address this issue?",
    "choices": [
      "fsck.ext4 /dev/sda1",
      "partprobe /dev/sda1",
      "fdisk /dev/sda1",
      "mkfs.ext4 /dev/sda1"
    ],
    "answer": "A",
    "explanation": "The command fsck.ext4 /dev/sda1 can be used to address the issue. The issue is caused by a \n\ncorrupted filesystem on the /dev/sda1 partition. The error mess age shows that the filesystem type is \next4 and the superblock is invalid. The command fsck.ext4 is a tool for checking and repairing ext4 \nfilesystems. The command will s can the partition for errors and attempt to fix them. This command \ncan resolve the issue and allow the system to start. The other options are incorrect because they \neither do not fix the filesystem (partprobe or fdisk) or destro y the data on the partition \n(mkfs.ext4). Reference: CompTI A Linux+ (XK0-005) Certification Study Guide, Chapter 10: Managing \nStorage, page 325.",
    "type": "mcq"
  },
  {
    "question": "Based on an organizations new cybersecurity policies, an administrator has been instructed to ensure that, by default, all new users and groups that are crea ted fall within the specified values below. To which of the following configuration files will the required changes need to be made?",
    "choices": [
      "/etc/login.defs",
      "/etc/security/limits.conf",
      "/etc/default/useradd",
      "/etc/profile"
    ],
    "answer": "A",
    "explanation": "The required changes need to be made to the /etc/login.defs con figuration file. The /etc/login.defs \nfile defines the default values for user and group IDs, passwor ds, shells, and other parameters for \nuser and group creation. The file contains the directives UID_M IN, UID_MAX, GID_MIN, and \nGID_MAX, which set the minimum and maximum values for automatic user and group ID selection. \nThe administrator can edit this file and change the values to match the organizations new cybersecurity policies. This is the correct file to modify to a ccomplish the task. The other options are \nincorrect because they either do not affect the user and group IDs \n(/etc/security/limits.conf or / etc/profile) or do not set the d efault values \n(/etc/default/useradd). Referen ce: CompTIA Linux+ (XK0-005) Cer tification Study Guide, Chapter 15: \nManaging Users and Groups, page 463.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator is trying to remove the ACL from the file /home/user/dat a. txt but receives the following error message: Given the following analysis: Which of the following is causing the error message?",
    "choices": [
      "The administrator is not using a highly privileged account.",
      "The filesystem is mounted with the wrong options.",
      "SELinux file context is denying the ACL changes.",
      "File attributes are preventing file modification."
    ],
    "answer": "D",
    "explanation": "File attributes are preventing file modification, which is caus ing the error message. The output \nof lsattr /home/user/data.txt shows that the file has the immut able attribute (i) set, which means \nthat the file cannot be changed, deleted, or renamed. The comma nd setfacl -b \n/home/user/data.txt tries to rem ove the ACL from the file, but fails because of the immutable \nattribute. The administrator needs to remove the immutable attr ibute first by using the \ncommand chattr -i /home/user/data.txt and then try to remove th e ACL again. The other options are \n\nincorrect because they are not supported by the outputs. The ad ministrator is using a highly \nprivileged account, as shown by the # prompt. The filesystem is mounted with the correct options, as \nshown by the output of mount | grep /home. SELinux file context is not denying the ACL changes, as \nshown by the output of ls -Z /home/user/data.txt. Reference: Co mpTIA Linux+ (XK0-005) Certification \nStudy Guide, Chapter 11: Managing Files and Directories, pages 357-358.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator needs to create a new cloud.cpio archive containing all the files from the current directory. Which of the following commands can help to accomplish this task?",
    "choices": [
      "ls | cpio -iv > cloud.epio",
      "ls | cpio -iv < cloud.epio",
      "ls | cpio -ov > cloud.cpio",
      "ls cpio -ov < cloud.cpio"
    ],
    "answer": "C",
    "explanation": "The command ls | cpio -ov > cloud.cpio can help to create a new cloud.cpio archive containing all the \nfiles from the current directory . The ls command lists the file s in the current directory and outputs \nthem to the standard output. The | operator pipes the output to the next command. The cpio command is a tool for creating and extracting compress ed archives. The -o option creates a \nnew archive and the -v option shows the verbose output. The > o perator redirects the output to the \ncloud.cpio file. This command will create a new cloud.cpio archive with all the files from the current directory. The other options are incorrect because they either use the wrong options (-i instead of - \no), the wrong arguments (cloud.epio instead of cloud.cpio), or the wrong syntax (< instead of > or \nmissing |). Reference: CompTIA Linux+ (XK0-005) Certification S tudy Guide, Chapter 11: Managing \nFiles and Directories, page 351.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator made some changes in the ~/.bashrc file and added an alias command. When the administrator tried to use the alias command, it did n ot work. Which of the following should be executed FIRST?",
    "choices": [
      "source ~/.bashrc",
      "read ~/.bashrc",
      "touch ~/.bashrc",
      "echo ~/.bashrc"
    ],
    "answer": "A",
    "explanation": "The command source ~/.bashrc shou ld be executed first to use th e alias command. \nThe source command reads and executes commands from a file in t he current shell environment. \nThe ~/.bashrc file is a configuration file that contains comman ds and aliases that are executed when \na new bash shell is started. The administrator made some change s in the ~/.bashrc file and added an \nalias command, but the changes are not effective until the file is sourced or a new shell is started. The command source ~/.bashrc will reload the file and make the alias command available. The other \noptions are incorrect because they either do not execute the co mmands in the file (read, touch, \nor echo) or do not affect the cu rrent shell environment (read o r echo). Reference: CompTIA Linux+ \n(XK0-005) Certification Study Guide, Chapter 9: Working with th e Linux Shell, page 295.",
    "type": "mcq"
  },
  {
    "question": "A junior systems administrator has just generated public and private authentication keys for passwordless login. Which of the following files will be moved to the remote servers?",
    "choices": [
      "id_dsa.pem",
      "id_rsa",
      "id_ecdsa",
      "id_rsa.pub"
    ],
    "answer": "D",
    "explanation": "The file id_rsa.pub will be moved to the remote servers for pas swordless login. The id_rsa.pub file is \nthe public authentication key that is generated by the ssh-keygen command. The public key can be \ncopied to the remote servers by using the ssh-copy-id command o r manually. The remote servers will \nuse the public key to authenticate the user who has the corresp onding private key (id_rsa). This will \nallow the user to log in without entering a password. The other options are incorrect because they \nare either private keys (id_rsa, id_dsa.pem, or id_ecdsa) or no n-existent files (id_dsa.pem or \nid_ecdsa). Reference: CompTIA Linux+ (XK0-005) Certification St udy Guide, Chapter 13: Managing \nNetwork Services, page 410.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator cloned an existing Linux server and built a new server from that clone. The administrator encountered the following error after booting the cloned server: The administrator performed the c ommands listed below to further troubleshoot and mount the missing filesystem: Which of the following should administrator use to resolve the device mismatch issue and mount the disk?",
    "choices": [
      "mount disk by device-id",
      "fsck -A",
      "mount disk by-label",
      "mount disk by-blkid"
    ],
    "answer": "A",
    "explanation": "The administrator should use the command mount disk by device-id to resolve the device mismatch \nissue and mount the disk. The issue is caused by the cloned ser ver having a different device name for \nthe disk than the original server. The output of blkid shows that the disk has the device name \n\n/dev/sdb1 on the cloned server, but the output of cat /etc/fsta b shows that the disk is expected to \nhave the device name /dev/sda1. The command mount disk by devic e-id will mount the disk by using \nits unique identifier (UUID) instead of its device name. The UU ID can be obtained from the output \nof blkid or lsblk -f. The command will mount the disk to the sp ecified mount point (/data) and resolve \nthe issue. The other options are incorrect because they either do not mount the disk (fsck -A), do not \nuse the correct identifier (mount disk by-label or mount disk b y-blkid), or do not exist (mount disk \nby-blkid). Reference: CompTIA Linux+ (XK0-005) Certification St udy Guide, Chapter 10: Managing \nStorage, pages 318-319.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator installe d a new software program on a Linux server. When the systems administrator tries to run the program, the following message appears on the screen. Which of the following commands will allow the systems administ rator to check whether the system supports virtualization?",
    "choices": [
      "dmidecode -s system-version",
      "lscpu",
      "sysctl -a",
      "cat /sys/device/system/cpu/possible"
    ],
    "answer": "B",
    "explanation": "The command that will allow the systems administrator to check whether the system supports \nvirtualization is lscpu. This command will display information about the CPU architecture, such as the \nnumber of CPUs, cores, sockets, threads, model name, frequency, cache size, and flags. One of the flags is vmx (for Intel processo rs) or svm (for AMD processors) , which indicates that the CPU supports \nhardware virtualization. If the flag is present, it means that the system supports virtualization. If the \nflag is absent, it means that the system does not support virtu alization or that it is disabled in the \nBIOS settings. The other options are not correct commands for checking whether the system supports \n\nvirtualization. The dmidecode -s system-version command will di splay the version of the system, \nsuch as the product name or serial number, but not the CPU information. The sysctl -a command will \ndisplay all the kernel parameters, but not the CPU flags. The c at /sys/devices/system/cpu/possible \ncommand will display the range of possible CPUs that can be onl ine or offline, but not the CPU \nfeatures. Reference: lscpu(1) - Linux manual page; How To Check If Virtualization is Enabled in \nWindows 10 / 11",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator created the directory /project/access2all . By creating this directory, the administrator is trying to avoid the deletion or modification of files from non-owners. Which of the following will accomplish this goal?",
    "choices": [
      "chmod +t /project/access2all",
      "chmod +rws /project/access2all",
      "chmod 2770 /project/access2all",
      "chmod ugo+rwx /project/access2all"
    ],
    "answer": "A",
    "explanation": "The command that will accomplish the goal of avoiding the delet ion or modification of files from \nnon-owners is chmod +t /project/ access2all. This command will set the sticky bit on the directory \n/project/access2all, which is a special permission that restric ts file deletion or renaming to only the \nfile owner, directory owner, or root user. This way, even if mu ltiple users have write permission to the \ndirectory, they cannot delete or modify each others files. The other options are not correct commands for accomplishing th e goal. The chmod +rws \n/project/access2all command will set both the SUID and SGID bit s on the directory, which are special \npermissions that allow a program or a directory to run or be ac cessed with the permissions of its \nowner or group, respectively. However, this does not prevent file deletion or modification from nonowners. \nThe chmod 2770 /project/access2all command will set only the SG ID bit on the directory, \nwhich means that any new files or subdirectories created in it will inherit its group ownership. However, this does not prevent file deletion or modification from non-owners. The chmod ugo+rwx /project/access2all command will grant read, write, and execute permissions to all users (user, \ngroup, and others) on the directory, which means that anyone can delete or modify any file in it. Reference: chmod(1) - Linux ma nual page; How to Use SUID, S GID, and Sticky Bits on Linux",
    "type": "mcq"
  },
  {
    "question": "A Linux systems administrator needs to persistently enable IPv4 forwarding in one of the Linux systems. Which of the following commands can be used together t o accomplish this task? (Choose two.)",
    "choices": [
      "sysctl net.ipv4.ip_forward",
      "sysctl -w net.ipv4.ip_forward=1",
      "echo \"net.ipv4.ip_forward=1\" >> /etc/sysctl.conf",
      "echo 1 > /proc/sys/net/ipv4/ip_forward E. sysctl \"p F. echo \"net.ipv6.conf.all.forwarding=l\" >> /etc/sysctl.conf"
    ],
    "answer": "B",
    "explanation": ", E \n \nExplanation: The commands that can be used to gether to persistently enable I Pv4 forwarding in one of the Linux \nsystems are sysctl -w net.ipv4.ip_forward=1 and sysctl \"p. The first command will use sysctl to write a new value (1) to the net.ipv4.ip_forward kernel parameter, whic h controls whether IP forwarding is \nenabled or disabled for IPv4. This will enable IP forwarding immediately without rebooting. However, this change is temporary and will be lost after a rebo ot or a system reload. To make it \npermanent, we need to use the second command sysctl \"p, which w ill load kernel parameters from \n/etc/sysctl.conf file. This file contains key-value pairs of ke rnel parameters and their values. To make \nsure that net.ipv4.ip_forward is set to 1 in this file, we can either edit it manually or append it using \necho \u0153net.ipv4.ip_forward=1 >> /etc/sysctl.conf. \nThe other options are not correct commands for persistently ena bling IPv4 forwarding. The sysctl \nnet.ipv4.ip_forward command will only display the current value of net.ipv4.ip_forward parameter, but not change it. The echo 1 > /proc/sys/net/ipv4/ip_forward c ommand will write 1 to \n/proc/sys/net/ipv4/ip_forward file, which is another way to cha nge net.ipv4.ip_forward parameter. \nHowever, this change is also temporary and will not survive a r eboot or a system reload. The echo \n\u0153net.ipv6.conf.all.forwarding=l >> /etc/sysctl.conf command will append a line to /etc/sysctl.conf \nfile that sets net.ipv6.conf.all.forwarding parameter to 1. How ever, this parameter controls whether \nIP forwarding is enabled or disabled for IPv6, not IPv4. Refere nce: sysctl(8) - Linux manual \npage; Configure Linux as a Router (IP Forwarding)",
    "type": "mcq"
  },
  {
    "question": "Due to low disk space, a Linux administrator finding and removing all log files that were modified more than 180 days ago. Which of the following commands will ac complish this task?",
    "choices": [
      "find /var/log -type d -mtime +180 -print -exec rm {} \\;",
      "find /var/log -type f -modified +180 -rm",
      "find /var/log -type f -mtime +180 -exec rm {} \\",
      "find /var/log -type c -atime +180 \"remove"
    ],
    "answer": "C",
    "explanation": "The command that will accomplis h the task of finding and removi ng all log files that were modified \nmore than 180 days ago is find /var/log -type f -mtime +180 -ex ec rm {} ;. This command will use find \nto search for files (-type f) under /var/log directory that have a modification time (-mtime) older than 180 days (+180). For each matching file, it will execute (-exec ) the rm command to delete it, passing \nthe file name as an argument ({}). The command will end with a semicolon (;), which is escaped with \na backslash to prevent shell interpretation. The other options are not correct commands for accomplishing th e task. The find /var/log -type d - \nmtime +180 -print -exec rm {} ; command will search for directo ries (-type d) instead of files, and \nprint their names (-print) before deleting them. This is not what the task requires. The find /var/log - \ntype f -modified +180 -rm command is invalid because there is n o such option as -modified or -rm for \nfind. The correct options are -mtime and -delete, respectively. The find /var/log -type c -atime +180 \" \nremove command is also invalid because there is no such option as \"remove for find. Moreover, it \nwill search for character specia l files (-type c) instead of re gular files, and use access time (-atime) \ninstead of modification time. Reference: find(1) - Linux manual page; Find and delete files older than \nn days in Linux",
    "type": "mcq"
  },
  {
    "question": "A junior administrator is setting up a new Linux server that is intended to be used as a router at a remote site. Which of the following parameters will accomplish this goal?",
    "choices": [
      "",
      "",
      "",
      ""
    ],
    "answer": "C",
    "explanation": "The parameter net.ipv4.ip_forward=1 will accomplish the goal of setting up a new Linux server as a \nrouter. This parameter enables the IP forwarding feature, which allows the server to forward packets \nbetween different network interfaces. This is necessary for a router to route traffic between different networks. The parameter can be set in the /etc/sysctl.conf file or by using the sysctl command. This is \nthe correct parameter to use to accomplish the goal. The other options are incorrect because they \neither do not exist (net.ipv4.ip_forwarding or net.ipv4.ip_rout e) or do not enable IP forwarding \n(net.ipv4.ip_forward=0). Reference: CompTIA Linux+ (XK0-005) Certification Study Guide, Chapter \n12: Managing Network Connections, page 382.",
    "type": "mcq"
  },
  {
    "question": "Some servers in an organization have been compromised. Users ar e unable to access to the organizations web page and other services. While reviewing the system log, a systems administrator notices messages from the kernel regarding firewall rules: Which of the following commands will remediate and help resolve the issue?",
    "choices": [
      "",
      "",
      "",
      ""
    ],
    "answer": "A",
    "explanation": "The command iptables -F will remediate and help resolve the iss ue. The issue is caused by the \nfirewall rules that block the ac cess to the organizations web p age and other services. The output \nof dmesg | grep firewall shows that the kernel has dropped pack ets from the source IP address \n192.168.1.100 to the destination port 80, which is the default port for HTTP. The command iptables - F will flush all the firewall rules and allow the traffic to pa ss through. This command will resolve the \nissue and restore the access to the web page and other services . The other options are incorrect \nbecause they either do not affect the firewall rules (ip route flush or ip addr flush) or do not exist \n(iptables -R). Reference: CompTIA Linux+ (XK0-005) Certificatio n Study Guide, Chapter 18: Securing \nLinux Systems, page 543.",
    "type": "mcq"
  },
  {
    "question": "A junior administrator is trying to set up a passwordless SSH connection to one of the servers. The administrator follows the instructions and puts the key in the authorized_key file at the server, but the administrator is still asked to provide a password during t he connection. Given the following output: Which of the following commands would resolve the issue and allow an SSH connection to be established without a password?",
    "choices": [
      "restorecon -rv .ssh/authorized_key",
      "mv .ssh/authorized_key .ssh/authorized_keys",
      "systemct1 restart sshd.service",
      "chmod 600 mv .ssh/authorized_key"
    ],
    "answer": "B",
    "explanation": "The command mv .ssh/authorized_key .ssh/authorized_keys will re solve the issue and allow an SSH \nconnection to be established without a password. The issue is c aused by the incorrect file name of \nthe authorized key file on the server. The file should be named authorized_keys, not authorized_key. \nThe mv command will rename the file and fix the issue. The othe r options are incorrect because they \neither do not affect the file name (restorecon or chmod) or do not restart the SSH service \n(systemct1). Reference: CompTIA Linux+ (XK0-005) Certification Study Guide, Chapter 13: Managing \nNetwork Services, page 410.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator needs to resolve a service that has faile d to start. The admi nistrator runs the following command: The following output is returned Which of the following is MOST likely the issue?",
    "choices": [
      "The service does not have permissions to read write the startupfile.",
      "The service startupfile size cannot be 81k.",
      "The service startupfile cannot be owned by root.",
      "The service startupfile should not be owned by the root grou p."
    ],
    "answer": "A",
    "explanation": "The most likely issue is that the service does not have permissions to read or write the startupfile. \nThe output of systemct1 status startup.service shows that the s ervice has failed to start and the error \nmessage is \u0153Permission denied . The output of ls -l /etc/startupfile shows that the file has the \npermissions -rw-r--r--, which means that only the owner (root) can read and write the file, while the \ngroup (root) and others can only read the file. The service may not run as root and may need write \naccess to the file. The administrator should change the permiss ions of the file by using \nthe chmod command and grant write access to the group or others , or change the owner or group of \nthe file by using the chown command and assign it to the user o r group that runs the service. The \nother options are incorrect because they are not supported by the outputs. The file size, owner, and group are not the causes of the issue. Reference: CompTIA Linux + (XK0-005) Certification Study \nGuide, Chapter 11: Managing Files and Directories, pages 345-346.",
    "type": "mcq"
  },
  {
    "question": "A Linux engineer is setting the sticky bit on a directory calle d devops with 755 file permission. Which of the following commands will accomplish this task?",
    "choices": [
      "chown -s 755 devops",
      "chown 1755 devops",
      "chmod -s 755 devops",
      "chmod 1755 devops"
    ],
    "answer": "D",
    "explanation": "The command that will set the sticky bit on a directory called devops with 755 file permission is \nchmod 1755 devops. This command will use chmod to change the mo de of the directory devops to \n1755, which means that the owner has read, write, and execute p ermissions (7), the group has read \nand execute permissions (5), and others have read and execute permissions (5). The first digit 1 \nindicates that the sticky bit is set on the directory, which is a special permission that prevents users \nfrom deleting or renaming files in the directory that they do n ot own. \nThe other options are not correct commands for setting the sticky bit on a directory. The chown -s 755 devops command is invalid because chown is used to change the owner and group of files or \ndirectories, not their permissions. The -s option for chown is used to remove a symbolic link, not to \nset the sticky bit. The chown 1755 devops command is also inval id because chown does not accept \nnumeric arguments for changing permissions. The chmod -s 755 de vops command will remove the \nsticky bit from the directory devops, not set it. Reference: chmod(1) - Linux manual page; How to Use \nSUID, SGID, and Sticky Bits on Linux",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator booted up the server and was presented wi th a non-GUI terminal. The administrator ran the command systemct1 isolate graphical.targe t and rebooted the system by running systemct1 reboot, which fixed the issue. However, the n ext day the administrator was presented again with a non-GUI terminal. Which of the following is the issue?",
    "choices": [
      "The administrator did not reboot the server properly.",
      "The administrator did not set the default target to basic.ta rget.",
      "The administrator did not set the default target to graphical.target.",
      "The administrator did not shut down the server properly."
    ],
    "answer": "C",
    "explanation": "The issue is that the administrator did not set the default tar get to graphical.target. A target is a unit \nof systemd that groups together other units by a common purpose or state. The graphical.target is a \ntarget that starts the graphical user interface (GUI) along wit h other services. The administrator used \nthe command systemct1 isolate graphical.target to switch to thi s target temporarily, but this does not \nchange the default target that is activated at boot time. To ma ke this change permanent, the \nadministrator should have used the command systemct1 set-defaul t graphical.target, which creates a \nsymbolic link from /etc/systemd/system/default.target to /usr/lib/systemd/system/graphical.target. \nThe other options are not correct explanations for the issue. T he administrator did reboot the server \n\nproperly by using systemct1 reboot, which shuts down and restarts the system cleanly. The \nadministrator did not need to set the default target to basic.t arget, which is a minimal target that \nonly starts essential services. The administrator did not shut down the server improperly, which \ncould have caused file system co rruption or data loss, but not affect the default \ntarget. Reference: systemct1(1) - Linux manual page; How to Cha nge Runlevels (targets) in SystemD",
    "type": "mcq"
  },
  {
    "question": "Users report that connections to a MariaDB service are being cl osed unexpectedly. A systems administrator troubleshoots the issue and finds the following m essage in /var/log/messages: Which of the following is causing the connection issue?",
    "choices": [
      "The process mysqld is using too many semaphores.",
      "The server is running out of file descriptors.",
      "Something is starving the server resources.",
      "The amount of RAM allocated to the server is too high."
    ],
    "answer": "B",
    "explanation": "The message in /var/log/messages indicates that the server is r unning out of file descriptors. A file \ndescriptor is a non-negative integer identifier for an open fil e in Linux. Each process has a table of \nopen file descriptors where a new entry is appended upon openin g a new file. There is a limit on how \nmany file descriptors a process can open at a time, which depends on the system configuration and \nthe user privileges. If a process tries to open more files than the limit, it will fail with an error \nmessage like \"Too many open files\". This could cause connection s to be closed unexpectedly or other \nproblems with the application. \nThe other options are not correct causes for the connection iss ue. The process mysqld is not using \ntoo many semaphores, which are s ynchronization mechanisms for p rocesses that share resources. \nSemaphores are not related to file descriptors or open files. S omething is not starving the server \nresources, which could mean high CPU usage, memory pressure, di sk I/O, network congestion, or \nother factors that affect performance. These could cause slowdo wns or timeouts, but not file \ndescriptor exhaustion. The amount of RAM allocated to the serve r is not too high, which could cause \nswapping or paging if it exceeds the physical memory available. This could also affect performance, \n\nbut not file descriptor availability. Reference: File Descripto r Requirements (Linux Systems); Limits on \nthe Number of Linux File Descriptors",
    "type": "mcq"
  },
  {
    "question": "A developer is trying to install an application remotely that requires a graphical interface for installation. The developer requested assistance to set up the necessary environment variables along with X11 forwarding in SSH. Which of the following environment variables must be set in remote shell in order to launch the graphical interface?",
    "choices": [
      "$RHOST",
      "SETENV",
      "$SHELL",
      "$DISPLAY"
    ],
    "answer": "D",
    "explanation": "The environment variable that must be set in remote shell in or der to launch the graphical interface \nis $DISPLAY. This variable tells X11 applications where to display their windows on screen. It usually \nhas the form hostname:displaynumber.screennumber, where hostnam e is the name of the computer \nrunning the X server, displaynumber is a unique identifier for an X display on that computer, and \nscreennumber is an optional identifier for a screen within an X display. For example, localhost:0.0 means display number 0 on the local host. If the hostname is om itted, it defaults to the local host. \nThe other options are not correct environment variables for lau nching the graphical interface. \n$RHOST is a variable that stores the name of the remote host, but it is not used by X11 applications. \nSETENV is a command that sets environment variables in some shells, but it is not an environment \nvariable itself. $SHELL is a variable that stores the name of t he current shell, but it is not related to \nX11 forwarding. Reference: How to enable or disable X11 forwarding in an SSH server; How to \nConfigure X11 Forwarding Using SSH In Linux",
    "type": "mcq"
  },
  {
    "question": "A systems administrator is implementing a new service task with systems at startup and needs to execute a script entitled test.sh with the following content: The administrator tries to run the script after making it execu table with chmod +x; however, the script will not run. Which of the following should the administrator do to address this issue? (Choose two.)",
    "choices": [
      "Add #!/bin/bash to the bottom of the script.",
      "Create a unit file for the new service in /etc/systemd/syste m/ with the name helpme.service in the location.",
      "Add #!//bin/bash to the top of the script.",
      "Restart the computer to enable the new service. E. Create a unit file for the new service in /etc/init.d with t he name helpme.service in the location. F. Shut down the computer to enable the new service."
    ],
    "answer": "B",
    "explanation": ", C \n \nExplanation: \nThe administrator should do the following two things to address the issue: Add #!/bin/bash to the top of the script. This is called a sheb ang line and it tells the system which \ninterpreter to use to execute the script. Without this line, th e script will not run properly. The \nshebang line should be the first line of the script and should start with #! followed by the path to the \ninterpreter. In this case, the i nterpreter is bash and the path is /bin/bash. The other option (A) is \nincorrect because the shebang line should be at the top, not the bottom of the script. Create a unit file for the new service in /etc/systemd/system/ with the name helpme.service in the \nlocation. This is necessary to re gister the script as a systemd service and enable it to run at startup. A \nunit file is a configuration file that defines the properties a nd behavior of a service, such as the \ndescription, dependencies, start and stop commands, and environment variables. The unit file should have the extension .service and should be placed in the /etc/sy stemd/system/ directory. The other \noption (E) is incorrect because /etc/init.d is the directory fo r init scripts, not systemd services. \nReference: CompTIA Linux+ (XK0-005) Certification Study Guide, Chapter 14: Managing Processes \nand Scheduling Tasks, pages 429-430.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator needs to correct the permissions of a log file on the server. Which of the following commands should be used to set filename.log permissio ns to -rwxr\"r--. ?",
    "choices": [
      "chmod 755 filename.log",
      "chmod 640 filename.log",
      "chmod 740 filename.log",
      "chmod 744 filename.log"
    ],
    "answer": "A",
    "explanation": "The command chmod 755 filename.l og should be used to set filena me.log permissions to -rwxr--r--. \nThe chmod command is a tool for changing file permissions on Linux file systems. The permissions \ncan be specified in octal notation, where each digit represents the permissions for the owner, group, \nand others respectively. The permissions are encoded as follows : \n0: no permission \n1: execute permission \n2: write permission 4: read permission \n5: read and execute permissions (4 + 1) \n6: read and write permissions (4 + 2) \n7: read, write, and execute permissions (4 + 2 + 1) \nThe command chmod 755 filename.log will set the permissions to -rwxr--r--, which means that the \nowner has read, write, and execu te permissions (7), the group h as read and execute permissions (5), \nand others have read and execute permissions (5). This is the c orrect command to use to accomplish \nthe task. The other options are incorrect because they either s et the wrong permissions (chmod \n640, chmod 740, or chmod 744) or do not exist (chmod -G). Refer ence: CompTIA Linux+ (XK0-005) \nCertification Study Guide, Chapter 11: Managing Files and Direc tories, page 345.",
    "type": "mcq"
  },
  {
    "question": "After listing the properties of a system account, a systems adm inistrator wants to remove the expiration date of a user account. Which of the following comma nds will accomplish this task?",
    "choices": [
      "chgrp system accountname",
      "passwd \"s accountname",
      "chmod -G system account name",
      "chage -E -1 accountname"
    ],
    "answer": "D",
    "explanation": "The command chage -E -1 accountname will accomplish the task of removing the expiration date of a user account. The chage command is a tool for changing user pas sword aging information on Linux \nsystems. The -E option sets the e xpiration date of the user acc ount, and the -1 value means that the \naccount will never expire. The command chage -E -1 accountname will remove the expiration date of \nthe user account named accountname. This is the correct command to use to accomplish the task. \nThe other options are incorrect because they either do not affect the expiration date (chgrp, passwd, or chmod) or do not exist (chmod -G). Reference: CompTIA Linux+ (XK0-005) Certification Study \nGuide, Chapter 15: Managing Users and Groups, page 467.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator wants to be sure the sudo rules just ad ded to /etc/sudoers are valid. Which of the following commands can be used for this task?",
    "choices": [
      "visudo -c",
      "test -f /etc/sudoers",
      "sudo vi check",
      "cat /etc/sudoers | tee test"
    ],
    "answer": "A",
    "explanation": "The command visudo -c can be used to check the validity of the sudo rules in the /etc/sudoers file. \nThe visudo command is a tool for editing and validating the /etc/sudoers file, which defines the rules for the sudo command. The -c option checks the syntax and logic of the file and reports any errors or warnings. The command visudo -c will verify the sudo rules and help the administrator avoid any \nmistakes. This is the correct command to use for this task. The other options are incorrect because \nthey either do not check the validity of the file (test, sudo, or cat) or do not exist (sudo vi \ncheck). Reference: CompTIA Linux+ (XK0-005) Certification Study Guide, Chapter 18: Securing Linux \nSystems, page 546.",
    "type": "mcq"
  },
  {
    "question": "A user generated a pair of private-public keys on a workstation . Which of the following commands will allow the user to upload the public key to a remote server and enable passwordless login?",
    "choices": [
      "scp ~/.ssh/id_rsa user@server:~/",
      "rsync ~ /.ssh/ user@server:~/",
      "ssh-add user server",
      "ssh-copy-id user@server"
    ],
    "answer": "D",
    "explanation": "The command ssh-copy-id user@server will allow the user to uplo ad the public key to a remote \nserver and enable passwordless login. The ssh-copy-id command i s a tool for copying the public key \nto a remote server and appending it to the authorized_keys file, which is used for public key authentication. The command will also set the appropriate permi ssions on the remote server to \nensure the security of the key. The command ssh-copy-id user@se rver will copy the public key of the \nuser to the server and allow the user to log in without a passw ord. This is the correct command to \nuse for this task. The other options are incorrect because they either do not copy the public key (scp, rsync, or ssh-add) or do not use the correct syntax (scp ~/.ssh/id_rsa user@server:~/ instead \nof scp ~/.ssh/id_rsa.pub user@server:~/ or rsync ~ /.ssh/ user@ server:~/ instead of rsync \n~/.ssh/id_rsa.pub user@server:~/). Reference: CompTIA Linux+ (X K0-005) Certification Study Guide, \nChapter 13: Managing Network Services, page 410.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator created a new file system. Which of the f ollowing files must be updated to ensure the filesystem mounts at boot time?",
    "choices": [
      "/etc/sysctl",
      "/etc/filesystems",
      "/etc/fstab",
      "/etc/nfsmount.conf"
    ],
    "answer": "C",
    "explanation": "The file that must be updated to ensure the filesystem mounts a t boot time is /etc/fstab. This file \n\ncontains information about the filesystems that are mounted aut omatically by the mount -a \ncommand, which is usually invoked during the system startup. Th e /etc/fstab file has six fields for \neach filesystem: device name, mount point, filesystem type, mou nt options, dump frequency, and \npass number. To add a new filesystem to the /etc/fstab file, yo u need to specify these fields correctly \nand make sure the mount point directory exists. \nThe other options are not correct files for controlling persist ent mount points of filesystems. The \n/etc/sysctl file is used to configure kernel parameters at runt ime. The /etc/filesystems file is used to \nspecify the order of filesystem types used by mount when no fil esystem type is given. The \n/etc/nfsmount.conf file is used to set options for mounting NFS filesystems. Reference: Persistently \nmounting file systems; fstab(5) - Linux manual page",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator is troubleshooting a memory-related issue . Based on the output of the commands: Which of the following commands would address the issue?",
    "choices": [
      "top -p 8321",
      "kill -9 8321",
      "renice -10 8321",
      "free 8321"
    ],
    "answer": "B",
    "explanation": "The command that would address the memory-related issue is kill -9 8321. This command will send a \nSIGKILL signal to the process with the PID 8321, which is the m ysqld process that is using 99.7% of \nthe available memory according to the top output. The SIGKILL signal will terminate the process immediately and free up the memory it was using. However, this command should be used with \ncaution as it may cause data loss or corruption if the process was performing some critical \noperations. The other options are not correct commands for addressing the m emory-related issue. The top -p \n8321 command will only display information about the process wi th the PID 8321, but will not kill it \nor reduce its memory usage. The renice -10 8321 command will ch ange the priority (niceness) of the \nprocess with the PID 8321 to -10, which means it will have a hi gher scheduling priority, but this will \nnot affect its memory consumption. The free 8321 command is inv alid because free does not take a \nPID as an argument; free only displays information about the to tal, used, and free memory in the \nsystem. Reference: How to troubleshoot Linux server memory issues; kill(1) - Linux manual page",
    "type": "mcq"
  },
  {
    "question": "A systems administrator made some unapproved changes prior to l eaving the company. The newly hired administrator has been tasked with revealing the system to a compliant state. Which of the following commands will list and remove the correspondent packa ges?",
    "choices": [
      "dnf list and dnf remove last",
      "dnf remove and dnf check",
      "dnf info and dnf upgrade",
      "dnf history and dnf history undo last"
    ],
    "answer": "D",
    "explanation": "The commands that will list and remove the corresponding packag es are dnf history and dnf history \nundo last. The dnf history command will display a list of all t ransactions performed by dnf, such as \ninstalling, updating, or removing packages. Each transaction ha s a unique ID, a date and time, an \naction, and a number of altered packages. The dnf history undo last command will undo the last \ntransaction performed by dnf, meaning that it will reverse all package changes made by that \ntransaction. For example, if the last transaction installed som e packages, dnf history undo last will \nremove them. The other options are not correct commands for listing and remo ving corresponding packages. The \n\ndnf list command will display a list of available packages in e nabled repositories, but not the \npackages installed by dnf transactions. The dnf remove command will remove specified packages \nfrom the system, but not all packages from a specific transaction. The dnf info command will display \ndetailed information about specified packages, but not about dnf transactions. The dnf upgrade \ncommand will upgrade all installed packages to their latest ver sions, but not undo any package \nchanges. Reference: Handling package management history; dnf(8) - Linux manual page",
    "type": "mcq"
  },
  {
    "question": "An administrator transferred a key for SSH authentication to a home directory on a remote server. The key file was moved to .ssh/authorized_keys location in orde r to establish SSH connection without a password. However, the SSH command still asked for the password. Given the following output: Which of the following commands would resolve the issue?",
    "choices": [
      "restorecon .ssh/authorized_keys",
      "ssh_keygen -t rsa -o .ssh/authorized_keys",
      "chown root:root .ssh/authorized_keys",
      "chmod 600 .ssh/authorized_keys"
    ],
    "answer": "D",
    "explanation": "The command that would resolve the issue is chmod 600 .ssh/auth orized_keys. This command will \nchange the permissions of the .ssh/authorized_keys file to 600, which means that only the owner of the file can read and write it. This is necessary for SSH key a uthentication to work properly, as SSH \nwill refuse to use a key file th at is accessible by other users or groups for security reasons. The output \nof ls -l shows that currently the .ssh/authorized_keys file has permissions of 664, which means that both the owner and group can read and write it, and others can read it. \nThe other options are not correct commands for resolving the is sue. The restorecon \n.ssh/authorized_keys command will restore the default SELinux s ecurity context for the \n.ssh/authorized_keys file, but this will not change its permiss ions or ownership. The ssh_keygen -t \nrsa -o .ssh/authorized_keys command is invalid because ssh_keyg en is not a valid command (the \ncorrect command is ssh-keygen), and the -o option is used to specify a new output format for the key \n\nfile, not the output file name. The chown root:root .ssh/author ized_keys command will change the \nowner and group of the .ssh/authorized_keys file to root, but this will not change its permissions or \nmake it accessible by the user who wants to log in with SSH key authentication. Reference: How to \nUse Public Key Authentication with SSH; chmod(1) - Linux manual page",
    "type": "mcq"
  },
  {
    "question": "A cloud engineer needs to remove all dangling images and delete all the images that do not have an associated container. Which of the following commands will help to accomplish this task?",
    "choices": [
      "docker images prune -a",
      "docker push images -a",
      "docker rmi -a images",
      "docker images rmi --all"
    ],
    "answer": "A",
    "explanation": "The command docker images prune -a will help to remove all dang ling images and delete all the \nimages that do not have an associated container. The docker com mand is a tool for managing Docker \ncontainers and images. The images subcommand operates on images . The prune option removes \nunused images. The -a option removes all images, not just dangling ones. A dangling image is an image that is not tagged and is not referenced by any container . This command will accomplish the \ntask of cleaning up the unused images. The other options are in correct because they either do not \nexist (docker push images -a or docker images rmi --all) or do not remove images (docker rmi -a \nimages only removes images that match the name or ID of \u0153images ). Reference: CompTIA Linux+ \n(XK0-005) Certification Study Guide, Chapter 19: Managing Cloud and Virtualization Technologies, \npage 567.",
    "type": "mcq"
  },
  {
    "question": "A Linux system is failing to boot with the following error: Which of the following actions will resolve this issue? (Choose two.)",
    "choices": [
      "Execute grub-install --root-directory=/mnt and reboot.",
      "Execute grub-install /dev/sdX and reboot.",
      "Interrupt the boot process in the GRUB menu and add rescue t o the kernel line.",
      "Fix the partition modifying /etc/default/grub and reboot. E. Interrupt the boot process in the GRUB menu and add single t o the kernel line. F. Boot the system on a LiveCD/ISO."
    ],
    "answer": "B",
    "explanation": ", F \n \nExplanation: The administrator should do the following two actions to resolv e the issue: \nBoot the system on a LiveCD/ISO. This is necessary to access th e system and repair the boot loader. A \nLiveCD/ISO is a bootable media that contains a Linux distribution that can run without installation. \nThe administrator can boot the system from the LiveCD/ISO and mount the root partition of the \nsystem to a temporary directory, such as /mnt. Execute grub-install /dev/sdX and reboot. This will reinstall the GRUB boot loader to the disk device, \nwhere sdX is the device name of the disk, such as sda or sdb. T he GRUB boot loader is a program that \nruns when the system is powered on and allows the user to choos e which operating system or kernel \nto boot. The issue is caused by a corrupted or missing GRUB boo t loader, which prevents the system \nfrom booting. The command grub-install will restore the GRUB bo ot loader and fix the issue. \nThe other options are incorrect because they either do not fix the boot loader (interrupt the boot \nprocess in the GRUB menu or fix the partition modifying /etc/de fault/grub) or do not use the correct \nsyntax (grub-install --root-directory=/mnt instead of grub-inst all /dev/sdX or rescue or single instead \nof recovery in the GRUB menu). Reference: CompTIA Linux+ (XK0-0 05) Certification Study Guide, \nChapter 8: Managing the Linux Boot Process, pages 265-266.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator needs to create an image named sda.img fr om the sda disk and store it in the /tmp directory. Which of the following commands should be used to accomplish this task?",
    "choices": [
      "dd of=/dev/sda if=/tmp/sda.img",
      "dd if=/dev/sda of=/tmp/sda.img",
      "dd --if=/dev/sda --of=/tmp/sda.img",
      "dd --of=/dev/sda --if=/tmp/sda.img"
    ],
    "answer": "B",
    "explanation": "The command dd if=/dev/sda of=/tmp/sda.img should be used to cr eate an image named sda.img \nfrom the sda disk and store it in the /tmp directory. The dd command is a tool for copying and \nconverting data on Linux systems. The if option specifies the i nput file or device, in this case \n/dev/sda, which is the disk device. The of option specifies the output file or device, in this case \n/tmp/sda.img, which is the image file. The command dd if=/dev/s da of=/tmp/sda.img will copy the \nentire disk data from /dev/sda to /tmp/sda.img and create an im age file. This is the correct \ncommand to use to accomplish the task. The other options are in correct because they either use the \nwrong options (--if or --of instead of if or of) or swap the in put and output (dd of=/dev/sda \nif=/tmp/sda.img or dd --of=/dev/s da --if=/tmp/sda.img). Referen ce: CompTIA Linux+ (XK0-005) \nCertification Study Guide, Chapter 10: Managing Storage, page 3 23.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator is creating a primary partition on the re placement hard drive for an application server. Which of the following commands should the administrator issue to verify the device name of this partition?",
    "choices": [
      "sudo fdisk /dev/sda",
      "sudo fdisk -s /dev/sda",
      "sudo fdisk -l",
      "sudo fdisk -h"
    ],
    "answer": "C",
    "explanation": "The command sudo fdisk -l should be issued to verify the device name of the partition. \nThe sudo command allows the admin istrator to run commands as th e superuser or another user. \nThe fdisk command is a tool for manipulating disk partitions on Linux systems. The -l option lists the \n\npartitions on all disks or a specific disk. The command sudo fd isk -l will show the device names, sizes, \ntypes, and other information of the partitions on all disks. Th e administrator can identify the device \nname of the partition by looking at the output. This is the cor rect command to use to accomplish the \ntask. The other options are incorrect because they either do not list the partitions (sudo fdisk \n/dev/sda or sudo fdisk -h) or do not exist (sudo fdisk -s /dev/sda). Reference: CompTIA Linux+ (XK0- \n005) Certification Study Guide, Chapter 10: Managing Storage, page 317.",
    "type": "mcq"
  },
  {
    "question": "A junior Linux administrator is tasked with installing an appli cation. The installation guide states the application should only be installed in a run level 5 environme nt. Which of the following commands would ensure the server is set to runlevel 5?",
    "choices": [
      "systemct1 isolate multi-user.target",
      "systemct1 isolate graphical.target",
      "systemct1 isolate network.target",
      "systemct1 isolate basic.target"
    ],
    "answer": "B",
    "explanation": "The command that would ensure the server is set to runlevel 5 is systemct1 isolate graphical.target. \nThis command will change the current target (or runlevel) of sy stemd to graphical.target, which is \nequivalent to runlevel 5 in SysV init systems. Graphical.target means that the system will start with a \ngraphical user interface (GUI) and all services required for it . \nThe other options are not correct commands for setting the serv er to runlevel 5. The systemct1 \nisolate multi-user.target command will change the current targe t to multi-user.target, which is \nequivalent to runlevel 3 in SysV init systems. Multi-user.target means that the system will start with multiple user logins and networking, but without a GUI. The sys temct1 isolate network.target \ncommand will change the current target to network.target, which is not a real runlevel but a synchronization point for network -related services. Network.tar get means that network functionality \nshould be available, but does not specify whether it should be started before or after it. The \nsystemct1 isolate basic.target c ommand will change the current target to basic.target, which is also \nnot a real runlevel but a synchronization point for basic syste m services. Basic.target means that all \n\nessential services should be started, but does not specify whether it should be star ted before or after \nit. Reference: systemd System and Service Manager; systemd.spec ial(7) - Linux manual page",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator is tasked with adding users to the system . However, the administrator wants to ensure the users access will be disabled once the project is ov er. The expiration date should be 2021- 09-30. Which of the following commands will accomplish this tas k?",
    "choices": [
      "sudo useradd -e 2021-09-30 Project_user",
      "sudo useradd -c 2021-09-30 Project_user",
      "sudo modinfo -F 2021-09-30 Project_uses",
      "sudo useradd -m -d 2021-09-30 Project_user"
    ],
    "answer": "A",
    "explanation": "The command that will accomplish this task is sudo useradd -e 2 021-09-30 Project_user. This \ncommand will create a new user account named Project_user with an expiration date of 2021-09-30. \nThe -e option of useradd specifies the date on which the user account will be disabled in YYYY-MMDD \nformat. \nThe other options are not correct commands for creating a user account with an expiration date. The \nsudo useradd -c 2021-09-30 Project_user command will create a new user account named \nProject_user with a comment of 2021-09-30. The -c option of use radd specifies a comment or \ndescription for the user account, not an expiration date. The sudo modinfo -F 2021-09-30 Project_user command is invalid because modinfo is not a command for managing user accounts, \nbut a command for displaying information about kernel modules. The -F option of modinfo specifies \na field name to show, not an expiration date. The sudo useradd -m -d 2021-09-30 Project_user \ncommand will create a new user account named Project_user with a home directory of 2021-09-30. The -m option of useradd specifi es that the home directory shou ld be created if it does not exist, and \nthe -d option specifies the home directory name, not an expirat ion date. Reference: useradd(8) - \nLinux manual page; modinfo(8) - Linux manual page",
    "type": "mcq"
  },
  {
    "question": "A DevOps engineer needs to download a Git repository from https://git.company.com/admin/project.git. Which of the following commands will achieve this goal?",
    "choices": [
      "git clone https://git.company.com/admin/project.git",
      "git checkout https://git.company.com/admin/project.git",
      "git pull https://git.company.com/admin/project.git",
      "git branch https://git.company.com/admin/project.git"
    ],
    "answer": "A",
    "explanation": "The command git clone https://git.company.com/admin/project.git will achieve the goal of \ndownloading a Git repository from the given URL. The git comman d is a tool for managing version \ncontrol systems. The clone option creates a copy of an existing repository. The URL specifies the \nlocation of the repository to clone, in this case https://git.c ompany.com/admin/project.git. The \ncommand git clone https://git.company.com/admin/project.git wil l download the repository and \ncreate a directory named project in the current working directo ry. This is the correct command to use \nto accomplish the goal. The other options are incorrect because they either do not download the \nrepository (git checkout, git pull, or git branch) or do not us e the correct syntax (git checkout \nhttps://git.company.com/admin/project.git instead of git checko ut -b project \nhttps://git.company.com/admin/project.git or git branch \nhttps://git.company.com/admin/project.git instead of git branch project \nhttps://git.company.com/admin/project.git). Reference: CompTIA Linux+ (XK0-005) Certification \nStudy Guide, Chapter 19: Managing Cloud and Virtualization Tech nologies, page 571.",
    "type": "mcq"
  },
  {
    "question": "An administrator installed an application from source into /opt /operations1/ and has received numerous reports that users are not able to access the applicat ion without having to use the full path /opt/operations1/bin/*. Which of the following commands should be used to resolve this issue?",
    "choices": [
      "echo 'export PATH=$PATH:/opt/operations1/bin' >> /etc/profil e",
      "echo 'export PATH=/opt/operations1/bin' >> /etc/profile",
      "echo 'export PATH=$PATH/opt/operations1/bin' >> /etc/profile",
      "echo 'export $PATH:/opt/operations1/bin' >> /etc/profile"
    ],
    "answer": "A",
    "explanation": "The command echo 'export PATH=$PATH:/opt/operations1/bin' >> /e tc/profile should be used to \n\nresolve the issue of users not being able to access the applica tion without using the full path. \nThe echo command prints the given string to the standard output . The export command sets an \nenvironment variable and makes it available to all child proces ses. The PATH variable contains a list of \ndirectories where the shell looks for executable files. The $PA TH expands to the current value of \nthe PATH variable. The : separates the directories in the list. The /opt/operations1/bin is the directory \nwhere the application is insta lled. The >> operator appends the output to the end of the file. \nThe /etc/profile file is a configuration file that is executed when a user logs in. The command echo \n'export PATH=$PATH:/opt/operations1/bin' >> /etc/profile will a dd \nthe /opt/operations1/bin directory to the PATH variable for all users and allow them to access the application without using the full path. This is the correct co mmand to use to resolve the issue. The \nother options are incorrect because they either overwrite the P ATH variable (echo 'export \nPATH=/opt/operations1/bin' >> /etc/profile) or do not use the c orrect syntax (echo 'export \nPATH=$PATH/opt/operations1/bin' >> /etc/profile or echo 'export $PATH:/opt/operations1/bin' >> \n/etc/profile). Reference: CompTIA Linux+ (XK0-005) Certificatio n Study Guide, Chapter 9: Working \nwith the Linux Shell, page 295.",
    "type": "mcq"
  },
  {
    "question": "A Linux system is getting an error indicating the root filesyst em is full. Which of the following commands should be used by the systems administrator to resolve this issue? (Choose three.)",
    "choices": [
      "df -h /",
      "fdisk -1 /dev/sdb",
      "growpart /dev/mapper/rootvg-rootlv",
      "pvcreate /dev/sdb E. lvresize \"L +10G -r /dev/mapper/rootvg-rootlv F. lsblk /dev/sda G. parted -l /dev/mapper/rootvg-rootlv H. vgextend /dev/rootvg /dev/sdb"
    ],
    "answer": "A",
    "explanation": "CE \nExplanation: \nThe administrator should use the following three commands to re solve the issue of the root \nfilesystem being full: df -h /. This command will show the disk usage of the root file system in a human-readable format. \nThe df command is a tool for reporting file system disk space u sage. The -h option displays the sizes \nin powers of 1024 (e.g., 1K, 234M, 2G). The / specifies the roo t filesystem. The command df -h / will \n\nshow the total size, used space, available space, and percentage of the root filesystem. This \ncommand will help the administrator identify the problem and pl an the solution. \ngrowpart /dev/mapper/rootvg-rootlv. This command will grow the partition that contains the root \nfilesystem to the maximum size available. The growpart command is a tool for resizing partitions on \nLinux systems. The /dev/mapper/rootvg-rootlv is the device name of the partition, which is a logical \nvolume managed by the Logical Volume Manager (LVM). The command growpart /dev/mapper/rootvg-rootlv will extend the partition to fill the disk space and increase the size of the \nroot filesystem. This command will help the administrator solve the problem and free up space. \nlvresize \"L +10G -r /dev/mapper/rootvg-rootlv. This command wil l resize the logical volume that \ncontains the root filesystem and add 10 GB of space. The lvresi ze command is a tool for resizing \nlogical volumes on Linux systems. The -L option specifies the n ew size of the logical volume, in this \ncase +10G, which means 10 GB more than the current size. The -r option resizes the underlying file \nsystem as well. The /dev/mapper/rootvg-rootlv is the device nam e of the logical volume, which is \nthe same as the partition name. The command lvresize \"L +10G -r /dev/mapper/rootvg-rootlv will increase the size of the logical volume and the root filesystem by 10 GB and free up space. This \ncommand will help the administrator solve the problem and free up space. \nThe other options are incorrect because they either do not affect the root filesystem (fdisk -1 /dev/sdb, pvcreate /dev/sdb, lsblk /dev/sda, or vgextend /dev/r ootvg /dev/sdb) or do not use the \ncorrect syntax (fdisk -1 /dev/sdb instead of fdisk -l /dev/sdb or parted -l /dev/mapper/rootvgrootlv instead of parted /dev/mapper/rootvg-rootlv print). Reference: CompTIA Linux+ (XK0-005) \nCertification Study Guide, Chapter 10: Managing Storage, pages 318-319, 331-332.",
    "type": "mcq"
  },
  {
    "question": "A cloud engineer is asked to copy the file deployment.yaml from a container to the host where the container is running. Which of the following commands can accom plish this task?",
    "choices": [
      "docker cp container_id/deployment.yaml deployment.yaml",
      "docker cp container_id:/deployment.yaml deployment.yaml",
      "docker cp deployment.yaml local://deployment.yaml",
      "docker cp container_id/deployment.yaml local://deployment.ya ml"
    ],
    "answer": "B",
    "explanation": "The command docker cp container_id:/deployment.yaml deployment. yaml can accomplish the task \nof copying the file deployment.yaml from a container to the hos t. The docker command is a tool for \nmanaging Docker containers and images. The cp option copies files or directories between a \n\ncontainer and the local filesystem. The container_id is the ide ntifier of the container, which can be \nobtained by using the docker ps command. The /deployment.yaml i s the path of the file in the \ncontainer, which must be preceded by a slash. The deployment.yaml is the path of the file on the \nhost, which can be relative or absolute. The command docker cp container_id:/deployment.yaml \ndeployment.yaml will copy the file deployment.yaml from the container to the current working \ndirectory on the host. This is the correct command to use to ac complish the task. The other options \nare incorrect because they either use the wrong syntax (docker cp container_id/deployment.yaml \ndeployment.yaml or docker cp container_id/deployment.yaml local ://deployment.yaml) or do not \nexist (docker cp deployment.yaml local://deployment.yaml). Refe rence: CompTIA Linux+ (XK0-005) \nCertification Study Guide, Chapt er 19: Managing Cloud and Virtu alization Technologies, page 567.",
    "type": "mcq"
  },
  {
    "question": "A Linux system is failing to start due to issues with several c ritical system processes. Which of the following options can be used to boot the system into the singl e user mode? (Choose two.)",
    "choices": [
      "Execute the following command from the GRUB rescue shell: mo unt -o remount, ro/sysroot.",
      "Interrupt the boot process in the GRUB menu and add systemd. unit=single in the kernel line.",
      "Interrupt the boot process in the GRUB menu and add systemd. unit=rescue.target in the kernel line.",
      "Interrupt the boot process in the GRUB menu and add single=user in the kernel line. E. Interrupt the boot process in the GRUB menu and add init=/bi n/bash in the kernel line. F. Interrupt the boot process in the GRUB menu and add systemd. unit=single.target in the kernel line."
    ],
    "answer": "C",
    "explanation": ", F Explanation: The administrator can use the following two options to boot the system into the single user mode: \nInterrupt the boot process in the GRUB menu and add systemd.uni t=rescue.target in the kernel line. \nThis option will boot the system into the rescue mode, which is a minimal environment that allows \nthe administrator to perform basic tasks such as repairing the system. The GRUB menu is a screen \nthat appears when the system is powered on and allows the admin istrator to choose which kernel or \noperating system to boot. The kernel line is a line that specifies the parameters for the kernel, such \nas the root device, the init system, and the boot options. The administrator can interrupt the boot \nprocess by pressing the e key in the GRUB menu and edit the ker nel line by \nadding systemd.unit=rescue.target at the end. This option will tell the system to use the rescue \ntarget, which is a unit that defines the state of the system in the rescue mode. The administrator can \n\nthen press Ctrl+X to boot the system with the modified kernel l ine. This option will boot the system \ninto the single user mode and allow the administrator to troubl eshoot the issues. \nInterrupt the boot process in the GRUB menu and add systemd.uni t=single.target in the kernel line. \nThis option will boot the system into the single user mode, whi ch is a mode that allows the \nadministrator to log in as the root user and perform maintenanc e tasks. The GRUB menu and the \nkernel line are the same as the previous option. The administra tor can interrupt the boot process by \npressing the e key in the GRUB menu and edit the kernel line by adding systemd.unit=single.target at \nthe end. This option will tell the system to use the single tar get, which is a unit that defines the state \nof the system in the single user mode. The administrator can then press Ctrl+X to boot the system \nwith the modified kernel line. This option will boot the system into the single user mode and allow \nthe administrator to troubleshoot the issues. The other options are incorrect because they either do not boot the system into the single user mode \n(execute the following command from the GRUB rescue shell: moun t -o remount, \nro/sysroot or interrupt the boot process in the GRUB menu and add systemd.unit=single in the kernel line) or do not use the correct syntax (interrupt the boot proc ess in the GRUB menu and add \nsingle=user in the kernel line or interrupt the boot process in the GRUB menu and add init=/bin/bash \nin the kernel line). Reference: CompTIA Linux+ (XK0-005) Certif ication Study Guide, Chapter 8: \nManaging the Linux Boot Process, pages 267-268.",
    "type": "mcq"
  },
  {
    "question": "A DevOps engineer needs to allow incoming traffic to ports in the range of 4000 to 5000 on a Linux server. Which of the following commands will enforce this rule?",
    "choices": [
      "iptables -f filter -I INPUT -p tcp --dport 4000:5000 -A ACCE PT",
      "iptables -t filter -A INPUT -p tcp --dport 4000:5000 -j ACCE PT",
      "iptables filter -A INPUT -p tcp --dport 4000:5000 -D ACCEPT",
      "iptables filter -S INPUT -p tcp --dport 4000:5000 -A ACCEPT"
    ],
    "answer": "B",
    "explanation": "The command iptables -t filter -A INPUT -p tcp --dport 4000:500 0 -j ACCEPT will enforce the rule of \nallowing incoming traffic to ports in the range of 4000 to 5000 on a Linux server. \nThe iptables command is a tool for managing firewall rules on L inux systems. The -t option specifies \nthe table to operate on, in this case filter, which is the defa ult table that contains the rules for \nfiltering packets. The -A option appends a new rule to the end of a chain, in this case INPUT, which is \nthe chain that processes the packets that are destined for the local system. The -p option specifies \n\nthe protocol to match, in this case tcp, which is the transmiss ion control protocol. The --dport option \nspecifies the destination port or port range to match, in this case 4000:5000, which is the range of \nports from 4000 to 5000. The -j option specifies the target to jump to if the rule matches, in this \ncase ACCEPT, which is the target that allows the packet to pass through. The command iptables -t \nfilter -A INPUT -p tcp --dport 4000:5000 -j ACCEPT will add a n ew rule to the end of the INPUT chain \nthat will accept the incoming TC P packets that have a destinati on port between 4000 and 5000. This \ncommand will enforce the rule and allow the traffic to the specified ports. This is the correct \ncommand to use to accomplish the task. The other options are in correct because they either use the \nwrong options (-f instead of -t or -D instead of -A) or do not exist (iptables filter -A INPUT -p tcp -- \ndport 4000:5000 -D ACCEPT or iptables filter -S INPUT -p tcp --dport 4000:5000 -A \nACCEPT). Reference: CompTIA Linux+ (XK0-005) Certification Stud y Guide, Chapter 18: Securing Linux \nSystems, page 543.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator needs to determine whether a hostname is in the DNS. Which of the following would supply the information that is needed?",
    "choices": [
      "nslookup",
      "rsyn\u00d1",
      "netstat",
      "host"
    ],
    "answer": "A",
    "explanation": "The commands nslookup or host can be used to determine whether a hostname is in the DNS. The \nDNS is the domain name system, which is a service that translat es domain names into IP addresses \nand vice versa. The nslookup command is a tool for querying the DNS and obtaining information \nabout a domain name or an IP address. The host command is a sim ilar tool that performs DNS \nlookups. Both commands can be used to check if a hostname is in the DNS by providing the \nhostname as an argument and seeing if the command returns a val id IP address or an error message. \nFor example, the command nslookup www.google.com or host www.go ogle.com will return the IP \naddress of the Google website, while the command nslookup www.nosuchdomain.com or host \nwww.nosuchdomain.com will return an error message indicating that the hostname does not exist. \nThese commands will supply the information that is needed to de termine whether a hostname is in \nthe DNS. These are the correct commands to use for this task. T he other options are incorrect \nbecause they do not query the DNS or obtain information about a hostname \n\n(rsync or netstat). Reference: CompTIA Linux+ (XK0-005) Certifi cation Study Guide, Chapter 12: \nManaging Network Connections, page 378.",
    "type": "mcq"
  },
  {
    "question": "A server is experiencing intermittent connection issues. Some c onnections to the Internet work as intended, but some fail as if there is no connectivity. The sys tems administrator inspects the server configuration: Which of the following is MOST likely the cause of the issue?",
    "choices": [
      "An internal-only DNS server is configured.",
      "The IP netmask is wrong for ens3.",
      "Two default routes are configured.",
      "The ARP table contains incorrect entries."
    ],
    "answer": "C",
    "explanation": "The most likely cause of the issue is that two default routes a re configured on the server. The default \nroute is the route that is used when no other route matches the destination of a packet. The default \nroute is usually the gateway that connects the local network to the Internet. The server configuration \nshows that there are two default routes in the routing table, one with the gateway 192.168.1.1 and \nthe other with the gateway 10.0.0.1. This can cause a conflict and confusion for the server when \ndeciding which gateway to use for the outgoing packets. Some pa ckets may be sent to the wrong \ngateway and fail to reach the Internet, while some packets may be sent to the correct gateway and \nwork as intended. This can result in intermittent connection is sues and inconsistent behavior. The \nadministrator should remove one of the default routes and keep only the correct one for the \nnetwork. This can be done by using the ip route del command or by editing the network \nconfiguration files. This will resolve the issue and restore th e connectivity. The other options are \nincorrect because they are not supported by the outputs. The DN S server, the IP netmask, and the \nARP table are not the causes of the issue. Reference: CompTIA L inux+ (XK0-005) Certification Study \nGuide, Chapter 12: Managing Ne twork Connections, pages 381-382.",
    "type": "mcq"
  },
  {
    "question": "A cloud engineer needs to block the IP address 192.168.10.50 fr om accessing a Linux server. Which of the following commands will achieve this goal?",
    "choices": [
      "iptables -F INPUT -j 192.168.10.50 -m DROP",
      "iptables -A INPUT -s 192.168.10.30 -j DROP",
      "iptables -i INPUT --ipv4 192.168.10.50 -z DROP",
      "iptables -j INPUT 192.168.10.50 -p DROP"
    ],
    "answer": "B",
    "explanation": "The correct command to block the IP address 192.168.10.50 from accessing a Linux server is iptables \n-A INPUT -s 192.168.10.50 -j DROP. This command appends a rule to the INPUT chain that matches \nthe source address 192.168.10.50 and jumps to the DROP target, which discards the packet. The \nother commands are incorrect because they either have invalid s yntax, wrong parameters, or wrong \norder of arguments. Reference: CompTIA Linux+ Study Guide, Four th Edition, page 457-458.",
    "type": "mcq"
  },
  {
    "question": "A Linux systems administrator is configuring a new filesystem t hat needs the capability to be mounted persistently across reboots. Which of the following commands will accomplish this task? (Choose two.)",
    "choices": [
      "df -h /data",
      "mkfs.ext4 /dev/sdc1",
      "fsck /dev/sdc1",
      "fdisk -l /dev/sdc1 E. echo \"/data /dev/sdc1 ext4 defaults 0 0\" >> /etc/fstab F. echo \"/dev/sdc1 /data ext4 defaults 0 0\" >> /etc/fstab"
    ],
    "answer": "B",
    "explanation": ", F \n Explanation: \n\"modify the /etc/fstab text file to automatically mount the new partition by opening it in an editor \nand adding the following line: /dev/ xxx 1 /data ext4 defaults 1 2 \nwhere xxx is the device name of the storage device\" https://learning.oreilly.com/lib rary/view/mastering-linux-syste m81119794455/b01.xhtml \nTo configure a new filesystem that needs the capability to be m ounted persistently across reboots, \ntwo commands are needed: mkfs.ext4 /dev/sdc1 and echo \u0153/dev/sdc 1 /data ext4 defaults 0 0 >> \n/etc/fstab. The first command creates an ext4 filesystem on the device /dev/sdc1, which is the \npartition that will be used for the new filesystem. The second command appends a line to the \n/etc/fstab file, which is the conf iguration file that controls persistent mount points of filesystems. The \nline specifies the device name, the mount point (/data), the fi lesystem type (ext4), the mount \noptions (defaults), and the dump and pass values (0 0). The oth er commands are incorrect because \nthey either do not create or configure a filesystem, or they have wrong syntax or arguments. Reference: CompTIA Linux+ Study Guide, Fourth Edition, page 409 -410, 414-415.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator is alerted to a storage capacity issue on a server without a specific mount point or directory. Which of the following commands would be MOST hel pful for troubleshooting? (Choose two.)",
    "choices": [
      "parted",
      "df",
      "mount",
      "du E. fdisk F. dd G. ls"
    ],
    "answer": "B",
    "explanation": ", D \n Explanation: \nTo troubleshoot a storage capacity issue on a server without a specific mount point or directory, two \ncommands that would be most helpful are df and du. The df command displays information about disk space usage on all mounted filesystems, including their si ze, used space, available space, and \npercentage of usage. The du command displays disk space usage b y files and directories in a given \npath, which can help identify large files or directories that m ay be taking up too much space. The \nother commands are incorrect because they either do not show disk space usage, or they are used \nfor other purposes such as partitioning, formatting, checking, mounting, copying, or listing files. \nReference: CompTIA Linux+ Study Guide, Fourth Edition, page 417 -419.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator pressed Ctrl+Z after starting a program using the command line, and the shell prompt was presented. In order to go back to the program, which of the following commands can the administrator use?",
    "choices": [
      "fg",
      "su",
      "bg",
      "ed"
    ],
    "answer": "A",
    "explanation": "Ctrl+Z suspended the process, and \"fg\" will bring it back into the foreground of the shell \nA Comprehensive and Detailed To go back to a program that was suspended by pressing Ctrl+Z in the \ncommand line, the command that can be used is fg. The fg comman d stands for foreground, and it \nresumes the job that is next in the queue and brings it to the foreground. Alternatively, if there are \nmore than one suspended jobs, fg can be followed by a job numbe r to resume a specific job. The \nother commands are incorrect because they either do not resume a suspended job, or they have \ndifferent functions such as switching user (su), pushing a job to the background (bg), or editing a file (ed). Reference: CompTIA Linux+ Study Guide, Fourth Edition, pa ge 181-182.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator received a notification that a system i s performing slowly. When running the top command, the systems adminis trator can see the following va lues: Which of the following commands will the administrator most lik ely run NEXT?",
    "choices": [
      "vmstat",
      "strace",
      "htop",
      "lsof"
    ],
    "answer": "A",
    "explanation": "The command vmstat will most likely be run next by the administrator to troubleshoot the system \nperformance. The vmstat command is a tool for reporting virtual memory statistics on Linux systems. \nThe command shows information about processes, memory, paging, block IO, interrupts, and CPU \nactivity. The command can help the administrator identify the s ource of the performance issue, such \nas high CPU usage, low free memory, excessive swapping, or disk IO bottlenecks. The command can \nalso be used with an interval and a count to display the statistics repeatedly over time and observe \nthe changes. The command vmstat will provide useful information for diagnosing the system \nperformance and finding the root cause of the issue. This is th e most likely command to run next \nafter the top command. The other options are incorrect because they either do not show the virtual \nmemory statistics (strace or lsof) or do not provide more infor mation than the top command \n\n(htop). Reference: CompTIA Linux+ (XK0-005) Certification Study Guide, Chapter 14: Managing \nProcesses and Scheduling Tasks, page 425.",
    "type": "mcq"
  },
  {
    "question": "Which of the following technologies provides load balancing, en cryption, and observability in containerized environments?",
    "choices": [
      "Virtual p rivate netwo rk",
      "Sidec ar pod",
      "Overl ay netwo rk",
      "Service mesh"
    ],
    "answer": "D",
    "explanation": "\"A service mesh controls the delivery of service requests in an application. Common features \nprovided by a service mesh include service discovery, load bala ncing, encryption and failure \nrecovery.\" \nThe technology that provides load balancing, encryption, and ob servability in containerized \nenvironments is service mesh. A service mesh is a dedicated inf rastructure layer that manages the \ncommunication and security between microservices in a distribut ed system. A service mesh consists \nof two components: a data plane and a control plane. The data plane is composed of proxies that are \ndeployed alongside the microser vices as sidecar pods. The proxi es handle the network traffic \nbetween the microservices and provide features such as load bal ancing, encryption, authentication, \nauthorization, routing, and observability. The control plane is responsible for configuring and \nmanaging the data plane and providing a unified interface for t he administrators and developers. A \nservice mesh can help improve the performance, reliability, and security of containerized \napplications and simplify the development and deployment process. A service mesh is the \ntechnology that provides load balancing, encryption, and observ ability in containerized \nenvironments. This is the correct answer to the question. The o ther options are incorrect because \nthey either do not provide all the features of a service mesh ( virtual private network or overlay \nnetwork) or are not a technology but a component of a service m esh (sidecar \npod). Reference: CompTIA Linux+ (XK0-005) Certification Study Guide, Chapter 19: Managing Cloud and Virtualization Technologies, page 574. \nhttps://www.techtarget.com/searchitoperations/definition/servic e-mesh",
    "type": "mcq"
  },
  {
    "question": "A development team asks an engineer to guarantee the persistenc y of journal log files across system reboots. Which of the following commands would accomplish this task?",
    "choices": [
      "grep -i auto /etc/systemd/jour nald.conf && systemct1 restart systemd-journald.service",
      "cat /etc/systemd/journald.conf | awk '(print $1,$3)'",
      "sed -i 's/auto/persistent/g' /etc/systemd/journald.conf && s ed -i 'persistent/s/\u00cb\u2020#//q' /etc/systemd/journald.conf",
      "journalctl --list-boots && systemct1 restart systemd-journal d.service"
    ],
    "answer": "C",
    "explanation": "The command sed -i 's/auto/persistent/g' /etc/systemd/journald.conf && sed -i 'persistent/s/\u00cb\u2020#//q' \n/etc/systemd/journald.conf will accomplish the task of guarante eing the persistency of journal log \nfiles across system reboots. The sed command is a tool for edit ing text files on Linux systems. The - \ni option modifies the file in place. The s command substitutes one string for another. The g flag \nreplaces all occurrences of the string. The && operator execute s the second command only if the first \ncommand succeeds. The q command quits after the first match. Th e /etc/systemd/journald.conf file \nis a configuration file for the systemd-journald service, which is responsible for collecting and storing \nlog messages. The command sed -i 's/auto/persistent/g' /etc/sys temd/journald.conf will replace the \nword auto with the word persistent in the file. This will chang e the value of the Storage option, which \ncontrols where the journal log files are stored. The value auto means that the journal log files are \nstored in the volatile memory and are lost after reboot, while the value persistent means that the journal log files are stored in the persistent storage and are preserved across reboots. The \ncommand sed -i 'persistent/s/\u00cb\u2020#//q' /etc/systemd/journald.conf will remove the # character at the \nbeginning of the line that contains the word persistent. This w ill uncomment the Storage option and \nenable it. The command sed -i 's/auto/persistent/g' /etc/system d/journald.conf && sed -i \n'persistent/s/\u00cb\u2020#//q' /etc/systemd/journald.conf will guarantee the persistency of journal log files \nacross system reboots by changing and enabling the Storage option to persistent. This is the correct command to use to accomplish the task. The other options are in correct because they either do not \nchange the value of the Storage option (grep -i auto /etc/syste md/journald.conf && systemct1 restart \nsystemd-journald.service or cat /etc/systemd/journald.conf | awk '(print $1,$3)') or do not enable \nthe Storage option (journalctl -- list-boots && systemct1 restar t systemdjournald. \nservice). Reference: CompTIA Linux+ (XK0-005) Certification Stu dy Guide, Chapter 16: \nManaging Logging and Monitoring, page 489.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator is receiving tickets from users who can not reach the application app that should be listening on port 9443/tcp on a Linux server. To troubleshoot the issue, the sys tems administrator runs netst at and receives the following output: Based on the information above, which of the following is causing the issue?",
    "choices": [
      "The IP address 0.0.0.0 is not valid.",
      "The application is listening on the loopback interface.",
      "The application is listening on port 1234.",
      "The application is not running."
    ],
    "answer": "B",
    "explanation": "The server is in a \"Listen\" state on port 9943 using its loopback address. The \"1234\" is a process-id The cause of the issue is that the application is listening on the loopback interface. The loopback \ninterface is a virtual network interface that is used for internal communication within the system. The loopback interface has the IP address 127.0.0.1, which is a lso known as localhost. The netstat \noutput shows that the application is listening on port 9443 usi ng the IP address 127.0.0.1. This means \nthat the application can only accept connections from the same system, not from other systems on \nthe network. This can prevent the users from reaching the appli cation and cause the issue. The \nadministrator should configure the application to listen on the IP address 0.0.0.0, which means all available interfaces, or on the s pecific IP address of the syst em that is reachable from the network. \nThis will allow the application to accept connections from othe r systems and resolve the issue. The \ncause of the issue is that the application is listening on the loopback interface. This is the correct \nanswer to the question. The other options are incorrect because they are not supported by the \noutputs. The IP address 0.0.0.0 is valid and means all interfac es, the application is not listening on \nport 1234, and the application is running as shown by the proce ss ID 1234. Reference: CompTIA \nLinux+ (XK0-005) Certification Stud y Guide, Chapter 12: Managing Network Connections, page 383.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator is troubleshooting a connectivity issue pertaining to access to a system named db.example.com. The system IP address should be 192.168.20.88. The administrator issues the dig command and receives the following output: The administrator runs grep db.example.com /etc/hosts and receives the following output: Given this scenario, which of the following should the administ rator do to address this issue?",
    "choices": [
      "Modify the /etc/hosts file and change the db.example.com ent ry to 192.168.20.89.",
      "Modify the /etc/network file and change the db.example.com e ntry to 192.168.20.88.",
      "Modify the /etc/network file and change the db.example.com e ntry to 192.168.20.89.",
      "Modify the /etc/hosts file and change the db.example.com ent ry to 192.168.20.88."
    ],
    "answer": "D",
    "explanation": "The administrator should modify the /etc/hosts file and change the db.example.com entry to \n192.168.20.88 to address the issue. The /etc/hosts file is a fi le that maps hostnames to IP addresses \non Linux systems. The file can be used to override the DNS resolution and provide a local lookup for hostnames. The dig output shows that the DNS returns the IP add ress 192.168.20.88 for the \nhostname db.example.com, which is the correct IP address of the system. The grep output shows \nthat the /etc/hosts file contains an entry for db.example.com w ith the IP address 192.168.20.89, \nwhich is the wrong IP address of the system. This can cause a c onflict and prevent the system from \nbeing accessed by the hostname. The administrator should modify the /etc/hosts file and change the \ndb.example.com entry to 192.168.20.88, which is the correct IP address of the system. This will align \nthe /etc/hosts file with the DNS and allow the system to be acc essed by the hostname. The \nadministrator should modify the / etc/hosts file and change the db.example.com entry to \n192.168.20.88 to address the issue. This is the correct answer to the question. The other options are incorrect because they either do not modify the /etc/hosts file (modify the /etc/network file and \n\nchange the db.example.com entry to 192.168.20.88 or modify the /etc/network file and change the \ndb.example.com entry to 192.168.20.89) or do not change the IP address to the correct one (modify \nthe /etc/hosts file and change the db.example.com entry to 192. 168.20.89). Reference: CompTIA \nLinux+ (XK0-005) Certification Stud y Guide, Chapter 12: Managing Network Connections, page 378.",
    "type": "mcq"
  },
  {
    "question": "Users have been unable to reach www.comptia.org from a Linux server. A systems administrator is troubleshooting the issue and does the following: Based on the information above, which of the following is causing the issue?",
    "choices": [
      "The name www.comptia.org does not point to a valid IP addres s.",
      "The server 192.168.168.53 is unreachable.",
      "No default route is set on the server.",
      "The network interface eth0 is disconnected."
    ],
    "answer": "B",
    "explanation": "The issue is caused by the server 192.168.168.53 being unreacha ble. This server is the DNS server \nconfigured in the /etc/resolv.conf file, which is used to resol ve domain names to IP addresses. The \nping command shows that the server cannot be reached, and the nslookup command shows that the name www.comptia.org cannot be resolved using this server. The other options are incorrect \nbecause: The name www.comptia.org does point to a valid IP address, as s hown by the nslookup command \nusing another DNS server (8.8.8.8). \nThe default route is set on the server, as shown by the ip rout e command, which shows a default \ngateway of 192.168.168.1. The network interface eth0 is connected, as shown by the ip lin k command, which shows a state of \nUP for eth0. Reference: CompTIA Linux+ Study Guide, Fourth Edition, page 457-458, 461-462.",
    "type": "mcq"
  },
  {
    "question": "A systems technician is working on deploying several microservi ces to various RPM-based systems, some of which could run up to two hours. Which of the following commands will allow the technician to execute those services and continue deploying oth er microservices within the same terminal section?",
    "choices": [
      "gedit & disown",
      "kill 9 %1",
      "fg %1",
      "bg %1 job name"
    ],
    "answer": "D",
    "explanation": "The command that will allow the technician to execute the servi ces and continue deploying other \n\nmicroservices within the same te rminal session is bg %1 job nam e. This command will send the job \nwith ID 1 and name job name to the background, where it will ru n without occupying the terminal. \nThe other options are incorrect because: \ngedit & disown will launch a graphical text editor in the backg round and detach it from the terminal, \nbut it will not execute any service. kill 9 %1 will terminate the job with ID 1 using a SIGKILL sign al, which cannot be ignored or handled \nby the process. \nfg %1 will bring the job with ID 1 to the foreground, where it will occupy the terminal until it finishes \nor is stopped. Reference: CompTIA Linux+ Study Guide, Fourth Ed ition, page 181-182.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator was notified that a virtual server has an I/O bottleneck. The Linux administrator analyzes the following output: Given there is a single CPU in the sever, which of the followin g is causing the slowness?",
    "choices": [
      "The system is running out of swap space.",
      "The CPU is overloaded.",
      "The memory is exhausted.",
      "The processes are paging."
    ],
    "answer": "B",
    "explanation": "The slowness is caused by the CPU being overloaded. The iostat command shows that the CPU \nutilization is 100%, which means that there are more processes competing for CPU time than the CPU can handle. The other options are incorrect because: \nThe system is not running out of swap space, as shown by the io stat command, which shows that \nthere is no swap activity (si and so columns are zero). \nThe memory is not exhausted, as shown by the free -m command, w hich shows that there is still \navailable memory (avail column) and free buffer/cache memory (b uff/cache column). \nThe processes are not paging, as shown by the vmstat command, w hich shows that there are no \nmajor page faults (majflt column) and no swap activity (si and so columns). Reference: CompTIA \nLinux+ Study Guide, Fourth Edition, page 417-419, 424-425.",
    "type": "mcq"
  },
  {
    "question": "Employees in the finance depart ment are having trouble accessin g the file /opt/work/file. All IT employees can read and write the file. Systems administrator reviews the following output: Which of the following commands would permanently fix the access issue while limiting access to IT and finance department employees?",
    "choices": [
      "chattr +i file",
      "chown it:finance file",
      "chmod 666 file",
      "setfacl -m g:finance:rw file"
    ],
    "answer": "D",
    "explanation": "The command setfacl -m g:finance:rw file will permanently fix the access issue while limiting access \nto IT and finance department employees. The setfacl command is a tool for modifying the access \ncontrol lists (ACLs) of files and directories on Linux systems. The ACLs are a mechanism that allows \nmore fine-grained control over the permissions of files and dir ectories than the traditional ownergroup- \nothers model. The -m option specifies the modification to the ACL. The g:finance:rw means \nthat the group named finance will have read and write permissio ns on the file. The file is the name of \nthe file to modify, in this case /opt/work/file. The command setfacl -m g:finance:rw file will add an entry to the ACL of the file that will grant read and write acc ess to the finance group. This will fix the \naccess issue and allow the finance employees to access the file . The command will also preserve the \nexisting permissions of the file , which means that the IT emplo yees will still have read and write \naccess to the file. This will li mit the access to IT and financ e department employees and prevent \nunauthorized access from other users. This is the correct command to use to accomplish the task. The other options are incorrect because they either do not fix the access issue (chattr +i file or chown \nit:finance file) or do not limit the access to IT and finance d epartment employees (chmod 666 \nfile). Reference: CompTIA Linux+ (XK0-005) Certification Study Guide, Chapter 11: Managing File \nPermissions and Ownership, page 352.",
    "type": "mcq"
  },
  {
    "question": "A Linux engineer needs to create a custom script, cleanup.sh, t o run at boot as part of the system services. Which of the following processes would accomplish thi s task?",
    "choices": [
      "Create a unit file in the /etc/default/ directory. systemct1 enable cleanup systemct1 is-enabled cleanup",
      "Create a unit file in the /etc/ske1/ directory. systemct1 enable cleanup systemct1 is-enabled cleanup",
      "Create a unit file in the /etc/systemd/system/ directory. systemct1 enable cleanup systemct1 is-enabled cleanup",
      "Create a unit file in the /etc/sysctl.d/ directory. systemct1 enable cleanup systemct1 is-enabled cleanup"
    ],
    "answer": "C",
    "explanation": "The process that will accomplish the task of creating a custom script to run at boot as part of the \nsystem services is: Create a unit file in the /etc/systemd/system/ directory. A uni t file is a configuration file that defines \nthe properties and behavior of a systemd service. The systemd is a system and service manager that \ncontrols the startup and operation of Linux systems. The /etc/s ystemd/system/ directory is the \nlocation where the administrator can create and store custom un it files. The unit file should have a \nname that matches the name of the script, such as cleanup.service, and should contain the following sections and options: \n[Unit]: This section provides the general information about the service, such as the description, \ndependencies, and conditions. The administrator should specify the following options in this section: \nDescription: A brief description of the service, such as \u0153Custo m cleanup script . \nAfter: The name of another unit that this service should start after, such as \u0153network.target . \nConditionPathExists: The path of the file or directory that mus t exist for the service to start, such as \n\u0153/opt/scripts/cleanup.sh . \n[Service]: This section defines how the service should be start ed and stopped, and what commands \nshould be executed. The administrator should specify the follow ing options in this section: \nType: The type of the service, such as \u0153oneshot , which means that the service will run once and then \nexit. \nExecStart: The command that will start the servi ce, such as \u0153/bin/bash /opt/scripts/cleanup.sh . \nRemainAfterExit: A boolean value that indicates whether the ser vice should remain active after the \ncommand exits, such as \u0153yes . \n[Install]: This section defines how the service should be enabl ed and under what circumstances it \nshould be started. The administrator should specify the followi ng option in this section: \nWantedBy: The name of another un it that wants this service to b e started, such as \u0153multiuser. \ntarget , which means that the service will be started when the system reaches the multi-user \nmode. \nRun the command systemct1 enable cleanup. This command will enable the service and create the necessary symbolic links to start the service at boot. \nRun the command systemct1 is-enabled cleanup. This command will check the status of the service \nand confirm that it is enabled. This process will create a custom script, cleanup.sh, to run at boot as part of the system services. This \nis the correct process to use to accomplish the task. The other options are incorrect because they \neither use the wrong directory for the unit file (/etc/default/ , /etc/skel/, or /etc/sysctl.d/) or do not \n\ncreate a unit file at all. Reference: CompTIA Linux+ (XK0-005) Certification Study Guide, Chapter 15: \nManaging System Services, pages 457-459.",
    "type": "mcq"
  },
  {
    "question": "A Linux system is failing to boot. The following error is displ ayed in the serial console: [[1;33mDEPEND[Om] Depende ncy failed for /data. [[1;33mDEPEND[Om] Dependency failed for Local File Systems ... Welcome to emergency mode! After logging in, type \"journalc tl -xb\" to viewsystem logs, \"systemct1 reboot\" to reboot, \"systemct1 default\" to try again to boot int o default mode. Give root password for maintenance (or type Control-D to continue} Which of the following files will need to be modified for this server to be able to boot again?",
    "choices": [
      "/etc/mtab",
      "/dev/sda",
      "/etc/fstab",
      "/ete/grub.conf"
    ],
    "answer": "C",
    "explanation": "The file that will need to be modified for the server to be abl e to boot again is /etc/fstab. The \n/etc/fstab file is a file that contains the information about the file systems that are mounted at boot time on Linux systems. The file specifies the device name, moun t point, file system type, mount \noptions, dump frequency, and pass number for each file system. The error message i ndicates that the \ndependency failed for /data, which is a mount point for a file system. This means that the system \ncould not mount the /data file system at boot time, which cause d the system to enter the emergency \nmode. The emergency mode is a mode that allows the administrato r to log in as the root user and \nperform basic tasks such as repai ring the system. The administr ator should modify the /etc/fstab file \nand check the entry for the /data file system. The administrato r should look for any errors or \ninconsistencies in the device name, file system type, or mount options, and correct them. The \nadministrator should also verify that the device and the file s ystem are intact and functional by using \ncommands such as blkid, fdisk, fsck, or mount. The administrato r should then reboot the system and \nsee if the issue is resolved. The file that will need to be mod ified for the server to be able to boot \nagain is /etc/fstab. This is the correct answer to the question . The other options are incorrect because \nthey are not related to the file systems that are mounted at bo ot time (/etc/mtab, /dev/sda, \n\nor /etc/grub.conf). Reference: CompTIA Linux+ (XK0-005) Certifi cation Study Guide, Chapter 10: \nManaging Storage, page 321.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator frequently connects to a remote host vi a SSH and a non-standard port. The systems administrator would like to avoid passing the port para meter on the command line every time. Which of the following files can be used to set a differe nt port value for that host?",
    "choices": [
      "/etc/ssh/sshd_config",
      "/etc/ssh/moduli",
      "~/.ssh/config",
      "~/.ssh/authorized_keys"
    ],
    "answer": "C",
    "explanation": "The ~/.ssh/config file can be used to set various options for SSH connections, including the port \nnumber, for specific hosts or groups of hosts. This file is loc ated in the users home directory and \naffects only the current user. T he /etc/ssh/sshd_config file is used to configure the SSH server \ndaemon, not the client. The /et c/ssh/moduli file contains param eters for Diffie-Hellman key \nexchange, not port settings. The ~/.ssh/authorized_keys file co ntains public keys for authentication, \nnot port settings. Reference: CompTIA Linux+ (XK0-005) Certific ation Study Guide, Chapter 12: Secure \nShell (SSH), page 414.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator modified the SSH configuration file. Which of the following commands should be used to apply the configuration changes?",
    "choices": [
      "systemct1 stop sshd",
      "systemct1 mask sshd",
      "systemct1 reload sshd",
      "systemct1 start sshd"
    ],
    "answer": "C",
    "explanation": "The systemct1 reload sshd command can be used to apply the conf iguration changes of the SSH \n\nserver daemon without restarting it. This is useful to avoid interrupting existing connections. The \nsystemct1 stop sshd command would stop the SSH server daemon, n ot apply the changes. The \nsystemct1 mask sshd command would prevent the SSH server daemon from being started, not apply \nthe changes. The systemct1 start sshd command would start the S SH server daemon if it is not \nrunning, but it would not apply the changes if it is already running. Reference: CompTIA Linux+ (XK0- \n005) Certification Study Guide, Chapter 12: Secure Shell (SSH), page 415.",
    "type": "mcq"
  },
  {
    "question": "A cloud engineer needs to check the link status of a network in terface named eth1 in a Linux server. Which of the following commands can help to achieve the goal?",
    "choices": [
      "ifconfig hw eth1",
      "netstat -r eth1",
      "ss -ti eth1",
      "ip link show eth1"
    ],
    "answer": "D",
    "explanation": "The ip link show eth1 command can be used to check the link sta tus of a network interface named \neth1 in a Linux server. It will display information such as the MAC address, MTU, state, and flags of \nthe interface. The ifconfig hw eth1 command is invalid, as hw i s not a valid option for ifconfig. The \nnetstat -r eth1 command would display the routing table for eth1, not the link status. The ss -ti eth1 \ncommand would display TCP information for sockets associated wi th eth1, not the link \nstatus. Reference: CompTIA Linux+ (XK0-005) Certification Study Guide, Chapter 13: Networking \nFundamentals, page 436.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator is tasked with setting up key-based SSH authentication. In which of the following locations should the administrator place the public k eys for the server?",
    "choices": [
      "~/.sshd/authkeys",
      "~/.ssh/keys",
      "~/.ssh/authorized_keys",
      "~/.ssh/keyauth"
    ],
    "answer": "C",
    "explanation": "The administrator should place the public keys for the server i n the ~/.ssh/authorized_keys file. The \nSSH (Secure Shell) protocol is a method for establishing secure and encrypted connections between \nremote systems. The SSH protocol supports two types of authenti cation: password-based and keybased. \nPassword-based authentication requires the user to enter the pa ssword of the remote system \nevery time they connect. Key-based authentication requires the user to generate a pair of \ncryptographic keys: a public key and a private key. The public key is stored on the remote system, \nwhile the private key is kept on the local system. The public key and the private key are mathematically related, but not identical. The SSH protocol use s the keys to verify the identity of the \nuser and establish a secure connection without requiring a password. The ~/.ssh/authorized_keys file is a file that contains the public keys of the users who are al lowed to connect to the remote system \nusing key-based authentication. The administrator should place the public keys for the server in this \nfile, one per line, and set the appropriate permissions for the file. The administrator should also \nconfigure the SSH server to enable key-based authentication by editing the /etc/ssh/sshd_config file \nand setting the option PasswordAuthentication to no. The admini strator should place the public keys \nfor the server in the ~/.ssh/authorized_keys file. This is the correct answer to the question. The other options are incorrect because they are not the standard locatio ns for the public keys for the server \n(~/.sshd/authkeys, ~/.ssh/keys, or ~/.ssh/keyauth). Reference: CompTIA Linux+ (XK0-005) \nCertification Study Guide, Chapter 17: Implementing Basic Secur ity, page 513.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator needs to create a new user named user02. However, user02 must be in a different home directory, which is under /comptia/projects. Whi ch of the following commands will accomplish this task?",
    "choices": [
      "useradd -d /comptia/projects user02",
      "useradd -m /comptia/projects user02",
      "useradd -b /comptia/projects user02",
      "useradd -s /comptia/projects user02"
    ],
    "answer": "A",
    "explanation": "The command useradd -d /comptia/projects user02 will accomplish the task of creating a new user \nnamed user02 with a different home directory. The useradd comma nd is a tool for creating new user \naccounts on Linux systems. The -d option specifies the home dir ectory for the new user, which is the \n\ndirectory where the users persona l files and settings are store d. The /comptia/projects is the path of \nthe home directory for the new user, which is different from th e default location of /home/user02. \nThe user02 is the name of the new user. The command useradd -d /comptia/projects user02 will \ncreate a new user named user02 with a home directory under /com ptia/projects. This is the correct \ncommand to use to accomplish the task. The other options are in correct because they either do not \nspecify the home directory for the new user (useradd -m /compti a/projects user02 or useradd -s \n/comptia/projects user02) or do not use the correct option for the home directory (useradd -b \n/comptia/projects user02 instead of useradd -d /comptia/project s user02). Reference: CompTIA \nLinux+ (XK0-005) Certification Stud y Guide, Chapter 13: Managing Users and Groups, page 403.",
    "type": "mcq"
  },
  {
    "question": "One leg of an LVM-mirrored volume failed due to the underlying physical volume, and a systems administrator is troubleshooting the issue. The following output has been provided: Given this scenario, which of the following should the administ rator do to recover this volume?",
    "choices": [
      "Reboot the server. The volume will automatically go back to linear mode.",
      "Replace the failed drive and reconfigure the mirror.",
      "Reboot the server. The volume will revert to stripe mode.",
      "Recreate the logical volume."
    ],
    "answer": "B",
    "explanation": "The administrator should replace the failed drive and reconfigu re the mirror to recover the volume. \nThe LVM (Logical Volume Manager) is a tool for managing disk sp ace on Linux systems. The LVM \nallows the administrator to create logical volumes that span ac ross multiple physical volumes, such \nas hard disks or partitions. The LVM also supports different ty pes of logical volumes, such as linear, \nstriped, or mirrored. A mirrored logical volume is a type of lo gical volume that creates a copy of the \ndata on another physical volume , providing redundancy and fault tolerance. The output shows that \nthe logical volume is mirrored and that one leg of the mirror has failed due to the underlying physical \n\nvolume. This means that one of the physical volumes that contai ns the data of the logical volume is \ndamaged or missing. This can cause data loss and performance de gradation. The administrator \nshould replace the failed drive and reconfigure the mirror to r ecover the volume. The administrator \nshould identify the failed physical volume by using commands su ch as pvdisplay, vgdisplay, \nor lvdisplay. The administrator should then remove the failed physical volume from the volume \ngroup by using the vgreduce command. The administrator should t hen install a new drive and create \na new physical volume by using the pvcreate command. The administrator should then add the new \nphysical volume to the volume group by using the vgextend comma nd. The administrator should \nthen reconfigure the mirror by using the lvconvert command. The administrator should replace the \nfailed drive and reconfigure the mirror to recover the volume. This is the correct answer to the \nquestion. The other options are incorrect because they either d o not recover the volume (reboot the \nserver. The volume will automatically go back to linear mode or reboot the server. The volume will \nrevert to stripe mode) or do not preserve the data of the volum e (recreate the logical \nvolume). Reference: CompTIA Linux+ (XK0-005) Certification Stud y Guide, Chapter 10: Managing \nStorage, pages 333-334.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator created a new Docker image called test. After building the image, the administrator forgot to version the release. Which of the following will allow the administrator to assign the v1 version to the image?",
    "choices": [
      "docker image save test test:v1",
      "docker image build test:vl",
      "docker image tag test test:vl",
      "docker image version test:v1"
    ],
    "answer": "C",
    "explanation": "The docker image tag test test:v1 command can be used to assign the v1 version to the image called \ntest. This command creates a new tag for the existing image, wi thout changing the original image. \nThe docker image save test test:v1 command would save the image to a file, not assign a version. The \ndocker image build test:vl command is invalid, as vl is not a v alid version number. The docker image \nversion test:v1 command does not exist. Reference: [CompTIA Linux+ (XK0-005) Certification Study Guide], Chapter 16: Virtualization and Cloud Technologies, page 500.",
    "type": "mcq"
  },
  {
    "question": "A Linux systems administrator receives a notification that one of the servers filesystems is full. Which of the following commands would help the administrator to identify this filesystem?",
    "choices": [
      "lsblk",
      "fdisk",
      "df -h",
      "du -ah"
    ],
    "answer": "C",
    "explanation": "The df -h command can be used to identify the filesystem that is full. This command displays the disk \nusage of each mounted filesystem in a human-readable format, sh owing the total size, used space, \navailable space, and percentage of each filesystem. The lsblk command displays information about \nblock devices, not filesystems. The fdisk command can be used t o manipulate partition tables, not \ncheck disk usage. The du -ah command displays the disk usage of each file and directory in a humanreadable \nformat, not the filesystems. Reference: [CompTIA Linux+ (XK0-00 5) Certification Study \nGuide], Chapter 14: Managing Disk Storage, page 454.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator is notified that the mysqld process sto pped unexpectedly. The systems administrator issues the following command: sudo grep \"i -r \u02dcout of memory /var/log The output of the command shows the following: kernel: Out of memory: Kill process 9112 (mysqld) score 511 or sacrifice child. Which of the following commands should the systems administrato r execute NEXT to troubleshoot this issue? (Select two).",
    "choices": [
      "free -h",
      "nc -v 127.0.0.1 3306",
      "renice -15 $( pidof mysql )",
      "lsblk E. killall -15 F. vmstat -a 1 4"
    ],
    "answer": "A",
    "explanation": ", F \n\n \nExplanation: The free -h command can be used to check the amount of free and used memory in the system in a \nhuman-readable format. This can help to troubleshoot the issue of mysqld being killed due to out of \nmemory. The vmstat -a 1 4 command can be used to monitor the sy stems virtual memory statistics, \nsuch as swap usage, paging activity, and memory faults, every o ne second for four times. This can \nhelp to identify any memory pressure or performance issues that may cause out of memory errors. \nThe nc -v 127.0.0.1 3306 command would attempt to connect to the MySQL server on port 3306 and \ndisplay any diagnostic messages, but this would not help to tro ubleshoot the memory issue. The \nrenice -15 $( pidof mysql ) command would change the priority of the mysql process to -15, but this would not prevent it from being killed due to out of memory. Th e lsblk command would display \ninformation about block devices, not memory usage. The killall -15 command would send a SIGTERM \nsignal to all processes with a matching name, but this would no t help to troubleshoot the memory \nissue. Reference: [CompTIA Linux+ (XK0-005) Certification Study Guide], Chapter 15: Managing \nMemory and Process Execution, pages 468-469.",
    "type": "mcq"
  },
  {
    "question": "Users have reported that the interactive sessions were lost on a Linux server. A Linux administrator verifies the server was switched to rescue.target mode for main tenance. Which of the following commands will restore the server to its usual target?",
    "choices": [
      "telinit 0",
      "systemct1 reboot",
      "systemct1 get-default",
      "systemct1 emergency"
    ],
    "answer": "B",
    "explanation": "The systemct1 reboot command will restore the server to its usu al target by rebooting it. This will \ncause the server to load the default target specified in /etc/systemd/system.conf or \n/etc/systemd/system/default.target files. The telinit 0 command would shut down the server, not \nrestore it to its usual target. The systemct1 get-default comma nd would display the default target, \nnot change it. The systemct1 emergency command would switch the server to emergency.target \nmode, which is even more restrictive than rescue.target mode. Reference: [CompTIA Linux+ (XK0- \n005) Certification Study Guide], Chapter 17: System Maintenance and Operation, page 516.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator was tasked with assigning the temporary IP address/netmask 192.168.168.1.255.255.255 to the interface eth0 of a Linux serv er. When adding the address, the following error appears: # ip address add 192.168.168.1 dev eth0 Error: any valid prefix is expected rather than \"192.168.168.1\". Based on the command and its output above, which of the followi ng is the cause of the issue?",
    "choices": [
      "The CIDR value should be instead.",
      "There is no route to 192.168.168.1.",
      "The interface eth0 does not exist.",
      "The IP address 192.168.168.1 is already in use."
    ],
    "answer": "A",
    "explanation": "The cause of the issue is that the CIDR value is invalid for an IPv4 address. The CIDR value \nrepresents the number of bits in the network prefix of an IP ad dress, and it can range from 0 to 32 for \nIPv4 addresses. A CIDR value of would imply a network prefix of more than 32 bits, which is \nimpossible for an IPv4 address . To assign a temporary IP addres s/netmask of \n192.168.168.1.255.255.255 to eth0, the CIDR value should be ins tead, which means a \nnetwork prefix of 32 bits and a host prefix of 0 bits. There is no route to 192.168.168.1 is not the \ncause of the issue, as the ip address add command does not chec k the routing table. The interface \neth0 does not exist is not the cause of the issue, as the ip address add command would display a \ndifferent error message if the in terface does not exist. The IP address 192.168.168.1 is already in use \nis not the cause of the issue, as the ip address add command wo uld display a different error message \nif the IP address is already i n use. Reference: [CompTIA Linux+ (XK0-005) Certification Study Guide], \nChapter 13: Networking Fundamentals, page 435.",
    "type": "mcq"
  },
  {
    "question": "A Linux user reported the following error after trying to conne ct to the system remotely: ssh: connect to host 10.0.1.10 port 22: Resource temporarily un available The Linux systems administrator executed the following commands in the Linux system while trying to diagnose this issue: Which of the following commands will resolve this issue?",
    "choices": [
      "firewall-cmd --zone=public --permanent --add-service=22",
      "systemct1 enable firewalld; systemct1 restart firewalld",
      "firewall-cmd --zone=public --permanent --add-service=ssh",
      "firewall-cmd --zone=public --permanent --add-port=22/udp"
    ],
    "answer": "C",
    "explanation": "The firewall-cmd --zone=public --permanent --add-service=ssh co mmand will resolve the issue by \nallowing SSH connections on port 22 in the public zone of the f irewalld service. This command will \nadd the ssh service to the permanent configuration of the publi c zone, which means it will persist \nafter a reboot or a reload of the firewalld service. The firewa ll-cmd --zone=public --permanent --addservice= \n\n22 command is invalid, as 22 is not a valid service name. The s ystemct1 enable firewalld; \nsystemct1 restart firewalld command will enable and restart the firewalld service, but it will not \nchange the firewall rules. The firewall-cmd --zone=public --per manent --add-port=22/udp command \nwill allow UDP traffic on port 22 in the public zone, but SSH u ses TCP, not UDP. Reference: CompTIA \nLinux+ (XK0-005) Certification Stud y Guide, Chapter 18: Securin g Linux Systems, page 543.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator has been tasked with installing the most recent versions of packages on a RPMbased OS. Which of the following commands will accomplish this task?",
    "choices": [
      "apt-get upgrade",
      "rpm -a",
      "yum updateinfo",
      "dnf update E. yum check-update"
    ],
    "answer": "D",
    "explanation": "The dnf update command will accomplish the task of installing t he most recent versions of packages \non a RPM-based OS. This command will check for available update s from the enabled repositories \nand apply them to the system. The apt-get upgrade command is used to install updates on a Debianbased OS, not a RPM-based OS. The rpm -a command is invalid, as -a is not a valid option for rpm. \nThe yum updateinfo command will display information about avail able updates, but it will not install \nthem. The yum check-update command will check for available updates, but it will not install \nthem. Reference: CompTIA Linux+ (XK0-005) Certification Study Guide, Chapter 19: Managing \nPackages and Software, page 559.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator needs to expand a volume group using a new disk. Which of the following options presents the correct sequence of commands to accomplish the task?",
    "choices": [
      "partprobe vgcreate lvextend",
      "lvcreate fdisk partprobe",
      "fdisk partprobe mkfs",
      "fdisk pvcreate vgextend"
    ],
    "answer": "D",
    "explanation": "The correct sequence of commands to expand a volume group using a new disk is fdisk, pvcreate, \nvgextend. The fdisk command can be used to create a partition on the new disk with the type 8e (Linux LVM). The pvcreate command can be used to initialize the partition as a physical volume for \nLVM. The vgextend command can be used to add the physical volum e to an existing volume group. \nThe partprobe command can be used to inform the kernel about pa rtition table changes, but it is not \nnecessary in this case. The vgcreate command can be used to cre ate a new volume group, not \nexpand an existing one. The lvextend command can be used to ext end a logical volume, not a volume \ngroup. The lvcreate command can be used to create a new logical volume, not expand a volume \ngroup. The mkfs command can be used to create a filesystem on a partition or a logical volume, not \nexpand a volume group. Reference: CompTIA Linux+ (XK0-005) Cert ification Study Guide, Chapter 14: \nManaging Disk Storage, pages 462-463.",
    "type": "mcq"
  },
  {
    "question": "Which of the following directories is the mount point in a UEFI system?",
    "choices": [
      "/sys/efi",
      "/boot/efi",
      "/efi",
      "/etc/efi"
    ],
    "answer": "B",
    "explanation": "The /boot/efi directory is the mount point in a UEFI system. Th is directory contains the EFI System \nPartition (ESP), which stores boot loaders and other files requ ired by UEFI firmware. The /sys/efi \n\ndirectory does not exist by default in Linux systems. The /efi directory does not exist by default in \nLinux systems. The /etc/efi directory does not exist by default in Linux systems. Reference: CompTIA \nLinux+ (XK0-005) Certification Stud y Guide, Chapter 11: Managing the Linux Boot Process, page 398.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator copied a Git repository locally, created a feature branch, and committed some changes to the feature branch. Which of the following Git actio ns should the Linux administrator use to publish the changes to the main branch of the remote reposit ory?",
    "choices": [
      "rebase",
      "tag",
      "commit",
      "push"
    ],
    "answer": "D",
    "explanation": "The push action is used to publish the changes made in a local branch to a remote branch of a Git \nrepository. This action will update the remote branch with the commits made in the local branch and \nsynchronize the two branches. The rebase action is used to reapply commits from one branch onto another branch, creating a linear history of commits. This acti on does not publish any changes to a \nremote repository. The tag action is used to create an annotate d reference to a specific commit in a \nGit repository. This action does not publish any changes to a r emote repository. The commit action is \nused to record changes made in the local repository and create a new snapshot of the project state. This action does not publish any changes to a remote repository . Reference: CompTIA Linux+ (XK0- \n005) Certification Study Guide, Chapter 20: Writing and Executi ng Bash Shell Scripts, page 579.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator needs to obtain a list of all volumes tha t are part of a volume group. Which of the following commands should the administrator use to accompli sh this task?",
    "choices": [
      "vgs",
      "lvs",
      "fdisk -1",
      "pvs"
    ],
    "answer": "B",
    "explanation": "The lvs command can be used to obtain a list of all volumes tha t are part of a volume group. This \ncommand will display information such as the name, size, attrib utes, and volume group of each \nlogical volume in the system. The vgs command can be used to obtain a list of all volume groups in \nthe system, not the volumes. The fdisk -1 command is invalid, a s -1 is not a valid option for fdisk. The \npvs command can be used to obtain a list of all physical volumes in the system, not the \nvolumes. Reference: CompTIA Linux+ (XK0-005) Certification Stud y Guide, Chapter 14: Managing \nDisk Storage, page 461.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator is adding a new configuration file to a G it repository. Which of the following describes the correct order of Git commands to accomplish the t ask successfully?",
    "choices": [
      "pull -> push -> add -> checkout",
      "pull -> add -> commit -> push",
      "checkout -> push -> add -> pull",
      "pull -> add -> push -> commit"
    ],
    "answer": "B",
    "explanation": "The correct order of Git commands to add a new configuration fi le to a Git repository is pull -> add -> \ncommit -> push. The pull command will fetch and merge the chang es from the remote repository to \nthe local repository, ensuring that the local repository is up to date. The add command will stage the \nnew configuration file for the next commit, marking it as a new file to be tracked by Git. The commit \ncommand will create a new snapshot of the project state with th e new configuration file and a \ndescriptive message. The push command will publish the commit t o the remote repository, updating \nthe remote branch with the new configuration file. The pull -> push -> add -> checkout order is \nincorrect, as it will not create a commit for the new configura tion file, and it will switch to a different \nbranch without pushing the changes. The checkout -> push -> add -> pull order is incorrect, as it will \nswitch to a different branch before adding the new configuratio n file, and it will overwrite the local \nchanges with the remote changes without creating a commit. The pull -> add -> push -> commit \norder is incorrect, as it will not create a commit before pushi ng the changes, and it will create a \ncommit that is not synchronized with the remote branch. Referen ce: CompTIA Linux+ (XK0-005) \nCertification Study Guide, Chapt er 20: Writing and Executing Ba sh Shell Scripts, page 579.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator is tasked with mounting a USB drive on a system. The USB drive has a single partition, and it has been mapped by the system to the device / dev/sdb. Which of the following commands will mount the USB to /media/usb?",
    "choices": [
      "mount /dev/sdb1 /media/usb",
      "mount /dev/sdb0 /media/usb",
      "mount /dev/sdb /media/usb",
      "mount -t usb /dev/sdb1 /media/usb"
    ],
    "answer": "A",
    "explanation": "The mount /dev/sdb1 /media/usb command will mount the USB drive to /media/usb. This command \nwill attach the filesystem on the first partition of the USB dr ive (/dev/sdb1) to the mount point \n/media/usb, making it accessible to the system. The mount /dev/ sdb0 /media/usb command is \ninvalid, as there is no such device as /dev/sdb0. The mount /de v/sdb /media/usb command is \nincorrect, as it will try to mount the entire USB drive instead of its partition, which may cause errors \nor data loss. The mount -t usb /dev/sdb1 /media/usb command is incorrect, as usb is not a valid \nfilesystem type for mount. Reference: CompTIA Linux+ (XK0-005) Certification Study Guide, Chapter \n14: Managing Disk Storage, page 455.",
    "type": "mcq"
  },
  {
    "question": "A developer reported an incident involving the application configuration file /etc/httpd/conf/httpd.conf that is missing from the server. Whi ch of the following identifies the RPM package that installed the configuration file?",
    "choices": [
      "rpm -qf /etc/httpd/conf/httpd.conf",
      "rpm -ql /etc/httpd/conf/httpd.conf",
      "rpm \"query /etc/httpd/conf/httpd.conf",
      "rpm -q /etc/httpd/conf/httpd.conf"
    ],
    "answer": "A",
    "explanation": "The rpm -qf /etc/httpd/conf/httpd.conf command will identify th e RPM package that installed the \nconfiguration file. This command will query the database of ins talled packages and display the name \n\nof the package that owns the spec ified file. The rpm -ql /etc/h ttpd/conf/httpd.conf command is \ninvalid, as -ql is not a valid option for rpm. The rpm --query /etc/httpd/conf/httpd.conf command is \nincorrect, as --query requires a package name, not a file name. The rpm -q \n/etc/httpd/conf/httpd.conf command is incorrect, as -q requires a package name, not a file \nname. Reference: CompTIA Linux+ (XK0-005) Certification Study G uide, Chapter 19: Managing \nPackages and Software, page 560.",
    "type": "mcq"
  },
  {
    "question": "Joe, a user, is unable to log in to the Linux system Given the following output: Which of the following command would resolve the issue?",
    "choices": [
      "usermod -s /bin/bash joe",
      "pam_tally2 -u joe -r",
      "passwd -u joe",
      "chage -E 90 joe"
    ],
    "answer": "B",
    "explanation": "Based on the output of the image sent by the user, Joe is unabl e to log in to the Linux system \nbecause his account has been locked due to too many failed logi n attempts. The pam_tally2 -u joe -r \ncommand will resolve this issue by resetting Joes failed login counter to zero and unlocking his \naccount. This command uses the pam_tally2 module to manage user account locking based on login \nfailures. The usermod -s /bin/bash joe command will change Joes login shell to /bin/bash, but this \nwill not unlock his account. The passwd -u joe command will unl ock Joes password if it has been \nlocked by passwd -l joe, but this will not reset his failed log in counter or unlock his account if it has \nbeen locked by pam_tally2. The chage -E 90 joe command will set Joes account expiration date to 90 \ndays from today, but this will not unlock his account or reset his failed login \ncounter. Reference: CompTIA Linux+ (XK0-005) Certification Stud y Guide, Chapter 18: Securing Linux \nSystems, page 537.",
    "type": "mcq"
  },
  {
    "question": "A cloud engineer needs to launch a container named web-01 in ba ckground mode. Which of the following commands will accomplish this task''",
    "choices": [
      "docker builder -f \"name web-01 httpd",
      "docker load --name web-01 httpd",
      "docker ps -a --name web-01 httpd",
      "docker run -d --name web-01 httpd"
    ],
    "answer": "D",
    "explanation": "The docker run -d --name web-01 h ttpd command will launch a con tainer named web-01 in \nbackground mode. This command will create and start a new conta iner from the httpd image, assign \nit the name web-01, and run it in detached mode (-d), which mea ns the container will run in the \nbackground without attaching to the current terminal. The docke r builder -f --name web-01 httpd \ncommand is invalid, as builder is not a valid docker command, a nd -f and --name are not valid \noptions for docker build. The docker load --name web-01 httpd c ommand is invalid, as load does not \naccept a --name option, and httpd is not a valid file name for load. The docker ps -a --name web-01 \nhttpd command is invalid, as ps does not accept a --name option , and httpd is not a valid filter for \nps. Reference: CompTIA Linux+ (XK0-005) Certification Study Gui de, Chapter 16: Virtualization and \nCloud Technologies, page 499.",
    "type": "mcq"
  },
  {
    "question": "Which of the following tools is BEST suited to orchestrate a la rge number of containers across many different servers?",
    "choices": [
      "Kubernetes",
      "Ansible",
      "Podman",
      "Terraform"
    ],
    "answer": "A",
    "explanation": "The tool that is best suited to orchestrate a large number of c ontainers across many different servers \nis Kubernetes. Kubernetes is an o pen-source platform for managi ng containerized applications and \n\nservices. Kubernetes allows the administrator to deploy, scale, and update containers across a cluster \nof servers, as well as to automate the configuration and coordination of the containers. Kubernetes \nalso provides features such as service discovery, load balancin g, storage management, security, \nmonitoring, and logging. Kubernetes can handle complex and dyna mic workloads and ensure high \navailability and performance of the containers. Kubernetes is t he tool that is best suited to \norchestrate a large number of containers across many different servers. This is the correct answer to \nthe question. The other options are incorrect because they either do not orchestrate containers (Ansible or Terraform) or do not operate across many different servers \n(Podman). Reference: CompTIA Li nux+ (XK0-005) Certification Study Guide, Chapter 19: Managing \nCloud and Virtualization Technologies, page 573.",
    "type": "mcq"
  },
  {
    "question": "Which of the following enables administrators to configure and enforce MFA on a Linux system?",
    "choices": [
      "Kerberos",
      "SELinux",
      "PAM",
      "PKI"
    ],
    "answer": "C",
    "explanation": "The mechanism that enables administrators to configure and enfo rce MFA on a Linux system is PAM. \nPAM stands for Pluggable Authentication Modules, which is a fra mework for managing \nauthentication and authorization on Linux systems. PAM allows the administrator to define the rules and policies for accessing various system resources and service s, such as login, sudo, ssh, or cron. \nPAM also supports different types of authentication methods, su ch as passwords, tokens, biometrics, \nor smart cards. PAM can be used to implement MFA, which stands for Multi-Factor Authentication, \nwhich is a security technique that requires the user to provide more than one piece of evidence to \nprove their identity. MFA can enhance the security of the syste m and prevent unauthorized access. \nPAM enables administrators to configure and enforce MFA on a Li nux system. This is the correct \nanswer to the question. The other options are incorrect because they either do not manage \nauthentication and authorization on Linux systems (Kerberos or PKI) or do not support MFA \n(SELinux). Reference: CompTIA Li nux+ (XK0-005) Certification St udy Guide, Chapter 17: \nImplementing Basic Security, page 517.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator is tasked with creating an Ansible play book to automate the installation of patches on several Linux systems. In which of the following lan guages should the playbook be written?",
    "choices": [
      "SQL",
      "YAML",
      "HTML",
      "JSON"
    ],
    "answer": "B",
    "explanation": "The language that the playbook should be written in is YAML. YA ML stands for YAML Aint Markup \nLanguage, which is a human-readable data serialization language . YAML is commonly used for \nconfiguration files and data exchange. YAML uses indentation, c olons, dashes, and brackets to \nrepresent the structure and values of the data. YAML also supports comments, variables, \nexpressions, and functions. Ansible is an open-source tool for automating tasks and managing \nconfiguration on Linux systems. Ansible uses YAML to write play books, which are files that define the \ndesired state and actions for the systems. Playbooks can be use d to automate the installation of \npatches on several Linux systems by specifying the hosts, tasks, modules, and parameters. The \nlanguage that the playbook should be written in is YAML. This i s the correct answer to the question. \nThe other options are incorrect because they are not the langua ges that Ansible uses for playbooks \n(SQL, HTML, or JSON). Reference: CompTIA Linux+ (XK0-005) Certi fication Study Guide, Chapter 18: \nSecuring Linux Systems, page 549.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator is providing a new Nginx image from the r egistry to local cache. Which of the following commands would allow this to happen?",
    "choices": [
      "docker pull nginx",
      "docker attach nginx",
      "docker commit nginx",
      "docker import nginx"
    ],
    "answer": "A",
    "explanation": "The command that would allow this to happen is docker pull ngin x. Docker is a software platform \nthat allows the administrator to create, run, and manage containers on Linux systems. Containers are \nisolated and lightweight environments that can run applications and services without affecting the \nhost system. Docker uses images to create containers, which are files that contain the code, libraries, \ndependencies, and configuration of the applications and service s. Docker uses a registry to store and \ndistribute images, which is a service that hosts and serves images. Docker Hub is the default public registry that provides a large number of official and community images. Nginx is a popular web \nserver and reverse proxy that can run as a container. The comma nd docker pull nginx will download \nthe latest version of the Nginx image from the Docker Hub regis try to the local cache, which is the \nstorage location for the images on the host system. This will a llow the administrator to provide a new \nNginx image from the registry to the local cache. This is the c orrect command to use to accomplish \nthe task. The other options are incorrect because they either d o not download an image from the \nregistry (docker attach nginx or docker commit nginx) or do not exist (docker import \nnginx). Reference: CompTIA Linux+ (XK0-005) Certification Study Guide, Chapter 19: Managing Cloud and Virtualization Technologies, page 571.",
    "type": "mcq"
  },
  {
    "question": "In which of the following filesy stems are system logs commonly stored?",
    "choices": [
      "/var",
      "/tmp",
      "/etc",
      "/opt"
    ],
    "answer": "A",
    "explanation": "The filesystem that system logs are commonly stored in is /var. The /var filesystem is a directory that \ncontains variable data files on Linux systems. Variable data files are files that are expected to grow in \nsize over time, such as logs, caches, spools, and temporary fil es. The /var filesyst em is separate from \nthe / filesystem, which contains t he essential system files, to prevent the / filesystem from being \nfilled up by the variable data files. The system logs are files that record the events and activities of \nthe system and its components, such as the kernel, the services , the applications, and the users. The \nsystem logs are useful for monitoring, troubleshooting, and aud iting the system. The system logs are \ncommonly stored in the /var/log directory, which is a subdirect ory of the /var filesystem. The \n/var/log directory contains vari ous log files, such as syslog, messages, dmesg, auth.log, and kern.log. \n\nThe filesystem that system logs are commonly stored in is /var. This is the correct answer to the \nquestion. The other options are incorrect because they are not the filesystems that system logs are \ncommonly stored in (/tmp, /etc, or /opt). Reference: CompTIA Linux+ (XK0-005) Certification Study \nGuide, Chapter 16: Managing Logging and Monitoring, page 487.",
    "type": "mcq"
  },
  {
    "question": "Which of the following data structures is written in JSON? A) B) C) D)",
    "choices": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": "C",
    "explanation": "Option C is the only data structure that is written in JSON for mat. JSON stands for JavaScript Object \nNotation, and it is a lightweight and human-readable data inter change format. JSON uses curly \nbraces to enclose objects, which consist of key-value pairs sep arated by commas. JSON uses square \nbrackets to enclose arrays, which consist of values separated b y commas. JSON supports six data \ntypes: strings, numbers, boolea ns, null, objects, and arrays. Option C follows these rules and syntax \nof JSON, while the other options do not. Option A is written in XML format, which uses tags to \nenclose elements and attributes. O ption B is written in YAML format, which uses indentation and \ncolons to define key-value pairs. Option D is written in INI fo rmat, which uses sections and equal \nsigns to define key-value pairs. Reference: CompTIA Linux+ (XK0 -005) Certification Study Guide, \nChapter 21: Automating Tasks with Ansible, page 591.",
    "type": "mcq"
  },
  {
    "question": "A Linux engineer needs to download a ZIP file and wants to set the nice of value to -10 for this new process. Which of the following commands will help to accomplis h the task?",
    "choices": [
      "$ nice -v -10 wget https://foo.com/installation.zip",
      "$ renice -v -10 wget https://foo.com/installation.2ip",
      "$ renice -10 wget https://foo.com/installation.zip",
      "$ nice -10 wget https://foo.com/installation.zip"
    ],
    "answer": "D",
    "explanation": "The nice -10 wget https://foo.com/installation.zip command will help to accomplish the task of \ndownloading a ZIP file and settin g the nice value to -10 for th is new process. The nice command can \nbe used to run a program with a modified scheduling priority, w hich affects how much CPU time the \nprocess receives. The nice value ranges from -20 (highest prior ity) to 19 (lowest priority), and the \ndefault value is 0. The -10 option specifies the nice value to be used for the wget command, which \nwill download the ZIP file from the given URL. The nice -v -10 wget https://foo.com/installation.zip \n\ncommand is incorrect, as -v is not a valid option for nice. The renice -v -10 wget \nhttps://foo.com/installation.zip command is incorrect, as renic e is used to change the priority of an \nexisting process, not a new one. The renice -10 wget https://fo o.com/installation.zip command is \nincorrect for the same reason as above. Reference: CompTIA Linu x+ (XK0-005) Certification Study \nGuide, Chapter 15: Managing Memory and Process Execution, page 469.",
    "type": "mcq"
  },
  {
    "question": "A Linux systems administrator needs to copy files and directori es from Server A to Server B. Which of the following commands can be us ed for this purpose? (Select TW O)",
    "choices": [
      "rsyslog",
      "cp",
      "rsync",
      "reposync E. scp F. ssh"
    ],
    "answer": "C",
    "explanation": ", E \n \nExplanation: The rsync and scp commands can be used to copy files and direct ories from Server A to Server B. \nBoth commands can use SSH as a secure protocol to transfer data over the network. The rsync \ncommand can synchronize files and directories between two locat ions, using various options to \ncontrol the copying behavior. The scp command can copy files an d directories between two hosts, \nusing similar syntax as cp. The rsyslog command is used to mana ge system logging, not file copying. \nThe cp command is used to copy files and directories within a s ingle host, not between two hosts. \nThe reposync command is used to synchronize a remote yum reposi tory to a local directory, not copy \nfiles and directories between two hosts. Reference: CompTIA Lin ux+ (XK0-005) Certification Study \nGuide, Chapter 13: Networking Fundamentals, pages 440-441.",
    "type": "mcq"
  },
  {
    "question": "After installing a new version of a package, a systems administ rator notices a new version of the corresponding, service file was In stalled In order to use the n ew version of the, service file, which of the following commands must be Issued FIRST?",
    "choices": [
      "systemct1 status",
      "systemct1 stop",
      "systemc t1 reinstall",
      "s ystemct1 daemon-reload"
    ],
    "answer": "D",
    "explanation": "After installing a new version of a package that includes a new version of the corresponding service \nfile, the systemct1 daemon-reload command must be issued first in order to use the new version of \nthe service file. This command will reload the systemd manager configuration and read all unit files \nthat have changed on disk. This will ensure that systemd recogn izes the new service file and applies \nits settings correctly. The systemct1 status command will display information about a service unit, but it will not reload the configuration. The systemct1 stop co mmand will stop a service unit, but it \nwill not reload the configurati on. The systemct1 reinstall comm and does not \nexist. Reference: CompTIA Linux+ (XK0-005) Certification Study Guide, Chapter 17: System \nMaintenance and Operation, page 518.",
    "type": "mcq"
  },
  {
    "question": "An administrator recently updated the BIND software package and would like to review the default configuration that shipped with this version. Which of the foll owing files should the administrator review?",
    "choices": [
      "/etc/nam ed.conf.rpmne w",
      "/etc/ named.conf.rpmsave",
      "/etc/ name d.conf",
      "/etc/bind /bind.conf"
    ],
    "answer": "A",
    "explanation": "After installing a new version of a package that includes a con figuration file that already exists on the \nsystem, such as /etc/httpd/conf/httpd.conf, RPM will create a n ew file with the .rpmnew extension \ninstead of overwriting the existing file. This allows the administrator to review the default configuration that shipped with this version and compare it wit h the current configuration before \ndeciding whether to merge or replace the files. The /etc/named. conf.rpmsave file is created by RPM \nwhen a package is uninstalled and it contains a configuration file that was modified by the administrator. This allows the administrator to restore the con figuration file if needed. The \n/etc/named.conf file is the main configuration file for the BIND name server, not the httpd web \n\nserver. The /etc/bind/bind.conf f ile does not exist by default in Linux systems. Reference: CompTIA \nLinux+ (XK0-005) Certification Stud y Guide, Chapter 19: Managing Packages and Software, page 561.",
    "type": "mcq"
  },
  {
    "question": "In order to copy data from another VLAN, a systems administrato r wants to temporarily assign IP address 10.0.6 5 to the newly added network interface enp1s0f1. Which of the following commands should the administrator run to achieve the goal?",
    "choices": [
      "ip addr add 10.0.6.5 dev enpls0f1",
      "echo \"IPV4_ADDRESS=10.0.6.5\" > /etc/sysconfig/network-script s/ifcfg-enplsOfl",
      "ifconfig 10.0.6.5 enpsIs0f1",
      "nmcli conn add lpv4.address-10.0.6.5 ifname enpls0f1"
    ],
    "answer": "A",
    "explanation": "The command ip addr add 10.0.6.5 dev enp1s0f1 will achieve the goal of temporarily assigning IP \naddress 10.0.6.5 to the newly added network interface enp1s0f1. The ip command is a tool for \nmanaging network interfaces and routing on Linux systems. The a ddr option specifies the address \nmanipulation mode. The add option adds a new address to an inte rface. The 10.0.6.5 is the IP \naddress and the subnet mask in CIDR notation. The dev option sp ecifies the device name. \nThe enp1s0f1 is the name of the network interface. The command ip addr add 10.0.6.5 dev \nenp1s0f1 will add the IP address 10.0.6.5 to the network interf ace enp1s0f1, which will allow the \nadministrator to copy data from another VLAN. This is the corre ct command to use to achieve the \ngoal. The other options are incorrect because they either do no t add a new address to an interface \n(echo \"IPV4_ADDRESS=10.0.6.5\" > /etc/sysconfig/network-scripts/ ifcfg-enp1s0f1 or ifconfig \n10.0.6.5 enp1s0f1) or do not use the correct syntax for the com mand (nmcli conn add \nipv4.address-10.0.6.5 ifname enp1s0f1 instead of nmcli conn add type ethernet ipv4.address \n10.0.6.5 ifname enp1s0f1). Reference: CompTIA Linux+ (XK0-005) Certification Study Guide, \nChapter 12: Managing Network Connections, page 385.",
    "type": "mcq"
  },
  {
    "question": "The security team has identified a web service that is running with elevated privileges A Linux administrator is working to change the systemd service file to meet security compliance standards. Given the following output: Which of the following remediation steps will prevent the web s ervice from running as a privileged user?",
    "choices": [
      "Removing the ExecStarWusr/sbin/webserver -D SOPTIONS from th e service file",
      "Updating the Environment File line in the [Service] section to/home/webservice/config",
      "Adding the User-webservice to the [Service] section of the s ervice file",
      "Changing the:nulti-user.target in the [Install] section to b asic.target"
    ],
    "answer": "C",
    "explanation": "The remediation step that will prevent the web service from run ning as a privileged user is adding \nthe User=webservice to the [Service] section of the service file. The service file is a configuration file \nthat defines the properties and behavior of a systemd service. The systemd is a system and service \nmanager that controls the startup and operation of Linux system s. The service file contains various \nsections and options that specify how the service should be sta rted, stopped, and managed. The \n[Service] section defines how t he service should be executed and what commands should be run. \nThe User option specifies the us er name or ID that the service should run as. The webservice is the \nname of the user that the administrator wants to run the web se rvice as. The administrator should \nadd the User=webservice to the [Service] section of the service file, which will prevent the web \n\nservice from running as a privileged user, such as root, and im prove the security of the system. This is \nthe correct remediation step to use to prevent the web service from running as a privileged user. The \nother options are incorrect because they either do not change t he user that the service runs as \n(removing the ExecStart=/usr/sbin/webserver -D OPTIONS from the service file or updating the \nEnvironmentFile line in the [Service] section to /home/webservice/config) or do not affect the user \nthat the service runs as (changing the multi-user.target in the [Install] section to \nbasic.target). Reference: Comp TIA Linux+ (XK0-005) Certificatio n Study Guide, Chapter 15: Managing \nSystem Services, page 458.",
    "type": "mcq"
  },
  {
    "question": "A Linux engineer receives reports that files created within a c ertain group are being modified by users who are not group members. The engineer wants to reconfig ure the server so that only file owners and group members can modify new files by default. Which of the following commands would accomplish this task?",
    "choices": [
      "chmod 775",
      "umask. 002",
      "chactr -Rv",
      "chown -cf"
    ],
    "answer": "B",
    "explanation": "The command umask 002 will accomplish the task of reconfiguring the server so that only file owners \nand group members can modify new files by default. The umask co mmand is a tool for setting the \ndefault permissions for new files and directories on Linux syst ems. The umask value is a four-digit \noctal number that represents the permissions that are subtracted from the default permissions. The \ndefault permissions for files are 666, which means read and wri te for owner, group, and others. The \ndefault permissions for directori es are 777, which means read, write, and execute for owner, group, \nand others. The umask value consists of four digits: the first digit is for special permissions, such as \nsetuid, setgid, and sticky bit; the second digit is for the own er permissions; the third digit is for the \ngroup permissions; and the fourth digit is for the others permi ssions. The umask value can be \ncalculated by subtracting the desired permissions from the defa ult permissions. For example, if the \ndesired permissions for files are 664, which means read and wri te for owner and group, and read for \nothers, then the umask value is 002, which is 666 - 664. The co mmand umask 002 will set the umask \nvalue to 002, which will ensure that only file owners and group members can modify new files by \n\ndefault. This is the correct command to use to accomplish the t ask. The other options are incorrect \nbecause they either do not set the default permissions for new files (chmod 775 or chown -cf) or do \nnot exist (chattr -Rv). Reference: CompTIA Linux+ (XK0-005) Cer tification Study Guide, Chapter 11: \nManaging File Permissions and Ownership, page 349.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator needs to connect securely to a remote ser ver in order to install application software. Which of the following commands would allow this conn ection?",
    "choices": [
      "scp \"ABC-key.pem\" root@10.0.0.1",
      "sftp rooteiO.0.0.1",
      "telnet 10.0.0.1 80",
      "ssh -i \"ABC-key.pem\" root@10.0.0.1 E. sftp \"ABC-key.pem\" root@10.0.0.1"
    ],
    "answer": "D",
    "explanation": "The command ssh -i \"ABC-key.pem\" root@10.0.0.1 would allow the administrator to connect \nsecurely to the remote server in order to install application s oftware. The ssh command is a tool for \nestablishing secure and encrypted connections between remote sy stems. The -i option specifies the \nidentity file that contains the private key for key-based authentication. The \"ABC-key.pem\" is the \nname of the identity file that contains the private key. The root@10.0.0.1 is the username and the IP \naddress of the remote server. The command ssh -i \"ABC-key.pem\" root@10.0.0.1 will connect to the \nremote server using the private key and allow the administrator to install application software. This is \nthe correct command to use to connect securely to the remote se rver. The other options are \nincorrect because they either do not use key-based authenticati on (sftp root@10.0.0.1 or telnet \n10.0.0.1 80) or do not use the correct syntax for the command (scp \"ABC-key.pem\" root@10.0.0.1 instead of scp -i \"ABC-key.pem\" root@10.0.0.1 or sftp \"ABC-key.pem\" \nroot@10.0.0.1 instead of sftp - i \"ABC-key.pem\" root@10.0.0.1). Reference: CompTIA Linux+ (XK0- \n005) Certification Study Guide, Chapter 17: Implementing Basic Security, page 513.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator rebooted a server. Users then reported so me of their files were missing. After doing some troubleshooting, the administrator found one of the filesystems was missing. The filesystem was not listed in /etc/f stab and might have been mounted manually by someone prior to reboot. Which of the following would prevent this issue from reoccurring in the future?",
    "choices": [
      "Sync the mount units.",
      "Mount the filesystem manually.",
      "Create a mount unit and enable it to be started at boot.",
      "Remount all the missing filesystems"
    ],
    "answer": "C",
    "explanation": "The best way to prevent this issue from reoccurring in the futu re is to create a mount unit and enable \nit to be started at boot. A mount unit is a systemd unit that d efines how and where a filesystem \nshould be mounted. By creating a mount unit for the missing filesystem and enabling it with systemct1 enable, the administrator can ensure that the filesys tem will be automatically mounted at \nboot time, regardless of whether i t is listed in /etc/fstab or not. Syncing the mount units will not \nprevent the issue, as it will only synchronize the state of exi sting mount units with /etc/fstab, not \ncreate new ones. Mounting the file system manually will not prev ent the issue, as it will only mount \nthe filesystem temporarily, not permanently. Remounting all the missing filesystems will not prevent \nthe issue, as it will only mount the filesystems until the next reboot, not after. Reference: CompTIA \nLinux+ (XK0-005) Certification Stud y Guide, Chapter 14: Managing Disk Storage, page 457.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator is encountering performance issues. The administrator runs 3 commands with the following output The Linux server has the following system properties CPU: 4 vCPU Memory: 50GB Which of the following accurately describes this situation?",
    "choices": [
      "The system is under CPU pressure and will require additional vCPUs",
      "The system has been running for over a year and requires a r eboot.",
      "Too many users are currently logged in to the system",
      "The system requires more memory"
    ],
    "answer": "A",
    "explanation": "Based on the output of the image sent by the user, the system i s under CPU pressure and will require \nadditional vCPUs. The output shows that there are four processe s running upload.sh scripts that are \nconsuming a high percentage of CPU time (99.7%, 99.6%, 99.5%, and 99.4%). The output also shows that the system has only 4 vCPUs, which means that each process is using almost one entire vCPU. \nThis indicates that the system is struggling to handle the CPU load and may experience performance \nissues or slowdowns. Adding more vCPUs to the system would help to alleviate the CPU pressure and \nimprove the system performance. The system has not been running for over a year, as the uptime \ncommand shows that it has been up for only 1 day, 2 hours, and 13 minutes. The number of users \nlogged in to the system is not relevant to the performance issue, as they are not consuming \nsignificant CPU resources. The system does not require more mem ory, as the free command shows \nthat it has plenty of available memory (49 GB total, 48 GB free ). Reference: CompTIA Linux+ (XK0- \n005) Certification Study Guide, Chapter 15: Managing Memory and Process Execution, pages 468- \n469.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator has logged in to a server for the first t ime and needs to know which services are allowed through the firewall. Which of the following option s will return the results for which the administrator is looking?",
    "choices": [
      "firewall-cmd \"get-services",
      "firewall-cmd \"check-config",
      "firewall-cmd \"list-services",
      "systemct1 status firewalld"
    ],
    "answer": "C",
    "explanation": "The firewall-cmd --list-services command will return the result s for which the administrator is \nlooking. This command will list all services that are allowed t hrough the firewall in the default zone \nor a specified zone. A service is a predefined set of ports and protocols that can be enabled or \ndisabled by firewalld. The firew all-cmd --get-services command will list all available services that are \nsupported by firewalld, not only those that are allowed through the firewall. The firewall-cmd -- \ncheck-config command will check if firewalld configuration file s are valid, not list services. The \nsystemct1 status firewalld command will display information about the firewalld service unit, such as \n\nits state, PID, memory usage, and logs, not list services. Refe rence: CompTIA Linux+ (XK0-005) \nCertification Study Guide, Chapt er 18: Securing Linux Systems, page 543.",
    "type": "mcq"
  },
  {
    "question": "While inspecting a recently compromised Linux system, the administrator identified a number of processes that should not have been running: Which of the following commands should the administrator use to terminate all of the identified processes?",
    "choices": [
      "pkill -9 -f \"upload*.sh\"",
      "kill -9 \"upload*.sh\"",
      "killall -9 -upload*.sh\"",
      "skill -9 \"upload*.sh\""
    ],
    "answer": "A",
    "explanation": "The pkill -9 -f \u0153upload*.sh command will terminate all of the identified processes. This c ommand \nwill send a SIGKILL signal (-9) to all processes whose full com mand line matches the pattern \n\u0153upload*.sh (-f). This signal will force the processes to terminate immedi ately without giving them a \nchance to clean up or save their state. The kill -9 \u0153upload*.sh command is invalid, as kill requires a \nprocess ID (PID), not a patte rn. The killall -9 \u0153upload*.sh command is incorrect, as killall requires an \nexact process name, not a pattern. The skill -9 \u0153upload*.sh command is incorrect, as skill requires a \nusername or a session ID (SID), not a pattern. Reference: CompT IA Linux+ (XK0-005) Certification \nStudy Guide, Chapter 15: Managing Memory and Process Execution, page 470.",
    "type": "mcq"
  },
  {
    "question": "Which of the following commands is used to configure the defaul t permissions for new files?",
    "choices": [
      "setenforce",
      "sudo",
      "umask",
      "chmod"
    ],
    "answer": "C",
    "explanation": "The command that is used to configure the default permissions f or new files is umask. \nThe umask command is a tool for setting the default permissions for new files and directories on Linux systems. The umask value is a four-digit octal number tha t represents the permissions that are \nsubtracted from the default permissions. The default permissions for files are 666, which means read and write for owner, group, and others. The default permissions for directories are 777, which means \nread, write, and execute for owner, group, and others. The umas k value consists of four digits: the \nfirst digit is for special permi ssions, such as setuid, setgid, and sticky bit; the second digit is for the \nowner permissions; the third digit is for the group permissions ; and the fourth digit is for the others \npermissions. The umask value can be calculated by subtracting the desired permissions from the \ndefault permissions. For example, if the desired permissions fo r files are 664, which means read and \nwrite for owner and group, and read for others, then the umask value is 002, which is 666 - 664. The \ncommand umask 002 will set the umask value to 002, which will e nsure that only file owners and \ngroup members can modify new files by default. The command that is used to configure the default \npermissions for new files is uma sk. This is the correct answer to the question. The other options are \nincorrect because they either do not set the default permission s for new files (setenforce, sudo, \nor chmod) or do not exist (kill -HUP or kill -TERM). Reference: CompTIA Linux+ (XK0-005) Certification \nStudy Guide, Chapter 11: Managing File Permissions and Ownership, page 349.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator has set up a new DNS forwarder and is configuring all internal servers to use the new forwarder to look up external DNS requests. The adminis trator needs to modify the firewall on the server for the DNS forwarder to allow the internal servers to communicate to it and make the changes persistent between server reboots. Which of the followi ng commands should be run on the DNS forwarder server to accomplish this task?",
    "choices": [
      "ufw allow out dns",
      "systemct1 reload firewalld",
      "iptables -A OUTPUT -p udp -ra udp -dport 53 -j ACCEPT",
      "flrewall-cmd --zone-public --add-port-53/udp --permanent"
    ],
    "answer": "D",
    "explanation": "The command that should be run on the DNS forwarder server to accomplish the task is firewall-cmd \n--zone=public --add-port=53/udp --permanent. The firewall-cmd c ommand is a tool for managing \nfirewalld, which is a firewall service that provides dynamic an d persistent network security on Linux \nsystems. The firewalld uses zones and services to define the ru les and policies for the network traffic. \nThe zones are logical groups of network interfaces and sources that have the same level of trust and \nsecurity. The services are predefined sets of ports and protoco ls that are associated with certain \napplications or functions. The --z one=public option specifies the zone name that the rule applies to. \nThe public zone is the default zone that represents the untrust ed network, such as the internet. The - \n-add-port=53/udp option adds a port and protocol to the zone. T he 53 is the port number that is \nused by the DNS service. The udp is the protocol that is used b y the DNS service. The -- \npermanent option makes the change persistent across reboots. Th e command firewall-cmd -- \nzone=public --add-port=53/udp --permanent will modify the firew all on the server for the DNS \nforwarder to allow the internal servers to communicate to it an d make the changes persistent \nbetween server reboots. This is the correct command to use to a ccomplish the task. The other \noptions are incorrect because they either do not modify the fir ewall on the server for the DNS \nforwarder (ufw allow out dns or sy stemct1 reload firewalld) or do not use the correct syntax for the \ncommand (iptables -A OUTPUT -p udp -ra udp -dport 53 -j ACCEPT instead of iptables -A OUTPUT -p udp -ra udp --dport 53 -j ACCEPT). Reference: CompTIA Linux+ (X K0-005) Certification Study Guide, \nChapter 12: Managing Network Connections, page 392.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator is compiling a report containing inform ation about processes that are listening on the network ports of a Linux server. Which of the following commands will allow the administrator to obtain the needed information?",
    "choices": [
      "ss -pint",
      "tcpdump -nL",
      "netstat -pn",
      "lsof -It"
    ],
    "answer": "A",
    "explanation": "The command ss -pint will allow the administrator to obtain the needed information about processes \nthat are listening on the network ports of a Linux server. The ss command is a tool for displaying \nsocket statistics on Linux systems. Sockets are endpoints of network communication that allow processes to exchange data over the network. The ss command can show various information about \nthe sockets, such as the state, address, port, protocol, and pr ocess. The -pint option specifies the \nfilters and flags that the ss command should apply. The -p option shows the process name and ID that owns the socket. The -i option shows the internal information a bout the socket, such as the send and \nreceive queue, the congestion window, and the retransmission ti meout. The -n option shows the \nnumerical address and port, instead of resolving the hostnames and service names. The -t option \nshows only the TCP sockets, which are the most common type of sockets used for network \n\ncommunication. The command ss -p int will display the socket sta tistics for the TCP sockets, along \nwith the process name and ID, the numerical address and port, a nd the internal information. This will \nallow the administrator to obtain the needed information about processes that are listening on the \nnetwork ports of a Linux server. This is the correct command to use to obtain the needed \ninformation. The other options are incorrect because they eithe r do not show the socket statistics \n(tcpdump -nL or lsof -It) or do not show the process name and I D (netstat -pn). Reference: CompTIA \nLinux+ (XK0-005) Certification Stud y Guide, Chapter 12: Managing Network Connections, page 389.",
    "type": "mcq"
  },
  {
    "question": "User1 is a member of the accounting group. Members of this grou p need to be able to execute but not make changes to a script maintained by User2. The script sh ould not be accessible to other users or groups. Which of the following will give proper access to th e script?",
    "choices": [
      "chown user2:accounting script.sh chmod 750 script.sh",
      "chown user1:accounting script.sh chmod 777 script.sh",
      "chown accounting:user1 script.sh chmod 057 script.sh",
      "chown user2:accounting script.sh chmod u+x script.sh"
    ],
    "answer": "A",
    "explanation": "The commands that will give proper access to the script are: chown user2:accounting script.sh: This command will change the ownership of the script to user2 as \nthe owner and accounting as the group. The chown command is a t ool for changing the owner and \ngroup of files and directories on Linux systems. The user2:acco unting is the user and group name that \nthe command should assign to the s cript. The script.sh is the n ame of the script that the command \nshould modify. The command chown user2:accounting script.sh will ensure that user2 is the owner \nof the script and accounting is the group of the script, which will allow user2 to maintain the script \nand the accounting group to access the script. chmod 750 script.sh: This command will change the permissions o f the script to 750, which means \nread, write, and execute for the owner; read and execute for the group; and no access for others. \nThe chmod command is a tool for changing the permissions of fil es and directories on Linux systems. \nThe permissions are represented b y three digits in octal notati on, where each digit corresponds to \n\nthe owner, group, and others. Each digit can have a value from 0 to 7, where each value represents a \ncombination of read, write, and execute permissions. The 750 is the permission value that the \ncommand should assign to the script. The script.sh is the name of the script that the command \nshould modify. The command chmod 750 script.sh will ensure that only the owner and the group can \nexecute the script, but not make changes to it, and that the sc ript is not accessible to other users or \ngroups. \nThe commands that will give proper access to the script are chown user2:accounting script.sh and chmod 750 script.sh. This is the correct answer t o the question. The other options are \nincorrect because they either do not give proper access to the script (chown user1:accounting \nscript.sh or chown accounting:user1 script.sh) or do not change the permissions of the script (chmod \n777 script.sh or chmod u+x script.sh). Reference: CompTIA Linux + (XK0-005) Certification Study \nGuide, Chapter 11: Managing File Permissions and Ownership, pag es 346-348.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator needs to verify whether the built conta iner has the app.go file in its root directory. Which of the following can the administrator use to verify the root directory has this file?",
    "choices": [
      "docker image inspect",
      "docker container inspect",
      "docker exec <container_name> ls",
      "docker ps <container_name>"
    ],
    "answer": "C",
    "explanation": "The docker exec <container_name> ls command can be used to veri fy whether the built container \nhas the app.go file in its root directory. This command will run the ls command inside the specified container and list the files and directories in its root direct ory. If the app.go file is present, it will be \ndisplayed in the output. The docker image inspect command will display information about an \nimage, not a container, and it will not list the files inside t he image. The docker container inspect \ncommand will display information about a container, not its fil es. The docker ps <container_name> \ncommand is invalid, as ps does not accept a container name as a n argument. Reference: CompTIA \nLinux+ (XK0-005) Certification Stud y Guide, Chapter 16: Virtualization and Cloud Technologies, page \n499.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator is reviewing changes to a configuration f ile that includes the following section: The Linux administrator is trying to select the appropriate syn tax formatter to corre ct any issues with the configuration file. Which of the following should the synta x formatter support to meet this goal?",
    "choices": [
      "Markdown",
      "XML",
      "YAML",
      "JSON"
    ],
    "answer": "C",
    "explanation": "The configuration file shown in the image is written in YAML fo rmat, so the syntax formatter should \nsupport YAML to correct any issues with the file. YAML stands for YAML Aint Markup Language, and it is a human-readable data serialization language that uses indentation and colons to define keyvalue \npairs. YAML supports various da ta types, such as scalars, seque nces, mappings, anchors, \naliases, and tags. The configuration file follows the rules and syntax of YAML, while the other options \ndo not. Markdown is a lightweight markup language that uses pla in text formatting to create rich text \ndocuments. XML is a markup language that uses tags to enclose e lements and attributes. JSON is a \ndata interchange format that uses curly braces to enclose objec ts and square brackets to enclose \narrays. Reference: CompTIA Linux+ (XK0-005) Certification Study Guide, Chapter 21: Automating \nTasks with Ansible, page 591.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator is investigating an issue in which one of the servers is not booting up properly. The journalctl entries show the following: Which of the following will allow the administrator to boot the Linux system to normal mode quickly?",
    "choices": [
      "Comment out the /opt/app filesystem in /etc/fstab and reboot .",
      "Reformat the /opt/app filesystem and reboot.",
      "Perform filesystem checks on local filesystems and reboot.",
      "Trigger a filesystem relabel and reboot."
    ],
    "answer": "A",
    "explanation": "The fastest way to boot the Linux system to normal mode is to c omment out the /opt/app filesystem \nin /etc/fstab and reboot. This wi ll prevent the system from try ing to mount the /opt/app filesystem at \nboot time, which causes an error because the filesystem does no t exist or is corrupted. Commenting \nout a line in /etc/fstab can be done by adding a # symbol at the beginning of the line. Rebooting the \nsystem will apply the changes and allow the system to boot norm ally. Reformatting the /opt/app \nfilesystem will not help to boot the system, as it will erase a ny data on the filesystem and require \nmanual intervention to create a new filesystem. Performing filesystem checks on local filesystems \nwill not help to boot the system, as it will not fix the missing or corrupted /opt/app filesystem. \nTriggering a filesystem relabel will not help to boot the syste m, as it will only change the security \ncontext of files and directorie s according to SELinux policy. R eference: CompTIA Linux+ (XK0-005) \nCertification Study Guide, Chapter 14: Managing Disk Storage, page 456.",
    "type": "mcq"
  },
  {
    "question": "A Linux systems administrator receives reports from various use rs that an application hosted on a server has stopped responding at similar times for several days in a row. The administrator logs in to the system and obtains the following output: Output 1: Output 2: Output 3: Which of the following should the administrator do to provide t he BEST solution for the reported issue?",
    "choices": [
      "Configure memory allocation policies during business hours a nd prevent the Java process from going into a zombie state while the server is idle.",
      "Configure a different nice value for the Java process to allow for more users and prevent the Java process from restarting during business hours.",
      "Configure more CPU cores to allow for the server to allocate more processing and prevent the Java process from consuming all of the available resources.",
      "Configure the swap space to allow for spikes in usage during peak hours and prevent the Java process from stopping due to a lack of memory."
    ],
    "answer": "D",
    "explanation": "Based on the output of the image sent by the user, the system requires more swap space to allow for spikes in usage during peak hours and prevent the Java process from stopping due to a lack of \nmemory. The output shows that there is only 0 MB of swap space available on the system, which \nmeans that there is no room for swapping out memory pages when physical memory is full or low. \nThe output also shows that there is only 793 MB of available me mory on the system, which may not \nbe enough to handle high-demand applications such as Java. This may cause Java to stop working due to insufficient memory or trigger an OutOfMemoryError excep tion. Configuring more swap \nspace on the system would help to alleviate this issue by provi ding more virtual memory for \napplications and improving perfo rmance. Configuring memory allo cation policies during business \nhours will not help to solve this issue, as it will not increase the amount of available memory or swap space on the system. Configuring a different nice value for Java process will not help to solve this issue, as it will only affect its scheduling priority, not its memory consumption or allocation. \nConfiguring more CPU cores will not help to solve this issue, a s it will only increase processing power, \nnot memory capacity or availability. Reference: CompTIA Linux+ (XK0-005) Certification Study Guide, \nChapter 15: Managing Memory and Process Execution, page 468.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator found many c ontainers in an exited state. Which of the following commands will allow the administrator to clean up the containers in an e xited state?",
    "choices": [
      "docker rm --all",
      "docker rm $( docker ps -aq)",
      "docker images prune *",
      "docker rm --state exited"
    ],
    "answer": "B",
    "explanation": "The command docker rm $(docker ps -aq) will allow the administr ator to clean up the containers in \nan exited state. The docker command is a tool for managing Dock er containers on Linux systems. \nDocker containers are isolated and lightweight environments tha t can run applications and services \nwithout affecting the host system. Docker uses images to create containers, which are files that \ncontain the code, libraries, dependencies, and configuration of the applications and services. \nThe rm option removes one or more containers. The $(docker ps - aq) is a command substitution that \nexecutes the command inside the parentheses and replaces it wit h the output. The docker ps - \n\naq command lists all the containers, including the ones in an e xited state, and shows only their IDs. \nThe docker rm $(docker ps -aq) command will remove all the cont ainers, including the ones in an \nexited state, by passing their IDs to the rm option. This will allow the administrator to clean up the \ncontainers in an exited state. This is the correct command to u se to accomplish the task. The other \noptions are incorrect because they either do not exist (docker rm --all or docker rm --state exited) or \ndo not remove the containers (doc ker images prune *). Reference : CompTIA Linux+ (XK0-005) \nCertification Study Guide, Chapt er 19: Managing Cloud and Virtu alization Technologies, page 571.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator reviews a set of log output files and needs to identify files that contain any occurrence of the word denied. All log files containing entries in uppercase or lowercase letters should be included in the list. Which of the following commands should the administrator use to accomplish this task?",
    "choices": [
      "find . -type f -print | xrags grep -ln denied",
      "find . -type f -print | xrags grep -nv denied",
      "find . -type f -print | xrags grep -wL denied",
      "find . -type f -print | xrags grep -li denied"
    ],
    "answer": "D",
    "explanation": "The command find . -type f -print | xargs grep -li denied will accomplish the task of identifying files \nthat contain any occurrence of the word denied. The find comman d is a tool for searching for files \nand directories on Linux systems. The . is the starting point o f the search, which means the current \ndirectory. The -type f option specifies the type of the file, which means regular file. The -print option prints the full file name on the standard output. The | is a pi pe symbol that redirects the output of \none command to the input of another command. The xargs command is a tool for building and \nexecuting commands from standard input. The grep command is a t ool for searching for patterns in \nfiles or input. The -li option specifies the flags that the gre p command should apply. The -l flag shows \nonly the file names that match the pattern, instead of the matc hing lines. The -i flag ignores the case \nof the pattern, which means it matches both uppercase and lower case letters. The denied is the \npattern that the grep command should search for. The command fi nd . -type f -print | xargs grep -li \ndenied will find all the regular files in the current directory and its subdirectories, and then search for \nany occurrence of the word denied in those files, ignoring the case, and print only the file names that \nmatch the pattern. This will allow the administrator to identify files that contain any occurrence of \nthe word denied. This is the correct command to use to accompli sh the task. The other options are \n\nincorrect because they either do not ignore the case of the pat tern (find . -type f -print | xargs grep - \nln denied or find . -type f -print | xargs grep -wL denied) or do not show the file names that match \nthe pattern (find . -type f -print | xargs grep -nv denied). Re ference: CompTIA Linux+ (XK0-005) \nCertification Study Guide, Chapt er 16: Managing Logging and Mon itoring, page 489.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator is installing a web server and needs to c heck whether web traffic has already been allowed through the firewall. Which of the following comma nds should the administrator use to accomplish this task?",
    "choices": [
      "firewalld query-service-http",
      "firewall-cmd --check-service http",
      "firewall-cmd --query-service http",
      "firewalld --check-service http"
    ],
    "answer": "C",
    "explanation": "The command firewall-cmd --query-service http will accomplish t he task of checking whether web \ntraffic has already been allowed through the firewall. The fire wall-cmd command is a tool for \nmanaging firewalld, which is a firewall service that provides d ynamic and persistent network security \non Linux systems. The firewalld uses zones and services to defi ne the rules and policies for the \nnetwork traffic. The zones are logical groups of network interf aces and sources that have the same \nlevel of trust and security. The services are predefined sets o f ports and protocols that are associated \nwith certain applications or functions. The --query-service htt p option queries whether a service is \nenabled in a zone. The http is the name of the service that the command should check. The http \nservice represents the web traffic that uses the port 80 and th e TCP protocol. The command firewallcmd \n--query-service http will check whether the http service is ena bled in the default zone, which is \nusually the public zone. The command will return yes if the web traffic has already been allowed \nthrough the firewall, or no if t he web traffic has not been all owed through the firewall. This is the \ncorrect command to use to accomplish the task. The other option s are incorrect because they either \ndo not exist (firewalld query-service-http or firewalld --check -service http) or do not query the service \n(firewall-cmd --check-service http instead of firewall-cmd --query-service http). Reference: CompTIA Linux+ (XK0-005) Certification Stud y Guide, Chapter 12: Managing Network Connections, page 392.",
    "type": "mcq"
  },
  {
    "question": "Joe, a user, is unable to log in to the Linux system. Given the following output: Which of the following commands would resolve the issue?",
    "choices": [
      "usermod -s /bin/bash joe",
      "pam_tally2 -u joe -r",
      "passwd -u joe",
      "chage -E 90 joe"
    ],
    "answer": "B",
    "explanation": "The command pam_tally2 -u joe -r will resolve the issue of Joe being unable to log in to the Linux \nsystem. The pam_tally2 command is a tool for managing the login counter for the PAM (Pluggable \nAuthentication Modules) system. PAM is a framework for managing authentication and authorization \non Linux systems. PAM allows the administrator to define the rules and policies for accessing various \nsystem resources and services, s uch as login, sudo, ssh, or cro n. PAM also supports different types of \nauthentication methods, such as passwords, tokens, biometrics, or smart cards. PAM can be used to \nimplement login restrictions, such as limiting the number of fa iled login attempts, locking the \naccount after a certain number o f failures, or enforcing a mini mum or maximum time between login \nattempts. The pam_tally2 command can display, reset, or unlock the login counter for the users or \nhosts. The -u joe option specifies the user name that the comma nd should apply to. The -r option \nresets the login counter for the user. The command pam_tally2 - u joe -r will reset the login counter \nfor Joe, which will unlock his account and allow him to log in to the Linux system. This will resolve the \nissue of Joe being unable to log in to the Linux system. This i s the correct command to use to resolve \nthe issue. The other options are incorrect because they either do not unlock the account (usermod -s \n/bin/bash joe or passwd -u joe) or do not affect the login coun ter (chage -E 90 \njoe). Reference: CompTIA Linux+ (XK0-005) Certification Study Guide, Chapter 17: Implementing Basic Security, page 517.",
    "type": "mcq"
  },
  {
    "question": "Users have been unable to save documents to /home/tmp/temp and have been receiving the following error: Path not found A junior technician checks the locations and sees that /home/tm p/tempa was accidentally created instead of /home/tmp/temp. Which of the following commands shou ld the technician use to fix this issue?",
    "choices": [
      "cp /home/tmp/tempa /home/tmp/temp",
      "mv /home/tmp/tempa /home/tmp/temp",
      "cd /temp/tmp/tempa",
      "ls /home/tmp/tempa"
    ],
    "answer": "B",
    "explanation": "The mv /home/tmp/tempa /home/tmp/temp command will fix the issu e of the misnamed directory. \nThis command will rename the directory /home/tmp/tempa to /home /tmp/temp, which is the \nexpected path for users to save their documents. The cp /home/t mp/tempa /home/tmp/temp \ncommand will not fix the issue, as it will copy the contents of /home/tmp/tempa to a new file named \n/home/tmp/temp, not a directory. The cd /temp/tmp/tempa command will not fix the issue, as it \nwill change the current working directory to /temp/tmp/tempa, w hich does not exist. The ls \n/home/tmp/tempa command will not fix the issue, as it will list the contents of /home/tmp/tempa, \nnot rename it. Reference: CompTIA Linux+ (XK0-005) Certification Study Guide, Chapter 12: Managing Files and Directories, page 413.",
    "type": "mcq"
  },
  {
    "question": "A database administrator requested the installation of a custom database on one of the servers. Which of the following should the Linux administrator configure so the requested packages can be installed?",
    "choices": [
      "/etc/yum.conf",
      "/etc/ssh/sshd.conf",
      "/etc/yum.repos.d/db.repo",
      "/etc/resolv.conf"
    ],
    "answer": "C",
    "explanation": "The Linux administrator should configure /etc/yum.repos.d/db.re po so that the requested packages \ncan be installed. This file defines a custom repository for yum , which is a package manager for RPMbased \n\nsystems. The file should contain information such as the name, baseurl, gpgcheck, and \nenabled options for the repository. By creating this file and e nabling the repository, the administrator \ncan use yum to install packages from the custom repository. The /etc/yum.conf file is the main \nconfiguration file for yum, but it does not define repositories . The /etc/ssh/sshd.conf file is the \nconfiguration file for sshd, which is a daemon that provides se cure shell access to remote systems. \nThe /etc/resolv.conf file is the configuration file for DNS res olution, which maps domain names to IP \naddresses. Reference: CompTIA Linux+ (XK0-005) Certification St udy Guide, Chapter 19: Managing \nPackages and Software, page 559.",
    "type": "mcq"
  },
  {
    "question": "At what point is the Internal Certificate Authority (ICA) creat ed?",
    "choices": [
      "During the primary Security M anagement Server installation p rocess.",
      "Upon creation of a certificate.",
      "When an administrator decides to create one.",
      "When an administrator initially logs into SmartConsole."
    ],
    "answer": "A",
    "explanation": "The Internal Certificate Authority (ICA) is created during the primary Security Management Server \ninstallation process. The ICA is a component of Check Points Pu blic Key Infrastructure (PKI) that \nissues and manages certificates for Security Gateways and admin istrators. The ICA is automatically \ninstalled and initialized when th e primary Security Management Server is installed. The ICA is not \ncreated upon creation of a certi ficate, when an administrator d ecides to create one, or when an \nadministrator initially logs into SmartConsole. Reference: Chec k Point Certified Security \nAdministrator (CCSA) R80.x Study Guide, Chapter 3: Check Point Security Management Architecture, \npage 32.",
    "type": "mcq"
  },
  {
    "question": "Rugged appliances are small appliances with ruggedized hardware and like Quantum Spark appliance they use which operating system?",
    "choices": [
      "Centos Linux",
      "Gaia embedded",
      "Gaia",
      "Red Hat Enterprise Linux version 5"
    ],
    "answer": "B",
    "explanation": "Rugged appliances are small appliances with ruggedized hardware that use Gaia embedded as their \noperating system. Gaia embedded is a version of Gaia that is op timized for embedded devices such \nas Rugged appliances and Quantum Spark appliances. Gaia embedde d supports features such as \nVPN, firewall, identity awareness, application control, URL fil tering, and anti-bot. Gaia embedded \ndoes not use Centos Linux, Gaia, or Red Hat Enterprise Linux ve rsion 5 as their operating \nsystem. Reference: Check Point Rugged Appliance Datasheet, page 1.",
    "type": "mcq"
  },
  {
    "question": "Using AD Query, the security gateway connections to the Active Directory Domain Controllers using what protocol?",
    "choices": [
      "Windows Management Instrumentation (WMI)",
      "Hypertext Transfer Protocol Secure (HTTPS)",
      "Lightweight Directory Access Protocol (LDAP)",
      "Remote Desktop Protocol (RDP)"
    ],
    "answer": "C",
    "explanation": "Using AD Query, the security gateway connects to the Active Dir ectory Domain Controllers using \nLightweight Directory Access Protocol (LDAP). LDAP is a protocol that provides access to directory \nservices over a network. AD Query uses LDAP queries to retrieve information about users and groups \nfrom Active Directory Domain Controllers without installing any software on them. AD Query does \nnot use Windows Management Instrumentation (WMI), Hypertext Transfer Protocol Secure (HTTPS), \nor Remote Desktop Protocol (RDP) to connect to Active Directory Domain \nControllers. Reference: Check Point Certified Security Administ rator (CCSA) R80.x Study Guide, \nChapter 5: User Management and Authentication, page 69.",
    "type": "mcq"
  },
  {
    "question": "What is the main objective whe n using Application Control?",
    "choices": [
      "To filter out specific content.",
      "To assist the firewall blade with handling traffic.",
      "To see what users are doing.",
      "Ensure security and privacy of information."
    ],
    "answer": "D",
    "explanation": "The main objective when using Application Control is to ensure the security and privacy of \ninformation. Application Control is a security practice that bl ocks or restricts unauthorized \napplications from executing in ways that put data at risk. The control functions vary based on the \nbusiness purpose of the specific application, but the main obje ctive is to help ensure the privacy and \nsecurity of data used by and transmitted between applications1. Application Control can also prevent malware, untrusted, or unwanted applications from running on th e network, reducing the risks and \ncosts associated with data breaches1. Application Control can also improve the overall network \nstability and performance by eliminating unnecessary or harmful applications1. \nApplication Control is not mainly used to filter out specific c ontent, although it can be combined with \nother technologies such as URL f iltering or content filtering t o achieve that goal. Application Control \nis not mainly used to assist the firewall blade with handling t raffic, although it can be integrated with \nfirewall policies to enforce granular access rules based on app lications. Application Control is not \nmainly used to see what users are doing, although it can provid e visibility and reporting on \napplication usage and activity.",
    "type": "mcq"
  },
  {
    "question": "During a security scan, the password of an SSH key file appeare d to be too weak and was cracked. Which of the following commands would allow a user to choose a stronger password and set it on the existing SSH key file?",
    "choices": [
      "passwd",
      "ssh",
      "ssh-keygen",
      "pwgen"
    ],
    "answer": "C",
    "explanation": "The command that would allow a user to choose a stronger passwo rd and set it on the existing SSH \nkey file is ssh-keygen -p -f <keyfile>. This command uses the s sh-keygen tool, which is used to \ngenerate, manage, and convert authentication keys for SSH. The -p option stands for passphrase, and \n\nit allows the user to change or remove the passphrase of an exi sting private key file. The -f option \nspecifies the filename of the key file. The command will prompt the user for the old passphrase, and \nthen for the new passphrase twice. \nThe other options are not correct commands for changing the pas sword of an SSH key file. The \npasswd command is used to change the password of a user account on a Linux system, not an SSH \nkey file. The ssh command is used to log in to a remote system using SSH, not to change the \npassword of an SSH key file. The pwgen command is used to generate random passwords, not to \nchange the password of an SSH key file. \nReference: ssh-keygen(1) - Linux manual page; How To: Change Pa ssphrase for SSH Private Key - Unix \nTutorial",
    "type": "mcq"
  },
  {
    "question": "A Linux systems administrator is troubleshooting an I/O latency on a single CPU server. The administrator runs a top command and receives the following out put: %Cpu(s): 0.2 us, 33.1 sy, 0.0 ni, 0.0 id, 52.4 wa, 0.0 hi, 0.2 si, 0.0 st Which of the following is correct based on the output received from the exe-cuted command?",
    "choices": [
      "The server's CPU is taking too long to process users' reques ts.",
      "The server's CPU shows a high idle-time value.",
      "The server's CPU is spending t oo much time waiting for data inputs.",
      "The server's CPU value for the time spent on system processe s is low."
    ],
    "answer": "C",
    "explanation": "The servers CPU is spending too much time waiting for data inputs. This can be inferred from the output of the top command, which shows the percentage of CPU ti me spent in different states. The \nwa state stands for wait, and it indicates that the CPU is idle while waiting for an I/O operation to \ncomplete. In this case, the wa state is 52.4%, which means that more than half of the CPU time is \nwasted on waiting for data inputs. This can cause a high I/O la tency and affect the performance of \nthe server. \nThe other options are not correct based on the output received from the executed command. The \nservers CPU is not taking too long to process users requests, b ecause the us state, which stands for \nuser, is only 0.2%, which means that the CPU is barely used by user processes. The servers CPU does \nnot show a high idle-time value, because the id state, which stands for idle, is 0.0%, which means \nthat the CPU is not idle at all. The servers CPU value for the time spent on system processes is not \nlow, because the sy state, which stands for system, is 33.1%, w hich means that the CPU is heavily \n\nused by system processes. \nReference: How to Use the Linux top Command (and Understand Its Output); [Understanding Linux \nCPU Load - when should you be worried?]",
    "type": "mcq"
  },
  {
    "question": "Which of the following can be use d as a secure way to access a remote termi-nal?",
    "choices": [
      "TFTP",
      "SSH",
      "SCP",
      "SFTP"
    ],
    "answer": "B",
    "explanation": "SSH, or Secure Shell, is a protocol that allows you to access a remote terminal or virtual machine \nsecurely over an encrypted connection. You can use SSH to run c ommands, transfer files, or tunnel \nnetwork traffic on a remote system. To use SSH, you need an SSH client program on your local system \nand an SSH server program on the remote system. You also need t o authenticate yourself using a \nusername and password or a public/private key pair. SSH is wide ly used by system administrators, \ndevelopers, and engineers to remotely manage Linux servers and other devices. The other options are not correct answers. TFTP, or Trivial Fil e Transfer Protocol, is a simple protocol \nthat allows you to transfer files between systems, but it does not provide any security or encryption \nfeatures. SCP, or Secure Copy Protocol, is a protocol that uses SSH to securely copy files between \nsystems, but it does not provide a remote terminal access. FTP, or File Transfer Protocol, is another \nprotocol that allows you to transfer files between systems, but it also does not provide any security \nor encryption features.",
    "type": "mcq"
  },
  {
    "question": "A user reported issues when trying to log in to a Linux server. The following outputs were received: Given the outputs above. which of the following is the reason t he user is una-ble to log in to the server?",
    "choices": [
      "User1 needs to set a long password.",
      "User1 is in the incorrect group.",
      "The user1 shell assignment incorrect.",
      "The user1 password is expired."
    ],
    "answer": "D",
    "explanation": "The user1 password is expired. This can be inferred from the ou tput of the chage -l user1 command, \nwhich shows the password expiration information for user1. The output shows that the password expired on 2020-10-01, and the account expired on 2020-10-08. T his means that user1 cannot log in \nto the server unless the password and account are reactivated by the system administrator. \nThe other options are not correct based on the outputs above. U ser1 does not need to set a long \npassword, because the output of the passwd -S user1 command shows that the password has a minimum length of 5 characters, which is met by user1s password . User1 is not in the incorrect \ngroup, because the output of the groups user1 command shows tha t user1 belongs to the app group, \nwhich is presumably the correct group for accessing the server. The user1 shell a ssignment is not \nincorrect, because the output of the grep user1 /etc/passwd com mand shows that user1 has \n/bin/bash as the default shell, which is a valid and common she ll for Linux users.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator wants to list all local accounts in whi ch the UID is greater than 500. Which of the following commands will give the correct output?",
    "choices": [
      "find /etc/passwd \"size +500",
      "cut \"d: fl / etc/ passwd > 500",
      "awk -F: \u02dc$3 > 500 {print $1}' /etc/passwd",
      "sed '/UID/' /etc/passwd < 500"
    ],
    "answer": "C",
    "explanation": "The correct command to list all local accounts in which the UID is greater than 500 is: awk -F: '$3 > 500 {print $1}' /etc/passwd \nThis command uses awk to process the /etc/passwd file, which contains information about the local \nusers on the system. The -F: option specifies that the fields a re separated by colons. The $3 refers to \nthe third field, which is the UID. The condition $3 > 500 filters out the users whose UID is greater than 500. The action {print $1} prints the first field, which i s the username. \nThe other commands are incorrect because: \nfind /etc/passwd \"size +500 will search for files that are larg er than 500 blocks in size, not users with \n\nUID greater than 500. \ncut \"d: fl / etc/ passwd > 500 will cut the first field of the /etc/passwd file using colon as the delimiter, but it will not filter by UID or print only the usernames. The > 500 part will redirect the \noutput to a file named 500, not compare with the UID. \nsed '/UID/' /etc/passwd < 500 will use sed to edit the /etc/pas swd file and replace any line that \ncontains UID with 500, not list the users with UID greater than 500. The < 500 part will redirect the input from a file named 500, not compare with the UID. Reference: \nLinux List All Users In The System Command - nixCraft, section \u0153List all users in Linux using \n/etc/passwd file . \nUnix script getting users with UID bigger than 500 - Stack Over flow, section \u0153Using awk .",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator has physically added a new RAID adapter t o a system. Which of the following commands should the Linux administrator run to confirm that the device has been recognized? (Select TWO).",
    "choices": [
      "rmmod",
      "Is -11 /etc",
      "Ishw \"class disk",
      "pvdisplay E. rmdir /dev F. dmesg"
    ],
    "answer": "C",
    "explanation": "F Explanation: The following commands can help you confirm that the new RAID a dapter has been recognized by \nthe Linux system: dmesg: This command displays the kernel messages, which can show the information about the newly detected hardware device. You can use dmesg | grep -i rai d to filter the output for RAIDrelated \nmessages. lshw -class disk: This command lists the disk devices on the sy stem, including the RAID controller and \nits model name. You can use lshw -class disk | grep -i raid to filter the output for RAID-related \ninformation1. The other commands are not relev ant for this purpose. For examp le: \nrmmod: This command removes a module from the Linux kernel, whi ch is not useful for detecting a \n\nnew device. \nls -l /etc: This command lists the files and directories in the /etc directory, which is not related to \nhardware devices. \npvdisplay: This command displays the attributes of physical vol umes, which are part of the logical \nvolume management (LVM) system, not the RAID system. rmdir /dev: This command removes an empty directory, which is n ot helpful for detecting a new \ndevice. Moreover, /dev is a special directory that contains dev ice files, and should not be removed.",
    "type": "mcq"
  },
  {
    "question": "A user is attempting to log in to a Linux server that has Kerbe ros SSO ena-bled. Which of the following commands should the user run to authenticate and then show the ticket grants? (Select TWO).",
    "choices": [
      "kinit",
      "klist",
      "kexec",
      "kioad E. pkexec F. realm"
    ],
    "answer": "A",
    "explanation": "B \n \nExplanation: \nThe following commands can help the user to authenticate and sh ow the ticket grants using Kerberos \nSSO on a Linux server: \nkinit: This command obtains and cac hes an initial ticket-granti ng ticket (TGT) for the user from the \nKerberos key distribution center (KDC). The user needs to enter their password or use a keytab file to authenticate1. \nklist: This command lists the cached tickets, including the TGT and any service tickets, for the user. It \nalso shows the expiration time and flags for each ticket2. \nFor example, the user can run the following commands to log in and view their tickets: \n$ kinit username@REALM \nPassword for username@REALM: \n$ klist \nTicket cache: FILE:/tmp/krb5cc_1000 Default principal: username@REALM \nValid starting Expires Service principal \n\n04/063 16:06:59 04/073 02:06:59 krbtgt/REALM@REALM \nrenew until 04 16:06:59 Reference: \nkinit(1) - Linux man page, section \u0153Description . \nklist(1) - Linux man page, section \u0153Description .",
    "type": "mcq"
  },
  {
    "question": "After starting an Apache web server, the administrator receives the following error: Apr 23 localhost.localdomain httpd 4618] : (98) Address already in use: AH00072: make_sock: could not bind to address [: :]80 Which of the following commands should the administrator use to further trou-bleshoot this issue?",
    "choices": [
      "Ss",
      "Ip",
      "Dig",
      "Nc"
    ],
    "answer": "A",
    "explanation": "The ss command is used to display information about socket conn ections, such as the port number, \nstate, and process ID. The error message indicates that the por t 80 is already in use by another \nprocess, which prevents the Apache web server from binding to i t. By using the ss command with the \n-l and -n options, the administrator can list all the listening sockets and their port numbers in \nnumeric form, and identify which process is using the port 80. For example: ss -ln | grep :80. The ip, \ndig, and nc commands are not relevant for this issue, as they are used for different purposes, such as configuring network interfaces, querying DNS records, and testi ng network connectivity.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator detected corruption in the /data filesy stem. Given the following output: Which of the following commands can the administrator use to be st address this issue?",
    "choices": [
      "umount /data mkfs . xfs /dev/sclcl mount /data",
      "umount /data xfs repair /dev/ sdcl mount /data",
      "umount /data fsck /dev/ sdcl mount / data",
      "umount /data pvs /dev/sdcl mount /data"
    ],
    "answer": "B",
    "explanation": "The xfs repair command is used to check and repair an XFS files ystem, which is the type of filesystem \nused for the /data partition, as shown in the output. The admin istrator needs to unmount the /data \npartition before running the xfs repair command on it, and then mount it back after the repair is \ndone. For example: umount /data; xfs_repair /dev/sdcl; mount /d ata. The mkfs.xfs command is used \nto create a new XFS filesystem, which would erase all the data on the partition. The fsck command is \nused to check and repair other types of filesystems, such as ex t4, but not XFS. The pvs command is \nused to display information about physical volumes in a logical volume manager (LVM) setup, which \nis not relevant for this issue.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator is configuring a two-node cluster and nee ds to be able to connect the nodes to each other using SSH keys from the root account. Which of the f ollowing commands will accomplish this task?",
    "choices": [
      "[root@nodea ssh \"i ~/ . ssh/\u00c2\u00b1d rsa root@nodeb",
      "[root@nodea scp -i . ssh/id rsa root@nodeb",
      "[root@nodea ssh\"copy-id \"i .ssh/id rsa root@nodeb",
      "[root@nodea # ssh add -c ~/ . ssh/id rsa root@nodeb E. [root@nodea # ssh add -c ~/. ssh/id rsa root@nodeb"
    ],
    "answer": "C",
    "explanation": "The ssh-copy-id command is used to copy a public SSH key from a local machine to a remote server \nand add it to the authorized_keys file, which allows passwordle ss authentication between the \nmachines. The administrator can use this command to copy the root users public key from nodea to \n\nnodeb, and vice versa, to enable SSH access between the nodes without entering a password every \ntime. For example: [root@nodea ss h-copy-id -i ~/.ssh/id_rsa roo t@nodeb]. The ssh command is used \nto initiate an SSH connection to a remote server, but it does n ot copy any keys. The scp command is \nused to copy files securely between machines using SSH, but it does not add any keys to the authorized_keys file. The ssh-add command is used to add privat e keys to the SSH agent, which \nmanages them for SSH authentication, but it does not copy any k eys to a remote server.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator is enabling LUKS on a USB storage devic e with an ext4 filesystem format. The administrator runs dmesg and notices the following output: Given this scenario, which of the following should the administ rator perform to meet these requirements? (Select three).",
    "choices": [
      "gpg /dev/sdcl",
      "pvcreate /dev/sdc",
      "mkfs . ext4 /dev/mapper/LUKSCJ001 - L ENCRYPTED",
      "umount / dev/ sdc E. fdisk /dev/sdc F. mkfs . vfat /dev/mapper/LUKS0001 \" L ENCRYPTED G. wipefs \"a/dev/sdbl H. cryptsetup IuksFormat /dev/ sdcl"
    ],
    "answer": "C",
    "explanation": "DH \n \nExplanation: \nTo enable LUKS on a USB storage device with an ext4 filesystem format, the administrator needs to \nperform the following steps: \nUnmount the device if it is mounted using umount /dev/sdc (D) \nCreate a partition table on the device using fdisk /dev/sdc (E) \nFormat the partition with LUKS encryption using cryptsetup luks Format /dev/sdc1 (H) \nOpen the encrypted partition using cryptsetup luksOpen /dev/sdc 1 LUKS0001 \nCreate an ext4 filesystem on the encrypted partition using mkfs .ext4 /dev/mapper/LUKS0001 \u00c2\u00a9 \n\nMount the encrypted partition using mount /dev/mapper/LUKS0001 /mnt Reference: \n[CompTIA Linux+ Study Guide], Chapter 9: Securing Linux, Sectio n: Encrypting Disks \n[How to Encrypt USB Drive on Ubuntu 18.04]",
    "type": "mcq"
  },
  {
    "question": "Which of the following actions are considered good security pra ctices when hardening a Linux server? (Select two).",
    "choices": [
      "Renaming the root account to something else",
      "Removing unnecessary packages",
      "Changing the default shell to /bin/csh",
      "Disabling public key authentication E. Disabling the SSH root login possibility F. Changing the permissions on the root filesystem to 600"
    ],
    "answer": "B",
    "explanation": "E \n Explanation: \nSome good security practices when hardening a Linux server are: \nRemoving unnecessary packages (B) to reduce the attack surface and eliminate potential \nvulnerabilities \nDisabling the SSH root login possibility (E) to prevent unauthorized access and brute-force attacks on the root account Reference: \n[CompTIA Linux+ Study Guide], Chapter 9: Securing Linux, Section: Hardening Linux \n[How to Harden Your Linux Server]",
    "type": "mcq"
  },
  {
    "question": "A new disk was presented to a se rver as /dev/ sdd. The systems administrator needs to check if a partition table is on that disk. Which of the following command s can show this information?",
    "choices": [
      "Isscsi",
      "fdisk",
      "blkid",
      "partprobe"
    ],
    "answer": "B",
    "explanation": "The command that can be used to check if a partition table is o n a disk is fdisk. The fdisk command \ncan display, create, delete, and modify partitions on a disk. T o show the partition table of a disk, the \nadministrator can use fdisk -l /dev/sdd (B). Reference: \n[CompTIA Linux+ Study Guide], Chapter 5: Managing Filesystems a nd Logical Volumes, Section: \nPartitioning Disks \n[How to Use Fdisk Command in Linux]",
    "type": "mcq"
  },
  {
    "question": "A systems administrator wants to check for running containers. Which of the following commands can be used to show this information?",
    "choices": [
      "docker pull",
      "docker stats",
      "docker ps",
      "docker list"
    ],
    "answer": "C",
    "explanation": "The command that can be used to check for running containers is docker ps. The docker ps command \ncan list all the containers that are currently running on the s ystem. To show all the containers, \nincluding those that are stopped, the administrator can use doc ker ps -a \u00c2\u00a9. Reference: \n[CompTIA Linux+ Study Guide], Chapter 11: Working with Containe rs, Section: Managing Containers \nwith Docker \n[Docker PS Command with Examples]",
    "type": "mcq"
  },
  {
    "question": "A systems administrator is insta lling various software packages using a pack-age manager. Which of the following commands would the administrator use on the Linux server to install the package?",
    "choices": [
      "winget",
      "softwareupdate",
      "yum-config",
      "apt"
    ],
    "answer": "D",
    "explanation": "",
    "type": "mcq"
  },
  {
    "question": "A user created the following script file: # ! /bin/bash # FILENAME: /home/user/ script . sh echo \"hello world\" exit 1 However, when the user tried to run the script file using the c ommand \"script . sh, an error returned indicating permission was denied. Which of the follow-ing shoul d the user execute in order for the script to run properly?",
    "choices": [
      "chmod u+x /home/user/script . sh",
      "chmod 600 /home/user/script . sh",
      "chmod /home/user/script . sh",
      "chmod 0+r /horne/user/script. sh"
    ],
    "answer": "A",
    "explanation": "To run a script file, the user needs to have execute permission on the file. The command chmod u+x \n/home/user/script.sh (A) will gr ant execute permission to the o wner of the file, which is the user \nwho created it. The other commands will not give execute permis sion to the user, and therefore will \nnot allow the script to run properly. Reference: [CompTIA Linux+ Study Guide], Chapter 3: Working with Files, Se ction: Changing File Permissions \n[How to Make a Bash Script Executable]",
    "type": "mcq"
  },
  {
    "question": "A systems administrator checked out the code from the repository, created a new branch, made changes to the code, and then updated the main branch. The syst ems administrator wants to ensure that the Terraform state files do not appear in the main branch. Which of following should the administrator use to meet this requirement?",
    "choices": [
      "clone",
      "gitxgnore",
      "get",
      ".ssh"
    ],
    "answer": "B",
    "explanation": "To prevent certain files from being tracked by Git, the adminis trator can use a .gitignore file (B) in the \nrepository. The .gitignore file can specify patterns of files o r directories that Git should ignore. This \nway, the Terraform state files will not appear in the main bran ch or any other branch. The other \ncommands are not related to this requirement. Reference: \n[CompTIA Linux+ Study Guide], Chapter 10: Working with Git, Sec tion: Ignoring Files with .gitignore \n[How to Use .gitignore File]",
    "type": "mcq"
  },
  {
    "question": "A junior administrator updated the PostgreSQL service unit file per the data-base administrator's recommendation. The service has been restarted, but changes hav e not been applied. Which of the following should the administrator run for the changes to take effect?",
    "choices": [
      "Systemct1 get\"default",
      "systemct1 daemon\"reload",
      "systemct1 enable postgresq1",
      "systemct1 mask postgresq1"
    ],
    "answer": "B",
    "explanation": "To apply changes to a systemd service unit file, the administra tor needs to reload the systemd \ndaemon using the command systemct1 daemon-reload (B). This will make systemd aware of the new \nor changed unit files. The other commands will not reload the s ystemd daemon or apply the \nchanges. Reference: [CompTIA Linux+ Study Guide], Chapter 7: Managing System Servic es, Section: Modifying Systemd \nServices [How to Reload Systemd Services]",
    "type": "mcq"
  },
  {
    "question": "A developer needs to launch an Nginx image container, name it W eb001, and ex-pose port 8080 externally while mapping to port 80 inside the container. Which of the following commands will accomplish this task?",
    "choices": [
      "docker exec \"it -p 8080: 80 \"\"name Web001 nginx",
      "docker load -it -p 8080:80 \"\"name Web001 nginx",
      "docker run -it -P 8080:80 \"\"name Web001 nginx",
      "docker pull -it -p 8080:80 \"name Web00l nginx"
    ],
    "answer": "C",
    "explanation": "To launch an Nginx image container, name it Web001, and expose port 8080 externally while \nmapping to port 80 inside the container, the administrator can use the command docker run -it -p \n8080:80 --name Web001 nginx \u00c2\u00a9. This will create and start a ne w container from the Nginx image, \nassign it a name of Web001, and map port 8080 on the host to po rt 80 on the container. The other \ncommands are not valid or do not meet the requirements. Referen ce: \n[CompTIA Linux+ Study Guide], Chapter 11: Working with Containe rs, Section: Running Containers \nwith Docker \n[How to Run Docker Containers]",
    "type": "mcq"
  },
  {
    "question": "A junior developer is unable to access an application server an d receives the following output: The systems administrator investigates the issue and receives t he following output: Which of the following commands will help unlock the account?",
    "choices": [
      "Pam_tally2 --user=dev2 \"-quiet",
      "pam_ tally2 --user=dev2",
      "pam_tally2 -\"user+dev2 \"-quiet",
      "pam_tally2 --user=dev2 \"-reset"
    ],
    "answer": "D",
    "explanation": "To unlock an account that has been locked due to login failures , the administrator can use the \ncommand pam_tally2 --user=dev2 --reset (D). This will reset the failure counter for the user \u0153dev2 \nand allow the user to log in again. The other commands will not unlock the account, but either \n\ndisplay or increase the failure count. Reference: \n[CompTIA Linux+ Study Guide], Chapter 4: Managing Users and Groups, Section: Locking Accounts with pam_tally2 \n[How to Lock and Unlock User Account in Linux]",
    "type": "mcq"
  },
  {
    "question": "A systems administrator wants to delete app . conf from a Git r epository. Which of the following commands will delete the file?",
    "choices": [
      "git tag app. conf",
      "git commit app . conf",
      "git checkout app . conf",
      "git rm app. conf"
    ],
    "answer": "D",
    "explanation": "To delete a file from a Git repository, the administrator can u se the command git rm app.conf (D). \nThis will remove the file \u0153app.conf from the working directory and stage it for deletion from the \nrepository. The administrator can then commit the change with g it commit -m \"Delete app.conf\" to \nfinalize the deletion. The other commands will not delete the file, but either tag, commit, or checkout the file. Reference: [CompTIA Linux+ Study Guide], Chapter 10: Working with Git, Section: Deleting Files with Git \n[How to Delete Files from Git]",
    "type": "mcq"
  },
  {
    "question": "A senior Linux administrator has created several scripts that w ill be used to install common system applications. These scripts are published to a reposito-ry to share with the systems team. A junior Linux administrator needs to re-trieve the scripts and make the m available on a local workstation. Which of the following Git commands should the junior Linux adm inistrator use to accom-plish this task?",
    "choices": [
      "fetch",
      "checkout",
      "clone",
      "branch"
    ],
    "answer": "C",
    "explanation": "To retrieve the scripts from a repository and make them availab le on a local workstation, the junior \nLinux administrator can use the command git clone \u00c2\u00a9. This will create a copy of the repository on the \nlocal machine, including all the scripts and history. The other commands will not clone the repository, but either fetch, checkout, or branch from an existing repository. Reference: \n[CompTIA Linux+ Study Guide], Chapter 10: Working with Git, Sec tion: Cloning Repositories with Git \n[How to Clone a Git Repository]",
    "type": "mcq"
  },
  {
    "question": "A DevOps engineer wants to allow the same Kubernetes container configurations to be deployed in development, testing, and production environments. A key requir ement is that the containers should be configured so that developers do not have to statically conf igure custom, environment-specific locations. Which of the following should the engineer use to me et this requirement?",
    "choices": [
      "Custom scheduler",
      "Node affinity",
      "Overlay network",
      "Ambassador container"
    ],
    "answer": "D",
    "explanation": "To allow the same Kubernetes container configurations to be dep loyed in different environments \nwithout statically configuring custom locations, the engineer c an use an ambassador container (D). \nAn ambassador container is a proxy container that handles commu nication between containers and \nexternal services. It can dynamically configure locations based on environment variables or other \nmethods. The other options are not related to this requirement. Reference: \n[CompTIA Linux+ Study Guide], Chapter 11: Working with Containe rs, Section: Using Ambassador \nContainers [How to Use Ambassador Containers]",
    "type": "mcq"
  },
  {
    "question": "As part of the requirements for installing a new application, t he swappiness parameter needs to be changed to O. This change needs to persist across re-boots and be applied immediately. A Linux systems administrator is perform ing this change. Which of the f ollowing steps should the administrator complete to accomplish this task?",
    "choices": [
      "echo \"v m. swappiness\"()\" >> /etc/sysctl . conf && sysctl \"p",
      "echo \" vrn. >> / proc/meminfo && sysctl \"a",
      "s ysctl \"v >> / proc/meminfo & & echo \"vm. swapine ss=0\"",
      "sy sctl \"h \"vm. swapiness\"O\" && echo / etc/vmswapiness"
    ],
    "answer": "A",
    "explanation": "To change the swappiness parameter to 0 and make it persistent across reboots and applied \nimmediately, the administrator can perform the following steps: \nAppend the line vm.swappiness=0 to the file /etc/sysctl.conf using echo \"vm.swappiness=0\" >> \n/etc/sysctl.conf (A). This will set the swappiness parameter to 0 for future boots. \nReload the sysctl configuration using sysctl -p (A). This will apply the changes to the current system \nwithout rebooting. The other commands will not achieve this tas k, but either write to a wrong file, \nuse a wrong option, or have a syntax error. Reference: \n[CompTIA Linux+ Study Guide], Chapter 8: Optimizing Linux Perfo rmance, Section: Tuning Kernel \nParameters with sysctl [How to Change Swappiness in Linux]",
    "type": "mcq"
  },
  {
    "question": "An administrator needs to get network information from a group of statically assigned workstations before they are reconnected to the network. Which of the follow ing should the administrator use to obtain this information?",
    "choices": [
      "ip show",
      "ifcfg \"a",
      "ifcfg \"s",
      "i fname \"s"
    ],
    "answer": "B",
    "explanation": "The ifcfg command is used to configure network interfaces on Linux systems. The -a option displays information about all network interfaces, including their IP ad dresses, netmasks, gateways, and \nother parameters. This command can help the administrator obtai n the network information from \nthe statically assigned workstations before they are reconnecte d to the network. Reference: [Linux \nNetworking: ifcfg Command With Examples]",
    "type": "mcq"
  },
  {
    "question": "A developer wants to ensure that all files and folders created inside a shared folder named /GroupOODEV inherit the group name of the parent folder. Which of the following commands will help achieve this goal?",
    "choices": [
      "chmod g+X / GroupOODEV/",
      "chmod g+W / GroupOODEV/",
      "chmod g+r / GroupOODEV/",
      "chmod g+s / GroupOODEV/"
    ],
    "answer": "D",
    "explanation": "The chmod command is used to change the permissions of files an d directories on Linux systems. \nThe g+s option sets the setgid bit on a directory, which means that all files and folders created inside \nthat directory will inherit the group name of the parent directory. This command can help the \ndeveloper ensure that all files and folders created inside the /GroupOODEV directory have the same \ngroup name as /GroupOODEV. Reference: [How to Use chmod Command in Linux with Examples]",
    "type": "mcq"
  },
  {
    "question": "Ann, a security administrator, is performing home directory aud its on a Linux server. Ann issues the su Joe command and then issues the Is command. The output displays files that reside in Ann's home directory inste ad of Joe's. Which of the following represents the command Ann should have issued in order to list Joe's files?",
    "choices": [
      "su - Joe",
      "sudo Joe",
      "visudo Joe",
      "pkexec joe"
    ],
    "answer": "A",
    "explanation": "The su command is used to switch to another user account on Linux systems. The - option makes the \nshell a login shell, which means that it will read the profile and environment variables of the target \nuser. Without this option, the shell will retain the environmen t variables of the original user. This can \ncause confusion when issuing commands that depend on these vari ables, such as ls, which uses \nthe $HOME variable to determine the home directory. Therefore, Ann should have issued su - Joe to \nlist Joes files instead of her ow n. Reference: [How to Use su C ommand in Linux with Examples]",
    "type": "mcq"
  },
  {
    "question": "The applications team is reporti ng issues when trying to access the web service hosted in a Linux system. The Linux systems administrator is reviewing the follow ing outputs: Output 1: * ht tpd.service = The Apache HTTPD Server Load ed: loaded (/usr/lib/systemd/system/httpd.service; disabled; vendor preset: disab led) Act ive: inactive (dead) Docs: man:httpd(8) man:apach ectl(8) Output 2: 16: 51:16 up 28 min, 1 user, load average: 0.00, 0.00, 0 .07 Which of th e following statements best describe the root cause? (Select two).",
    "choices": [
      "The htt pd service is currently started.",
      "The httpd service is enabled to auto start at boot time, but it failed to start.",
      "The httpd service was manually stopped.",
      "The htt pd service is not enabled to auto start at boot time. E. The h ttpd service runs without problems. F. The htt pd service did not start during the last server reboo t."
    ],
    "answer": "C",
    "explanation": "D \nExplanation: \nThe httpd.service is the Apache HTTPD Server, which is a web se rvice that runs on Linux systems. The \noutput 1 shows that the httpd.service is inactive (dead), which means that it is not running. The \noutput 1 also shows that the httpd.service is disabled, which m eans that it is not enabled to auto \nstart at boot time. Therefore, the statements C and D best desc ribe the root cause of the issue. The \nstatements A, B, E, and F are incorrect because they do not mat ch the output 1. Reference: [How to \nManage Systemd Services on a Linux System]",
    "type": "mcq"
  },
  {
    "question": "A user is unable to remotely log on to a server using the serve r name server1 and port 22. The Linux engineer troubleshoots the issue and gathers the following info rmation: Which of the following is most likely causing the issue?",
    "choices": [
      "server 1 is n ot in the DNS.",
      "sshd i s running on a non-standard port .",
      "sshd i s not an active service.",
      "serverl is using an incorrect IP ad dress."
    ],
    "answer": "B",
    "explanation": "The sshd is the Secure Shell Daemon, which is a service that al lows remote login to a Linux system \nusing the SSH protocol. The output shows that the sshd is runni ng on port 2222, which is a nonstandard \nport for SSH. The default port for SSH is 22, which is what the user is trying to use. \nTherefore, the statement B is most likely causing the issue. Th e statements A, C, and D are incorrect \nbecause they do not explain why the user cannot log on using port 22. Reference: [How to Change SSH Port in Linux]",
    "type": "mcq"
  },
  {
    "question": "A systems administrator wants to upgrade /bin/ someapp to a new version, but the administrator does not know the package name. Which of the following will show the RPM package name that provides that binary file?",
    "choices": [
      "rpm \"qf /bin/ someapp",
      "rpm \"Vv / bin/ someapp",
      "rpm - P / bin/ some app",
      "rpm \"i / bin/ someapp"
    ],
    "answer": "A",
    "explanation": "The rpm command is used to manage RPM packages on Linux systems . The -qf option queries the \npackage name that provides a giv en file. Therefore, the command rpm -qf /bin/someapp will show \nthe RPM package name that provides the binary file /bin/someapp. The statements B, C, and D are \nincorrect because they do not query the package name, but rathe r verify, remove, or install a \npackage. Reference: [How to Use RPM Command in Linux with Examp les]",
    "type": "mcq"
  },
  {
    "question": "Which of the following specificat ions is used to perform disk e ncryption in a Linux system?",
    "choices": [
      "LUKS",
      "TLS",
      "SSL",
      "NFS"
    ],
    "answer": "A",
    "explanation": "LUKS stands for Linux Unified Key Setup, which is a specificati on for disk encryption on Linux systems. \nLUKS allows users to encrypt partitions or entire disks using a passphrase or a key file. LUKS also \nsupports multiple keys and key slots, which can be used to unlock the encrypted data. LUKS is \ncompatible with various tools and utilities, such as cryptsetup , dm-crypt, and LVM. Reference: [How \nto Encrypt Partitions with LUKS on Linux]",
    "type": "mcq"
  },
  {
    "question": "An engineer needs to insert a character at the end of the current line in the vi text editor. Which of the following will allow the engineer to complete this task?",
    "choices": [
      "p",
      "r",
      "bb",
      "A E. i"
    ],
    "answer": "D",
    "explanation": "The vi text editor is a popular and powerful tool for editing t ext files on Linux systems. The vi editor \nhas two modes: command mode and insert mode. In command mode, t he user can issue commands \nto manipulate the text, such as moving the cursor, deleting, copying, pasting, searching, replacing, and saving. In insert mode, the user can type text into the fil e. To switch from command mode to \ninsert mode, the user can press various keys, such as i, a, o, I, A, or O. To switch from insert mode to \ncommand mode, the user can press the Esc key. \nTo insert a character at the end of the current line in the vi editor, the user can press the A key in \ncommand mode. This will move the cursor to the end of the line and switch to insert mode. Then, \nthe user can type the desired ch aracter and press Esc to return to command mode. The statement D \nis correct. \nThe statements A, B, C, and E are incorrect because they do not perform the desired task. The p key \nin command mode will paste the previously copied or deleted tex t after the cursor. The r key in \ncommand mode will replace the character under the cursor with a nother character. The bb key in \ncommand mode will move the cursor back two words. The i key in command mode will switch to \ninsert mode before the cursor. Reference: [How to Use vi Text E ditor in Linux]",
    "type": "mcq"
  },
  {
    "question": "An administrator started a long-running process in the foregrou nd that needs to continue without interruption. Which of the following keystrokes should the admi nistrator use to continue running the process in the background?",
    "choices": [
      "<Ctrl+z> bg",
      "<Ctrl+d> bg",
      "<Ctrl+b> jobs -1",
      "<Ctrl+h> bg &"
    ],
    "answer": "A",
    "explanation": "A long-running process is a program that takes a long time to c omplete or runs indefinitely on a Linux \nsystem. A foreground process is a process that runs in the current terminal and receives input from \nthe keyboard and output to the screen. A background process is a process that runs in the \nbackground and does not interact with the terminal. A backgroun d process can continue running \neven if the terminal is closed or disconnected. \nTo start a long-running process in the background, the user can append an ampersand (&) to the command, such as someapp &. This will run someapp in the backgr ound and return control to the \nterminal immediately. To move a long-running process from the foreground to the backg round, the user can use two \nkeystrokes: Ctrl+Z and bg. The Ctr l+Z keystroke will suspend (pause) the foreground process and \nreturn control to the terminal. The bg keystroke will resume (c ontinue) the suspended process in the \nbackground and detach it from the terminal. The statement B is correct. \nThe statements A, C, and D are incorrect because they do not pe rform the desired task. The bg \nkeystroke alone will not work unl ess there is a suspended proce ss to resume. The Ctrl+B keystroke \nwill not suspend the foreground pr ocess, but rather move one ch aracter backward in some \napplications. The jobs keystroke will list all processes associated with the current terminal. The bg & keystroke will cause an error because bg does not take any argu ments. Reference: [How to Run Linux \nProcesses in Background]",
    "type": "mcq"
  },
  {
    "question": "Which of the following would significantly help to reduce data loss if more than one drive fails at the same time?",
    "choices": [
      "Server clustering",
      "Load balancing",
      "RAID",
      "VDI"
    ],
    "answer": "C",
    "explanation": "RAID stands for Redundant Array of Independent Disks, which is a technology that combines multiple \nphysical disks into a logical unit that provides improved perfo rmance, reliability, or both. RAID can \nsignificantly help to reduce data loss if more than one drive fails at the same time, depending on the \nRAID level used. For example, RAID 1 (mirroring) duplicates the data on two or more disks, so that if \none disk fails, the data can be recovered from another disk. RA ID 5 (striping with parity) distributes \nthe data and parity information across three or more disks, so that if one disk fails, the data can be \nreconstructed from the remaining disks. RAID 6 (striping with d ouble parity) extends RAID 5 by \nadding another parity block, so that if two disks fail, the dat a can still be recovered from the \nremaining disks. Reference: [What is RAID?]",
    "type": "mcq"
  },
  {
    "question": "A systems administrator is investigating a service that is not starting up. Given the following information: Which of the following systemd commands should the administrato r use in order to obtain more details about the failing service?",
    "choices": [
      "systemct1 analyze network",
      "systemct1 info network",
      "sysctl -a network",
      "journalctl -xu network"
    ],
    "answer": "D",
    "explanation": "The systemd is a system and service manager for Linux systems t hat provides a standard way to \ncontrol and monitor system services. The systemd uses various c ommands and tools to manage and \ntroubleshoot system services, such as systemct1, sysctl, and jo urnalctl. The systemct1 command is \nused to start, stop, enable, disable, restart, reload, status, and list system services. The sysctl \ncommand is used to configure kernel parameters at runtime. The journalctl command is used to view \nand filter the logs of system services. \nTo investigate a service that is not starting up, the administr ator can use the journalctl command with \nthe -xu option. The -x option enables verbose output that inclu des explanatory text and priority \ninformation. The -u option filters the output by a specific uni t name, such as network.service. \nTherefore, the command journalctl -xu network will show detaile d logs of the network service, which \ncan help identify the cause of the failure. The statement D is correct. \nThe statements A, B, and C are incorrect because they do not pr ovide more details about the failing \nservice. The systemct1 analyze network command does not exist. The systemct1 info \nnetwork command shows basic information about the network unit, such as description, load state, \nactive state, sub state, and main PID. The sysctl -a network co mmand shows all kernel parameters \nrelated to network settings. Reference: [How to Use Systemd to Manage System Services]",
    "type": "mcq"
  },
  {
    "question": "A systems administrator is adding a Linux-based server and remo ving a Windows-based server from a cloud-based environment. The cha nges need to be validated before they are applied to the cloudbased environment. Which of the following tools should be used to mee t this requirement?",
    "choices": [
      "Ansible",
      "git clone",
      "git pull",
      "terraform plan"
    ],
    "answer": "D",
    "explanation": "Terraform is a tool for building, changing, and managing infras tructure as code in a cloud-based \nenvironment. Terraform uses configuration files to describe the desired state of the infrastructure \n\nand applies changes accordingly. Terraform supports various clo ud providers, such as AWS, Azure, \nGoogle Cloud Platform, and more. \nTo validate changes before they are applied to the cloud-based environment, the administrator can \nuse the terraform plan command. This command will compare the c urrent state of the infrastructure \nwith the desired state defined in the configuration files and s how what actions will be performed to \nachieve the desired state. This command will not make any chang es to the infrastructure but only \nshow a plan of changes. The statement D is correct. The statements A, B, and C are incorrect because they do not va lidate changes before they are \napplied to the cloud-based enviro nment. Ansible is another tool for automating infrastructure \nmanagement, but it does not have a plan command. Git clone and git pull are commands for working \nwith git repositories, which are used for version control of co de. Reference: [How to Use Terraform to \nManage Cloud Infrastructure]",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator needs to create a symlink for /usr/local/ bin/app-a, which was installed in /usr/local/share/appa. Which of the following commands should the administrator use?",
    "choices": [
      "In -s /usr/local/bin/app-a /usr/local/share/app-a",
      "mv -f /usr/local/share/app-a /usr/local/bin/app-a",
      "cp -f /usr/local/share/app-a /usr/local/bin/app-a",
      "rsync -a /usr/local/share/app-a /usr/local/bin/app-a"
    ],
    "answer": "A",
    "explanation": "To create a symlink for /usr/local/bin/app-a, which was installed in /usr/local/share/app-a, the administrator can use the command ln -s /usr/local/share/app-a /usr/local/bin/app-a (A). This will \ncreate a symbolic link named /usr/local/bin/app-a that points to the original file \n/usr/local/share/app-a. The other commands will not create a sy mlink, but either move, copy, or \nsynchronize the file. Reference: \n[CompTIA Linux+ Study Guide], Chapter 3: Working with Files, Se ction: Creating Links \n[How to Create Symbolic Links in Linux]",
    "type": "mcq"
  },
  {
    "question": "The group named support is unable to make changes to the config file. An administrator is reviewing the permissions and sees the following: S Is -1 config -rw-rw----. 1 root app 4682 02-15 11:25 config Which of the following should the administrator execute in order to give the support group access to modify the file while preserving the current ownership?",
    "choices": [
      "chown :support config",
      "setfacl -m g:support:rw- config",
      "chmod 664 config",
      "chmod g+s config"
    ],
    "answer": "C",
    "explanation": "To give the support group access to modify the config file whil e preserving the current ownership, \nthe administrator can execute the command chmod 664 config \u00c2\u00a9. This will change the permissions \nof the config file to read and write for the owner and group, a nd read only for others. The owner and \ngroup of the file will remain as root and app respectively. The other commands will not achieve this \ntask, but either change the group ownership, set an access cont rol list, or set a setgid bit. Reference: \n[CompTIA Linux+ Study Guide], Chapter 3: Working with Files, Se ction: Changing File Permissions \n[How to Use chmod Command in Linux]",
    "type": "mcq"
  },
  {
    "question": "A systems administrator receives reports that several virtual machines in a host are responding slower than expected. Upon further investigation, the administr ator obtains the following output from one of the affected systems: Which of the following best explains the reported issue?",
    "choices": [
      "The physical host is running out of CPU resources, leading t o insufficient CPU time being allocated to virtual machines.",
      "The physical host has enough CPU cores, leading to users run ning more processes to compensate for the slower response times.",
      "The virtual machine has enough CPU cycles, leading to the system use percentage being higher than expected.",
      "The virtual machine is running out of CPU resources, leading to users experiencing longer response times."
    ],
    "answer": "D",
    "explanation": "Based on the output from one of the affected systems, the best explanation for the reported issue is \nthat the virtual machine is running out of CPU resources, leading to users experiencing longer \nresponse times (D). The output shows that the system use percen tage is very high (57.85%), \nindicating that the virtual machine is using most of its CPU cy cles for system processes. This leaves \nlittle CPU time for user processes, which results in slower per formance. The other explanations are \nnot supported by the output or ar e contradictory. Reference: \n[CompTIA Linux+ Study Guide], Chapter 8: Optimizing Linux Perfo rmance, Section: Monitoring CPU \nUsage \n[How to Interpret CPU Usage Statistics]",
    "type": "mcq"
  },
  {
    "question": "A cloud engineer wants to delete a ll unused networks that are n ot referenced by any container. Which of the following commands will achieve this goal?",
    "choices": [
      "docker network erase",
      "docker network clear",
      "docker network prune",
      "docker network rm"
    ],
    "answer": "C",
    "explanation": "The docker command is used to manage Docker containers, images, networks, volumes, and other \nresources on a Linux system. Docker is a platform that allows u sers to run applications in isolated \n\nenvironments called containers. Docker also provides networking features that allow users to create \nand manage networks for containers. \nTo delete all unused networks that are not referenced by any co ntainer, the cloud engineer can use \nthe docker network prune command. This command will remove all networks that have no \ncontainers connected to them. The statement C is correct. \nThe statements A, B, and D are incorrect because they do not de lete all unused networks. The docker \nnetwork erase and docker network clear commands do not exist. T he docker network rm command \ndeletes a specific network by name or ID, but not all unused ne tworks. Reference: [How to Manage \nDocker Networks]",
    "type": "mcq"
  },
  {
    "question": "A systems administrator wants to permit access temporarily to a n application running on port 1234/TCP on a Linux server. Which of the following commands will permit this traffic?",
    "choices": [
      "firewall-cmd \"new-service=1234/tcp",
      "firewall-cmd \"service=1234 \"protocol=tcp",
      "firewall-cmd \"add\"port=1234/tcp",
      "firewall-cmd \"add-whitelist-uid=1234"
    ],
    "answer": "C",
    "explanation": "The firewall-cmd command is used to manage firewalld, which is a firewall service for Linux systems \nthat provides dynamic and persis tent configuration of firewall rules. Firewalld uses zones and \nservices to define different levels of trust and access for net work connections. \nTo permit access temporarily to an application running on port 1234/TCP on a Linux server, the systems administrator can use the firewall-cmd --add-port=1234/ tcp command. This command will \nadd a rule to the default zone (usually public) that allows incoming traffic on port 1234/TCP. The rule \nwill only be effective until the next reload or restart of fire walld. To make the rule permanent, the \nadministrator can add the --permanent option to the command. Th e statement C is correct. \nThe statements A, B, and D are incorrect because they do not permit access to port 1234/TCP. The firewall-cmd --new-service=1234/tcp command does not exist. The firewall-cmd --service=1234 - \n-protocol=tcp command does not work because 1234 is not a prede fined service na me in firewalld. \nThe firewall-cmd --add-whitelist-uid=1234 command does not exis t. Reference: [How to Use \nFirewallD to Manage Firewall in Linux]",
    "type": "mcq"
  },
  {
    "question": "The development team wants to prevent a file from being modifie d by all users in a Linux system, including the root account. Which of the following commands can be used to accomplish this objective?",
    "choices": [
      "chmod / app/conf/file",
      "setenforce / app/ conf/ file",
      "chattr +i /app/conf/file",
      "chmod 0000 /app/conf/file"
    ],
    "answer": "C",
    "explanation": "The chattr command is used to change file attributes on Linux s ystems that support extended \nattributes, such as ext2, ext3, ext4, btrfs, xfs, and others. F ile attributes are flags that modify the \nbehavior of files and directories. To prevent a file from being modified by all users in a Linux s ystem, including the root account, the \ndevelopment team can use the chattr +i /app/conf/file command. This command will set the \nimmutable attribute (+i) on the file /app/conf/file, which mean s that the file cannot be deleted, \nrenamed, linked, appended, or written to by any user or process. To remove the immutable \nattribute, the development team can use the chattr -i /app/conf /file command. The statement C is \ncorrect. The statements A, B, and D are incorrect because they do not pr event the file from being modified by \nall users. The chmod /app/conf/file command does not work becau se it requires an argument to \nspecify the permissions to change. The setenforce /app/conf/file command does not work because it is used to change the SELinux mode, not file attributes. The ch mod 0000 /app/conf/file command \nwill remove all permissions from the file, but it can still be modified by the root account. Reference: \n[How to Use chattr Command in Linux]",
    "type": "mcq"
  },
  {
    "question": "An administrator would like to securely connect to a server and forward port 8080 on a local machine to port 80 on the server. Which of the following commands should the administrator use to satisfy both requirements?",
    "choices": [
      "ssh \"L 8080: localhost:80 admin@server",
      "ssh \"R 8080: localhost:80 admin@server",
      "ssh \"L 80 : localhost:8080 admin@server",
      "ssh \"R 80 : localhost:8080 admin@server"
    ],
    "answer": "A",
    "explanation": "This command will create a local port forwarding, which means t hat connections from the SSH client \nare forwarded via the SSH server, then to a destination server. In this case, the destination server is \nthe same as the SSH server (localhost), and the destination por t is 80. The SSH client will listen on \nport 8080 on the local machine, and any connection to that port will be forwarded to port 80 on the \nserver. This way, the administrator can securely access the web service running on port 80 on the \nserver by using http://localhost:8080 on the local machine. The other options are incorrect because: B) ssh -R 8080:localhost:80 admin@server \nThis command will create a remote port forwarding, which means that connections from the SSH \nserver are forwarded via the SSH client, then to a destination server. In this case, the destination server is the same as the SSH client (localhost), and the destination port is 80. The SSH server will \nlisten on port 8080 on the remote machine, and any connection t o that port will be forwarded to port \n80 on the client. This is not what the administrator wants to do. C) ssh -L 80:localhost:8080 admin@server This command will also create a local port forwarding, but it will use port 80 on the local machine \nand port 8080 on the server. This is not what the administrator wants to do, and it may also fail if \nport 80 is already in use by another service on the local machi ne. \nD) ssh -R admin@server This command is incomplete and invalid. It does not specify any port numbers or destination \naddresses for the remote port forwarding. It will also fail if the SSH server does not allow remote port \nforwarding. \nReference: CompTIA Linux+ Certification Exam Objectives \nHow to Set up SSH Tunneling (Port Forwarding)",
    "type": "mcq"
  },
  {
    "question": "The administrator comptia is not able to perform privileged fun ctions on a newly deployed system. Given the following command outputs: Which of the following is the reason that the administrator is unable to perform the assigned duties?",
    "choices": [
      "The administrator needs a password reset.",
      "The administrator is not a part of the correct group.",
      "The administrator did not update the sudo database.",
      "The administrator's credentials need to be more complex."
    ],
    "answer": "B",
    "explanation": "The reason that the administrator is unable to perform the assi gned duties is because the \nadministrator is not a part of the correct group. This is optio n B. \nBased on the image that you sent, I can see that the user compt ia has a user ID and a group ID of \n1000, and belongs to only one group, which is also comptia. How ever, the sudoers file, which defines \nthe permissions for users to r un commands as root or other user s, does not include the comptia \ngroup in any of the entries. Therefore, the user comptia cannot use sudo to perform privileged \nfunctions on the system. The other options are incorrect because: \nA) The administrator needs a password reset. \n\nThis is not true, because the password aging information for th e user comptia shows that the \npassword was last changed on Oct 24, 2023, and it does not expi re until Jan 22, 2024. There is no \nindication that the password is locked or expired. \nC) The administrator did not update the sudo database. \nThis is not necessary, because the sudo database is automatically updated whenever the sudoers file is modified. There is no separate command to update the sudo da tabase. \nD) The administrators credentials need to be more complex. \nThis is not relevant, because the complexity of the credentials does not affect the ability to use sudo. \nThe sudoers file does not specify any password policy for the u sers or groups that are allowed to use \nsudo.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator intends to start using KVM on a Linux ser ver. Which of the following commands will allow the administrator to load the KVM module as well as any related dependencies?",
    "choices": [
      "modprobe kvm",
      "insmod kvm",
      "depmod kvm",
      "hotplug kvm"
    ],
    "answer": "A",
    "explanation": "This command will load the KVM module as well as any related de pendencies, such as kvm-intel or \nkvm-amd, depending on the processor type. The modprobe command is a Linux utility that reads the \n/etc/modules.conf file and adds or removes modules from the ker nel. It also resolves any \ndependencies between modules, so that they are loaded in the co rrect order. \nThe other options are incorrect because: B) insmod kvm \nThis command will only load the KVM module, but not any related dependencies. The insmod \ncommand is a low-level Linux utility that inserts a single modu le into the kernel. It does not resolve \nany dependencies between modules, so they have to be loaded man ually. \nC) depmod kvm \nThis command will not load the KVM module at all, but only crea te a list of module dependencies for \nmodprobe to use. The depmod command is a Linux utility that sca ns the installed modules and \n\ngenerates a file called modules.dep that contains dependency in formation for each module. \nD) hotplug kvm \nThis command is invalid and does not exist. The hotplug mechani sm is a feature of the Linux kernel \nthat allows devices to be added or removed while the system is running. It does not have anything to \ndo with loading modules.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator received a request to change a user's c redentials. Which of the following commands will grant the request?",
    "choices": [
      "sudo passwd",
      "sudo userde 1",
      "sudo chage",
      "sudo usermod"
    ],
    "answer": "A",
    "explanation": "This command will allow the systems administrator to change the password of another user account \nin the system. The sudo prefix will grant the administrator the necessary privileges to perform this \naction, and the passwd command will prompt for the new password for the specified user. For \nexample, if the administrator wants to change the password of a user named tom, the command will \nlook like this: sudo passwd tom \nThe other options are incorrect because: B) sudo userdel This command will delete a user account from the system, not ch ange its credentials. The userdel \ncommand removes the users entry from the /etc/passwd and /etc/shadow files, as well as deletes \nthe users home directory and mail spool. This is not what the r equest asked for. \nC) sudo chage This command will change the password expiration and aging info rmation for a user account, not its \ncredentials. The chage command can be used to set or modify var ious parameters related to \npassword aging, such as the minimum and maximum number of days between password changes, \nthe number of days before password expiration to issue a warnin g, and so on. This is not what the \nrequest asked for. \nD) sudo usermod \nThis command will modify various attributes of a user account, such as its login name, home \n\ndirectory, default shell, primary group, and so on. However, it cannot change the users password \ndirectly. To do that, the usermod command requires the -p option followed by an encrypted \npassword string, which is not easy to generate manually. Theref ore, this is not a practical way to \nchange a users credentials. Reference: \nHow to Change Account Passwords on Linux \nHow to Change a Password in Linux for Root and Other Users CompTIA Linux+ Certification Exam Objectives",
    "type": "mcq"
  },
  {
    "question": "Application code is stored in Git. Due to security concerns, th e DevOps engineer does not want to keep a sensitive configuration file, app . conf, in the repository. Which of the following should the engineer do to pr event the file from being uploaded to the repository?",
    "choices": [
      "Run git exclude app. conf.",
      "Run git stash app. conf.",
      "Add app . conf to . exclude.",
      "Add app . conf to . gitignore."
    ],
    "answer": "D",
    "explanation": "This will prevent the file app.conf from being tracked by Git a nd uploaded to the repository. The \n.gitignore file is a special file that contains patterns of fil es and directories that Git should ignore. Any \nfile that matches a pattern in the .gitignore file will not be staged, committed, or pushed to the \nremote repository. The .gitignore file should be placed in the root directory of the repository and \ncommitted along with the other files. The other options are incorrect because: \nA) Run git exclude app.conf This is not a valid Git command. There is no such thing as git exclude. The closest thing is git updateindex \n--assume-unchanged, which tells Git to temporarily ignore chang es to a file, but it does not \nprevent the file from being uploaded to the repository. \nB) Run git stash app.conf \nThis will temporarily save the changes to the file app.conf in a stash, which is a hidden storage area \nfor uncommitted changes. However, this does not prevent the file from being tracked by Git or \nuploaded to the repository. The file will still be part of the working tree and the index, and it will be \n\nrestored when the stash is popped or applied. \nC) Add app.conf to .exclude This will have no effect, becau se Git does not recognize a file named .exclude. The only files that Git \nuses to ignore files are .gitignore, $GIT_DIR/info/exclude, and core.excludesFile. \nReference: \nGit - gitignore Documentation \n.gitignore file - ignoring files in Git | Atlassian Git Tutoria l \nIgnoring files - GitHub Docs \n[CompTIA Linux+ Certification Exam Objectives]",
    "type": "mcq"
  },
  {
    "question": "A systems administrator is working on a security report from th e Linux servers. Which of the following commands can the administrator use to display all the firewall rules applied to the Linux servers? (Select two).",
    "choices": [
      "ufw limit",
      "iptables \"F",
      "systemct1 status firewalld",
      "firewall\"cmd \"\"1ist\"a11 E. ufw status F. iptables \"A"
    ],
    "answer": "D",
    "explanation": "E \n \nExplanation: These commands can display all the firewall rules applied to the Linux servers, depending on which firewall service is being used. The firewall-cmd command is a utility for managing firewalld, which is a dynamic firewall service that \nsupports zones and services. The --list-all option will show al l the settings and rules for the default \nzone, or for a specific zone if specified. For example, firewal l-cmd --list-all --zone=public will show the \nrules for the public zone1. The ufw command is a frontend fo r iptables, which is a low-leve l tool for manipulating netfilter, the \nLinux kernels packet filtering fra mework. The status option will show the status of ufw and the \nactive rules, or the numbered rules if verbose is specified. Fo r example, ufw status verbose will show \nthe numbered rules and other information2. \nThe other options are incorrect because: \nA) ufw limit \n\nThis command will limit the connection attempts to a service or port using iptables recent module. It \ndoes not display any firewall rules2. \nB) iptables -F \nThis command will flush (delete) all the rules in the selected chain, or all chains if none is given. It \ndoes not display any firewall rules3. C) systemctl status firewalld \nThis command will show the status of the firewalld service, inc luding whether it is active or not, but \nit does not show the firewall rules4. \nF) iptables -A \nThis command will append one or more rules to the end of the selected chain. It does not display any \nfirewall rules3.",
    "type": "mcq"
  },
  {
    "question": "An administrator needs to make an application change via a scri pt that must be run only in console mode. Which of the following best represents the sequence the a dministrator should execute to accomplish this task?",
    "choices": [
      "systemct1 isolate multi-user.target sh script.sh systemct1 isolate graphical.target",
      "systemct1 isolate graphical.target sh script.sh systemct1 isolate multi-user.target",
      "sh script.sh systemct1 isolate multi-user.target systemct1 isolate graphical.target",
      "systemct1 isolate multi-user.target systemct1 isolate graphical.target sh script.sh"
    ],
    "answer": "A",
    "explanation": "The correct answer is \nA. systemctl isolate multi-user.target sh script.sh systemctl i solate \ngraphical.target \nThis sequence will allow the administrator to switch from the g raphical mode to the console mode, \n\nrun the script, and then switch back to the graphical mode. \nThe systemctl command is used to control the systemd system and service manager, which manages the boot targets and services on Linux systems. The isolate subcommand starts the unit specified on \nthe command line and its dependencies and stops all others. The multi-user.target is a boot target \nthat provides a text-based console login, while the graphical.target is a boot target that provides a graphical user interface. By using systemctl isolate, the administrator can change the boot target on \nthe fly without rebooting the system. The sh command is used to run a shell script, which is a file t hat contains a series of commands that \ncan be executed by the shell. The script.sh is the name of the script that contains the application \nchange that the administrator needs to make. By running sh script.sh, the administrator can execute \nthe script in the console mode. \nThe other options are incorrect because: B) systemctl isolate graphical.target sh script.sh systemctl isolate multi-user.target \nThis sequence will switch from the console mode to the graphical mode, run the script, and then \nswitch back to the console mode. This is not what the administr ator wants to do, as the script must \nbe run only in console mode. \nC) sh script.sh systemctl isolat e multi-user.target systemctl i solate graphical.target \nThis sequence will run the script in the current mode, which ma y or may not be console mode, and \nthen switch to console mode and back to graphical mode. This is not what the administrator wants to \ndo, as the script must be run only in console mode. \nD) systemctl isolate multi-user.target systemctl isolate graphi cal.target sh script.sh \nThis sequence will switch from graphical mode to console mode and then back to graphical mode, without running the script at all. This is not what the adminis trator wants to do, as the script must be \nrun only in console mode. Reference: systemctl(1) - Linux manual page How to switch between the CLI and GUI on a Linux server How to PROPERLY boot into single user mode in RHEL/CentOS 7 \nChanging Systemd Boot Target in Linux \nExit Desktop to Terminal in Ubuntu 19.10",
    "type": "mcq"
  },
  {
    "question": "An administrator created an initial Git repository and uploaded the first files. The administrator sees the following when listing the repository: The administrator notices the file . DS STORE should not be inc luded and deletes it from the online repository. Which of the following should the administrator run from the root of the local repository before the next commit to ensure the file is not uploaded again in future commits?",
    "choices": [
      "rm -f .DS STORE && git push",
      "git fetch && git checkout .DS STORE",
      "rm -f .DS STORE && git rebase origin main",
      "echo .DS STORE >> .gitignore"
    ],
    "answer": "D",
    "explanation": "The correct answer is D. The adm inistrator should run \u0153echo .DS STORE >> .gitignore from the root \nof the local repository before the next commit to ensure the fi le is not uploaded again in future \ncommits. This command will append the file name .DS STORE to the end of the .gitignore file, which is a special \nfile that tells Git to ignore certain files or directories that should not be tracked or uploaded to the \nrepository. By adding .DS STORE to the .gitignore file, the adm inistrator will prevent Git from staging, \ncommitting, or pushing this file in the future. \nThe other options are incorrect because: \nA) rm -f .DS STORE && git push \nThis command will delete the file .DS STORE from the local repo sitory and then push the changes to \nthe remote repository. However, this does not prevent the file from being uploaded again in future \ncommits, if it is recreated or copied to the local repository. B) git fetch && git checkout .DS STORE \nThis command will fetch the latest changes from the remote repo sitory and then restore the file .DS \nSTORE from the remote repository to the local repository. This is not what the administrator wants to \ndo, as this will undo the deletion of the file from the online repository. \n\nC) rm -f .DS STORE && git rebase origin main \nThis command will delete the file .DS STORE from the local repo sitory and then rebase the local \nbranch onto the main branch of the remote repository. This will rewrite the commit history of the \nlocal branch and may cause conflicts or errors. This is not wha t the administrator wants to do, as this \nis a risky and unnecessary operation.",
    "type": "mcq"
  },
  {
    "question": "Users are unable to create new files on the company's FTP server, and an administrator is troubleshooting the issue. The administrator runs the following commands: Which of the following is the cause of the issue based on the o utput above?",
    "choices": [
      "The users do not have the corre ct permissions to create file s on the FTP server.",
      "The ftpusers filesystem does not have enough space.",
      "The inodes is at full capacity and would affect file creatio n for users.",
      "ftpusers is mounted as read only."
    ],
    "answer": "C",
    "explanation": "The cause of the issue based on the output above is C. The inod es is at full capacity and would affect \nfile creation for users. \n\nAn inode is a data structure tha t stores information about a fi le or directory, such as its name, size, \npermissions, owner, timestamps, and location on the disk. Each file or directory has a unique inode \nnumber that identifies it. The number of inodes on a filesystem is fixed when the filesystem is \ncreated, and it determines how many files and directories can b e created on that filesystem. If the \ninodes are exhausted, no new files or directories can be create d, even if there is enough disk space \navailable. \nThe output for the second command shows that the /ftpusers/ fil esystem has 0% of inodes available, \nwhich means that all the inodes have been used up. This would p revent users from creating new files \non the FTP server. The administrator should either delete some unused files or directories to free up \nsome inodes, or resize the filesystem to increase the number of inodes. \nThe other options are incorrect because: \nA) The users do not have the correct permissions to create file s on the FTP server. \nThis is not true, because the output for the first command show s that the /ftpusers/ filesystem has \n26% of disk space available, which means that there is enough s pace for users to create files. The \npermissions of the files and directories are not shown in the o utput, but they are not relevant to the \nissue of inode exhaustion. \nB) The ftpusers filesystem does not have enough space. \nThis is not true, because the output for the first command show s that the /ftpusers/ filesystem has \n26% of disk space available, which means that there is enough space for users to create files. The issue is not related to disk space, but to inode capacity. D) ftpusers is mounted as read only. \nThis is not true, because the output for the first command does not show any indication that the \n/ftpusers/ filesystem is mounted as read only. If it was, it wo uld have an (ro) flag next to the mounted \non column. A read only filesystem would prevent users from crea ting or modifying files on the FTP \nserver, but it would not affect the inode usage.",
    "type": "mcq"
  },
  {
    "question": "An administrator added the port 2222 for the SSH server on myho st and restarted the SSH server. The administrator noticed issues during the startup of the service. Given the following outputs: Which of the following commands will fix the issue?",
    "choices": [
      "se manage port -a -t ssh_port_t -p tcp 2222",
      "ch con system_u:object_r:ssh_home_t /et c/ssh/*",
      "i ptables -A INPUT -p tcp -- dport 2222 -j ACCEP T",
      "firewall -cmd -- zone=public -- add-port=2222/tcp"
    ],
    "answer": "A",
    "explanation": "The correct answer is \n\nA) semanage port -a -t ssh_port_t -p tcp 2222 \nThis command will allow the SSH server to bind to port 2222 by adding it to the SELinux policy. The \nsemanage command is a utility for managing SELinux policies. The port subcommand is used to \nmanage network port definitions. The -a option is used to add a new record, the -t option is used to \nspecify the SELinux type, the -p option is used to specify the protocol, and the tcp 2222 argument is \nused to specify the port number. The ssh_port_t type is the def ault type for SSH ports in SELinux. \nThe other options are incorrect because: B) chcon system_u:object_r:ssh_home_t /etc/ssh/* \nThis command will change the SELinux context of all files under /etc/ssh/ to \nsystem_u:object_r:ssh_home_t, which is not correct. The ssh_hom e_t type is used for user home \ndirectories that are accessed by SSH, not for SSH configuration files. The correct type for SSH \nconfiguration files is sshd_config_t. \nC) iptables -A INPUT -p tcp --dport 2222 -j ACCEPT \nThis command will add a rule to the iptables firewall to accept incoming TCP connections on port \n2222. However, this is not enough to fix the issue, as SELinux will still block the SSH server from \nbinding to that port. Moreover, iptables may not be the default firewall service on some Linux \ndistributions, such as Fedora or CentOS, which use firewalld in stead. \nD) firewall-cmd --zone=public --add-port=2222/tcp This command will add a rule to the firewalld firewall to allow incoming TCP connections on port \n2222 in the public zone. However, this is not enough to fix the issue, as SELinux will still block the SSH \nserver from binding to that port. Moreover, firewalld may not b e installed or enabled on some Linux \ndistributions, such as Ubuntu or Debian, which use iptables ins tead. \nReference: \nHow to configure SSH to use a non-standard port with SELinux se t to enforcing \nChange SSH Port on CentOS/RHEL/Fedora With SELinux Enforcing How to change SSH port when SELinux policy is enabled",
    "type": "mcq"
  },
  {
    "question": "A DevOps engineer is working on a local copy of a Git repository. The engineer would like to switch from the main branch to the staging branch but notices the stag ing branch does not exist. Which of the following Git commands should the engineer use to perform this task?",
    "choices": [
      "git branch \"m staging",
      "git commit \"m staging",
      "git status \"b staging",
      "git checkout \"b staging"
    ],
    "answer": "D",
    "explanation": "The correct answer is D. g it checkout -b staging \nThis command will create a new branch named staging and switch to it. The git checkout command is \nused to switch between branches or restore files from a specifi c branch. The -b option is used to \ncreate a new branch if it does not exist. For example, git checkout -b staging will create and switch to \nthe staging branch. \nThe other options are incorrect because: \nA) git branch -m staging \nThis command will rename the current branch to staging, not swi tch to it. The git branch command is \nused to list, create, or delete branches. The -m option is used to rename a branch. For example, git \nbranch -m staging will rename the current branch to staging. B) git commit -m staging This command will commit the changes in the working tree to the current branch with a message of \nstaging, not switch to it. The git commit command is used to re cord changes to the repository. The - \nm option is used to specify a commit message. For example, git commit -m staging will commit the \nchanges with a message of staging. C) git status -b staging This command will show the status of the working tree and the c urrent branch, not switch to it. The \ngit status command is used to sh ow the state of the working tre e and the staged changes. The -b \noption is used to show the name of the current branch. However, this option does not take an \nargument, so specifying staging after it will cause an error. Reference: Git - git-checkout Documentation Git Tutorial: Create a New Branch With Git Checkout \nGit Branching - Basic Branching and Merging",
    "type": "mcq"
  },
  {
    "question": "The group owner of the / home/ t est directory would like to pre serve all group permissions on files created in the directory. Which of the following commands should the group owner execute?",
    "choices": [
      "chmod g+s /home/test",
      "chgrp test /home/test",
      "chmod 777 /home/test",
      "chown \"hR test /home/test"
    ],
    "answer": "A",
    "explanation": "The correct answer is \nA) chmod g+s /home/test This command will set the setgid bit on the /home/test director y, which means that any file or \nsubdirectory created in the directory will inherit the group ownership of the directory. This way, the group permissions on files created in the directory will be pre served. The chmod command is used to \nchange the permissions of files and directories. The g+s option is used to set the setgid bit for the \ngroup. The other options are incorrect because: \nB) chgrp test /home/test \nThis command will change the group ownership of the /home/test directory to test, but it will not \naffect the group ownership of files created in the directory. T he chgrp command is used to change \nthe group of files and directories. The test /home/test argumen ts are used to specify the new group \nand the target directory. \nC) chmod 777 /home/test \nThis command will give read, write, and execute permissions to everyone (owner, group, and others) \non the /home/test directory, but it will not affect the group o wnership or permissions of files created \nin the directory. The chmod command is used to change the permi ssions of files and directories. The \n777 argument is an octal number that represents the permissions in binary form. \nD) chown -hR test /home/test This command will change the owner and group of the /home/test directory and all its contents recursively to test, but it will not preserve the original grou p permissions on files created in the \ndirectory. The chown command is used to change the owner and gr oup of files and directories. The - \nhR option is used to affect symbolic links and operate on all f iles and directories recursively. The test \n/home/test arguments are used to specify the new owner and grou p and the target directory. \nReference: How to Set File Permissions Using chmod \nHow to Use Chmod Command in Linux with Examples \nHow to Use Chown Command in Linux with Examples \n[How to Use Chgrp Command in Linux with Examples]",
    "type": "mcq"
  },
  {
    "question": "A systems engineer has deployed a new application server, but t he server cannot communicate with the backend database hostname. The engineer confirms that the a pplication server can ping the database server's IP address. Which of the following is the mos t likely cause of the issue?",
    "choices": [
      "Incorrect DNS servers",
      "Unreachable default gateway",
      "Missing route configuration",
      "Misconfigured subnet mask"
    ],
    "answer": "A",
    "explanation": "This is because the application server can ping the database se rvers IP address, but not its \nhostname, which suggests that the DNS resolution is not working properly. DNS servers are \nresponsible for translating hostn ames into IP addresses, and vi ce versa. If the application server has \nincorrect or unreachable DNS servers configured, it will not be able to resolve the hostname of the \ndatabase server and communicate with it. \nTo troubleshoot this issue, the systems engineer should check the DNS configuration on the \napplication server, which is usually stored in the /etc/resolv.conf file. This file should contain valid \nnameserver entries that point t o the DNS servers that can resolve the database servers hostname. \nFor example, a typical /etc/resolv.conf file may look like this: \nnameserver 8.8.8.8 nameserver 8.8.4.4 \nThese are the IP addresses of Googles public DNS servers, which can be used as a fallback option if \nthe default DNS servers are not working. Alternatively, the systems engineer can use the nslookup or dig commands to test the DNS resolution \nof the database servers hostname from the application server. These commands will query a \nspecified DNS server and return the IP address of the hostname, or an error message if the resolution \nfails. For example, to query Googles public DNS server for the IP address of comptia.org, the \ncommand would be: \nnslookup comptia.org 8.8.8.8 \nor dig comptia.org @8.8.8.8",
    "type": "mcq"
  },
  {
    "question": "A systems administrator is tasked with changing the default she ll of a system account in order to disable iterative logins. Which of the following is the best option for the administrator to use as the new shell?",
    "choices": [
      "/sbin/nologin",
      "/bin/ sh",
      "/sbin/ setenforce",
      "/bin/bash"
    ],
    "answer": "A",
    "explanation": "The /sbin/nologin shell is a special shell that prevents the us er from logging into an interactive \nsession. It is commonly used for system accounts that are not meant to be accessed by users, such as daemon or service accounts. When a user tries to log in with th is shell, they will see a message like \n\u0153This account is currently not available and the login will fail. \nReference: The /sbin/nologin shell is listed as one of the valid shells in the /etc/shells file1. \nThe CompTIA Linux+ Certification Exam Objectives mention that t he candidate should be able to \n\u0153configure and manage system accounts and groups, including pas sword aging and restricted shells \nas part of the Hardware and System Configuration domain2. \nThe usermod command can be used to change the users login shell with the -s or --shell option3. For \nexample, to change the shell of a user named daemon to /sbin/no login, the command would \nbe: sudo usermod -s /sbin/nologin daemon",
    "type": "mcq"
  },
  {
    "question": "An administrator needs to increase the system priority of a pro cess with PID 2274. Which of the following commands should the administrator use to accomplish this task?",
    "choices": [
      "renice \"n \"15 2274",
      "nice -15 2274",
      "echo \"\"15\" > /proc/PID4/priority",
      "ps \"ef I grep 2274"
    ],
    "answer": "A",
    "explanation": "The renice command is used to change the priority of a running process by specifying its PID and the new nice value. The -n flag indi cates the amount of change in t he nice value, which can be positive or \nnegative. A lower nice value means a higher priority, so -15 wi ll increase the priority of the process \n\nwith PID 2274. The administrator needs to have root privileges to do this. \nReference: \nThe renice command is listed as one of the commands to manipula te process priority in the web \nsearch result 1. The renice command is also explained with examples in the web s earch result 2. \nThe CompTIA Linux+ Certification Exam Objectives mention that t he candidate should be able to \n\u0153manage process execution priorities as part of the System Operation and Maintenance domain1.",
    "type": "mcq"
  },
  {
    "question": "A junior systems administrator recently installed an HBA card i n one of the servers that is deployed for a production environment. Which of the following commands can the administrator use to confirm on which server t he card was installed?",
    "choices": [
      "lspci | egrep 'hba| fibr'",
      "lspci | zgrep 'hba | fibr'",
      "lspci | pgrep 'hba| fibr'",
      "lspci | 'hba | fibr'"
    ],
    "answer": "A",
    "explanation": "The best command to use to confirm on which server the HBA card was installed is \nA). lspci | egrep \u02dchba| fibr. This command will list all the PCI devices on the server and filter the output for those that match the pattern \u02dchba or \u02dcfibr, which ar e likely to be related to the HBA card. \nThe egrep command is a variant of grep that supports extended r egular expressions, which allow the \nuse of the \u02dc| operator for altern ation. The other commands are either invalid or will not produce the \ndesired output. For example: \nB) lspci | zgrep \u02dchba | fibr will try to use zgrep, which is a command for searching compressed files, \nnot standard output. \nC) lspci | pgrep \u02dchba| fibr will try to use pgrep, which is a c ommand for finding processes by name or \nother attributes, not text patterns. \nD) lspci | \u02dchba | fibr will try to use \u02dchba | fibr as a command, which is not valid and will cause an \nerror.",
    "type": "mcq"
  },
  {
    "question": "Users in the human resources department are trying to access files in a newly created directory. Which of the following commands will allow the users access to the files?",
    "choices": [
      "chattr",
      "chgrp",
      "chage",
      "chcon"
    ],
    "answer": "B",
    "explanation": "The chgrp command is used to change the group ownership of file s and directories. By using this \ncommand, the administrator can assign the files in the newly cr eated directory to the human \nresources group, which will allow the users in that group to ac cess them. The other commands are \nnot relevant for this task. For example: \nchattr is used to change the file attributes, such as making th em immutable or append-only1. \nchage is used to change the password expiration information for a user account2. \nchcon is used to change the security context of files and direc tories, which is related to SELinux3. \nReference: \nThe CompTIA Linux+ Certification Exam Objectives mention that t he candidate should be able to \n\u0153manage file and directory ownership and permissions as part of the Ha rdware and System \nConfiguration domain4. The web search result 2 explains how to use the chgrp command w ith examples. \nThe web search result 3 compares the chmod and chgrp commands a nd their effects on file \npermissions.",
    "type": "mcq"
  },
  {
    "question": "A User on a Linux workstation needs to remotely start an applic ation on a Linux server and then forward the graphical display of that application back to the L inux workstation. Which of the following would enable the user to perform this action?",
    "choices": [
      "ssh -X user@server application",
      "ssh -y user@server application",
      "ssh user@server application",
      "ssh -D user@server application"
    ],
    "answer": "A",
    "explanation": "The ssh -X option enables X11 forwarding, which allows the user to run graphical applications on the \nremote server and display them on the local workstation. The us er needs to specify the username, \nthe server address, and the applic ation name after the ssh -X command. The remote server also \nneeds to have X11Forwarding enabled and xauth installed for thi s to work. \nReference: \nThe web search result 8 explains how to run a GUI application t hrough SSH by configuring both the \nSSH client and server. \nThe web search result 6 provides a detailed answer on how to fo rward X over SSH to run graphics \napplications remotely, with examples and troubleshooting tips. The CompTIA Linux+ Certification Exam Objectives mention that t he candidate should be able to \n\u0153use SSH for remote access and management as part of the System Operation and Maintenance \ndomain1.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator is creating a new sudo profile for the accounting user. Which of the following should be added by the administrator to the sudo configuration file so that the accounting user can run / opt/ a cc/ report as root?",
    "choices": [
      "accounting localhost=/opt/acc/report",
      "accounting ALL=/opt/acc/report",
      "%accounting ALL=(ALL) NOPASSWD: /opt/acc/report",
      "accounting /opt/acc/repor t= (ALL) NOPASSWD: ALL"
    ],
    "answer": "C",
    "explanation": "This answer allows the accounting user to run the /opt/acc/repo rt command as root on any host \nwithout entering a password. The % sign indicates that accounti ng is a group name, not a user name. \nThe ALL keyword means any host, any user, and any command, depending on the context. The NOPASSWD tag overrides the default behavior of sudo, which is t o ask for the users password. \nThe other answers are incorrect for the following reasons: \nA) accounting localhost=/opt/acc/report \nThis answer only allows the accounting user to run the command on the localhost, not on any host. \nThis answer also requires the accounting user to enter their pa ssword, which is not specified in the \nquestion. B) accounting ALL=/opt/acc/report \nThis answer only allows the accounting user to run the command as themselves, not as root. \n\nThis answer also requires the accounting user to enter their pa ssword, which is not specified in the \nquestion. \nD) accounting /opt/acc/report= (ALL) NOPASSWD: ALL \nThis answer has an invalid syntax, as there should be no space between the equal sign and the \nparentheses. This answer also grants too much privilege to the accounting us er, as it allows them to run any \ncommand as any user without a password.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator is trying to track down a rogue process that has a TCP listener on a network interface for remote command-and-control instructions. Which of the following commands should the systems administrato r use to generat e a list of rogue process names? (Select two).",
    "choices": [
      "netstat -antp | grep LISTEN",
      "lsof -iTCP | grep LISTEN",
      "lsof -i:22 | grep TCP",
      "netstat -a | grep TCP E. nmap -p1-65535 | grep -i tcp F. nmap -sS 0.0.0.0/0"
    ],
    "answer": "A",
    "explanation": "B \n \nExplanation: \nThe best commands to use to generate a list of rogue process names that have a TCP listener on a network interface are A. netstat -antp | grep LISTEN and B. lsof -iTCP | grep LISTEN. These commands \nwill show the process ID (PID) and name of the processes that a re listening on TCP ports, which can \nbe used to identify any suspicious or unauthorized processes. The other commands are either not specific enough, not valid, or not relevant for this task. For example: \nC) lsof -i:22 | grep TCP will onl y show the processes that are listening on port 22, which is typically \nused for SSH, and not any other ports. D) netstat -a | grep TCP will show all the TCP connections, bot h active and listening, but not the \nprocess names or IDs. E) nmap -p1-65535 | grep -i tcp will scan all the TCP ports on the local host, but not show the process \nnames or IDs. \n\nF) nmap -sS 0.0.0.0/0 will perform a stealth scan on the entire internet, which is not only impractical, \nbut also illegal in some countries.",
    "type": "mcq"
  },
  {
    "question": "An administrator would like to list all current containers, reg ardless of their running state. Which of the following commands would allow the administrator to accompl ish this task?",
    "choices": [
      "docker ps -a",
      "docker list",
      "docker image ls",
      "docker inspect image"
    ],
    "answer": "A",
    "explanation": "The best command to use to list all current containers, regardl ess of their running state, is \nA) docker ps -a. This command will show all containers, both ru nning and stopped, with details such \nas container ID, image name, status, and ports. The other comma nds are either invalid or not \nrelevant for this task. For example: B) docker list is not a valid command. There is no subcommand n amed list in docker. \nC) docker image ls will list all the images available on the lo cal system, not the containers. \nD) docker inspect image will show detailed information about a specific image, not all the containers.",
    "type": "mcq"
  },
  {
    "question": "An administrator has source code and needs to rebuild a kernel module. Which of the following command sequences is most commonly used to rebuild this type of module?",
    "choices": [
      "./configure make make install",
      "wget gcc cp",
      "tar xvzf build cp",
      "build install configure"
    ],
    "answer": "A",
    "explanation": "The best command sequence to rebuild a kernel module from sourc e code is \nA. ./configure make make install. This is the standard way to compile and install a Linux kernel module, as explained in \nthe web search result 5. The oth er commands are either not rele vant, not valid, or not sufficient for \nthis task. For example: B) wget gcc cp will try to download, compile, and copy a file, but it does not specify the source code, \nthe module name, or the destination directory. C) tar xvzf build cp will try to extract, build, and copy a com pressed file, but it does not specify the file \nname, the module name, or the destination directory. \nD) build install configure will try to run three commands that are not defined or recognized by the \nLinux shell.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator is trying to start the database service o n a Linux server but is not able to run it. The administrator executes a few commands and receives the foll owing output: Which of the following should the administrator run to resolve this issue? (Select two).",
    "choices": [
      "systemctl unmask mariadb",
      "journalctl \"g mariadb",
      "dnf reinstall mariadb",
      "systemctl start mariadb E. chkconfig mariadb on F. service mariadb reload"
    ],
    "answer": "A",
    "explanation": "D \nExplanation: \nThese commands will unmask the mariadb service, which is curren tly prevented from starting, and \nthen start it normally. The other commands are either not relev ant, not valid, or not s ufficient for this \ntask. For more information on how to manage masked services wit h systemctl, you can refer to the \nweb search result 1.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator is troubleshooting an issue in which user s are not able to access https://portal.comptia.org from a specific workstation. The administrator runs a few commands and receives the following ou tput: Which of the following tasks should the administrator perform t o resolve this issue?",
    "choices": [
      "Update the name server in resolv. conf to use an external DN S server.",
      "Remove the entry for portal . comptia.org from the local hosts file.",
      "Add a network route from the 10.10.10.0 to the 192.168.0.0.",
      "Clear the local DNS cache on the workstation and rerun the host command."
    ],
    "answer": "B",
    "explanation": "The best task to perform to resolve this issue is B. Remove the entry for portal.comptia.org from the \nlocal hosts file. This is because the local hosts file has a wr ong entry that maps portal.comptia.org to \n10.10.10.55, which is different from the actual IP address of 192.168.1.55 that is returned by the DNS \nserver. This causes a mismatch and prevents the workstation fro m accessing the website. By \nremoving or correcting the entry in the hosts file, the worksta tion will use the DNS server to resolve \nthe domain name and access the website successfully. To remove or edit the entry in the hosts file, you need to have root privileges and use a text editor \nsuch as vi or nano. For example, you can run the command: \nsudo vi /etc/hosts \nand delete or modify the line that says: \n10.10.10.55 portal.comptia.org Then save and exit the file.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator needs to transfer a local file named accounts . pdf to a remote / tmp directory of a server with the IP address 10.10.10.80. Which of the follo wing commands needs to be executed to transfer this file?",
    "choices": [
      "rsync user@10.10.10.80: /tmp accounts.pdf",
      "scp accounts.pdf user@10.10.10.80:/tmp",
      "cp user@10.10.10. 80: /tmp accounts.pdf",
      "ssh accounts.pdf user@10.10.10.80: /tmp"
    ],
    "answer": "B",
    "explanation": "The best command to use to transfer the local file accounts.pdf to the remote /tmp directory of the server with the IP address 10.10.10.80 is B. scp accounts.pdf u ser@10.10.10.80:/tmp. This command \nwill use the secure copy protocol (scp) to copy the file from t he local machine to the remote server \nover SSH. The command requires the username and password of the user on the remote server, as \nwell as the full path of the destination directory. \nThe other commands are either in correct or not suitable for this task. For example: \nA) rsync user@10.10.10.80:/tmp accounts.pdf will try to use the rsync command to synchronize files between the local and remote machines, but it has the wrong syntax and order of arguments. The \nsource should come before the destination, and a colon (:) should separate the remote host and path. \nC) cp user@10.10.10.80:/tmp accounts.pdf will try to use the cp command to copy files, but it does \nnot work over SSH and it has the wrong syntax and order of argu ments. The source should come \nbefore the destination, and a colon (:) should separate the rem ote host and path. \nD) ssh accounts.pdf user@10.10.10.80:/tmp will try to use the ssh command to log into the remote \nserver, but it has the wrong syntax and arguments. The username should come before the remote \nhost, and a file name is not a valid argument for ssh.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator creates a public key for authentication . Which of the following tools is most suitable to use when uploading the key to the remote servers?",
    "choices": [
      "scp",
      "ssh-copy-id",
      "ssh-agent",
      "ssh-keyscan"
    ],
    "answer": "B",
    "explanation": "The best tool to use when uploading the public key to the remot e servers is B. ssh-copy-id. This tool \nwill copy the public key from the local computer to the remote server and append it to the \nauthorized_keys file, which is used for public key authenticati on. This tool will also create the \nnecessary directories and files on the remote server if they do not exist. The other tools are either \nnot suitable or not relevant for this task. For example: \nA) scp is a tool for securely copying files between hosts, but it does not automatically add the public \nkey to the authorized_keys file. C) ssh-agent is a tool for manag ing private keys and passphrase s, but it does not upload the public \nkey to the remote server. \nD) ssh-keyscan is a tool for collecting public keys from remote hosts, but it does not upload the public \nkey to the remote server.",
    "type": "mcq"
  },
  {
    "question": "The application team has reported latency issues that are causing the application to crash on the Linux server. The Linux administrator starts troubleshooting and receives the following output: Which of the following commands will improve the latency issue?",
    "choices": [
      "# echo 'net.core.net_backlog = 5000000' >> /etc/sysctl.conf # sysctl -p # systemctl daemon-reload",
      "# ifdown eth0 # ip link set dev eth0 mtu 800 # ifup eth0",
      "# systemctl stop network # ethtool -g eth0 512 # systemctl start network",
      "# echo 'net.core.rmem max = 12500000' >> /etc/sysctl.conf # echo 'net.core.wmem_max = 12500000' >> /etc/sysctl.conf # sysctl -p"
    ],
    "answer": "D",
    "explanation": "The best command to use to improve the latency issue is D. # ec ho \u02dcnet.core.rmem max = 12500000 \n>> /etc/sysctl.conf # echo \u02dcnet.core.wmem_max = 12500000 >> /etc/sysctl.conf # sysctl -p. This command will increase the size of the receive and send buffers for the network interface, which can \nimprove the network performance and reduce packet loss. The sysctl command will apply the changes to the kernel parameters without rebooting the system. The other commands are either in correct or not suitable for this task. For example: \nA) # echo \u02dcnet.core.net_backlog = 5000000 >> /etc/sysctl.conf # sysctl -p # systemctl daemon-reload will try to increase the backlog queue for incoming connections , but this is not relevant for the \nlatency issue. The systemctl daemon-reload command is also unne cessary, as it only reloads the \nsystemd configuration files, not the kernel parameters. B) # ifdown eth0 # ip link set dev eth0 mtu 800 # ifup eth0 wil l try to change the maximum \ntransmission unit (MTU) of the network interface to 800 bytes, but this is too low and may cause \nfragmentation and performance deg radation. The default MTU for Ethernet is 1500 bytes, and it \nshould not be changed unless there is a specific reason. C) # systemctl stop network # ethtool -g eth0 512 # systemctl s tart network will try to change the ring \nbuffer size of the network interface to 512, but this is too sm all and may cause packet drops and \nlatency spikes. The default ring buffer size for Ethernet is us ually 4096 or higher, and it should be \nincreased if there is a high network traffic.",
    "type": "mcq"
  },
  {
    "question": "An administrator runs ping compti a.org. The result of the comma nd is: ping: comptia.org: Name or service not known Which of the following files should the administrator verify?",
    "choices": [
      "/etc /ethe rs",
      "/et c/servic es",
      "/etc/ resolv.c onf",
      "/etc/s ysctl.conf"
    ],
    "answer": "C",
    "explanation": "The best file to verify when the ping command returns the error \u0153Name or service not known is C. \n/etc/resolv.conf. This file contains the configuration for the DNS resolver, which is responsible for \ntranslating domain names into IP addresses. If this file is missing, corrupted, or has incorrect entries, \nthe ping command will not be able to resolve the domain name an d will fail with the error. To fix this \nissue, the administrator should check that the file exists, has proper permissions, and has valid \nnameserver entries. For example, a typical /etc/resolv.conf fil e may look like this: \nnameserver 8.8.8.8 nameserver 8.8.4.4 \nThese are the IP addresses of Googles public DNS servers, which can be used as a fallback option if \nthe default DNS servers are not working.",
    "type": "mcq"
  },
  {
    "question": "Which of the following should be used to verify the integrity o f a file?",
    "choices": [
      "sh a256 sum",
      "fsck",
      "gpg \"d",
      "hashc at"
    ],
    "answer": "A",
    "explanation": "The best tool to use to verify the integrity of a file is \nA) sha256\nsum. This tool will compute and display the SHA-256 ha sh of a file, which is a 64-dig it\nhe\nxadecimal number that uniquely identifies the files content. By comparing the hash of a\ndownload\ned file with the hash provided by the file owner or sou rce, you can confirm that the file has\nnot been altered or corrupted during the transfer. The other to ols are either not relevan t or not\n\nsuitable for this task. For example: \nB) fsck is a tool for checking and repairing the file system, b ut it does not verify the integrity of \nindividual files. \nC) gpg -d is a tool for decrypting files that have been encrypt ed with GnuPG, but it does not verify the \nintegrity of unencrypted files. D) hashcat is a tool for cracking passwords or hashes, but it d oes not verify the integrity of files.",
    "type": "mcq"
  },
  {
    "question": "A new application container was built with an incorrect version number. Which of the following commands should be used to rename the image to match the correct version 2.1.2?",
    "choices": [
      "docker tag comptia/app:2.1.1 comptia/app:2.1.2",
      "docker push comptia/app:2.1.1 comptia/app:2.1.2",
      "docker rmi comptia/app:2.1.1 comptia/app:2.1.2",
      "docker update comptia/app:2.1.1 comptia/app:2.1.2"
    ],
    "answer": "A",
    "explanation": "The best command to use to rename the image to match the correc t version 2.1.2 is \nA. docker tag \ncomptia/app:2.1.1 comptia/app:2.1.2. This command will create a new tag for the existing image \nwith the new version number, without changing the image content or ID. The other commands are \neither incorrect or not suitable for this task. For example: \nB) docker push comptia/app:2.1.1 comptia/app:2.1.2 will try to push two images to a remote \nrepository, but it does not rename the image locally. C) docker rmi comptia/app:2.1.1 comptia/app:2.1.2 will try to remove two images from the local system, but it does not rename the image. \nD) docker update comptia/app:2.1.1 comptia/app:2.1.2 will try to update the configuration of a \nrunning container, but it does not rename the image.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator wants to prevent the httpd web service from being started both manually and automatically on a server. Which of the following should the ad ministrator use to accomplish this task?",
    "choices": [
      "systemctl mask httpd",
      "systemctl disable httpd",
      "systemctl stop httpd",
      "systemctl reload httpd"
    ],
    "answer": "A",
    "explanation": "The best command to use to prevent the httpd web service from b eing started both manually and \nautomatically on a server is A) systemctl mask httpd. This command will create a symbolic li nk from the httpd service unit file to \n/dev/null, which will make the service impossible to start or enable. This is different from systemctl disable httpd, which will only prevent the service from startin g automatically on boot, but not \nmanually. The other commands are either not relevant or not sufficient for this task. For example: \nC) systemctl stop httpd will only stop the service if it is cur rently running, but it will not prevent it \nfrom being started again. \nD) systemctl reload httpd will only reload the configuration fi les of the service, but it will not stop or \ndisable it.",
    "type": "mcq"
  },
  {
    "question": "A non-privileged user is attempting to use commands that requir e elevated account permissions, but the commands are not successful. Which of the following most li kely needs to be updated?",
    "choices": [
      "/etc/passwd",
      "/etc/shadow",
      "/etc/sudoers",
      "/etc/bashrc"
    ],
    "answer": "C",
    "explanation": "The /etc/sudoers file is used to configure the sudo command, which allows non-privileged users to \nexecute commands that require elevated account permissions1. Th e file contains a list of users and \ngroups that are allowed to use sudo, and the commands they can run with it. The file also defines the \nsecurity policy for sudo, such as whether a password is require d, how long the sudo session lasts, and \nwhat environment variables are preserved or reset. \nThe /etc/passwd file is used to store information about the use r accounts on the system, such as \ntheir username, user ID, home directory, and login shell. The / etc/shadow file is used to store the \n\nencrypted passwords for the user accounts, along with other inf ormation such as password \nexpiration and aging. These files are not directly related to t he sudo command, and updating them \nwill not grant a user elevated account permissions. \nThe /etc/bashrc file is used to set up the environment for the bash shell, such as aliases, functions, \nvariables, and options. This file is executed whenever a new ba sh shell is started, and it affects all \nusers on the system. However, this file does not control the su do command or its configuration, and \nupdating it will not allow a user to use commands that require elevated account permissions.",
    "type": "mcq"
  },
  {
    "question": "An application developer received a file with the following con tent: ##This is a sample Image ## FROM ubuntu:18.04 MAINTAINER demohut@gtmail.com.hac COPY . /app RUN make /app CMD python /app/app.py RUN apt-get update RUN apt-get install -y nginx CMD [\"echo\",\"Image created\"] The developer must use this information to create a test bed en vironment and identify the image (myimage) as the first version for testing a new application before moving it to production. Which of the follow ing commands will accomplish this task?",
    "choices": [
      "docker build -t myimage:1.0 .",
      "docker build -t myimage: .",
      "docker build -t myimage-1.0 .",
      "docker build -i myimage:1.0 ."
    ],
    "answer": "A",
    "explanation": "The docker build command is used to build an image from a Docke rfile and a context1. The \nDockerfile is a text file that contains the instructions for cr eating the image, and the context is a set of \nfiles that can be used in the image creation process1. The file that the developer received is an \nexample of a Dockerfile. \nThe -t option is used to specify a name and an optional tag for the image1. The name and tag are \n\nseparated by a colon (:), and the tag is usually used to indicate the version of the image2. For \nexample, -t myimage:1.0 means that the image will be named myim age and tagged as 1.0. \nThe last argument of the docker build command is the path to th e context, which can be a local \ndirectory or a URL1. The dot (.) means that the current working directory is the context2. Therefore, \ndocker build -t myimage:1.0 . means that the image will be buil t from the Dockerfile and the files in \nthe current working directory, and it will be named myimage and tagged as 1.0.",
    "type": "mcq"
  },
  {
    "question": "An administrator thinks that a pa ckage was installed using a sn ap. Which of the following commands can the administrator use to verify this information?",
    "choices": [
      "snap list",
      "snap find",
      "snap install",
      "snap try"
    ],
    "answer": "A",
    "explanation": "The snap list command is used to display the installed snaps on the system1. Snaps are self-contained \nsoftware packages that can be installed and updated across diff erent Linux distributions2. The snap \nlist command shows the name, version, revision, developer and n otes of each snap1. \nThe snap find command is used to search for snaps in the Snap S tore, which is an online repository of \nsnaps2. The snap install command is used to install snaps from the Snap Store or from a local \nfile2. The snap try command is used to test a snap without inst alling it, by mounting a directory that \ncontains the snap files2. These commands are not useful for verifying if a package was installed using a snap.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator created a new directory with specific p ermissions. Given the following output: # file: comptia # owner: root # group: root user: : rwx group :: r-x other: :--- default:user :: rwx default:group :: r-x default:group:wheel: rwx default:mask :: rwx default:other ::- Which of the following permissi ons are enforced on /comptia?",
    "choices": [
      "Members of the wheel group can read files in /comptia.",
      "Newly created files in /comptia will have the sticky bit set .",
      "Other users can create files in /comptia.",
      "Only root can create files in /comptia."
    ],
    "answer": "A",
    "explanation": "The output shows the file access control list (FACL) of the /co mptia directory, which is an extension of \nthe standard Linux permissions that allows more fine-grained co ntrol over file and directory access1. \nThe FACL consists of two parts: the access ACL and the default ACL. The access ACL applies to the \ncurrent object, while the default ACL applies to the objects cr eated within the directory2. \nThe access ACL has three entrie s: user, group, and other. These are similar to the standard Linux \npermissions, but they can be specified for individual users or groups as well. The user entry shows \nthat the owner of the directory (root) has read, write, and exe cute permissions (rwx). The group \nentry shows that the group owner of the directory (root) has re ad and execute permissions (r-x). The \nother entry shows that all other users have no permissions (\"). \nThe default ACL has five entries: user, group, group:wheel, mas k, and other. These are applied to any \nfiles or directories created within /compti a. The user entry shows that the owner of the new object will h ave read, write, and execute \npermissions (rwx). The group entry shows that the group owner o f the new object will have read and \nexecute permissions (r-x). The group:wheel entry shows that the members of the wheel group will \nhave read, write, and execute permissions (rwx) on the new object. The mask entry shows that the maximum permissions allowed for any user or group are read, wri te, and execute (rwx). The other \nentry shows that all other users will have no permissions (\") o n the new object. \nTherefore, based on the FACL out put, members of the wheel group can read files in /comptia, as they \nhave read permission on both the directory and any files within it. Option B is incorrect because the \nsticky bit is not set on /comptia or any files within it. The s ticky bit is a special permission that \nprevents users from deleting or renaming files that they do not own in a shared directory3. It is \nsymbolized by a t character in th e execute position of others. Option C is incorrect because other \n\nusers cannot create files in /co mptia, as they have no permissi ons on the directory or any files within \nit. Option D is incorrect because root is not the only user who can create files in /comptia. Any user \nwho has write permission on the directory can create files within it, such as members of the wheel \ngroup.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator is configuring a new internal web server fleet. The web servers are up and running but can only be reached by users directly via IP address. The administrator is attempting to fix this inconvenience by requesting appropriate records from t he DNS team. The details are: Hostname: devel.comptia.org IP address: 5.5.5.1, 5.5.5.2, 5.5.5.3, 5.5.5.4 Name server: 5.5.5.254 Additional names: dev.comptia.org, development.comptia.org Which of the following types of DNS records should the Linux ad ministrator requ est from the DNS team? (Select three).",
    "choices": [
      "MX",
      "NS",
      "PTR",
      "A E. CNAME F. RRSIG G. SOA H. TXT I. SRV"
    ],
    "answer": "B",
    "explanation": "DE \nExplanation: \nThe Linux administrator should request the following types of D NS records from the DNS team: \nA: This record type is used to map a hostname to an IPv4 addres s. The administrator needs four A \nrecords for devel.comptia.org, one for each IP address (5.5.5.1, 5.5.5.2, 5.5.5.3, 5.5.5.4). This will allow users to access the web servers by using the hostname dev el.comptia.org instead of the IP \naddresses1. CNAME: This record type is used to create an alias for another hostname. The administrator needs \ntwo CNAME records, one for dev.comptia.org and one for developm ent.comptia.org, both pointing \nto devel.comptia.org. This will allow users to access the web s ervers by using any of these three \n\nhostnames interchangeably1. \nNS: This record type is used to delegate a domain or a subdomai n to another name server. The \nadministrator needs one NS record for comptia.org, pointing to 5.5.5.254, which is the name server \nthat hosts the records for the subdomain devel.comptia.org2. Th is will allow users to resolve the \nhostnames under comptia.org by querying the name server 5.5.5.2 542. \nThe other record types are not relevant for the administrators task: \nMX: This record type is used to specify the mail exchange server for a domain or a subdomain1. The administrator does not need this record type because the web se rvers are not intended to handle \nemail traffic. PTR: This record type is used to map an IP address to a hostnam e, which is the reverse of an A \nrecord1. The administrator does not need this record type becau se the web servers are not expected \nto be accessed by their IP addresses. RRSIG: This record type is used to provide digital signatures f or DNSSEC, which is a security extension \nfor DNS that verifies the authenticity and integrity of DNS res ponses3. The administrator does not \nneed this record type because it is not mentioned in the task r equirements. \nSOA: This record type is used to provide information about the authoritative name server and other \nparameters for a domain or a subdomain1. The administrator does not need this record type because it is usually created automatically by the name server software when a new zone file is created4. \nTXT: This record type is used to store arbitrary text data that can be used for var ious purposes, such \nas SPF, DKIM, DMARC, etc1. The administrator does not need this record type because it is not \nrelated to the web server functionality. \nSRV: This record type is used to specify the location and port number of a service that runs on a \ndomain or a subdomain1. The administrator does not need this re cord type because the web servers \nuse the standard HTTP port 80, which does not require an SRV record. \nReference: 1: DNS Record Types \" CompTIA Network+ N10-007 \" 1.8 2: NS Record - DNSimple Help 3: \nDNSSEC - Wikipedia 4: SOA Record - DNSimple Help",
    "type": "mcq"
  },
  {
    "question": "After connecting to a remote host via SSH, an administrator attempts to run an application but receives the following error: [user@workstation ~]$ ssh admin@srv1 Last login: Tue Mar 29 18:03:34 2022 [admin@srvl ~] $ /usr/local/bin/config_manager Error: cannot open display: [admin@srv1 ~] $ Which of the following should the administrator do to resolve t his error?",
    "choices": [
      "Disconnect from the SSH sessio n and reconnect using the ssh -x command.",
      "Add Options X11 to the /home/admin/.ssh/authorized_keys file .",
      "Open port 6000 on the workstation and restart the firewalld service.",
      "Enable X11 forwarding in /etc/ssh/ssh_config and restart the server."
    ],
    "answer": "A",
    "explanation": "The error indicates that the application requires an X11 displa y, but the SSH session does not forward \nthe X11 connection. To enable X11 forwarding, the administrator needs to use the ssh -X option, \nwhich requests X11 forwarding wi th authentication spoofing. Thi s will set the DISPLAY environment \nvariable on the remote host and allow the application to open a window on the local display. \nReference CompTIA Linux+ (XK0-005) Certification Study Guide, page 314 \nOpen a window on a remote X display (why \u0153Cannot open display )?, answer by Gilles \u02dcSO- stop \nbeing evil",
    "type": "mcq"
  },
  {
    "question": "A Linux engineer needs to block an incoming connection from the IP address 2.2.2.2 to a secure shell server and ensure the originating IP address receives a response that a firewall is blocking the connection. Which of the following commands can be used to acco mplish this task?",
    "choices": [
      "iptables -A INPUT -p tcp -- dport ssh -s 2.2.2.2 -j DROP",
      "iptables -A INPUT -p tcp -- dport ssh -s 2.2.2.2 -j RETURN",
      "iptables -A INPUT -p tcp -- dport ssh -s 2.2.2.2 -j REJECT",
      "iptables -A INPUT -p tcp -- dport ssh -s 2.2.2.2 -j QUEUE"
    ],
    "answer": "C",
    "explanation": "The REJECT target sends back an error packet to the source IP a ddress, indicating that the connection \nis refused by the firewall. This is different from the DROP tar get, which silently discards the packet \nwithout any response. The RETURN target returns to the previous chain, which may or may not \naccept the connection. The QUEUE t arget passes the packet to a userspace application for further \nprocessing, which is not the desired outcome in this case. Reference \n\nCompTIA Linux+ (XK0-005) Certification Study Guide, page 316 \niptables - ssh - access from specific ip only - Server Fault, a nswer by Eugene Ionichev",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator provisioned a new web server with custom administrative permissions for certain users. The administrator receives a report that user1 i s unable to restart the Apache web service on this server. The administrator reviews the following output: [ root@server ] # id user1 UID=1011 (user1) gid=1011 (USER1) groups=1011 (user1), 101 (www-data), 1120 (webadmin) [ root@server ] # cat /etc /sudoers.d/custom.conf user1 ALL=/usr/sbin/systemctl start httpd, /usr/sbin/systemctl stop httpd webadmin ALL=NOPASSWD: /etc/init.d.httpd restart, /sbin/service httpd restart, /usr/sbin/apache2ctl restart #%wheel ALL=(ALL) NOPASSWD: ALL Which of the following would most likely resolve the issue whil e maintaining a least privilege security model?",
    "choices": [
      "User1 sh ould be added to the wheel group to manage the service.",
      "Use r1 should have \"NOPASSWD:\" after the \"ALL=\" in the custom . conf.",
      "The wheel line in the custom. conf file should be uncommente d.",
      "Webad min should be listed as a group in the custom. conf fil e."
    ],
    "answer": "D",
    "explanation": "The custom.conf file grants sudo privileges to user1 and webadm in for managing the Apache web \nservice, but it uses different commands for each of them. User1 is allowed to use systemctl to start \nand stop the httpd service, while webadmin is allowed to use init.d, service, or apache2ctl to restart \nthe httpd service. However, the user1 is unable to restart the service, only start and stop it. To fix this, \nuser1 should be able to use the same commands as webadmin, whic h can be achieved by listing \nwebadmin as a group in the custom.conf file, using the syntax % groupname. This way, user1 will \ninherit the sudo privileges of the webadmin group, and be able to restart the Apache web service \nwithout compromising the least privilege security model. \nReference \nSudo and Sudoers Configuration | Servers for Hackers, section \u0153 Groups \nChapter 12. Managing sudo access - Red Hat Customer Portal, sec tion \u015312.1. Configuring sudo access \nfor users and groups",
    "type": "mcq"
  },
  {
    "question": "An administrator attempts to connect to a remote server by runn ing the following command: $ nmap 192.168.10.36 Starting Nmap 7.60 ( https://nmap.org ) at 2022-03-29 20:20 UTC Nmap scan report for www1 (192.168.10.36) Host is up (0.000091s latency). Not shown: 979 closed ports PORT STATE SERVICE 21/tcp open ftp 22/tcp filtered ssh 631/tcp open ipp Nmap done: 1 IP address (1 host up) scanned in 0.06 seconds Which of the following can be said about the remote server?",
    "choices": [
      "A fi rewall is blocking access to the SSH ser ver.",
      "The SSH server is not running on the remote server.",
      "The remote SSH server is using SSH protocol version 1.",
      "The SSH host key on the remote server has expired."
    ],
    "answer": "A",
    "explanation": "This is because the port 22/tcp is shown as filtered by nmap, w hich means that nmap cannot \ndetermine whether the port is open or closed because a firewall or other device is blocking its \nprobes. If the SSH server was not running on the remote server, the port would be shown as closed, \nwhich means that nmap received a TCP RST packet in response to its probe. If the remote SSH server \nwas using SSH protocol version 1, the port would be shown as op en, which means that nmap \nreceived a TCP SYN/ACK packet in response to its probe. If the SSH host key on the remote server had \nexpired, the port would also be shown as open, but the SSH clie nt would display a warning message \nabout the host key verification failure. Therefore, the best ex planation for the filtered state of the \nport 22/tcp is that a firewall is preventing nmap from reaching the SSH server. \nYou can find more information about nmap port states and how to interpret them in the following \nweb search results: Nmap scan what does STATE=filtered mean? How to find ports marked as filtered by nmap \nTechnical Tip: NMAP scan shows ports as filtered",
    "type": "mcq"
  },
  {
    "question": "A systems administrator notices the process list on a mission-critical server has a large number of processes that are in state \"Z\" and marked as \"defunct.\" Which of the following should the administrator do in an attempt to safely remove these entries f rom the process list?",
    "choices": [
      "Kill the process with PID 1.",
      "Kill the PID of the processes.",
      "Kill the parent PID of the processes.",
      "Reboot the server."
    ],
    "answer": "C",
    "explanation": "As the web search results show, processes in state Z are defunc t or zombie processes, which means \nthey have terminated but their parent process has not reaped th em properly. They do not consume \nany resources, but they occupy a slot in the process table. To remove them from the process list, the administrator needs to kill the parent process of the zombies, which will cause them to be reaped by \nthe init process (PID 1). Killing the zombies themselves or the init process will not have any effect, as \nthey are already dead. Rebooting the server may work, but it is not a safe or efficient option, as it may cause unnecessary downtime or data loss for a mission-criti cal server. \nReference Processes in a Zombie (Z) or Defunct State | Support | SUSE, pa ragraph 3 \nlinux - Zombie vs Defunct processes? - Stack Overflow, answer b y admirableadmin \nHow To Kill Zombie Processes on Linux | Linux Journal, paragrap h 4",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator found many c ontainers in an exited state. Which of the following commands will allow the administrator to clean up the containers in an e xited state?",
    "choices": [
      "docker rm -- all",
      "docker rm $ (docker ps -aq)",
      "docker images prune *",
      "docker rm -- state exited"
    ],
    "answer": "B",
    "explanation": "This command will remove all containers, regardless of their st ate, by passing the IDs of all \ncontainers to the docker rm command. The docker ps -aq command will list the IDs of all containers, \nincluding the ones in an exited state, and the $ ( ) syntax wil l substitute the output of the command \nas an argument for the docker rm command. This is a quick and e asy way to clean up all containers, \nbut it may also remove containers that are still needed or runn ing. \nReference docker rm | Docker Docs - Docker Documentation, section \u0153Remove all containers \nDocker Remove Exited Containers | Easy methods. - Bobcares, section \u0153For removing all exited containers",
    "type": "mcq"
  },
  {
    "question": "Which of the following is the best tool for dynamic tuning of k ernel parameters?",
    "choices": [
      "tuned",
      "tune2fs",
      "tuned-adm",
      "turbostat"
    ],
    "answer": "A",
    "explanation": "The tuned application is the best tool for dynamic tuning of ke rnel parameters, as it monitors the \nsystem and optimizes the performance under different workloads. It provides a number of \npredefined profiles for typical use cases, such as power saving , low latency, high throughput, virtual \nmachine performance, and so on. It also allows users to create, modify, and delete profiles, and to \nswitch between them on the fly. The tuned application uses the sysctl command and the \nconfiguration files in the /etc/sysctl.d/ directory to adjust the kernel parameters at runtime. \nReference \nChapter 2. Getting started with TuneD - Red Hat Customer Portal , paragraph 1 \nKernel tuning with sysctl - Linux.com, paragraph 1",
    "type": "mcq"
  },
  {
    "question": "A systems administrator is configuring a Linux system so the network traffic from the internal network 172.17.0.0 going out through the eth0 interface would a ppear as if it was sent directly from this interface. Which of the following commands will accom plish this task?",
    "choices": [
      "iptables -A POSTROUTING -s 172.17.0.0 -o eth0 -j MASQUERADE",
      "firewalld -A OUTPUT -s 172.17.0.0 -o eth0 -j DIRECT",
      "nmcli masq-traffic eth0 -s 172.17.0.0 -j MASQUERADE",
      "ifconfig -- nat eth0 -s 172.17.0.0 -j DIRECT"
    ],
    "answer": "A",
    "explanation": "This command will use the iptables tool to append a rule to the POSTROUTING chain of the nat table, \nwhich will match any packet with a source address of 172.17.0.0 and an output interface of eth0, \nand apply the MASQUERADE target to it. This means that the pack et will have its source address \nchanged to the address of the eth0 interface, effectively hidin g the internal network behind a NAT12. \nReference: 1: Iptables NAT and Masquerade rules - what do they do? 2: Routing from docker \ncontainers using a different physical network interface and default gateway",
    "type": "mcq"
  },
  {
    "question": "A user is unable to log on to a Linux workstation. The systems administrator executes the following command: cat /etc/shadow | grep user1 The command results in the following output: user1 :! $6$QERgAsdvojadv4asdvaarCdj34GdafGVaregmkdsfa:18875:0:99999:7 ::: Which of the following should the systems administrator execute to fix the issue?",
    "choices": [
      "chown -R userl:user1 /home/user1",
      "sed -i '/ ::: / :: /g' /etc/shadow",
      "chgrp user1:user1 /home/user1",
      "passwd -u user1"
    ],
    "answer": "D",
    "explanation": "The output shows that the user1 account has a locked password, indicated by the exclamation point \n(!) in the second field of the /et c/shadow file1. To unlock the password and allow the user to log in, \nthe systems administrator should use the passwd command with th e -u (unlock) option2. \nReference: 1: Understanding the /etc/shadow File 2: How To Use The Passwd Command In Linux",
    "type": "mcq"
  },
  {
    "question": "A Linux engineer finds multiple failed login entries in the sec urity log file for application users. The Linux engineer performs a security audit and discovers a securi ty issue. Given the following: # grep -iE '*www*|db' /etc/passwd www-data:x:502:502:www-data:/var/www:/bin/bash db:x: 505:505:db: /opt/db:/bin/bash Which of the following commands would resolve the security issu e?",
    "choices": [
      "usermod -d /srv/www-data www-data && usermod -d /var/lib/db db",
      "passwd -u www-data && passwd -u db",
      "renice -n 1002 -u 502 && renice -n 1005 -u 505",
      "chsh -s /bin/false www-data && chsh -s /bin/false db"
    ],
    "answer": "D",
    "explanation": "This command will use the chsh tool to change the login shell o f the users www-data and db to \n/bin/false, which means they will not be able to log in to the system1. This will prevent unauthorized \naccess attempts and improve security. Reference: 1: Replacing /bin/bash with /bin/false in /etc/passwd file",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator has define d a systemd script docker-repos itory.mount to mount a volume for use by the Docker service. The a dministrator wants to ensure that Docker service does not start until the volume is mounted. Which of th e following configurations needs to be added to the Docker service definition to best accomplish this task?",
    "choices": [
      "After=docker-respository.mount",
      "ExecStart=/usr/bin/mount -a",
      "Requires=docker-repository.mount",
      "RequiresMountsFor=docker-repository.mount"
    ],
    "answer": "C",
    "explanation": "This option declares an explicit dependency between the Docker service and the dockerrepository. \nmount unit. It means that the Docker service will not start unl ess the dockerrepository. \nmount unit is successfully activated. This ensures that the vol ume is mounted before the \nDocker service tries to use it12. \nReference: 1: systemd.unit - systemd unit configuration 2: How to mount host volumes into docker \ncontainers in Dockerfile during build",
    "type": "mcq"
  },
  {
    "question": "Which of the following will prevent non-root SSH access to a Li nux server?",
    "choices": [
      "Creating the /etc/nologin file",
      "Creating the /etc/nologin.allow file containing only a singl e line root",
      "Creating the /etc/nologin/login.deny file containing a singl e line +all",
      "Ensuring that /etc/pam.d/sshd includes account sufficient pam_nologin.so"
    ],
    "answer": "A",
    "explanation": "This file prevents any non-root user from logging in to the sys tem, regardless of the authentication \nmethod. The contents of the file are displayed to the user before the login is terminated. This can be useful for system maintenance or security reasons12. Reference: 1: Creating the /etc/nologin File - Oracle 2: How to Restrict Log In Capabilities of Users on \nUbuntu",
    "type": "mcq"
  },
  {
    "question": "A systems administrator is gathering information about a file t ype and the contents of a file. Which of the following commands should the administrator use to accompli sh this task?",
    "choices": [
      "file filename",
      "touch filename",
      "grep filename",
      "lsof filename"
    ],
    "answer": "A",
    "explanation": "The file command is used to determine the type of a file by exa mining its contents. It can recognize \nmany different formats, such as text, binary, executable, compr essed, image, audio, video, etc. It can \nalso display some additional information about the file, such a s encoding, size, dimensions, etc12 \nReference: 1: file(1) - Linux manual page 2: How to use the fil e command in Linux",
    "type": "mcq"
  },
  {
    "question": "Which of the following will prevent non-root SSH access to a Li nux server?",
    "choices": [
      "Creating the /etc/nologin file",
      "Creating the /etc/nologin.allow file containing only a singl e line root",
      "Creating the /etc/nologin/login.deny file containing a singl e line +all",
      "Ensuring that /etc/pam.d/sshd includes account sufficient pam_nologin.so"
    ],
    "answer": "A",
    "explanation": "This file prevents any non-root user from logging in to the sys tem, regardless of the authentication \nmethod. The contents of the file are displayed to the user befo re the login is terminated. This can be \nuseful for system maintenance or security reasons12. \nReference: 1: Creating the /etc/nologin File - Oracle 2: How to Restrict Log In Capabilities of Users on \nUbuntu",
    "type": "mcq"
  },
  {
    "question": "Users are reporting that writes on a system configured with SSD drives have been taking longer than expected, but reads do not seem to be affected. A Linux systems administrator is investigating this issue and working on a solution. Which of the following should the administrator do to help solve the issue?",
    "choices": [
      "Run the corresponding command to trim the SSD drives.",
      "Use fsck on the filesystem hosted on the SSD drives.",
      "Migrate to high-density SSD drives for increased performance .",
      "Reduce the amount of files on the SSD drives."
    ],
    "answer": "A",
    "explanation": "TRIM is a feature that allows the operating system to inform the SSD which blocks of data are no \nlonger in use and can be wiped internally. This helps to maintain the SSDs performance and \nendurance by preventing unnecessary write operations and reducing write amplification12. Running the corresponding command to trim the SSD drives, such as fstri m or blkdiscard on Linux, can help to \nsolve the issue of slow writes by freeing up space and optimizing the SSDs internal garbage collection34. \nReference: 1: What is SSD TRIM, why is it useful, and how to ch eck whether it is turned on 2: How to \nTrim SSD in Windows 10 3: How to run fsck on an external drive with OS X? 4: How to Use the fsck \nCommand on Linux",
    "type": "mcq"
  },
  {
    "question": "The development team created a new branch with code changes tha t a Linux administrator needs to pull from the remote repository. When the administrator looks for the branch in Git, the branch in question is not visible. Which of the following commands should the Linux administrator run to refresh the branch information?",
    "choices": [
      "git fetch",
      "git checkout",
      "git clone",
      "git branch"
    ],
    "answer": "A",
    "explanation": "The git fetch command downloads commits, files, and refs from a remote repository into the local \none. It also updates the remote-tracking branches, which are re ferences to the state of the remote \nbranches. By running git fetch, the administrator can see the n ew branch created by the \ndevelopment team and then use git checkout to switch to it12. \nReference: 1: Git - git-fetch Documentation 2: Git Fetch | Atla ssian Git Tutorial",
    "type": "mcq"
  },
  {
    "question": "A file called testfile has both uppercase and lowercase letters : $ cat testfile ABCDEfgH IJKLmnoPQ abcdefgH ijklLMNopq A Linux administrator is tasked with converting testfile into a ll uppercase and writing it to a new file with the name uppercase. Which of the following commands will achieve this task?",
    "choices": [
      "tr '(A-Z}' '{a-z}' < testfile > uppercase",
      "echo testfile | tr \"[Z-A]\" \"[z-a]\" < testfile > uppercase",
      "cat testfile | tr '{z-a)' '{Z-A}' < testfile > uppercase",
      "tr '[a-z]' '[A-Z]' < testfile > uppercase"
    ],
    "answer": "D",
    "explanation": "This command will use the tr tool to translate all lowercase le tters in the testfile to uppercase letters \nand write the output to the uppercase file. The first argument \u02dc[a-z] specifies the set of characters to \nbe replaced, and the second argument \u02dc[A-Z] specifies the set o f characters to replace with. The \u02dc< \nsymbol redirects the input from the testfile, and the \u02dc> symbol redirects the output to the uppercase \nfile12. Reference: 1: Linux Tr Command - javatpoint 2: Linux tr Command with Examples - phoenixNAP",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator is troubleshooting a systemd mount unit f ile that is not working correctly. The file contains: [root@system] # cat mydocs.mount [Unit] Description=Mount point for My Documents drive [Mount] What=/dev/drv/disk/by-uuidafc 9b2-ac34-ccff-88ae-297ab3c7ff34 Where=/home/user1/My Documents Options=defaults Type=xfs [Install] WantedBy=multi-user.target The administrator verifies the drive UUID correct, and user1 co nfirms the drive should be mounted as My Documents in the home directory. Which of the following c an the administrator do to fix the issues with mounting the drive? (Select two).",
    "choices": [
      "Rename the mount file to home-user1-My\\x20Documents.mount.",
      "Rename the mount file to home-user1-my-documents.mount.",
      "Change the What entry to /dev/ drv/disk/by-uuidafc9b2\\-ac34\\-ccff\\-88ae\\-297ab3c7ff34.",
      "Change the Where entry to Where=/home/user1/my\\ documents. E. Change the Where entry to Where=/home/user1/My\\x20Documents. F. Add quotes to the What and Where entries, such as What=\"/dev /drv/disk/by-uuidafc9b2-ac34- ccff-88ae-297ab3c7ff34\" and Where=\"/home/user1/My Documents\"."
    ],
    "answer": "A",
    "explanation": "E \nExplanation: \nThe mount unit file name and the Where entry must be escaped to handle spaces in the path. \nReference \nThe mount unit file name must be named after the mount point di rectory, with spaces replaced \nby \\x20. See How to escape spaces in systemd unit files? and sy stemd.mount. \nThe Where entry must use \\x20 to escape spaces in the path. See systemd.mount and The \nworkaround is to use /usr/bin/env followed by the path in quote s..",
    "type": "mcq"
  },
  {
    "question": "Following the migration from a disaster recovery site, a system s administrator wants a server to require a user to change credentials at initial login. Which of the following commands should be used to ensure the aging attribute?",
    "choices": [
      "chage -d 2 user",
      "chage -d 0 user",
      "chage -E 0 user",
      "chage -d 1 user"
    ],
    "answer": "B",
    "explanation": "The chage command can be used to change the user password expir y information. The -d or --lastday \noption sets the last password change date. If the value is 0, t he user will be forced to change the \n\npassword at the next login. See chage command in Linux with exa mples and 10 chage command \nexamples in Linux.",
    "type": "mcq"
  },
  {
    "question": "A Linux user is trying to execute commands with sudo but is receiving the following error: $ sudo visudo >>> /etc/sudoers: syntax error near line 28 <<< sudo: parse error in /etc/sudoers near line 28 sudo: no valid sudoers sources found, quitting The following output is provided: # grep root /etc/shadow root :* LOCK *: 14600 :::::: Which of the following actions will resolve this issue?",
    "choices": [
      "Log in dire ctly using the root account and comment out line 28 from /etc/sudoers.",
      "Boot the system in single user mode and comment out line 28 from /etc/sudoers.",
      "Comment out line 28 from /etc/sudoers and try to use sudo ag ain.",
      "Log in to the system using the other regular user, switch to root, and comment out line 28 from /etc/sudoers."
    ],
    "answer": "B",
    "explanation": "",
    "type": "mcq"
  },
  {
    "question": "A Linux system is having issues. Given the following outputs: # dig @192.168.2.2 mycomptiahost ; << >> DiG 9.9.4-RedHat-9.9.4-74.el7_6.1 << >> @192.168.2.2 my comptiahost ; (1 server found) ;; global options: +cmd ;; connection timed out; no servers could be reached # nc -v 192.168.2.2 53 Ncat: Version 7.70 ( https://nmap.org/ncat ) Ncat: Connection timed out. # ping 192.168.2.2 PING 192.168.2.2 (192.168.2.2) 56(84) bytes of data. 64 bytes from 192.168.2.2: icmp_seq=1 ttl=117 time=4.94 ms 64 bytes from 192.168.2.2: icmp_seq=2 ttl=117 time=10.5 ms Which of the following best describes this issue?",
    "choices": [
      "The DNS host is down.",
      "The name mycomptiahost does not exist in the DNS.",
      "The Linux engineer is using the wrong DNS port.",
      "The DNS service is currently not available or the correspond ing port is blocked."
    ],
    "answer": "D",
    "explanation": "The ping command shows that the Linux system can reach the DNS server at 192.168.2.2, so the DNS \nhost is not down. The dig and nc commands show that the Linux s ystem cannot connect to the DNS \nserver on port 53, which is the standard port for DNS queries. This means that either the DNS service \nis not running on the DNS server, or there is a firewall or network device blocking the port 53 \ntraffic. Therefore, the DNS servi ce is currently not available or the corresponding port is blocked. \n\nReference \n1: How To Troubleshoot DNS Client Issues in Linux - RootUsers 2: 6 Best Tools to Troubleshoot DNS Issues in Linux - Tecmint \n3: How To Troubleshoot DNS in Linux - OrcaCore \n4: Fixing DNS Issues in Ubuntu 20.04 | DeviceTests",
    "type": "mcq"
  },
  {
    "question": "Users are experiencing high latency when accessing a web applic ation served by a Linux machine. A systems administrator checks the network interface counters and sees the following: Which of the following is the most probable cause of the observ ed latency?",
    "choices": [
      "The network interface is disconnected.",
      "A connection problem exists on the network interface.",
      "No IP address is assigned to the interface.",
      "The gateway is unreachable."
    ],
    "answer": "B",
    "explanation": "The high number of errors and dropped packets in the output of the network interface counters \nindicate a connection problem on the network interface. Reference: \nCompTIA Linux+ (XK0-005) Certifi cation Study Guide, Chapter 10: Managing Networking, Section: \nTroubleshooting Network Issues, Page 359. Linux+ (Plus) Certification, Exam Objectives: 4.3 Given a scenario, troubleshoot and resolve basic network configuration and connectivity issues.",
    "type": "mcq"
  },
  {
    "question": "While troubleshooting server issues, a Linux systems administra tor obtains the following output: [rootGhost ~]# total free -m used free shared buf f/cache avail able Mem: 3736 3598 88 2 48 29 Swap: 2047 1824 223 Which of the following best describes the state of the system?",
    "choices": [
      "The system has consumed the system memory and swap space.",
      "The system has enough free memory space.",
      "The system has swap disabled.",
      "The system has allocated enough buffer space."
    ],
    "answer": "B",
    "explanation": "The output shows that the system has a total of 3736MB of memory, of which 3598MB is free. This \nindicates that the system has enough free memory space12. \nReference: \n1(https://phoenixnap.com/kb/swap-space) \n2(https://www.baeldung.com/linux/swap-space-use)",
    "type": "mcq"
  },
  {
    "question": "A network administrator issues the dig ww. compti a. org command and receives an NXDOMAIN response. Which of the following files should the administrator check first?",
    "choices": [
      "/etc/resolv.conf",
      "/etc/hosts",
      "/etc/sysconfig/network-scripts",
      "/etc/nsswitch.conf"
    ],
    "answer": "A",
    "explanation": "The dig command uses the DNS servers listed in the /etc/resolv. conf file to resolve domain names. If \nthe dig command returns an NXDOMA IN response, it means the doma in does not exist according to \nthe DNS servers used. Therefore, the administrator should check the /etc/resolv.conf file first34. \n\nReference: \n3(https://www.linuxquestions.org/questions/linux-newbie-8/help- me-dig-status-nxdomain- \n4175684441/) \n4(https://serverfault.com/questions025/what-are-all-the-flags-i n-a-dig-response)",
    "type": "mcq"
  },
  {
    "question": "A technician just fixed a few issues in some code and is ready to deploy the code into production. Which of the following steps s hould the technician take next?",
    "choices": [
      "Creat e a new branch using git checkout.",
      "Perfor m a git clone to pull main down.",
      "Crea te a git pull request to merge into main.",
      "Perfo rm a git pull to update the local copy of the code."
    ],
    "answer": "C",
    "explanation": "After fixing issues in the code, the next step is to merge these changes into the main branch. This is \n\ntypically done by creating a pull request78. \nReference: 7(https://zeet.co/blog/deploy-to-production) \n8(https://stackoverflow.com/questions33511/git-deploy-to-produc tion)",
    "type": "mcq"
  },
  {
    "question": "Due to performance issues on a server, a Linux administrator needs to terminate an unresponsive process. Which of the following commands should the administrat or use to terminate the process immediately without waiting for a graceful shutdown?",
    "choices": [
      "kill -SIGKILL 5545",
      "kill -SIGTERM 5545",
      "kill -SIGHUP 5545",
      "kill -SIGINT 5545"
    ],
    "answer": "A",
    "explanation": "SIGKILL is used to immediately terminate a process without allo wing it to clean up. It does not give \nthe process a chance to gracefully shut down, which is what's n eeded in the case of an unresponsive \nprocess.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator is troubleshooting an SSHD issue on a ser ver. Users are receiving error messages stating the connection is refused. Which of the follow ing commands should be used to verify whether the service is listening?",
    "choices": [
      "nslookup",
      "route",
      "netstat",
      "ifconfig"
    ],
    "answer": "C",
    "explanation": "netstat is a command-line tool that displays network connections, routing tables, and a number of \n\nnetwork interface statistics. It can be used to check if the SS HD service is listening on its default port \n(usually port 22) or any other configured port.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator is tasked with moving files in a database server. The administrator must not overwrite any existing files. Which of the following commands w ould indicate that the file already exists?",
    "choices": [
      "mv -i filename /tmp/backup",
      "mv -b filename /tmp/backup",
      "mv -n filename /tmp/backup",
      "mv -f filename /tmp/backup"
    ],
    "answer": "A",
    "explanation": "The -i option stands for 'interactive' and it prompts before ov erwriting any existing files. This ensures \nthat no existing files are accidentally overwritten during the move operation.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator needs to determine if prerequisites are m et. One of the application requirements is to install Perl on a system. Which of the follo wing commands would accomplish this task?",
    "choices": [
      "rpm -Uf perl",
      "rpm -iv perl",
      "rpm -qa perl",
      "rpm -eh perl"
    ],
    "answer": "C",
    "explanation": "rpm -qa lists all installed packages and filtering with perl wi ll show if Perl is installed or not. This \ncommand is useful for verifying prerequisites like the presence of certain software on the system.",
    "type": "mcq"
  },
  {
    "question": "The journald entries have filled a Linux machine's /var volume. Which of the following is the best command for a systems administrator to use to free up the disk space occupied by these entries?",
    "choices": [
      "journalctl \"rotate journalctl --vacuum-time=ls",
      "systemctl stop systemd-journald systemctl start systemd-journald",
      "rm -rf /var/log/journal systemctl restart systemd-journald",
      "pkill -HUP systemd-journald systemctl restart systemd-journald"
    ],
    "answer": "B",
    "explanation": "systemctl stop systemd-journald systemctl start systemd-journal d is the best approach among the \ngiven options. Stopping and starting the systemd-journald servi ce can help in managing the disk \nspace used by journal logs without manually deleting log files or using more aggressive cleanup \nmethods. This method ensures that log management is handled gra cefully by the system's own \nservices.",
    "type": "mcq"
  },
  {
    "question": "An administrator is provisioning an Apache web server. When the administrator visits the server website, the browser displays a message indicating the website cannot be reached. Which of the following commands should the administrator use to verify wheth er the service Is running?",
    "choices": [
      "systemctl status httpd",
      "systemctl mask httpd",
      "systemctl reload httpd",
      "systemctl restart httpd"
    ],
    "answer": "A",
    "explanation": "systemctl status httpd is the correct option to check if the Apache web server (httpd) is running. The \nsystemctl status command provides detailed information about th e service, including whether it is \nactive and running.",
    "type": "mcq"
  },
  {
    "question": "A user (userA) has reported issues while logging in to the syst em. The following output has been provided: bash Could not chdir to home directory /home/userA: Permission denie d -bash: /home/userA/.bash_profile: Permission denied # cat /etc/passwd | grep userA userA:x:1234:3400:userA account:/home/userA/:/bin/bash # passwd -S userA userA PS 2022-10-17 1 99999 0 (Password set. SHA512 crypt.) # groups userA admin dev usergrp # ls -lth /home/ drwx------ 7 root admin 9 Jan 17 2019 userA drwxr-xr-x 4 userC app 9 Jan 23 2020 userC Which of the following describes the issue userA is having?",
    "choices": [
      "The password for userA is not set",
      "The group for userA is not assigned correctly",
      "The account password for userA has expired",
      "The assigned home directory is not owned by userA"
    ],
    "answer": "D",
    "explanation": "The issue occurs because the home directory /home/userA is owne d by root, not by userA, as seen \nfrom the ls -lth /home output. In Linux, the user must have own ership of their home directory to log \nin and access their files properly. To fix this, the administra tor must change ownership using chown \nuserA:userA /home/userA.",
    "type": "mcq"
  },
  {
    "question": "A security team discovers that a web server has been running with elevated privileges and identifies it as a security violation. Which of the following items needs to be added to the webserver.service file to remediate the issue?",
    "choices": [
      "In the [Service ] section of t he webserver.service file, add User=comp tia.",
      "In the [Unit] section of the webserver.service file, add All owIsolate=true.",
      "In the [Install] section of t he webserver.service file, add WantedBy=single.target .",
      "Ad d After=network.target to the [Install] section of the web server.service file."
    ],
    "answer": "A",
    "explanation": "Adding User=comptia in the [Servi ce] section ensures that the w eb server runs as a non-root user, \nwhich enhances security by reducing the risk of elevated privileges being exploited. This follows the principle of least privilege, a best practice for system servic es.",
    "type": "mcq"
  },
  {
    "question": "The users of a Linux system are unable to use one of the applic ation filesystems. The following outputs have been provided: bash $ cd /app $ touch file touch: cannot touch 'file': Readonly file system Output 2 /dev/sdcl on /app type ext4 (ro,relatime,seclabel,data=ordered) Output 3 /dev/sdcl /app ext4 defaults 0 0 Output 4 [302.048075] Buffer I/O error on dev sdcl, logical block 0, async page read [302.048490] EXT4-fs (sdcl): Attempt to read block from filesys tem resulted in short read while trying to re-open /dev/sdcl Which of the following actions will resolve this issue?",
    "choices": [
      "u mount /app fsck -y /dev/sdcl mount /app",
      "xfs_repair / dev/sdcl mount -o rw,remount /app",
      "u mount /app xfs_repair /dev/sdcl mount /app",
      "fsck -y /dev/sdcl mount -o rw,remount /app"
    ],
    "answer": "D",
    "explanation": "The filesystem is in read-only mode, likely due to corruption o r errors detected. Running fsck -y will \ncheck and repair the filesystem, and mount -o rw,remount will r emount it as read-write, making it \nusable again. This is a common troubleshooting step for filesys tems with errors.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator is taske d with configuring a repository on an RPM-based Linux system. Which of the following need to be reviewed and modified? (Selec t two).",
    "choices": [
      "/etc/y um.conf",
      "/et c/apt/sources.list.d",
      "/etc/ pam. d",
      "/etc /apt.c onf E. /etc /yum.repos.d F. /etc/ssh /ssh_config"
    ],
    "answer": "A",
    "explanation": ", E \nExplanation: \nOn RPM-based systems like Red Hat or CentOS, repository configu ration is handled via yum or dnf. \nThe main configuration file is /etc/yum.conf, while individual repository files are stored in \n/etc/yum.repos.d/. These files dictate where packages are fetch ed from.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator receives the following errors via email from the system log: go XFS (loop0): Metadata CRC error detected at xfs_agi_read_verify +0xcb/0xfe XFS (loop0): First 128 bytes of corrupted metadata buffer XFS (loop0): metadata I/O error in \"xfs_trans_read_buf_map\" at daddr 0x2 len 1 error 74 A few minutes later, the adminis trator starts receiving reports that some of the images in the company's website are not loading properly. The systems administrator runs some commands and receives the following outputs: css Output 1 NAME FSTYPE UUID MOUNTPOINT sda ext4 02ae47-fe457-45bc / sdb xfs 347c7056 /var/www/html Output 2 DocumentRoot \"/var/www/html\" Output 3 httpd.service - The Apache HTTP Server Loaded: loaded (/usr/lib/systemd/system/httpd.service; enabled; vendor preset: disabled) Active: active (running) since Sun 1991-05-24 16:12:43 UTC; 30y ago Main PID: 252 (httpd) Which of the following would be the appropriate steps to take t o solve this issue?",
    "choices": [
      "s ystemctl stop httpd umount /dev/sdb1 xfs_repair /dev/sdb1 m ount /dev/sdb1 /var/www/htm l systemctl start httpd",
      "u mount /dev/sdb1 xfs_repair /dev/sdb1 xfs_metadump /dev/sdb1 mount /dev/sdb1 /var/www/html systemctl restart httpd",
      "u mount /dev/sdb1 systemctl stop httpd xfs_metadump /dev/sdb1 mount /dev/sdb1 /var/www/html systemctl start httpd",
      "s ystemctl stop httpd xfs_check -L /dev/sdb umount /var/www/html systemctl start httpd"
    ],
    "answer": "A",
    "explanation": "The error is related to XFS file system corruption on /dev/sdb1, where the websites images are \nstored. By stopping the Apache service, unmounting the filesyst em, running xfs_repair, and \nremounting, the filesystem can be repaired, and the service can be restarted safely.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator created a virtual clone of a physical ser ver and would like to remove any existing entries related to SSH k eys from outside entities on t he virtual clone. Which of the following files should the administrator remove? (Select two).",
    "choices": [
      "~/ .ssh/authorized_keys",
      "~/.ssh/kn own_ hosts",
      "/etc/ ssh/ssh_config",
      "~/ .ssh/co nfig E. /etc /ssh/sshd_config F. /etc/ssh /ssh_host_rsa_key.pub"
    ],
    "answer": "A",
    "explanation": ", B \nExplanation: \nThe ~/.ssh/authorized_keys file contains SSH public keys that g rant access to the user account. \nRemoving this file ensures that no external entities can log in using previously authorized keys. The \n~/.ssh/known_hosts file stores fingerprints of previously conne cted hosts. Removing this file ensures \nthat SSH doesn't trust any previously connected hosts.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator wants to list all local account names a nd their respective UIDs. Which of the following commands will provide output containing this information?",
    "choices": [
      "cut -c: -f3,1 /etc/passwd",
      "cut -d: -s2,3 /etc/passwd",
      "cut -d: -f1,3 /etc/passwd",
      "cut -n: -f1,2 /etc/passwd"
    ],
    "answer": "C",
    "explanation": "The /etc/passwd file contains user account information, where e ach line includes fields separated by \ncolons. To list all user accounts and their UIDs, use cut -d: - f1,3 /etc/passwd. This cuts the first field \n(username) and the third fi eld (UID) from each line.",
    "type": "mcq"
  },
  {
    "question": "A Linux systems administrator is trying to execute a particular shell script on a server. The administrator reviews the following outputs: shell $ ./startup.sh bash: ./startup.sh: Permission denied $ ls -l startup.sh -rw-rw-r-- 1 companyabc companyabc 18 October 15:35 startup.sh Which of the following commands should the administrator use to allow the script to run?",
    "choices": [
      "chown root startup.sh",
      "chmod 750 startup.sh",
      "chmod -x startup.sh",
      "chmod 400 startup.sh"
    ],
    "answer": "B",
    "explanation": "The script is missing the execute permission. Using chmod 750 startup.sh adds execute permissions \nfor the owner and grants read and execute permissions for the g roup, allowing the script to run. \nWithout execute permissions, the shell cannot run the script.",
    "type": "mcq"
  },
  {
    "question": "A user is cleaning up a directory because it has more than 100, 000 files that were generated from an experiment. When the user tries to remove the unneeded experime nt files, the user receives an error: arduino cannot execute [Argument list too long] Which of the following should the user execute to remove these files?",
    "choices": [
      "find . -name \"experiment*.txt\" -exec rm \"{}\" ;",
      "rm -rf experiment*.txt",
      "rm --force experiment*.txt",
      "for i in experiment*.txt; do find . -name $i -exec rmdir \"{} \" ; done"
    ],
    "answer": "A",
    "explanation": "The \"Argument list too long\" error occurs when the number of fi les exceeds the command-line \nargument limit. The find command with -exec is a workaround, as it processes files one by one, \navoiding the argument limit. This method is efficient for handl ing large numbers of files.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator is implementing a CI/CD process for the companys internal accounting web application. Which of the following best defines the purpose of this process?",
    "choices": [
      "To automate the process of building, testing, and deploying application components",
      "To perform security penetrati on tests on deployed applicatio ns to identify vulnerabilities",
      "To formalize the approval process of application releases an d configuration changes",
      "To leverage code to document the infrastructure, configurati ons, and dependencies"
    ],
    "answer": "A",
    "explanation": "CI/CD (Continuous Integration/Continuous Deployment) is a pract ice that automates the process of \nbuilding, testing, and deploying applications. This approach re duces manual intervention, ensuring \ncode changes are integrated and tested frequently, leading to f aster and more reliable application \ndeployment.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator is customizing a new Linux server. Whic h of the following settings for umask would ensure that new files have the default permissions of -rw -r--r--?",
    "choices": [
      "0017",
      "0027",
      "0038",
      "0640"
    ],
    "answer": "B",
    "explanation": "The umask determines the default permission for new files. To g et -rw-r--r-- (644), the umask should \nbe set to 0027. This sets the permissions to allow read and wri te for the owner, read-only for the \ngroup, and no permissions for others.",
    "type": "mcq"
  },
  {
    "question": "An administrator accidentally installed the httpd RPM package a long with several dependencies. Which of the following options is the best way for the administrator to revert the package installation?",
    "choices": [
      "dnf clean all",
      "rpm -e httpd",
      "apt-get clean",
      "yum history undo last"
    ],
    "answer": "D",
    "explanation": "The yum history undo last command allows the administrator to u ndo the most recent transaction, \neffectively removing the httpd package and any installed depend encies. This is the safest and easiest \nway to revert package installations in RPM-based systems using yum.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator is configur ing a log collector agent to m onitor logs in /var/log/collector. The agent is reporting that it cannot write to the directory. The a gent runs as the logger user account. The administrator runs a few com mands and reviews the following output: makefile Output 1: drwxr-xr-x. 1 root root 0 Oct 20:13 collector Output 2: file: /var/log/collector owner: root group: root user::rwx group::r-x mask::rwx other::r-x Output 3: uid=1010(logger) gid=1010(monitor) groups=1010(monitor) Which of the following is the best way to resolve the issue?",
    "choices": [
      "setfacl -Rm u:logger /var/log/collector",
      "usermod -aG root logger",
      "chmod 644 /var/log/collector",
      "chown -R logger /var/log"
    ],
    "answer": "A",
    "explanation": "The issue is that the logger user does not have write permissio ns to /var/log/collector. Using setfacl \n(Access Control Lists) allows fine-grained control over file pe rmissions, granting th e logger user the \nnecessary read-write access to the directory without changing t he owner or group.",
    "type": "mcq"
  },
  {
    "question": "An administrator is running a web server in a container named W EB, but none of the error output is showing. Which of the following should the administrator use to generate the errors on the container?",
    "choices": [
      "docker-compose inspect WEB",
      "docker logs WEB",
      "docker run --name WEB --volume /dev/stdout:/var/log/nginx/er ror.log",
      "docker ps WEB -f"
    ],
    "answer": "B",
    "explanation": "The docker logs command retriev es logs, including errors, for a running container. By using docker \nlogs WEB, the administrator can check the error output generate d by the web server container and \ndebug any issues related to application performance or errors.",
    "type": "mcq"
  },
  {
    "question": "A Linux systems administrator is working to obtain the installe d kernel version of several hundred systems. Which of the following utilities should the administrator use for this task?",
    "choices": [
      "Ansible",
      "Git",
      "Docker",
      "Bash"
    ],
    "answer": "A",
    "explanation": "Ansible is an open-source automation tool that can manage multi ple systems simultaneously. Using \nan Ansible playbook, the adminis trator can run commands across several servers to obtain the \ninstalled kernel version efficiently. A simple ansible all -m c ommand -a \"uname -r\" will retrieve the \nkernel version from all target systems.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator identifies multiple processes in a zomb ie state. Which of the following signals would be best for the administrator to send to the PPID ?",
    "choices": [
      "SIGTERM",
      "SIGHUP",
      "SIGQUIT",
      "SIGSTOP"
    ],
    "answer": "A",
    "explanation": "A zombie process is a process that has completed execution but still has an entry in the process table \nbecause its parent process has not read its exit status. The be st signal to send to the parent process is \nSIGTERM, which politely asks it to terminate and release the re sources held by the zombie child \nprocesses.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator needs to check extended permissions appli ed to the directory test. Which of the following commands should the administrator use to help wit h this task?",
    "choices": [
      "getsebool test/",
      "getenforce test/",
      "getfacl test/",
      "ls -al test/"
    ],
    "answer": "C",
    "explanation": "getfacl is the command used to view the Access Control List (AC L) of a file or directory, which shows \nextended permissions beyond the basic owner, group, and others. This is essential for checking \npermissions that are set using ACLs on the directory test.",
    "type": "mcq"
  },
  {
    "question": "A DevOps engineer is working on a local copy of a Git repository. The engineer would like to switch from the main branch to the staging branch but notices the stag ing branch does not exist. Which of the following Git commands should the engineer use to perform this task?",
    "choices": [
      "git branch -m staging",
      "git commit -m staging",
      "git status -b staging",
      "git checkout -b staging"
    ],
    "answer": "D",
    "explanation": "The git checkout -b staging command creates a new branch called staging and switches to it. This is \n\nuseful when you want to create a new branch locally and begin w orking on it. The -b flag is used to \ncreate the branch if it doesnt exist.",
    "type": "mcq"
  },
  {
    "question": "An operations engineer is planning to start a container running a PostgreSQL database. The engineer wants the container to start automatically at system startup, m ount the /home/db directory as /var/lib/postgresql inside the container, and expose port 5432 to the OS. Which of the following commands should the engineer run to achieve this task?",
    "choices": [
      "docker run -d --restart always -p 5432:5432 -v /home/db:/var /lib/postgresql postgresql:12",
      "docker run -d --restart -p 5432:5432 --volume /var/lib/postg resql:/home/db postgresql:12",
      "docker run -d --attach --platform 5432:5432 --volume /home/d b:/var/lib/postgresql postgresql:12",
      "docker run -d --init --restart --publish 5432:5432 --workdir /home/db:/var/lib/postgresql postgresql:12"
    ],
    "answer": "A",
    "explanation": "The command docker run -d --restart always -p 5432:5432 -v /hom e/db:/var/lib/postgresql \npostgresql:12 ensures that the PostgreSQL container is started in detached mode (-d), it restarts \nautomatically on system startup (--restart always), mounts the host directory /home/db to \n/var/lib/postgresql, and exposes port 5432. This is a typical s etup for running a database in a Docker \ncontainer.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator would like to measure possible packet los s between a workstation and a remote web application that is running on port 443. Which of the following would be the best command for the administrator to use to display this informatio n?",
    "choices": [
      "ping -c 50 <remote server IP>",
      "tcpdump -p 443 <remote server IP>",
      "mtr -T -P 443 <remote server IP>",
      "traceroute -p 443 <remote server IP>"
    ],
    "answer": "C",
    "explanation": "mtr (My Traceroute) is a network diagnostic tool that combines the functionality of traceroute and \nping. It shows real-time packet loss and latency on a hop-by-ho p basis. The -T option uses TCP \ninstead of ICMP, and the -P 443 option specifies the remote por t. This provides the best method for \nchecking packet loss on port 443.",
    "type": "mcq"
  },
  {
    "question": "A systems engineer deploys a new application server, but the se rver cannot communicate with the back-end database hostname. The engineer confirms that the appl ication server can ping the database server's IP address. Which of the following is the mos t likely cause of the issue?",
    "choices": [
      "Incorrect DNS servers",
      "Unrea chable default gateway",
      "Miss ing route configuration",
      "Mi sconfigured subnet mask"
    ],
    "answer": "A",
    "explanation": "If the application server can ping the database server by its I P address but not by its hostname, it \nindicates a DNS resolution issue. The most likely cause is inco rrect DNS server configuration. The \nengineer should verify the DNS settings in /etc/resolv.conf or the network configuration.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator needs to list the packages that are currently installed on a server. Which of the following commands should the administrator use?",
    "choices": [
      "sn ap install list",
      "snap list",
      "snap sho w",
      "snap packages"
    ],
    "answer": "B",
    "explanation": "The snap list command lists all installed Snap packages on the system. Snap is a package management system that is used for installing and managing soft ware packages in Linux. It shows \n\ninformation about the installed Snap packages, including the ve rsion, publisher, and whether the \npackage is active.",
    "type": "mcq"
  },
  {
    "question": "A hardened physical Linux system allows regular, unprivileged u sers to remotely connect to the server using SSH only. No sudo tool has been installed. Which of the following should the Linux administrator use to perform administrative tasks on this host? (Select two).",
    "choices": [
      "Create an SSH key and copy it to the remote server to allow passwordless login",
      "Access the servers physical console and use the root user's password to log in",
      "Install the telnet server on this system to be able to use a root account",
      "Use the su command and enter the root users password E. Install the sudo command using the unprivileged users accoun t F. Add the user to the wheel group"
    ],
    "answer": "B",
    "explanation": ", D \n \nExplanation: \nWithout sudo, the administrator must either access the system p hysically or use the su command to \nswitch to the root account using the root password. Since the s ystem is hardened and SSH is allowed, \ninstalling sudo or using Telnet would not be secure or permitte d options. Physical access to the \nconsole or using su is the correct approach.",
    "type": "mcq"
  },
  {
    "question": "A hardened physical Linux system allows regular, unprivileged u sers to remotely connect to the server using SSH only. No sudo tool has been installed. Which of the following should the Linux administrator use to perform administrative tasks on this host? (Select two).",
    "choices": [
      "Create an SSH key and copy it to the remote server to allow passwordless login",
      "Access the servers physical console and use the root user's password to log in",
      "Install the telnet server on this system to be able to use a root account",
      "Use the su command and enter the root users password E. Install the sudo command using the unprivileged users accoun t F. Add the user to the wheel group"
    ],
    "answer": "B",
    "explanation": ", D \n \n\nExplanation: \nAs the sudo tool is not installed on the system, administrative tasks must be performed either via \ndirect physical console access or by switching to the root user using the su command. Both methods \nrequire knowledge of the root password. Installing Telnet is no t a good option due to its lack of \nsecurity, and installing sudo using an unprivileged user is not possible without root privileges.",
    "type": "mcq"
  },
  {
    "question": "Which of the following options describes the purpose of YAML?",
    "choices": [
      "YAML is a binary format used to ensure data transfer in a no n-human-readable format",
      "YAML is used for configuration files and data serialization in IaC tools in a human-readable format",
      "YAML is like HTML and is used to create web page structure content for web deployment",
      "YAML is designed for web development and has libraries for i nfrastructure automation"
    ],
    "answer": "B",
    "explanation": "YAML (YAML Ain't Markup Language) is a human-readable data seri alization format often used for \nconfiguration files and in Infrastructure as Code (IaC) tools s uch as Ansible and Kubernetes. YAML \nfiles are easy to read and write, making them ideal for specify ing infrastructure configurations and \nmanaging declarative environments.",
    "type": "mcq"
  },
  {
    "question": "Users are reporting that a production application has slow perf ormance. A systems administrator logs in to the server and performs some basic checks. Given the following: yaml [root@comptia]# ps -o pcpu; pidstat 1 Average: UID PID %usr %system %wait %CPU Command Average: 0 937242 32.39 0 63.21 32.39 app_prd Average: 0 937245 44.97 0.31 51.57 45.28 app_prd Average: 0 937244 23.62 0 63.55 28.62 app_prd [root@comptia]# vmstat 1 procs memory swap io system cpu r b swpd free buff cache si so bi bo in cs us sy id wa st 16 0 978912 376320 50804 10296312 0 0 0 44 5503 2962 98 2 0 0 0 [root@comptia]# free -m total used free shared buff/cache available Mem: 15533 5063 365 164 10104 9975 Swap: 7931 955 6976 Which of the following is causing the performance issue?",
    "choices": [
      "The server does not have enough memory",
      "Too many processes are running on the server",
      "The server CPU is receiving too much load",
      "The server is swapping"
    ],
    "answer": "D",
    "explanation": "The output from free -m shows that a significant portion of the swap space (955 MB) is being used, \nindicating the server is swapping. Swapping occurs when the system runs low on physical memory, leading to poor performance because the system must offload mem ory pages to the slower swap \nspace. To resolve this, either more physical memory should be a dded or the applications memory \nusage should be optimized.",
    "type": "mcq"
  },
  {
    "question": "The development team created a new branch with code changes tha t a Linux administrator needs to pull from the remote repository. When the administrator looks for the branch in Git, the branch in question is not visible. Which of the following commands should the Linux administrator run to refresh the branch information?",
    "choices": [
      "git fetch",
      "git checkout",
      "git clone",
      "git branch"
    ],
    "answer": "A",
    "explanation": "git fetch is the command used to refresh the list of branches f rom the remote repository. It retrieves \nany new branches and updates the local metadata about the remot e repository, making the branch \nvisible locally. It does not change the working directory or me rge any changes but updates the \nreferences.",
    "type": "mcq"
  },
  {
    "question": "After connecting to a remote host via SSH, an administrator attempts to run an application but receives the following error: arduino Error: cannot open display: Which of the following should the administrator do to resolve t his error?",
    "choices": [
      "Disconnect from the SSH sessio n and reconnect using the ssh -X command",
      "Add Options X11 to the /home/admin/.ssh/authorized_keys file",
      "Open port 6000 on the workstation and restart the firewalld service",
      "Enable X11 forwarding in /etc/ssh/ssh_config and restart the server"
    ],
    "answer": "D",
    "explanation": "The error indicates that X11 forwarding is not enabled. X11 for warding allows graphical applications \nto be displayed on a remote system over an SSH connection. Enab ling X11 forwarding in \n/etc/ssh/ssh_config and restarting the SSH service ensures that the necessary configuration is \napplied, allowing the administrator to open graphical applicati ons remotely.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator is cloning a system partition /dev/sda1 to /dev/sdc1. Which of the following commands would allow the administrator to accomplish this task most efficiently?",
    "choices": [
      "dd if=/dev/sda1 of=/dev/sdc1",
      "cat /dev/sda1 > /dev/sdc1",
      "cp -R /dev/sda1 /dev/sdc1",
      "rsync -av /dev/sda1 /dev/sdc1"
    ],
    "answer": "A",
    "explanation": "The dd command is the most efficient method to clone a partitio n, as it operates at the block level. \nThe command dd if=/dev/sda1 of=/dev/sdc1 copies the entire cont ent of /dev/sda1 (input file) to \n/dev/sdc1 (output file), making an exact clone of the partition . The other options are either not \napplicable or less efficien t for partition cloning.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator is gathering information about a file t ype and the contents of a file. Which of the following commands should the administrator use to accompli sh this task?",
    "choices": [
      "file filename",
      "touch filename",
      "grep filename",
      "lsof filename"
    ],
    "answer": "A",
    "explanation": "The file command determines the file type of the given file (e. g., whether it is a text file, binary, or a \nspecial format). It helps identify the format of the file befor e further actions like editing or analyzing \nits content. For example, running file filename might return \"A SCII text\" or \"ELF 64-bit executable\".",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator is implementing a stateful firewall on th e Linux server. Which of the following iptables options will be required to build the stateful rules? (Select two).",
    "choices": [
      "--name established",
      "-m recent",
      "-m conntrack",
      "--state E. --remove F. -j DROP"
    ],
    "answer": "C",
    "explanation": ", D Explanation: To build stateful firewall rules in iptables, the -m conntrack and --state options are used. The -m \nconntrack module allows for connection tracking, and --state tr acks connection states like \nESTABLISHED, RELATED, or NEW, ensuring that the firewall mainta ins awareness of connection states \nwhen filtering traffic. These options are critical for implemen ting a stateful firewall that tracks and \nmanages active connections.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator needs to know the mail exchange (MX) re cord for the foo.com domain. Which of the following commands will accomplish this task?",
    "choices": [
      "tel net mx foo.com",
      "dig mx foo.com",
      "nslookup mx foo.com",
      "host mx foo.com"
    ],
    "answer": "B",
    "explanation": "The dig command is used for querying DNS information. To retrie ve the MX records for a domain \n(which indicate where emails shou ld be routed), the command dig mx foo.com is used. This returns \nthe mail servers associated with the domain, including their pr iority levels.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator needs to forward port 8000 on a remote se rver to port 8000 on a local server. Which of the following commands should the administrator run on the local server to achieve this goal?",
    "choices": [
      "firewall -cmd --add-forward-port=port=8000 =tcp =8000 =re mote",
      "iptables -A FORWARD -m state -p tcp -d remote --dport 9000 - j accept",
      "ssh -R 8000:localhost:9000 remote",
      "socat TCP4-LISTEN:8000,fork TCP4:remote:8000"
    ],
    "answer": "C",
    "explanation": "The ssh -R command sets up reverse port forwarding, which allows connections from the remote \nserver to be forwarded to the local machine. In this case, ssh -R 8000:localhost:9000 remote will \nforward traffic on port 8000 on the remote server to port 9000 on the local machine.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator created a user cron to run a scheduled database backup cronjob on the server at 1 a.m. every day. The following is the cronjob syntax : 0 1 * * * /bin/sh backup.sh The backups, however, are not being created. When checking the crontab file, the administrator sees the following error: /var/spool/cron/crontab/cron: Permission denied Which of the following will permit the cronjob to execute?",
    "choices": [
      "Creating the file cron.allow and adding user cron to it",
      "Giving cron ownership of the file /usr/bin/crontab",
      "Running sudo cron restart to activate the cronjob",
      "Running sudo crontab -u cron -e to edit the file with sudo"
    ],
    "answer": "A",
    "explanation": "The error indicates that the cron user does not have permission to run the cronjob. Creating a \ncron.allow file and adding the user cron to it will allow that user to run cronjobs. The cron.allow file is \na security feature that controls which users are allowed to use cron.",
    "type": "mcq"
  },
  {
    "question": "A server administrator has scheduled a cron job to run YUM upda tes on all servers without manual intervention, but kernel packages must be excluded from the upd ates at all times. Which of the following configuration files needs to be modified to make thes e changes persistent?",
    "choices": [
      "/etc/y um.conf",
      "/etc/ dnf/dnf.conf",
      "/etc/ yum/pluginconf.d/packag es.conf",
      "/etc /yum.repo.d/kernel.repo"
    ],
    "answer": "A",
    "explanation": "The /etc/yum.conf file contains configuration settings for the YUM package manager. To exclude \nkernel updates, the administrator should add exclude=kernel* to the [main] section of this file. This \nensures that all future YUM updates skip kernel packages, makin g the exclusion persistent.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator wants a permission bit on a shared folder that allows only the owner of the file within that directory or the root user to delete or rename the file. Which of the following commands will help achieve this goal?",
    "choices": [
      "chmod u-w /directory/",
      "chmod a-r /directory/",
      "chmod o-t /directory/",
      "chmod +t /directory/"
    ],
    "answer": "D",
    "explanation": "The +t option sets the \"sticky bit\" on a directory, which restricts deletion or renaming of files in the directory to the file's owner or the root user. This is commonl y used in shared directories like /tmp, \nwhere multiple users may have access, but only the file owner s hould be allowed to modify their \nown files. The command chmod +t /directory/ applies this permis sion.",
    "type": "mcq"
  },
  {
    "question": "Which of the following is a benefit of a service mesh?",
    "choices": [
      "Encrypted communication between two services in a Kubernetes environment",
      "Direct access to the Kubernetes API services through the use of tokens",
      "Elevated privileges in a Kubernetes pod to allow root access in a hardened cluster",
      "Creating PVCs in a Kubernetes cluster to store and manage pe rsistent data"
    ],
    "answer": "A",
    "explanation": "A service mesh provides secure, encrypted communication between microservices in a Kubernetes \nenvironment. It also provides features like traffic management, observability, and load balancing at \nthe network layer. The most popul ar service mesh implementations, such as Istio, handle security by \nenforcing mutual TLS (mTLS) encryption between services, ensuri ng data privacy and integrity.",
    "type": "mcq"
  },
  {
    "question": "An administrator thinks that a pa ckage was installed using a sn ap. Which of the following commands can the administrator use to verify this information?",
    "choices": [
      "sn ap list",
      "snap find",
      "snap install",
      "snap try"
    ],
    "answer": "A",
    "explanation": "Again, the correct command to list all installed snap packages is snap list. This command provides \ninformation about installed snap applications and their version s, helping the administrator verify the \npackage installation.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator needs to expose port 9000 for a container to listen during runtime. The Linux administrator creates a Dockerfile with the following entries: sql FROM node:9-alpine WORKDIR /usr/src/app COPY package.json ./ RUN npm install COPY . . EXPOSE 9000 CMD [\"npm\", \"start\"] Which of the following commands should the administrator use to accomplish this task? (Select two).",
    "choices": [
      "docker build -t Test-Container",
      "docker tag Test-Container",
      "docker inspect Test-Container",
      "docker run -p 5000:80 Test-Container E. docker push Test-Container F. docker run -p 80:9000 Test-Container"
    ],
    "answer": "A",
    "explanation": ", F \nExplanation: \nFirst, the administrator should build the container image using the command docker build -t Test- \nContainer, which creates a Docke r image with the specified conf iguration. To run the container and \nexpose port 9000, the correct command is docker run -p 80:9000 Test-Container, which maps the container's port 9000 to port 80 on the host machine, making the service accessible externally on \nport 80.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator has define d a systemd script docker-repos itory.mount to mount a volume for use by the Docker service. The a dministrator wants to ensure that the Docker service does not start until the volume is mounted. Which of the following configurations needs to be added to the Docker service definition to best accomplish this task?",
    "choices": [
      "After=docker-repository.mount",
      "ExecStart=/usr/bin/mount -a",
      "Requires=docker-re pository.mount",
      "RequiresMountsFor=docker-repository.mount"
    ],
    "answer": "C",
    "explanation": "The Requires=docker-repository.mo unt directive in the Docker se rvice file ensures that the Docker \nservice depends on the docker-re pository.mount unit. If the mou nt is not available, Docker will not \nstart. This guarantees that the necessary volume is mounted bef ore the Docker service attempts to \nuse it.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator needs to remove all local firewall rules on a Linux system. Which of the following commands should the administrator run?",
    "choices": [
      "iptables -D",
      "iptables -L",
      "iptables -F",
      "iptables -A"
    ],
    "answer": "C",
    "explanation": "The iptables -F command flushes all the firewall rules, effecti vely removing them from the system. \nThis command clears out all existing rules from all chains (INPUT, OUTPUT, and FORWARD), leaving the system with no active iptables rules.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator is creating new user accounts on severa l Linux machines and wants to automate the process from a Linux system used for operations. I n this operations system, the list of servers is located in the /home/user/serverslist file and the l ist of user accounts is located in the /home/user/userslist file. Which of the following scripts will help accomplish this task?",
    "choices": [
      "bash for server in $(cat /home/user/serverslist) do for user in $(cat /home/user/userslist) do sudo useradd $user done done",
      "bash for server in $(cat /home/user/serverslist) do ssh -i user@$server \"for user i n $(cat /home/user/userslist) do sudo useradd $user done; exit\" done",
      "bash for server in $(cat /home/user/serverslist) do scp /home/user/userslist user@$server:/tmp ssh -i user@$server \"for user in $(cat /tmp/userslist) do sudo useradd $user done; exit\" done",
      "bash ssh user@$(cat /home/user/serve rslist) \"sudo useradd $(cat /hom e/user/userslist); exit\""
    ],
    "answer": "B",
    "explanation": "The script in option B performs the task by SSH-ing into each s erver listed in serverslist and then \nadding each user listed in userslist. This is an effective way to remotely create user accounts without \nmanually logging into each server. The ssh command allows the e xecution of the useradd commands \non the remote machines.",
    "type": "mcq"
  },
  {
    "question": "Which of the following directories contains binaries that only a root user should run?",
    "choices": [
      "/sbin",
      "/bin",
      "/root",
      "/lib"
    ],
    "answer": "A",
    "explanation": "The /sbin directory contains essential system binaries that are typically only used by the root user. \nThese binaries include commands like ifconfig, fdisk, and reboot, which require root privileges to \nexecute. /bin contains user-level binaries, while /root is the home directory of the root user, and /lib \nholds shared libraries.",
    "type": "mcq"
  },
  {
    "question": "Linux system users report that over the past few months, a serv er has stopped responding at least twice each day. Every time this happens, the users have to rest art the server to recover it. A systems administrator diagnosing the issue collects the following outpu ts: csharp Output 1 [Tue Aug 31 16:36:42 2021] oom-killer invoked by java: gfp_mask=0x280da2 order=0, oom_score_adj=0 [Tue Aug 31 16:36:42 2021] java cpuset=/ mems_allowed=0 makefile Output 2 [root@server]# free -m total used free shared buff/cache available Mem: 15819 15026 174 92 619 134 Swap: 0 0 0 Which of the following is the best permanent resolution for the system?",
    "choices": [
      "More memory resources",
      "More CP U resources",
      "More network bandwidt h",
      "Extended root filesystem"
    ],
    "answer": "A",
    "explanation": "The oom-killer is invoked when the system runs out of memory, a s indicated by the memory usage in \nthe free -m output. Since swap space is not being used and phys ical memory is almost entirely \nconsumed, adding more memory resources will prevent the system from running out of memory and \ninvoking the oom-killer to terminate processes.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator is configuring network traffic forwarding . Despite having proper iptables rules, the traffic forwarding is not working. Which of the following c ommands will allow Linux to pass network traffic between different interfaces?",
    "choices": [
      "n mcli allow-forwarding eth0",
      "echo 'net.ipv4.ip_forward=1' >> /etc/sysctl.conf; sysc tl -p",
      "i p route forward allow --all-interfaces; systemctl restart n etwork",
      "modprobe ip_forward"
    ],
    "answer": "B",
    "explanation": "To enable IP forwarding, the kernel parameter net.ipv4.ip_forwa rd must be set to 1. This is done by \nappending net.ipv4.ip_forward=1 to /etc/sysctl.conf and applying the changes using sysctl -p. This command ensures that the system can forward packets between different network interfaces.",
    "type": "mcq"
  },
  {
    "question": "A systems administrator created a new directory with specific p ermissions. Given the following output: arduino $ ls -ld /comptia drwxr-x--- 2 root root 4096 Oct 20 20:13 /comptia $ getfacl /comptia # file: /comptia # owner: root # group: root user::rwx group::r-x other::--- default:user::rwx default:group::r-x default:group:wheel:rwx default:mask::rwx default:other::--- Which of the following permissi ons are enforced on /comptia?",
    "choices": [
      "Members of the wheel group can read files in /comptia.",
      "Newly created files in /comptia will have the sticky bit set .",
      "Other users can create files in /comptia.",
      "Only root can create files in /comptia."
    ],
    "answer": "A",
    "explanation": "According to the getfacl output, the default ACL for the group wheel is set to rwx, meaning members \nof the wheel group have read, write, and execute permissions. Therefore, they can access and manage files in the /comptia dir ectory. Other users (other::---) have no permissions on this directory.",
    "type": "mcq"
  },
  {
    "question": "A Linux administrator updated the configuration file for the ht tpd web service. The administrator needs to apply the updated changes to the service without inter rupting any running sessions. Which of the following commands should the administrator run to accomplish this task?",
    "choices": [
      "s ystemctl reload httpd",
      "s ystemctl restart httpd",
      "sy stemctl status httpd",
      "sy stemctl mask httpd"
    ],
    "answer": "A",
    "explanation": "The systemctl reload httpd command reloads the Apache HTTP serv er configuration without \nterminating any existing connections. This is ideal for applying configuration changes without disrupting the current web traffic, ensuring seamless operation .",
    "type": "mcq"
  }
];

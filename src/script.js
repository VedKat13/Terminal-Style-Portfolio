var twitter   = "https://x.com/VedantKatruwar";
var linkedin  = "https://www.linkedin.com/in/vedant-katruwar/";
var instagram = "https://www.instagram.com/vedant2k5/";
var github    = "https://github.com/vedkat13/";
var email     = "mailto:ukvedant95@gmail.com";
const input = document.getElementById("input");
const output = document.getElementById("output");

let history = [];
let historyIndex = -1;

const commands = {
help: `
<pre>
help
whoisvedant
skills
projects
education
contact
resume
social
clear
</pre>
`,

  whoisvedant: `
<br>
Hey, I'm Vedant! 👋
I'm a computer engineering student at COEP Technological University, currently in my second year.
I'm building my skills in full-stack web development, UI/UX design, and mobile app development.
Alongside my academic journey, I'm working on real-world projects that combine creativity and code -
like personal portfolio sites, productivity apps, and publishing tools for WordPress creators.
I'm passionate about building things that are clean, functional, and user-centric.
My long-term vision is to run my own tech business, and I'm laying the foundation by learning design,
development, and deployment from the ground up.
This terminal website is one of my creative side projects, blending my love for design with development.
<br>
`,

  skills: `
<br>
Languages: HTML, CSS, JavaScript, Java
Frameworks: React, Firebase
Tools: Git, Figma, VS Code
Areas: UI/UX, Web Development, Mobile Apps
<br>
`,

  projects: `
<br>
1. Resume Builder - <a href="https://github.com/vedkat13/resume-builder" target="_blank">GitHub Repo</a>
2. HabitUp App - Firebase project
3. WordPress Manager App - In progress
<br>
`,

  education: `
<br>
B.Tech in Computer Engineering, COEP Technological University (2022 - 2026)
<br>
`,

  contact: `
<br>
Email: <a href="${email}" target="_blank">ukvedant95@gmail.com</a>
LinkedIn: <a href="${linkedin}" target="_blank">${linkedin}</a>
GitHub: <a href="${github}" target="_blank">${github}</a>
<br>
`,

  resume: `
<br>
<a href="./assets/resume.pdf" target="_blank">Click here to view my resume</a>
<br>
`,

  social: `
<br>
X           <a href="${twitter}" target="_blank">${twitter}</a>
LinkedIn    <a href="${linkedin}" target="_blank">${linkedin}</a>
Instagram   <a href="${instagram}" target="_blank">${instagram}</a>
GitHub      <a href="${github}" target="_blank">${github}</a>
<br>
`
};


input.addEventListener("keydown", function (e){
    if(e.key === "Enter"){
        const cmd = input.value.trim();
        if(cmd){
            history.push(cmd);
            historyIndex = history.length;
            runCommand(cmd);
        }
        input.value = "";
        contentSpan.textContent = "";

    }
    if(e.key === "ArrowUp"){
        if(historyIndex > 0){
            historyIndex--;
            input.value = history[historyIndex];
            contentSpan.textContent = input.value;
        }
            e.preventDefault();
    }
    if (e.key === "ArrowDown") {
    if (historyIndex < history.length - 1) {
      historyIndex++;
      input.value = history[historyIndex];
      contentSpan.textContent = input.value;
    } else {
      historyIndex = history.length;
      input.value = "";
      contentSpan.textContent = "";
    }
    e.preventDefault();
  }
});

function runCommand(cmd){
if(cmd === "clear"){
    output.innerHTML = "";
    return;
}

const response = commands[cmd] || `Command not found: ${cmd}. Try 'help'.`;
output.innerHTML += `<div><span class="prompt">vedant@portfolio:~$</span> ${cmd}</div>`;
output.innerHTML += `<div>${response}</div>`;
window.scrollTo(0, document.body.scrollHeight);
}
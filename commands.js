const commands = {
help: `
<div class="help">
  <div class="help-line"><span class="glow">help</span><span>List all available commands</span></div>
  <div class="help-line"><span class="glow">whoisvedant</span><span>Short intro about me</span></div>
  <div class="help-line"><span class="glow">skills</span><span>Show my tech stack and tools</span></div>
  <div class="help-line"><span class="glow">interest</span><span>See what are my interests!</span></div>
  <div class="help-line"><span class="glow">projects</span><span>Display key projects</span></div>
  <div class="help-line"><span class="glow">education</span><span>My academic background</span></div>
  <div class="help-line"><span class="glow">contact</span><span>Ways to reach me</span></div>
  <div class="help-line"><span class="glow">resume</span><span>Download or view my resume</span></div>
  <div class="help-line"><span class="glow">social</span><span>Social media profiles</span></div>
  <div class="help-line"><span class="redglow">secret</span><span>What can be the secret?</span></div>
  <div class="help-line"><span class="glow">clear</span><span>Clear the terminal screen</span></div>
  <div class="help-line"><span class="whiteglow">chatgpt [query]</span><span>Ask ChatGPT a question</span></div>

</div>
`,

chatgpt: `
<div class="line">
Usage: <span class="glow">chatgpt &lt;your question&gt;</span><br>
Opens ChatGPT in a new tab with your query.
</div>
`,

ls: `
<div class="help">
  <div class="help-line"><span class="glow">help</span><span>List all available commands</span></div>
  <div class="help-line"><span class="glow">whoisvedant</span><span>Short intro about me</span></div>
  <div class="help-line"><span class="glow">skills</span><span>Show my tech stack and tools</span></div>
  <div class="help-line"><span class="glow">interest</span><span>See what are my interests!</span></div>
  <div class="help-line"><span class="glow">projects</span><span>Display key projects</span></div>
  <div class="help-line"><span class="glow">education</span><span>My academic background</span></div>
  <div class="help-line"><span class="glow">contact</span><span>Ways to reach me</span></div>
  <div class="help-line"><span class="glow">resume</span><span>Download or view my resume</span></div>
  <div class="help-line"><span class="glow">social</span><span>Social media profiles</span></div>
  <div class="help-line"><span class="redglow">secret</span><span>What can be the secret?</span></div>
  <div class="help-line"><span class="glow">clear</span><span>Clear the terminal screen</span></div>
  <div class="help-line"><span class="whiteglow">chatgpt [query]</span><span>Ask ChatGPT a question</span></div>
</div>
`,

whoisvedant: `
<div class="line">
Hey, I'm Vedant! 👋<br>
I'm a third-year Computer Engineering student at COEP Technological University, Pune.<br>
I'm building my skills in full-stack web development, UI/UX design, Android app development, and systems-level programming. My tech stack includes HTML, CSS, JavaScript, React, Node.js, C, Java, Android (Java/Kotlin), and databases like MongoDB and SQL.<br>
Outside academics, I work on real-world projects that blend creativity with code-like personal portfolio sites, productivity apps, and experimental tools. I'm passionate about building clean, functional, user-focused digital experiences.<br>
My long-term goal is to run my own tech business, so I'm learning the entire journey-from design and development to deployment and scaling.<br>
This terminal website is one of my creative side projects, merging my love for design with hands-on development.

</div>
`,

skills: `
<div class="line">
Languages: Java, C, C++, JavaScript, HTML5, CSS3<br>
Frameworks & Tools: React, Node.js, Express.js, MongoDB, Firebase, TailwindCSS, Bootstrap<br>
Dev Tools: Git, VS Code, Postman, Figma, Framer, Linux<br>
Areas: UI/UX Design, Full-Stack Web Development, Android App Development, Systems Programming
</div>
`,


projects: `
<div class="line">
1. Terminal style portfolio<br>
2. HabitUp App - Firebase project - In progress<br>
3. WordPress Manager App - In progress

You can find all the projects on <a class="glow" href="${github}" target="_blank" >GITHUB</a>
</div>
`,

education: `
<div class="line">
🎓 Bachelor of Technology in Computer Engineering<br>
COEP Technological University, Pune<br>
Admission Year: 2023<br>
Expected Graduation: 2027<br>
Current Year: 3rd Year (2025)<br>
Core Focus of the Course: Data Structures, Algorithms, Systems Programming, Web Technologies
</div>
`,

DOB: `
<div class="line">
13/04/2005<br>
Wish me on my birthday!
</div>
`,

interest: `
<div class="line">
Music. (humans change music don't) <br>
Table Tennis (I bet i can beat you in TT match!) <br>
Sketch Artist (Watch for yourself -> <a class="glow" href="${insta2}" target="_blank" >@iamartguy</a> on instagram)
</div>
`,

cat: `
<div class="line">
Yeah I like cats too!<br>
<div
  style="
    width: 189px;
    height: 189px;
    background-image: url('https://images.pexels.com/photos/6869636/pexels-photo-6869636.jpeg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border: 1px solid #ccc;
  ">
</div>
</div>
`,

contact: `
<div class="line">
Personal mail: <u><span id="email1" onclick="copyEmail('email1')" style="cursor: pointer; color: #229bff;">ukvedant95@gmail.com</span></u><span class="yellow">(click to copy)</span><br>
College mail: <u><span id="email2" onclick="copyEmail('email2')" style="cursor: pointer; color: #229bff;">katruwarvu23.comp@coeptech.ac.in</span></u><span class="yellow">(click to copy)</span><br>
LinkedIn: <a href="${linkedin}" target="_blank" style="text-decoration: none;">LinkedIn</a><br>
GitHub: <a href="${github}" target="_blank" style="text-decoration: none;">GitHub</a><br>
</div>
<div class="line" id="copyMsg" style="color: limegreen; display: none;">Email copied to clipboard!</div>
`,

resume: `
<div class="line">
<a href="SUPERSET_RESUME.pdf" target="_blank">Click here to view my resume</a>
</div>
`,

social: `
<div class="line">
1. <a class="glow" href="${twitter}" target="_blank">Twitter</a><br>
2. <a class="glow" href="${linkedin}" target="_blank">Linkedin</a><br>
3. <a class="glow" href="${instagram}" target="_blank">Instagram</a><br>
4. <a class="glow" href="${github}" target="_blank">Github</a>
</div>
`
};

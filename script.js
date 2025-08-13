// ==== Config Links ====
var twitter   = "https://x.com/VedantKatruwar";
var linkedin  = "https://www.linkedin.com/in/vedant-katruwar/";
var instagram = "https://www.instagram.com/vedant2k5/";
var github    = "https://github.com/vedkat13/";
var email1     = "mailto:ukvedant95@gmail.com";
var email2     = "mailto:katruwarvu23.comp@coeptech.ac.in";
var insta2 = "https://www.instagram.com/iamartguy/";



// ==== DOM Elements ====
const input = document.getElementById("input");
const output = document.getElementById("output");
const promptSpan = document.querySelector(".prompt");
// const textContent = document.getElementById("text-content");

  function copyEmail(elementId) {
    const emailText = document.getElementById(elementId).textContent;

    navigator.clipboard.writeText(emailText)
      .then(() => {
        document.getElementById("copyMsg").style.display = "block";
        setTimeout(() => {
          document.getElementById("copyMsg").style.display = "none";
        }, 2000);
      })
      .catch(err => {
        console.error("Failed to copy email:", err);
      });
  }

const DEFAULT_PROMPT = "vedant@portfolio:~$";
let currentPrompt = DEFAULT_PROMPT;

// ==== State ====
let waitingForPassword = false;
const SECRET_PASSWORD_HASH = "4dcab0d82ccb503fea0f6f7a4d63440981cf2755d9fba55733489e8c8091fdf5";
const SECRET_URL = "https://youtu.be/hvL1339luv0?si=OWr-MdwdC4BuHCLr";
const REPO_URL = "https://github.com/VedKat13/Terminal-Style-Portfolio";

let history = [];
let historyIndex = -1;

// ==== Update Prompt ====
function updatePrompt() {
    promptSpan.textContent = currentPrompt;
}

// ==== Print to Output ====
function printToOutput(html) {
    const div = document.createElement("div");
    div.innerHTML = html;
    output.appendChild(div);
    window.scrollTo(0, document.body.scrollHeight);
}

// ==== Click anywhere to focus ====
document.addEventListener("click", () => {
    input.focus();
});

// ==== Mirror typed characters ====
// input.addEventListener("input", () => {
//     textContent.textContent = input.value;
// });

// ==== Run Command ====
function runCommand(cmd) {
    if (cmd === "") return;

printAnimated(`<span class="prompt">${DEFAULT_PROMPT}</span> ${cmd}`, 10);

    if (cmd === "clear") {
        output.innerHTML = "";
        return;
    }

   if (cmd === "secret") {
    waitingForPassword = true;
    currentPrompt = "Enter password: ";
    input.type = "text";
    input.dataset.realvalue = "";
    input.value = "";
    textContent.textContent = "";
    updatePrompt();
    return;
}


    if (cmd === "sudo") {
        printToOutput(`<span class="redglow">Not an admin.</span> GOTCHA!...`);
        setTimeout(() => {
            window.open(SECRET_URL, '_blank');
        }, 1500);
        return;
    }

    if (cmd === "repo") {
        printToOutput(`<span Redirecting to the project repository...`);
        setTimeout(() => {
            window.open(REPO_URL, '_blank');
        }, 1500);
        return;
    }

    // === ChatGPT Redirect ===
    if (cmd.startsWith("chatgpt ")) {
    const query = cmd.replace("chatgpt ", "").trim();
    if (query) {
        const url = `https://chatgpt.com/?q=${encodeURIComponent(query)}`;
        printToOutput(`🔍 Searching ChatGPT for: <span class="glow">${query}</span>`);
        setTimeout(() => {
            window.open(url, "_blank");
        }, 800);
    } else {
        printToOutput("❌ Please enter a query. Example: chatgpt how to center a div");
    }
    return;
}

    const response = commands[cmd] || 
    `Command not found: <span class="redglow">${cmd}</span>. Try <span class="glow">help</span>.`;

printAnimated(response, 50);
}

// ==== Check Secret Password ====
function checkSecretPassword(inputPassword) {
    const hash = CryptoJS.SHA256(inputPassword).toString();

    if (hash === SECRET_PASSWORD_HASH) {
        printToOutput(`✅ Password correct. Use the command <span class="redglow">sudo</span> only if you are an Admin.`);
    } else {
        printToOutput(`❌ Incorrect password.`);
    }

    waitingForPassword = false;
    input.type = "text";
    currentPrompt = DEFAULT_PROMPT;
    updatePrompt();
}

// ==== Handle Key Events ====
input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        const cmd = input.value.trim();

        if (waitingForPassword) {
            const realPassword = input.dataset.realvalue;
            checkSecretPassword(realPassword);
            input.dataset.realvalue = "";
            input.value = "";
            textContent.textContent = ""; // Clear the visible fake typed text
            return;
        } else if (cmd) {
            history.push(cmd);
            historyIndex = history.length;
            runCommand(cmd);
        }

        input.value = "";
        textContent.textContent = ""; // Clear the visible fake typed text
    }

    if (e.key === "ArrowUp") {
        if (historyIndex > 0) {
            historyIndex--;
            input.value = history[historyIndex];
            textContent.textContent = input.value;
        }
        e.preventDefault();
    }

    if (e.key === "ArrowDown") {
        if (historyIndex < history.length - 1) {
            historyIndex++;
            input.value = history[historyIndex];
            textContent.textContent = input.value;
        } else {
            historyIndex = history.length;
            input.value = "";
            textContent.textContent = "";
        }
        e.preventDefault();
    }
});


// ==== Mask password as stars ====
input.addEventListener("input", function (e) {
    if (waitingForPassword) {
        let currentValue = input.value;
        let realValue = input.dataset.realvalue || "";

        if (currentValue.length < realValue.length) {
            realValue = realValue.slice(0, currentValue.length);
        } else {
            let newChar = currentValue.slice(realValue.length);
            realValue += newChar;
        }

        input.dataset.realvalue = realValue;
        input.value = "*".repeat(realValue.length);
    }
});
console.log('You are SHARP!!');
console.log('Decrypt SHA256 using any online website: 4dcab0d82ccb503fea0f6f7a4d63440981cf2755d9fba55733489e8c8091fdf5');

function printAnimated(html, delay = 50) {
  const div = document.createElement("div");
  output.appendChild(div);

  // Split into lines
  const lines = html.split(/<br\s*\/?>/i);
  let i = 0;

  function nextLine() {
    if (i >= lines.length) {
      window.scrollTo(0, document.body.scrollHeight);
      return;
    }

    // Append the next line
    div.innerHTML += lines[i] + "<br>";
    i++;

    window.scrollTo(0, document.body.scrollHeight);
    setTimeout(nextLine, delay);
  }

  nextLine();
}
function toggleMenu() {
      document.getElementById("navBar").classList.toggle("active");
}

const words = ["Welcome! To,", "COMPUTER SUPPORT PLATFORM,", "Join Digital World Then, ", " Catch Your Future."];
      let i = 0;
      let j = 0;
      let currentWord = "";
      let isDeleting = false;

      function type() {
            const display = document.getElementById("typingText");

            if (!isDeleting && j <= words[i].length) {
                  currentWord = words[i].substring(0, j++);
            }
            else if (isDeleting && j >= 0) {
                  currentWord = words[i].substring(0, j--);
            }

      display.textContent = currentWord;

      if (!isDeleting && j === words[i].length) {
            isDeleting = true;
        setTimeout(type, 1500); // Pause before deleting
      } else if (isDeleting && j === 0) {
            isDeleting = false;
            i = (i + 1) % words.length;
            setTimeout(type, 500);
      }
      else {
            setTimeout(type, isDeleting ? 80 : 120);
      }
}
type();

function openModal() {
      document.getElementById("learnMoreModal").style.display = "block";
}
function closeModal() {
      document.getElementById("learnMoreModal").style.display = "none";
}

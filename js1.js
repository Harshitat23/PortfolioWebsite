document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const textArray = ["a Developer", "an Enthusiast", "a Learner"];
let textIndex = 0;
let charIndex = 0;
let currentText = "";

function type() {
  if (charIndex < textArray[textIndex].length) {
    currentText += textArray[textIndex].charAt(charIndex);
    document.querySelector('.typing').textContent = currentText;
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(deleteText, 1000);
  }
}

function deleteText() {
  if (charIndex > 0) {
    currentText = currentText.slice(0, -1);
    document.querySelector('.typing').textContent = currentText;
    charIndex--;
    setTimeout(deleteText, 100);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(type, 500);
  }
}

window.onload = type;
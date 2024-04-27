function runTypingEffect() {
  const text = 'C . I John 🎓';
  // const text = 'Working on Cryptography and Information Security';
  const typingElement = document.getElementById('typing-text');
  const typingDelay = 100;

  typeText(text, typingElement, typingDelay);
}

function typeText(text, element, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      element.textContent += text.charAt(i);
    }, delay * i);
  }
}

document.addEventListener('DOMContentLoaded', runTypingEffect);

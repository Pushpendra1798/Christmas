// Open Gift
function openGift() {
  document.getElementById("giftBox").style.transform = "translate(-50%, -50%) scale(1)";
  
  // Play Music
  const music = document.getElementById("bgMusic");
  music.volume = 0.3;
  music.play();

  // Confetti Burst
  for (let i = 0; i < 30; i++) {
    createConfetti();
  }
}

function createConfetti() {
  const confetti = document.createElement("div");
  const emojis = ["❄️", "✨", "⭐", "🎁", "🎄"];
  confetti.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
  confetti.style.position = "fixed";
  confetti.style.left = "50%";
  confetti.style.top = "50%";
  confetti.style.fontSize = "24px";
  confetti.style.pointerEvents = "none";
  confetti.style.zIndex = "1001";
  
  const destinationX = (Math.random() - 0.5) * 500;
  const destinationY = (Math.random() - 0.5) * 500;

  document.body.appendChild(confetti);

  const anime = confetti.animate([
    { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
    { transform: `translate(${destinationX}px, ${destinationY}px) scale(0)`, opacity: 0 }
  ], {
    duration: 1500,
    easing: 'ease-out'
  });

  anime.onfinish = () => confetti.remove();
}

// Close Gift
function closeGift() {
  document.getElementById("giftBox").style.transform =
    "translate(-50%, -50%) scale(0)";
}

// Snow Effect
const snowContainer = document.getElementById("snow");

for (let i = 0; i < 50; i++) {
  let snowflake = document.createElement("div");
  snowflake.innerHTML = "❄️";
  snowflake.style.position = "absolute";
  snowflake.style.left = Math.random() * 100 + "vw";
  snowflake.style.fontSize = Math.random() * 20 + 10 + "px";
  snowflake.style.animation = `fall ${Math.random() * 10 + 5}s linear infinite`;
  snowContainer.appendChild(snowflake);
}

// Snow Animation
const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  0% { top: -10%; opacity: 1; }
  100% { top: 110%; opacity: 0; }
}`;
document.head.appendChild(style);


// Stars Effect
const starsContainer = document.getElementById("stars");

for (let i = 0; i < 60; i++) {
  const star = document.createElement("span");
  const size = Math.random() * 3 + 1;

  star.style.width = size + "px";
  star.style.height = size + "px";
  star.style.top = Math.random() * 100 + "vh";
  star.style.left = Math.random() * 100 + "vw";
  star.style.animationDuration = Math.random() * 3 + 2 + "s";

  starsContainer.appendChild(star);
}

function sendWish() {
  const wishInput = document.getElementById("wishInput");
  const wish = wishInput.value.trim();
  const message = document.getElementById("wishMessage");

  if (wish === "") {
    message.style.color = "#ffb3b3";
    message.textContent = "🙏 Please write your wish before sending.";
    return;
  }

  
  // Confirmation message
  message.style.color = "#90ee90";
  message.textContent = "✨ Your wish has been sent to God. Have faith 🙏";

  // Create flying wish
  const flyingWish = document.createElement("div");
  flyingWish.className = "flying-wish";
  flyingWish.textContent = "🙏 " + wish;

  document.getElementById("flyingWishes").appendChild(flyingWish);

  // Remove after animation
  setTimeout(() => {
    flyingWish.remove();
  }, 4000);

  wishInput.value = "";
}


// Cursor Follower element create karein
const follower = document.createElement("div");
follower.className = "cursor-follower";
document.body.appendChild(follower);

document.addEventListener("mousemove", (e) => {
  // Glow circle position
  follower.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;

  // Sparkles generate karein (har thodi doori par)
  createSparkle(e.pageX, e.pageY);
});

function createSparkle(x, y) {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  
  // Random size
  const size = Math.random() * 8 + 2;
  sparkle.style.width = size + "px";
  sparkle.style.height = size + "px";
  
  // Position
  sparkle.style.left = x + "px";
  sparkle.style.top = y + "px";

  // Random direction movement
  const destinationX = x + (Math.random() - 0.5) * 50;
  const destinationY = y + (Math.random() - 0.5) * 50;

  document.body.appendChild(sparkle);

  const animation = sparkle.animate([
    { transform: `translate(0, 0) scale(1)`, opacity: 1 },
    { transform: `translate(${destinationX - x}px, ${destinationY - y}px) scale(0)`, opacity: 0 }
  ], {
    duration: 1000 + Math.random() * 1000,
    easing: 'cubic-bezier(0, .5, .5, 1)'
  });

  animation.onfinish = () => sparkle.remove();
}

function triggerSurprise() {
  const container = document.getElementById("fireworks-container");
  const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#ffffff"];

  // 15 firework bursts ek saath
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      createFirework(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight,
        colors[Math.floor(Math.random() * colors.length)]
      );
    }, i * 100);
  }
}

function createFirework(x, y, color) {
  const container = document.getElementById("fireworks-container");
  
  // 30 particles per burst
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement("div");
    particle.className = "firework";
    particle.style.backgroundColor = color;
    particle.style.left = x + "px";
    particle.style.top = y + "px";
    particle.style.boxShadow = `0 0 10px ${color}`;

    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 100 + 50;
    const destX = Math.cos(angle) * velocity;
    const destY = Math.sin(angle) * velocity;

    container.appendChild(particle);

    const animation = particle.animate([
      { transform: 'translate(0, 0) scale(1)', opacity: 1 },
      { transform: `translate(${destX}px, ${destY}px) scale(0)`, opacity: 0 }
    ], {
      duration: 2000,
      easing: 'ease-out'
    });

    animation.onfinish = () => particle.remove();
  }
}

// Open Gift
function openGift() {
  document.getElementById("giftBox").style.transform =
    "translate(-50%, -50%) scale(1)";
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


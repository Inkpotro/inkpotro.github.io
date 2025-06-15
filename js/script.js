const reviews = [
  {
    name: "Fazle Rabbi",
    img: "https://avatars.githubusercontent.com/u/11360512?v=4",
    title: "FOSS Enthusiast",
    text: "Great initiative! Looking forward to hear more from Inkpotro.",
    stars: "★★★★★"
  },
  {
    name: "Sharafat Karim",
    img: "https://avatars.githubusercontent.com/u/93897936?v=4",
    title: "Linux Enthusiast",
    text: "Time saving, efficient and, last but not least, FOSS. So do I have any reason not to use Inkpotro?",
    stars: "★★★★★"
  },
  {
    name: "Asib Hossen",
    img: "https://avatars.githubusercontent.com/u/122161545?v=4",
    title: "UI/UX Designer",
    text: "Even though I love CLI, I couldn't help loving Inkpotro!",
    stars: "★★★★★"
  },
  {
    name: "Md Asad",
    img: "https://avatars.githubusercontent.com/u/92594708?v=4",
    title: "Web Developer",
    text: "Inkpotro makes blogging easy. No Git or editor needed. Just write and publish smoothly.",
    stars: "★★★★★"
  }
];

const container = document.getElementById('review-container');
let currentIndex = 0;

function showReview(index) {
  container.innerHTML = '';
  const review = reviews[index];
  const div = document.createElement('div');
  div.className = 'review-card active';
  div.innerHTML = `
    <div class="reviewer">
      <img src="${review.img}" alt="${review.name}"/>
      <div class="reviewer-details">
        <h4>${review.name}</h4>
        <p class="title">${review.title}</p>
      </div>
    </div>
    <p class="review-text">${review.text}</p>
    <div class="stars">${review.stars}</div>
  `;
  container.appendChild(div);
}

function startReviewRotation() {
  showReview(currentIndex);
  setInterval(() => {
    currentIndex = (currentIndex + 1) % reviews.length;
    showReview(currentIndex);
  }, 4000);
}

function startTyping(text, elementId, speed = 50) {
  const el = document.getElementById(elementId);
  const cursor = document.querySelector('.cursor');
  let i = 0;
  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      if (cursor) {
        cursor.remove();
      }
    }
  }
  type();
}

document.addEventListener("DOMContentLoaded", () => {
  startReviewRotation();
  startTyping("Write Freely, Publish Instantly.", "typing-text");
});
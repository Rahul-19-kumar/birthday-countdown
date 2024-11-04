const birthday = new Date("2024-12-03T00:00:00").getTime();


const countdown = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = birthday - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  
  if (timeLeft < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Happy Birthday!";
  }
}, 1000);


const greetings = [
  "Just a few days until the world gets to celebrate the amazing day you were born! Can’t wait to see you glow on your special day.",

"The day that brought your beautiful soul into this world is almost here, and I’m counting down with so much excitement!",

"Your birthday is coming up soon, and it’s already making the days brighter. Here’s to celebrating someone truly wonderful in just a few days!",

"In just a short time, we’ll be honoring the day an amazing person like you came into this world. Let the countdown begin!",

"The day you blessed this world with your presence is right around the corner—can’t wait to celebrate you and all the happiness you bring!",

"Just a few more days until the world celebrates someone as incredible as you! Let the pre-birthday joy begin!",
"The special day that gave us you is almost here. Every day closer makes me even more grateful to know you.",

"Counting down the days to your birthday, and I’m already feeling the joy and excitement it brings! You deserve the world and more.",

"Your birthday is so close now, and it’s got me thinking of all the wonderful things you are and the happiness you bring to everyone.",

"The day the world gets to celebrate you is almost here! Looking forward to making it as special as you are."
];


function showGreeting() {
  const greetingElement = document.getElementById("greeting");
  const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
  greetingElement.innerText = randomGreeting;
}
const wishes = [
  "🎉 Wishing you a day filled with love, joy, and all your favorite things! 🎂",
  "🌸 May your birthday be as beautiful and wonderful as you are hihi! 💖",
  "🎈 May all your dreams come true! 🌟",
  "💐 Sending you hugs, kisses, and all the best wishes on your birthday! 🎁",
  "🌷 May your year ahead be filled with adventure and happiness! 🥳",
  "✨ TEE duuaaa MELissaa! 🎊",
  "🌼 May your birthday be sprinkled with fun and laughter! 🎉",
  "🍰 Wishing you a year filled with the same joy you bring to me! 🎈",
  "🌹 May your birthday be filled with sweet surprises and endless happiness! 🎁",
  "🎊 Celebrate big today! You deserve all the love and happiness! 🎉"
];

document.getElementById("wishButton").addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * wishes.length);
  document.getElementById("wishDisplay").innerHTML = `<p>${wishes[randomIndex]}</p>`;
});
//  Based on Month: size 12
const zodiacSign = [
  "Capricorn",   // January
  "Aquarius",    // February
  "Pisces",      // March
  "Aries",       // April
  "Taurus",      // May
  "Gemini",      // June
  "Cancer",      // July
  "Leo",         // August
  "Virgo",       // September
  "Libra",       // October
  "Scorpio",     // November
  "Sagittarius"  // December
];

// 31 compliments (based on date of birth)
const compliments = [
  "You have a great sense of humor.",
  "You are really courageous.",
  "Your smile brightens the room.",
  "You’re incredibly thoughtful.",
  "You have amazing creativity.",
  "You’re a quick learner.",
  "You bring out the best in other people.",
  "You’re very dependable.",
  "You have a kind heart.",
  "You’re a good listener.",
  "You’re stronger than you think.",
  "You have excellent problem-solving skills.",
  "You’re very supportive.",
  "You have a positive attitude.",
  "You’re genuinely caring.",
  "You’re inspiring to others.",
  "You have great ideas.",
  "You’re very hardworking.",
  "You handle challenges well.",
  "You’re friendly and approachable.",
  "You have a great perspective on things.",
  "You’re very patient.",
  "You’re confident in a good way.",
  "You’re unique in the best way.",
  "You make people feel comfortable.",
  "You’re very respectful.",
  "You’re a great team player.",
  "You’re honest and trustworthy.",
  "You have a big heart.",
  "You’re going to achieve great things.",
  "You make a difference."
];

// victim card compliments size 20
const victimCardCompliments = [
  "You’re so nice that people sometimes take advantage of you.",
  "You care more about others than they care about you.",
  "You always give your best, even when no one notices.",
  "You’re too kind for this world.",
  "People don’t appreciate how much you sacrifice.",
  "You always end up helping others more than yourself.",
  "You deserve better than how people treat you.",
  "You try so hard, even when life isn’t fair to you.",
  "You’re the one who cares the most in every situation.",
  "You forgive people even when they don’t deserve it.",
  "You put others first, even at your own cost.",
  "You’re always there for people who aren’t there for you.",
  "Your kindness often goes unnoticed.",
  "You handle more than people realize.",
  "You stay strong even when you’re hurting.",
  "You give people chances they wouldn’t give you.",
  "You’re too patient with people who test you.",
  "You love deeply, even when it’s not returned.",
  "You always try to keep the peace.",
  "You deserve the same effort you give."
];

// rocommendations size 50
const Recommendations = [
  "Write a letter to your future self.",
  "Take yourself on a solo date.",
  "Watch the sunrise from a new place.",
  "Learn to recognize 10 constellations.",
  "Start a 'tiny wins' journal.",
  "Give a sincere compliment to a stranger.",
  "Do a 24-hour digital detox.",
  "Cook a dish from a country you’ve never visited.",
  "Create a personal theme-song playlist.",
  "Plant a tree and track its growth.",
  "Try a new hobby for 30 days.",
  "Memorize a poem and recite it.",
  "Volunteer for a cause once a month.",
  "Take a different route to familiar places.",
  "Learn basic sign language phrases.",
  "Host a board game night with friends.",
  "Write a gratitude note to a mentor.",
  "Build a morning sunlight routine.",
  "Master one signature dish.",
  "Keep an 'ideas list' in your phone.",
  "Do a random act of kindness weekly.",
  "Visit a museum alone.",
  "Practice 5-minute daily meditation.",
  "Learn to identify local birds.",
  "Create a vision board for your goals.",
  "Try a fear-setting exercise.",
  "Record your grandparents’ stories.",
  "Attempt a no-complaint day challenge.",
  "Learn basic investing.",
  "Take a monthly nature walk.",
  "Declutter one small area each week.",
  "Write a personal manifesto.",
  "Learn a simple magic trick.",
  "Send handwritten postcards.",
  "Make a yearly photo book.",
  "Try a new workout style each month.",
  "Learn to brew great coffee or tea.",
  "Start a one-line-a-day diary.",
  "Do a 7-day kindness challenge.",
  "Learn public speaking basics.",
  "Make a list of 100 life goals.",
  "Go stargazing with a sky map app.",
  "Create a personal website or blog.",
  "Learn basic first aid.",
  "Start a weekly family call ritual.",
  "Save a small 'joy fund' for fun experiences.",
  "Learn a dance from another culture.",
  "Do a monthly skill-swap with a friend.",
  "Spend a day without buying anything.",
  "Write down your life lessons so far."
];

// size is 50
const Predictions = [
  "A small decision you make soon will lead to a big opportunity.",
  "You’ll reconnect with someone who brings positive energy.",
  "Good news will arrive when you least expect it.",
  "A new skill you learn will pay off sooner than you think.",
  "Someone will appreciate you more than they say.",
  "A lucky break will come from a random conversation.",
  "You’ll discover a hidden talent.",
  "A goal you thought was far away will get closer.",
  "You’ll make a memory that lasts for years.",
  "A positive change in routine will boost your mood.",
  "You’ll solve a problem that’s been bothering you.",
  "A surprise compliment will make your day.",
  "You’ll find motivation at the perfect time.",
  "An idea of yours will be appreciated by others.",
  "You’ll visit a place that inspires you.",
  "A new friendship will form naturally.",
  "You’ll achieve something you doubted.",
  "A peaceful moment will bring clarity.",
  "You’ll laugh a lot on an ordinary day.",
  "A challenge will turn into a lesson.",
  "You’ll receive help right when you need it.",
  "A creative idea will spark success.",
  "You’ll feel proud of your progress.",
  "A small win will lead to a bigger one.",
  "You’ll let go of something that held you back.",
  "Someone will trust your advice.",
  "You’ll enjoy a moment of pure happiness.",
  "A plan will work out better than expected.",
  "You’ll make time for something you love.",
  "A fear will fade away.",
  "You’ll inspire someone without knowing.",
  "A new opportunity will appear.",
  "You’ll feel more confident soon.",
  "A kind act will return to you.",
  "You’ll learn something valuable.",
  "A fresh start will feel refreshing.",
  "You’ll complete something important.",
  "A surprise will make you smile.",
  "You’ll feel grateful for a simple thing.",
  "A positive habit will stick.",
  "You’ll meet someone interesting.",
  "A wish will move closer to reality.",
  "You’ll overcome a difficulty.",
  "A calm day will recharge you.",
  "You’ll get recognition you deserve.",
  "A fun plan will come together.",
  "You’ll trust yourself more.",
  "A good decision will reward you.",
  "You’ll feel proud of who you are becoming.",
  "Something you hope for will begin to happen."
];

const form = document.getElementById("astroForm");

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const day = Number(document.getElementById("day").value);   //since value gives in string format
  const month = Number(document.getElementById("month").value);
  const year = Number(document.getElementById("year").value);

  const result = document.getElementById('result');
  const greet_message = `Hello ${name} ${surname}.`;
  const zodiac_message = `Your Zodiac Sign is ${zodiacSign[month-1]}.`;  //1:jan, feb:2 ... 
  const compliment_message = `${compliments[day-1]}`;
  const victimCompliment_message = `${victimCardCompliments[Math.floor(Math.random()*20)]}`;  //I am keeping this random

  let index = ((name.length+surname.length)*(day+month)*year)%50;
  console.log(index);
  const recommendation_message = `${Recommendations[index]}`;

  index = ((day+month)*year)%50;
  const prediction_message = `${Predictions[index]}`;
  console.log(index);
  result.innerText = `${greet_message} ${zodiac_message} ${compliment_message} ${victimCompliment_message} ${recommendation_message} ${prediction_message}`; 

})



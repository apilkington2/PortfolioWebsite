/* Arrays and Conditionals */
const pictures = ['image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
let index = 0;
function switchPicture() {
  index += 1;
  if (index >= pictures.length) {
    index = 0;
  }
  document.getElementById('Picture').src = pictures[index];
}
switchPicture();

/* Sets */
const quotes = new Set(['Don\'t stop beliving', 'Stay positive', 'You are valid', 'Have goals']);
$('#quotes').text(quotes.has('Stay positive'));

/* Maps */
const experience = new Map();
experience.set('Python', 'I have known Python for 3 years');
experience.set('Java', 'I have known Java for 2 years');
experience.set('Kivy', 'I have known Kivy for 1 year');
const expText = String(experience.get('Python'));
$('#Experience').text(expText);

/* Loops */
let string = '';
for (let i = 10; i > 0; i--) {
  string = `${string} ${i} `;
}
$('#Countdown').text(`${string} blast off!`);

/* Arrow Function and Jquery event */
$('#Surprise').click(() => {
  $('#Thanks').text('THANKS FOR VISITING.');
});

/* Classes and Constructors */

class Course {
  constructor(name, credits) {
    this.name = name;
    this.credits = credits;
  }

  get credits() {
    const easyCredits = ['1', '2', '0'];
    if (easyCredits.contains(this.credits)) {
      return 'this is a easy class';
    }
    return 'this is an hard class';
  }
}
const math = new Course('math', '4');
$('#Class').text(`My favorite class is ${math.name}`);

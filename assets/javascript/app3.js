console.log('hello');
/// setting up 1 question in html
// once the option was chosen then check against the aswer
// if value from form == q1Answer -> alert('that is correct!')

var trivia = [{
        question: "what color is the sun?",
        answers: ["pink", "green", "yellow", "black"],
        correct: ["yellow"]
    },
    {
        question: "what color is the moon?",
        answers: ["pink", "white", "orange", "black"],
        correct: ["white"]
    }
]

for (i=0; i< trivia.length; i++)
    var myAnswer = prompt(trivia[i].question)
    
    if (myAnswer === trivia[i].choices[trivia[i].correct]) {
    alert("You got it right!")
    }

    // <div id="questionDiv"></div>
    // <div id="answersDiv"></div>


var questionsRight = 0
var questionsWrong = 0
var time = 10


document.getElementById('mybutton').addEventListener('click', function(event){
  event.preventDefault()
  var q1 = document.getElementById('q1').value
  console.log(q1);
  if (q1Answer == q1){
    questionsRight++
    alert('that is correct and you have answered ' + questionsRight + ' questions correctly')
  } else {
    questionsWrong++
    alert('that is wrong')
  }
})



var myTimer = setInterval(function(){
  time--
  console.log(time);
  if (time == 0){
    alert('Time is up. Game over')
    clearInterval(myTimer)
  }
}, 1000)
var time = 5

setInterval(function(){
time --
console.log(time)
}, 1000)



//code for the questions and answers
console.log ("hello")
var questions = [{
        prompt: "what color are bananas?",
        a: "(a) green",
        b: "(b) blue",
        c: "(c) yellow",
        answer: "c"
    },

    {
        prompt: "what color are peaches? \n (a) pink, \n (b) purple, \n (c) yellow",
        answer: "a"
    },

    {
        prompt: "what color are apples? \n (a) brown, \n (b) red, \n (c) yellow",
        answer: "a"
    },
]


var questionIndex = 0
var rightAnswers = 0
var wrongAnswers = 0

//set the score to 0
var score = 0


//loop to ask questions, compare the answers and then keep track of correct or not
// for (var i = 0; i < questions.length; i++) {
//     var response = window.prompt(questions[i].prompt) //this accesses the questions in the array above
//     if (response == questions[i].answer) {
//         score++
//         alert("correct")
//     } else {
//         alert("WRONG")
//     }
// }
// alert("you got " + score + "/" + questions.length);




//code for the html dynamic page
// This line of jQuery selects the div with the matching id (#question)
var quiz = $("#quiz")


// For Loop then loops through our total drink list...
// for (var i = 0; i < questions.length; i++) {

   


function loadQuestions() {
   
    quiz.empty();  //this empties the div before adding a new question each time
  // It then creates a new div for each questions and its answers
  if (questionIndex < questions.length) {
    var newQuestion = $("<div>" + questions[questionIndex].prompt + "</div>");
    var a = $("<button class='answer' data='a'>" + questions[questionIndex].a + "</button>")
    var b = $("<button  class='answer' data='b'>" + questions[questionIndex].b + "</button>")
    var c = $("<button class='answer' data='c'>" + questions[questionIndex].c + "</button>")
  
    quiz.append(newQuestion);
    quiz.append(a);
    quiz.append(b);
    quiz.append(c)
    }
  else {
        quiz.append("Game Over")
        quiz.append(rightAnswers)
        quiz.append(wrongAnswers)
  }
 
}

if (time==0){
    questionIndex = questions.length
    loadQuestions()
}

  $(document).on("click", ".answer", function(){
    var data = $(this).attr("data")  //graps the data on lines 51-53
       console.log (data)
       if (data === questions[questionIndex].answer){
           console.log ("That's the correct answer.")
           rightAnswers++
       }
       else {
           console.log ("That's the wrong answer.")
           wrongAnswers++
       }
       questionIndex++
       loadQuestions()
}) 

  // It then adds the answers to the new div 
    //close bracket of load questions

loadQuestions()  //initial load of question1, etc.

$(document).on("click", "#next", function(){
    console.log ("click next button")
    questionIndex ++
    loadQuestions()  //load question after next button is clicked
    
})




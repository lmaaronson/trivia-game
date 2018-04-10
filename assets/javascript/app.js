console.log('hello');
/// setting up 1 question in html
// once the option was chosen then check against the aswer
// if value from form == q1Answer -> alert('that is correct!')


var q1Answer = "yellow"
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
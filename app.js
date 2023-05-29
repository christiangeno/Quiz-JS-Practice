function enter() {
    var name = document.getElementById('name').value;
    document.getElementById('name').value = "";
    document.querySelector('.enteryourname').style.display = "none";
    document.querySelector('.q1').style.display = "block";
    document.getElementById('qCount').innerHTML = "Question #1";
  }

  function next1() {
    document.querySelector('.q1').style.display = "none";
    document.querySelector('.q2').style.display = "block";
    document.getElementById('qCount').innerHTML = "Question #2";
  }

  function next2() {
    document.querySelector('.q2').style.display = "none";
    document.querySelector('.q3').style.display = "block";
    document.getElementById('qCount').innerHTML = "Question #3";
  }

  function next3() {
    document.querySelector('.q3').style.display = "none";
    document.querySelector('.q4').style.display = "block";
    document.getElementById('qCount').innerHTML = "Question #4";
  }
  
  function next4() {
    document.querySelector('.q4').style.display = "none";
    document.querySelector('.q5').style.display = "block";
    document.getElementById('qCount').innerHTML = "Question #5";
  }

  function next5() {
    document.querySelector('.q5').style.display = "none";
    document.querySelector('.result').style.display = "block";
    document.getElementById('qCount').innerHTML = "";
    submitQuiz();
  }


  function submitQuiz() {
    var answers = ["a", "c", "c", "a", "a"]; // Answers
    var totalQuestions = 5; // Total Questions
    var score = 0;

    for (var i = 1; i <= totalQuestions; i++) {
      var selectedOption = document.querySelector('input[name=q' + i + ']:checked');
      if (selectedOption && selectedOption.value === answers[i - 1]) {
        score++;
      }
    }

    var result = document.getElementById('result');
    result.innerHTML = "You scored " + score + " out of " + totalQuestions + "!";
  }
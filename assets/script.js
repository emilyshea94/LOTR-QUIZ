function gradeQuiz() {
    let score = 0;
  
    const q1Answer = document.getElementById('q1').value.toLowerCase();
    const q2Answer = document.getElementById('q2').value;
    const q3Answer = document.getElementById('q3').value.toLowerCase();
  
    if (q1Answer === 'Witch King') {
      score += 1;
    }
    
 
   }, 1000;

    if (q2Answer === 'Shadowfax') {
      score += 1;
    }
  
    if (q3Answer === '???') {
      score += 1;
    }
  
    const result = document.getElementById('result');
    result.innerHTML = `Your score is ${score} out of 3.`;
  
   
  function timed-quiz() {

    function updateTimer() {
      document.getElementById('timer').textContent = `Time remaining: ${timeRemaining}s`;
      if (timeRemaining === 0) {
        clearInterval(timer);
        showResult();
      } else {
        timeRemaining--;
      }

  }
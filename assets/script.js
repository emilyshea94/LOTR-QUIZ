window.onload = function () {
  let highScore = localStorage.getItem('highScore') || 0;
  let timer;

  
  function startTimer(duration, display) {
    let timeRemaining = duration;

    const countdown = setInterval(function () {
      let minutes = parseInt(timeRemaining / 60, 10);
      let seconds = parseInt(timeRemaining % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timeRemaining < 0) {
        clearInterval(countdown);
        
        document.getElementById('quizForm').submit();
      }
    }, 1000);
    timer = countdown; 
  }

  document.getElementById('quizForm').addEventListener('submit', function (event) {
    event.preventDefault();

  
    if (timer) {
      clearInterval(timer);
    }

    let score = 0;

    const q1Answer = document.getElementById('q1').value.toLowerCase();
    const q2Answer = document.getElementById('q2').value.toLowerCase();
    const q3Answer = document.getElementById('q3').value.toLowerCase();
//simple lotr related answers
    if (q1Answer === 'witch king') {
      score += 1;
    }

    if (q2Answer === 'shadowfax') {
      score += 1;
    }

    if (q3Answer === 'shall not pass') {
      score += 1;
    }

    const result = document.getElementById('result');
    result.innerHTML = `Your score is ${score} out of 3. High Score: ${highScore}`;

    if (score > highScore) {
      highScore = score;
      localStorage.setItem('highScore', highScore);
      let initials = prompt('Congratulations! You set a new high score. Please enter your initials:');
      localStorage.setItem('initials', initials);
    }

    const storedInitials = localStorage.getItem('initials');
    if (storedInitials) {
      result.innerHTML += `<br>Your initials for high score: ${storedInitials}`;
    }
  });
// i could not get the itials to reset after they were logged. 
 
  const quizTime = 60 * 2; 
  const display = document.getElementById('timerDisplay');
  startTimer(quizTime, display);
};
// i had trouble getting my questions to appear one after the other so 
//so i left them in a row as to not jepordise my timer and high score. 


function check(event){
    event.preventDefault();
    let score = document.getElementById('score')
    let level = document.getElementById('level') // Get level element
    const inputValue = event.target.userAnswer.value;
    const video = document.getElementById('videoPlayer')
    
    if (inputValue == 'planet' && Number(level.value) == 1) {
        alert("Answer correct");
        score.value = Number(score.value) + 1
        level.value = Number(level.value) + 1  // Move to level 2
        video.children[0].src = 'big-buck-bunny-480p-30sec (2).mp4'
        video.load()
        return false;
    }

    if (inputValue == 'bunny' && Number(level.value) == 2) {
        alert("Answer correct");
        score.value = Number(score.value) + 1
        level.value = Number(level.value) + 1  // Move to level 3
        video.children[0].src = 'planet.mp4'
        video.load()
        return false;
    }
    if (inputValue == '1.mp4' && Number(level.value) == 3) {
      alert("Answer correct");
      score.value = Number(score.value) + 1
      level.value = Number(level.value) + 1  // Move to level 3
      return false;
  }
    else {
        score.value = Number(score.value) - 1
        alert("Answer incorrect or wrong level!");
        return false;
    }
}
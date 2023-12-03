document.getElementById('yesBtn').addEventListener('click', function() {
  document.querySelector('.question').innerText = 'I know that...🤣';
  document.querySelector('.question').style.color = 'red';
});

document.getElementById('noBtn').addEventListener('mouseover', function() {
  const randomX = Math.random() * (window.innerWidth - 100);
  const randomY = Math.random() * (window.innerHeight - 40);

  this.style.position = 'absolute';
  this.style.left = randomX + 'px';
  this.style.top = randomY + 'px';
});

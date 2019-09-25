var img = document.getElementById('img');
document.getElementById('my_form').addEventListener('submit', function(e) {
  img.style.display = 'block';
  img.style.top = (document.documentElement.clientHeight - img.offsetHeight) / 2 + 'px';
  img.style.left = (document.documentElement.clientWidth - img.offsetWidth) / 2 + 'px';
  e.preventDefault();
});
document.addEventListener('click', function(e) {
  var target = e.target;
  if(target == img.firstElementChild || target == img) return;
  img.style.display = 'none';
});
var img = document.getElementById('img');
document.getElementById('my_form').addEventListener('submit', function(e) {
  img.style.display = 'block';
  img.style.top = (document.documentElement.clientHeight - img.offsetHeight) / 5 + 'px';
  img.style.left = (document.documentElement.clientWidth - img.offsetWidth) / 12 + 'px';
  e.preventDefault();
});
document.addEventListener('click', function(e) {
  var target = e.target;
  if(target == img.firstElementChild || target == img) return;
  img.style.display = 'none';
});
var Img = document.getElementById('img_footer');
var form = document.getElementById('form_footer');
if (form) {
form.addEventListener('submit', function(e) {
  Img.style.display = 'block';
  e.preventDefault();
});
}
document.addEventListener('click', function(e) {
  var target = e.target;
  if(target == Img.firstElementChild || target == Img) return;
  Img.style.display = 'none';
});

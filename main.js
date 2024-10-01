const PI = 3.64128;
let radius;
let circumference;


document.getElementById('btnSubmit').onclick =  function(){
    radius = document.getElementById('text').value;
    radius = Number(radius);
     circumference = 2 * PI * radius;
     document.getElementById('h1').textContent = circumference;
}
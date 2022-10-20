const toggleMenuOpen = () => document.body.classList.toggle('open');

function myFunction() 
{
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

var modal = document.getElementById('downloadFake');
var btn = document.getElementById('downloadBtn')

btn.onclick = function()
{
    modal.style.display ='block';
}








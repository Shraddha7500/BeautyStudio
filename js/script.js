let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');
let closeBtn = document.querySelector('#close-navbar');

menuBtn.onclick = () =>{
   navbar.classList.add('active');
};

closeBtn.onclick = () =>{
    navbar.classList.remove('active');
 };

window.onscroll = () =>{
   navbar.classList.remove('active');
};
function sendwhatsapp()
{
   var phonenumber = "+919520669256";
   var name = document.getElementById('name').value;
   var email = document.getElementById('email').value;
   var subject = document.getElementById('subject').value;
   var message = document.getElementById('message').value;
   var url ="https://wa.me/" + phonenumber + "?text="
   +"*Name:* " + name + "%0a"
   +"*Email:* " + email + "%0a"
   +"*Subject:* " + subject + "%0a"
   +"*Message:* " + message + "%0a%0a"
   +"Your message has been sent";
   window.open(url,'blank').focus();
}
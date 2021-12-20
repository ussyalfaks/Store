// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
btn.onclick = () => {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/////////////////////////////////// SECOND MODAL ////////////////////////
// Get the modall
var modall = document.getElementById("myModall");
// Get the button that opens the modall
var btnn = document.getElementById("myBtnn");
// Get the <span> element that closes the modall
var hideme = document.getElementsByClassName("closee")[0];
// When the user clicks the button, open the modall 
btnn.onclick = () => {
    modall.style.display = "block";
}
// When the user clicks on <hideme> (x), close the modall
hideme.onclick = function() {
  modall.style.display = "none";
}
// When the user clicks anywhere outside of the modall, close it
// window.onclick = (event) => {
//   if (event.target == modall) {
//     modall.style.display = "none";
//   }
// }
// /////////////////////////////////SIDE - BAR  ///////////////////////////////
// /////////////////////////////////SIDE - BAR  ///////////////////////////////
// /////////////////////////////////SIDE - BAR  ///////////////////////////////

function toggleSidenav() {
  document.body.classList.toggle('sidenav-active');  
  document.body.classList.toggle('noscroll');
  document.querySelector(".mySidenav").style.width = "0%";
}


function toggleSidenavs() {
// var mediaQuery = window.matchMedia('(max-width: 650px)');
// if (mediaQuery.matches) {
//   // Then trigger an alert
//   document.getElementById("mySidenav").style.width = "100%";
//   document.body.classList.toggle('sidenav-active');
// }
// else if (mediaQuery.matches){
//   document.getElementById("mySidenav").style.width = "500px";
//   document.body.classList.toggle('sidenav-active');

// }
document.body.classList.toggle('sidenav-active');
    document.querySelector(".mySidenav").style.display = "block";
function myFunction(x) {
  if (x.matches) {
    document.querySelector(".mySidenav").style.width = "100%";
    document.body.classList.toggle('sidenav-active');
    document.querySelector(".mySidenav").style.display = "block";

  } else {
     
    document.querySelector(".mySidenav").style.width = "500px";


  }
}

var x = window.matchMedia("(max-width: 650px)");
myFunction(x);
// x.addListener(myFunction)
}

// SHOW HIDE USING CHECKBOX
function ShowHideDiv(checkbox1) {
  var autoUpdate = document.getElementById("autoUpdate");
  autoUpdate.style.display = checkbox1.checked ? "block" : "none";
}

// INNER SHOW HIDE 
function ShowHide(checkbox2) {
  var autoUpdate2 = document.getElementById("autoUpdate2");
  autoUpdate2.style.display = checkbox2.checked ? "block" : "none";
}


// SIDEBAR AREA SHOW AND HIDE DIVS ONCLICK EVENT


document.querySelector(".sidebar-container").style.display="none";
document.querySelector("#showTwo").style.display="none";
document.querySelector(".sidebar-container-two").style.display="none";
document.querySelector(".inner-content-three").style.display="none";

document.addEventListener('DOMContentLoaded', () => {


   document.getElementById('checkout').onclick = (e) =>{
    e.preventDefault();
   document.querySelector(".sidebar-container").style.display="block";
   document.querySelector(".bagview").style.display="none";
  }

  document.getElementById('backOne').onclick = (e) =>{
    e.preventDefault();
    document.querySelector(".sidebar-container").style.display="none";
    document.querySelector(".bagview").style.display="block";

  }





  document.getElementById('Continuetopay').onclick = (e) =>{
    e.preventDefault();
    document.querySelector(".sidebar-container").style.display="block";
    document.querySelector("#showOne").style.display="none";
    document.querySelector("#showTwo").style.display="block";
  }

  document.getElementById('backTwo').onclick = (e) =>{
    e.preventDefault();
    document.querySelector(".sidebar-container").style.display="block";
    document.querySelector("#showOne").style.display="block";
    document.querySelector("#showTwo").style.display="none";

  }






    document.getElementById('Reviewandpay').onclick = (e) =>{
      e.preventDefault();
      document.querySelector(".sidebar-container").style.display="none";
      document.querySelector("#showTwo").style.display="none";
      document.querySelector("#showOne").style.display="none";
      document.querySelector(".sidebar-container-two").style.display="block";
  }


  document.getElementById('backThree').onclick = (e) =>{
    e.preventDefault();
    document.querySelector(".sidebar-container").style.display="block";
    document.querySelector("#showTwo").style.display="block";
    document.querySelector("#showOne").style.display="none";
    document.querySelector(".sidebar-container-two").style.display="none";
}
  
document.getElementById('Letsomeonepayforyou').onclick = (e) =>{
    e.preventDefault();
    document.querySelector(".sidebar-container").style.display="block";
    document.querySelector("#showTwo").style.display="none";
    document.querySelector(".sidebar-container-two").style.display="none";
    document.querySelector(".inner-content-three").style.display="block";

  }

  document.getElementById('Payforyourself').onclick = (e) =>{
    e.preventDefault();
    document.querySelector(".sidebar-container").style.display="block";
    document.querySelector("#showTwo").style.display="block";
    document.querySelector("#showOne").style.display="none";
    document.querySelector(".sidebar-container-two").style.display="none";
    document.querySelector(".inner-content-three").style.display="none";

}
  
});

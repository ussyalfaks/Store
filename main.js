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
  document.getElementById("mySidenav").style.width = "0";
}


function toggleSidenavs() {
    document.getElementById("mySidenav").style.width = "500px";
    document.getElementById("mySidenav").style.backgroundColor= "white";
    document.body.classList.toggle('sidenav-active');
}


document.getElementById('checkout').onclick = () =>{
  document.getElementById('checkout').style.display ='none';
}

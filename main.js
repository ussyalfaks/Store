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
    document.body.classList.toggle('sidenav-active')
}



// document.addEventListener('DOMContentLoaded', () => {

// document.getElementById('checkout').onclick = () =>{
//  document.getElementById('bagview__content').style.display= "none";
//  document.getElementById('bagview__footer').style.display= "none";
//  document.querySelector('.bagview__content').setAttribute('class' , 'sidebar-none');
//  document.getElementById('bagview__content').setAttribute('id' , 'sidebar-none');
//  document.querySelector('.bagview__footer').setAttribute('class' , 'sidebar-none');
//  document.getElementById('bagview__footer').setAttribute('id' , 'sidebar-none');






  
//   document.querySelector('.bagview').setAttribute('class' , 'sidebar-container');
//   document.getElementById('bagview').setAttribute('id' , 'sidebar-container');

// // // 1
// //   const div0 = document.createElement('div');
// //   div0.setAttribute('class' , 'sidebar-header');

// //   const span0 = document.createElement('span');
// //   span0.setAttribute('class' , 'sidebar-title');
// //   span0.innerText = 'Ali-Store';
// //   div0.append(span0);
// // // end 1

// //   const div1 = document.createElement('div');
// //   div1.setAttribute('class' , 'sidebar-ship-pay');
  
// //   // shipping title 
// //   const div3 = document.createElement('div');
// //   div3.setAttribute('class' , 'sidebar-shipping');

// //   const span1 = document.createElement('h1');
// //   span1.setAttribute('class' , 'sidebar-shipping-title');
// //   span1.innerHTML = 'Shipping';
// //   div3.append(span1);

// //   // BREAD CRUMB ARROW 
// //   const bread = document.createElement('div');
// //   bread.setAttribute('class' , 'sidebar-Bread');

// //   const breadcrumb = document.createElement('img');
// //   breadcrumb.setAttribute('src' , 'right-thin-chevron-svgrepo-com.svg');
// //   breadcrumb.setAttribute('alt' , 'next');
// //   breadcrumb.setAttribute('height' , '10px');
// //   breadcrumb.setAttribute('width' , '10px');
// //   bread.append(breadcrumb);


  
// // // PAY TITLE 

// //   const div4 = document.createElement('div');
// //   div4.setAttribute('class' , 'sidebar-pay');

// //   const span2 = document.createElement('h1');
// //   span2.setAttribute('class' , 'sidebar-pay-title');
// //   span2.innerHTML = 'pay';
// //   div4.append(span2);

 





  
// // // APPENDING SIDE BAR HEADER 
// // div1.append(div3);
// // div1.append(bread);
// // div1.append(div4);
// // // end

// // div0.append(div1);

// // //  INNER CONTENTS /////////////////////////////
// // //  INNER CONTENTS /////////////////////////////

// // const innerContent = document.createElement('div');
// // innerContent.setAttribute('class' , 'inner-content');

// // // form 

// // const formm = document.createElement('form');
// // innerContent.append(formm);

// // const divform0 = document.createElement('div');
// // divform0.setAttribute('class' , 'form-control');
// // formm.append(divform0);

// // // gift
// // const Isthisagift = document.createElement("label");
// // Isthisagift.setAttribute('class' , 'gift-text');
// // const checkbox0 = document.createElement("input");
// // checkbox0.type="checkbox";
// // checkbox0.id="check";
// // checkbox0.name="isGift";
// // const textContent0 = document.createTextNode("is this a gift");


// // Isthisagift.appendChild(checkbox0);
// // Isthisagift.appendChild(textContent0);
// // divform0.append(Isthisagift)
// // // end

// // // Recipient container
// // const Recipient = document.createElement('div');
// // Recipient.setAttribute('class' , 'Recipient');
// // formm.append(Recipient);

// // // Recipient name
// // const Recipientlabel = document.createElement("label");
// // Recipientlabel.setAttribute('class' , 'Recipientlabel');
// // const RecipientText = document.createTextNode("Recipient name");

// // Recipientlabel.append(RecipientText);
// // Recipient.append(Recipientlabel);


// // const RecipientName = document.createElement('div');
// // RecipientName.setAttribute('class' , 'Recipient-datails');
// // Recipient.append(RecipientName);

// // const Recipientfirst = document.createElement("input");
// // Recipientfirst.type="text";
// // Recipientfirst.id="firstname";
// // Recipientfirst.name="FirstName";
// // Recipientfirst.placeholder="First Name";
// // RecipientName.append(Recipientfirst);

// // const RecipientLast = document.createElement("input");
// // RecipientLast.type="text";
// // RecipientLast.id="lastname";
// // RecipientLast.name="LastName";
// // RecipientLast.placeholder="Last Name";
// // RecipientName.append(RecipientLast);

// // //  Recipient phone number label
// // const Recipientphonenumberdiv = document.createElement('div');
// // Recipientphonenumberdiv.setAttribute('class' , 'Recipient-datails');
// // Recipient.append(Recipientphonenumberdiv);

// // const Recipientnumberlabel = document.createElement("label");
// // Recipientnumberlabel.setAttribute('class' , 'Recipientnumberlabel');
// // const RecipientnumberText = document.createTextNode("Recipient phone number");

// // Recipientnumberlabel.append(RecipientnumberText);
// // Recipientphonenumberdiv.append(Recipientnumberlabel);

// // //  Recipient phone number

// // const Recipientphonenumber = document.createElement('div');
// // Recipientphonenumber.setAttribute('class' , 'Recipient-datails');
// // Recipient.append(Recipientphonenumber);

// // const Recipientcallingcode = document.createElement("input");
// // Recipientcallingcode.type="text";
// // Recipientcallingcode.name="callingcode";
// // Recipientphonenumber.append(Recipientcallingcode);

// // const RecipientNumber = document.createElement("input");
// // RecipientNumber.type="text";
// // RecipientNumber.id="number";
// // RecipientNumber.name="number";
// // RecipientNumber.placeholder="Number";
// // Recipientphonenumber.append(RecipientNumber);










// sidebar footer
// const div2 = document.createElement('div');
// div2.setAttribute('class' , 'sidebar-footer');
// div2.append(document.getElementById('bag-summary'));

// const div2 = document.getElementsByClassName('sidebar-footer').append(document.getElementById('bag-summary'));


  // document.getElementById('sidebar-container').append(div0);
  // document.getElementById('sidebar-container').append(innerContent);
  // document.getElementById('sidebar-container').append(div2);
// }
// });
// const div2 = document.getElementById('sidebar-footer');
// div2.append(document.getElementById('bag-summary'));

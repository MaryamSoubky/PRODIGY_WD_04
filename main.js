function toggle() {
     // Get elements
     var header = document.querySelector('header');
     var body = document.querySelector('body');
     var sections = document.querySelectorAll('section');
     var cards = document.querySelectorAll('.card, .projectCard');
     var footers = document.querySelectorAll('footer');
 
     // Toggle background colors
     toggleBackground(header);
     toggleBackground(body);
     sections.forEach(function(section) {
         toggleBackground(section);
     });
     cards.forEach(function(card) {
         toggleBackground(card);
     });
     footers.forEach(function(footer) {
         toggleBackground(footer);
     });
 }
 
 function toggleBackground(element) {
     // Get current background color
     var bgColor = window.getComputedStyle(element).getPropertyValue('background-color');
 
     // Toggle background color
     if (bgColor === 'rgb(27, 32, 36)') { // Check current color
         element.style.backgroundColor = '#ffffff'; // Change to light color
     } else {
         element.style.backgroundColor = '#1b2024'; // Change to dark color
     }
 }
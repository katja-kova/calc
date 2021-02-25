const buttons = document.querySelectorAll('button');

const display = document.querySelector('.display');

 
buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});
 
// calculate function
function calculate(event) {

  const clickedButtonValue = event.target.value;
 
  if (clickedButtonValue === '=') {
    
    if (display.value !== '') {
   
      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === 'DEL') {

    display.value = display.value.substring(0, display.value.length - 1);

  } else if (clickedButtonValue === '%') {

    display.value = (eval(display.value)/100);  
  
  } else if (clickedButtonValue === '+/-') {
       
        display.value = display.value * (-1) ; 
    
  } else if (clickedButtonValue === 'AC') {
    
    display.value = '';
  } else {
    
    display.value += clickedButtonValue;
  }
}




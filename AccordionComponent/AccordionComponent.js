// createAccordion({                                            CALL EXAMPLE
//     buttonLabel:'clicca qui', 
//     appendTarget: main, 
//     contentFunc: (targetAccordion) => {
//         let p = document.createElement('p');
//         p.innerHTML = 'AAAAAAAAAAAAAAAAAAHHH'
//         targetAccordion.appendChild(p)
// }});


function createAccordion({buttonLabel, appendTarget, contentFunc}){
    let button = document.createElement('button'); button.innerHTML = buttonLabel
    
    let accordionContent = document.createElement('div');
 

    appendTarget.appendChild(button);
    appendTarget.appendChild(accordionContent);

        //////////////style calls
        button.className = 'collapsible'
        accordionContent.className = 'collapContent';
    
    contentFunc(accordionContent);          ////////callBack to function that defines accordion content

    //////////////accordion expansion
    
    
    button.addEventListener("click", function() {
      this.classList.toggle("active");
      
      if (accordionContent.style.display === "block") {
        accordionContent.style.display = "none";
      } else {
        accordionContent.style.display = "block";
    }}
  )


}

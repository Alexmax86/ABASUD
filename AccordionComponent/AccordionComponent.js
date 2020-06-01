function createAccordion({buttonLabel, appendTarget, contentFunc}){
    let self = this;
    this.state = false;
    
    let button = document.createElement('button'); button.innerHTML = buttonLabel    
    let accordionContent = document.createElement('div');
    appendTarget.appendChild(button);
    appendTarget.appendChild(accordionContent);
    button.className = 'collapsible'
    accordionContent.className = 'collapContent';
    
    contentFunc(accordionContent);          ////////callBack to function that defines accordion content
    
    button.addEventListener("click", function() {      
      if (accordionContent.style.display === "block") {
        accordionContent.style.display = "none";
        self.state = false
      } else {
        accordionContent.style.display = "block";
        self.state = true;
    }}
  )

  this.open = function (){accordionContent.style.display = "block"; self.state = true;}
  this.close = function (){accordionContent.style.display = "none"; self.state = false;}

}

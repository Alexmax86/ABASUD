function expenses(){
    wipeMain();
    for (let i = 0; i < operatorList.length; i++){  
        let acc = new createAccordion(
          {
            buttonLabel: operatorList[i].name,
            appendTarget: main,
            contentFunc: (targetAccordion) => {              
              let form = document.createElement('form');      
              form.setAttribute('autocomplete', 'off');
              targetAccordion.appendChild(form);

              
              var tipoLabel = document.createElement("Label");                    
              tipoLabel.setAttribute("for", '');
              tipoLabel.innerHTML = "Tipo: ";            
              form.appendChild(tipoLabel);
              
              let selector = document.createElement("select");
              form.appendChild(selector)
              let option1 = document.createElement("option");
              let option2 = document.createElement("option");
              option1.textContent = "Spesa comune";
              option2.textContent = "Anticipo su cassa";              
              option1.value = "Spesa";
              option2.value = "Anticipo";
              selector.appendChild(option1); selector.appendChild(option2);
              console.log (selector.selectedOptions)

              
              
              var sumLabel = document.createElement("Label");
              sumLabel.innerHTML = "Somma: ";            
              form.appendChild(sumLabel);

              let sumTextBox = document.createElement('input');              
              sumTextBox.setAttribute('type', 'number') 
              sumTextBox.setAttribute('min', "1")              
              form.appendChild(sumTextBox);    
              
              var dateLabel = document.createElement("Label");                    
              dateLabel.setAttribute("for", '');
              dateLabel.innerHTML = "Data: ";            
              form.appendChild(dateLabel);

              var date = document.createElement("input");
              date.setAttribute('type', 'date');
              form.appendChild(date)

              var reasonLabel = document.createElement("Label");
              reasonLabel.innerHTML = "Ragione: ";            
              form.appendChild(reasonLabel);

              let reasonTextBox = document.createElement('input');              
              reasonTextBox.setAttribute('type', 'text')               
              form.appendChild(reasonTextBox);

              let button = document.createElement('button');
              button.innerHTML = "Aggiungi"
              form.appendChild(button)
              button.addEventListener('click', function(event){
                event.preventDefault();

              })






          }
          
          
          
        })
        
          
    
    } 
}
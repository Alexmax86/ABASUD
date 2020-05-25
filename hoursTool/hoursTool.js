function addHours() {
  wipeMain();
    
    
  for (let i = 0; i < operatorList.length; i++){  
    createAccordion(
      {
        buttonLabel: operatorList[i].name,
        appendTarget: main,
        contentFunc: (targetAccordion) => {              
            let form = document.createElement('form');      
            form.setAttribute('autocomplete', 'off');
            targetAccordion.appendChild(form);

            var oreLabel = document.createElement("Label");
            oreLabel.setAttribute("for", 'oreTextBox');
            oreLabel.innerHTML = "Numero di ore: ";
            form.appendChild(oreLabel);

            let oreTextBox = document.createElement('input')
            oreTextBox.id = 'oreTextBox'
            oreTextBox.setAttribute('type', 'text')
            oreTextBox.style.width = '7%'
            form.appendChild(oreTextBox);

            var patientLab = document.createElement("Label");
            patientLab.setAttribute("for", 'selectPatient');
            patientLab.innerHTML = "Seleziona paziente: ";
            patientLab.style.marginLeft = "20px"
            form.appendChild(patientLab);
            
            
            
            let patientSelector1 = new patientSelector({appendTo: form});

            var bsLabel = document.createElement("Label");
            bsLabel.setAttribute("for", 'billingSelector');
            bsLabel.innerHTML = "Seleziona regola: ";
            bsLabel.style.mar
            
            form.appendChild(bsLabel);
            
            let billingSelector = new billingRuleSelector({appendTo: form, operator: operatorList[i]})
           
            


            ///////////////////patientSelector            
                    

            var addButton = document.createElement('button');       //Creates add patient button and callback
            addButton.innerHTML = 'Aggiungi'
            addButton.setAttribute = 'type', 'submit';
            form.appendChild(addButton);
            
            

            

            let tabellaOraria = new tableHours({appendTo: targetAccordion, operator: operatorList[i]})
            

            form.addEventListener('submit', function(){
              console.log(billingSelector.selection)
              operatorList[i].addBill({patient: patientSelector1.selection(), hours: oreTextBox.value, rate: operatorList[i].rate, rule: billingSelector.selection()})
              tabellaOraria.refresh()
              //tabellaOraria.addRow({paziente:patientList[val], ore:'22', tariffa:'13' })          
            })
      }
      
      
      
    })
    
      

  }    
        
      

    

} 
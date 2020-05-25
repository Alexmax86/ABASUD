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
            patientLab.innerHTML = "Seleziona paziente ";
            form.appendChild(patientLab);

            

            let selectPatient = document.createElement('select')      //////////////////SELECT BOX for patient
            selectPatient.id = 'selectPatient';
            
            var placeholder = document.createElement('option');       ////placeholder
            placeholder.textContent = '---'
            placeholder.value = "" 
            selectPatient.appendChild(placeholder)

            for(var x = 0; x < patientList.length; x++) {             ////populate selectbox function
                var opt = patientList[x].name;
                var el = document.createElement("option");
                el.textContent = opt;
                el.value = opt;
                selectPatient.appendChild(el);
            }
            
                
          
            selectPatient.style.width = '20%'
            form.appendChild(selectPatient);
            
                    

            var addButton = document.createElement('button');       //Creates add patient button and callback
            addButton.innerHTML = 'Aggiungi'
            addButton.setAttribute = 'type', 'submit';
            form.appendChild(addButton);
            
            

            

            let tabellaOraria = new tableHours({appendTo: targetAccordion, operator: operatorList[i]})
            

            form.addEventListener('submit', function(){
              let val = selectPatient.selectedIndex
              if (val == 0){return}
              if (val > 0){val -= 1}
              operatorList[i].addBill({patient: patientList[val], hours: oreTextBox.value, rate: operatorList[i].rate})
              tabellaOraria.refresh()
              //tabellaOraria.addRow({paziente:patientList[val], ore:'22', tariffa:'13' })          
            })
      }
      
      
      
    })
    
      

  }    
        
      

    

} 
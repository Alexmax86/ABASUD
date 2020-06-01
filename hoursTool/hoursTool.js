function addHours() {
  wipeMain();
  let floatButton = document.createElement('button');
  floatButton.className = "floatButton"
  floatButton.innerHTML = "Passa a visuale pazienti"
  main.appendChild(floatButton);
  floatButton.addEventListener('click', function(event){
    console.log("float call")
    event.preventDefault();
    patientsView();
  })
    
  for (let i = 0; i < operatorList.length; i++){  
    let acc = new createAccordion(
      {
        buttonLabel: operatorList[i].name,
        appendTarget: main,
        contentFunc: (targetAccordion) => {              
            let form = document.createElement('form');      
            form.setAttribute('autocomplete', 'off');
            targetAccordion.appendChild(form);

            var patientLab = document.createElement("Label");
            patientLab.setAttribute("for", 'selectPatient');
            patientLab.innerHTML = "Paziente: ";            
            form.appendChild(patientLab);
            let patientSelector1 = new patientSelector({appendTo: form});


            var oreLabel = document.createElement("Label");
            oreLabel.setAttribute("for", 'oreTextBox');
            oreLabel.innerHTML = "Ore: ";
            form.appendChild(oreLabel);

            let oreTextBox = document.createElement('input')
            oreTextBox.id = 'oreTextBox'
            oreTextBox.setAttribute('type', 'number')
            oreTextBox.setAttribute('min', "1")
            oreTextBox.style.width = '7%'
            form.appendChild(oreTextBox);

            
           
           
                 
            
            
            

            var tariffaLabel = document.createElement("Label");
            tariffaLabel.setAttribute("for", 'tariffaTextBox');
            tariffaLabel.innerHTML = "Tariffa: ";
            form.appendChild(tariffaLabel)

            let tariffaTextBox = document.createElement('input');
            tariffaTextBox.id = 'tariffaTextBox';
            tariffaTextBox.setAttribute('type', 'number')
            tariffaTextBox.setAttribute('min', "1")
            tariffaTextBox.value = operatorList[i].rate;           
            form.appendChild(tariffaTextBox);

            

            var bsLabel = document.createElement("Label");
            bsLabel.setAttribute("for", 'billingSelector');
            bsLabel.innerHTML = "Regola: ";
            bsLabel.style.mar
            
            form.appendChild(bsLabel);
            
            let billingSelector = new billingRuleSelector({appendTo: form, operator: operatorList[i]})
                              
                    

            var addButton = document.createElement('button');       //Creates add patient button and callback
            addButton.innerHTML = 'Aggiungi'
            addButton.setAttribute = 'type', 'submit';
            form.appendChild(addButton);

            
            
            

            

            let tabellaOraria = new tableHours({appendTo: targetAccordion, operator: operatorList[i]})
            

            form.addEventListener('submit', function(event){
              event.preventDefault();
              if (patientSelector1.selection() == null || oreTextBox.value == "" || oreTextBox.value == "0" || tariffaTextBox.value == "" || tariffaTextBox.value == "0" || billingSelector.selection() === undefined) {alert("Completare tutti i campi del form"); return}              
              database.addRecord({operator: operatorList[i].name, patient: patientSelector1.selection().name, hours: oreTextBox.value, rate: tariffaTextBox.value, rule: billingSelector.selection()})
              tabellaOraria.refresh()
              //tabellaOraria.addRow({paziente:patientList[val], ore:'22', tariffa:'13' })          
            })
      }
      
      
      
    })
    
      

  }    
        
      

    

} 
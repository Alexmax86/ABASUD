function wipeMain() {
    while (mainPage.lastElementChild) {                     //Wipeouts mainPage
      mainPage.removeChild(mainPage.lastElementChild);
    }

  }

function patientSelector({appendTo}){
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

  
  appendTo.appendChild(selectPatient);

  this.selection = function(){
    let val = selectPatient.selectedIndex
    if (val == 0){return}
    if (val > 0){val -= 1}
    
    return patientList[val]
  }

}

function billingRuleSelector({appendTo, operator}){
  let selector = document.createElement('select')      //////////////////SELECT BOX for patient
  selector.id = 'billingRuleSelector';
  selector.className = "billingRuleSelector"
  
  var placeholder = document.createElement('option');       ////placeholder
  placeholder.textContent = '---'
  placeholder.value = "" 
  selector.appendChild(placeholder)

  for(var x = 0; x < billingRules.length; x++) {             ////populate selectbox function
      var opt = billingRules[x];
      var el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;      
      if(operator.billingRule === el.value){el.selected = true}
      selector.appendChild(el);
  }      

  
  appendTo.appendChild(selector);
  

  this.selection = function(){
    let val = selector.selectedIndex
    if (val == 0){return}
    if (val > 0){val -= 1}
   
    return selector.options[selector.selectedIndex].text
  }

}

function interfaceManager(origin, destination, tempValue){

  this.hToolValues = []
  this.hToolTempCall = function(){return hToolValues} 
}


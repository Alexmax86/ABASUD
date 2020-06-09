function tableHours({appendTo, operator}) {
    var self = this;
    
    

    let tab = document.createElement('table');              //Create table        
    tab.style.display = 'none'

    this.header = function(){
        var header = tab.createTHead();
        var row = header.insertRow(0);
        var nameH = row.insertCell(-1); nameH.innerHTML = "NOME PAZIENTE"; nameH.className = 'tHeader'
        var hoursH = row.insertCell(-1); hoursH.innerHTML = "NUMERO ORE"; hoursH.className = 'tHeader';
        var billingH = row.insertCell(-1); billingH.innerHTML = "TARIFFA H"; billingH.className = 'tHeader';
        var ruleH = row.insertCell(-1); ruleH.innerHTML = "REGOLA"; ruleH.className = 'tHeader';
        var cancel = row.insertCell(-1); cancel.className = 'tHeader';
        
        appendTo.appendChild(tab)   
    }    

    this.addRow = function({patient, hours, rate, rule, id}) {        
        let tBody = tab.createTBody();
        let newRow = tBody.insertRow(-1);
        let cellPaz = newRow.insertCell(-1); cellPaz.innerHTML = patient
        let cellOre = newRow.insertCell(-1); cellOre.innerHTML = hours
        let cellTar = newRow.insertCell(-1); cellTar.innerHTML = rate
        let cellRule = newRow.insertCell(-1); cellRule.innerHTML = rule
        var cellCancel = newRow.insertCell(-1); 
        cellCancel.style.textAlign = 'center';

        let cancelButton = document.createElement("button");
        cancelButton.style.backgroundColor = "red"        
        cancelButton.innerHTML = "X"
        cellCancel.appendChild(cancelButton)
        
        cancelButton.addEventListener('click', function(){          
            
            database.deleteRecord(id)
            self.refresh()  
        })
        
        
    }

    this.refresh = function(){     
        let operatorArr = database.retrieveOp(operator.name);
        if (operatorArr.length > 0){tab.style.display = 'table'; console.log(operator.billedHours + "array pieno")}
        else {tab.style.display = 'none'; console.log("array vuoTo, tabella invisibile")}
        while(tab.rows.length > 0) {
            tab.deleteRow(0);            
            }
        this.header();
        operatorArr.forEach(function (element, index) {
            self.addRow({patient: element.patient, hours: element.hours, rate: element.rate, rule: element.rule, id: element.id})    
        })
    }

    
    this.header()
    this.refresh()  

    
    
   
  
    
}
    




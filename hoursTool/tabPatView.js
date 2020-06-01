function tabPatView({appendTo, patient}) {
    var self = this;
    
    

    let tab = document.createElement('table');              //Create table        
    tab.style.display = 'none'

    this.header = function(){
        var header = tab.createTHead();
        var row = header.insertRow(0);
        var nameH = row.insertCell(-1); nameH.innerHTML = "Nome operatore"; 
        var hoursH = row.insertCell(-1); hoursH.innerHTML = "Numero ore";
        var billingH = row.insertCell(-1); billingH.innerHTML = "Tariffa h";
        var ruleH = row.insertCell(-1); ruleH.innerHTML = "Regola";        
        var cancel = row.insertCell(-1); 
        
        appendTo.appendChild(tab)   
    }    

    this.addRow = function({operator, hours, rate, rule, id}) {        
        let newRow = tab.insertRow(-1);
        let cellOp = newRow.insertCell(-1); cellOp.innerHTML = operator
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
        let patientArr = database.retrievePat(patient.name);
        if (patientArr.length > 0){tab.style.display = 'table';}
        else {tab.style.display = 'none'; console.log("array vuoTo, tabella invisibile")}
        while(tab.rows.length > 0) {
            tab.deleteRow(0);            
            }
        this.header();
        patientArr.forEach(function (element, index) {
            self.addRow({operator: element.operator, patient: element.patient, hours: element.hours, rate: element.rate, rule: element.rule, id: element.id})    
        })
    }

    
    this.header()
    this.refresh()  

    
    
   
  
    
}
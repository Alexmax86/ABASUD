function tableHours({appendTo, operator}) {
    var self = this;
    this.firstTimeShown = false;

    let tab = document.createElement('table');              //Create table        

    this.header = function(){
        var header = tab.createTHead();
        var row = header.insertRow(0);
        var nameH = row.insertCell(-1); nameH.innerHTML = "Nome paziente"; 
        var hoursH = row.insertCell(-1); hoursH.innerHTML = "Numero ore";
        var billingH = row.insertCell(-1); billingH.innerHTML = "Tariffa h";  
        // tab.style.display = 'none'
        appendTo.appendChild(tab)   
    }    

    this.addRow = function({patient, hours, rate}) {        
        let newRow = tab.insertRow(-1);
        let cellPaz = newRow.insertCell(-1); cellPaz.innerHTML = patient
        let cellOre = newRow.insertCell(-1); cellOre.innerHTML = hours
        let cellTar = newRow.insertCell(-1); cellTar.innerHTML = rate    
    }

    this.refresh = function(){       
        while(tab.rows.length > 0) {
            tab.deleteRow(0);
            }
        this.header();
        operator.billedHours.forEach(function (element, index) {
            self.addRow({patient: element.patient.name, hours: element.hours, rate: operator.rate})
        })
    }

    
    this.header()
    this.refresh()  

    
    
   
    //     operator.billedHours.forEach(function (element, index) {
    //      self.addRow({paziente:operator.billedHours[index].patient, ore: operator.billedHours[index].hours, tariffa: '23'})
    // });
    
}
    




function db(){
    this.db = []
    this.addRecord =  function({operator, patient, hours, rate, rule}){
        this.record.push({operator: operator, patient: patient, hours: hours, rate: rate, rule: rule})}
    }
        
  
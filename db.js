function db(){
    this.db = []
    this.addRecord =  function({operator, patient, hours, rate, rule}){
        this.db.push({operator: operator, patient: patient, hours: hours, rate: rate, rule: rule, id: Date.now()})}
        
    this.retrieveOp = function(operator){
      let retrieveArr = [];      
      for (let i = 0; i < this.db.length; i++){
        console.log ("Confronting " + this.db[i].operator + " with " + operator)
        if (this.db[i].operator === operator){
          
          retrieveArr.push(this.db[i]);
        }        
      }
      return retrieveArr;
    }

    this.retrievePat = function(patient){
      let retrieveArr = [];      
      for (let i = 0; i < this.db.length; i++){
        
        if (this.db[i].patient === patient){
          
          retrieveArr.push(this.db[i]);
        }        
      }
      return retrieveArr;
    }

    this.retrieve = function(searchString){
      for (let [key, value] of Object.entries(searchString)) {
        //// to be completed
      }
      
      
    }

    this.deleteRecord = function(id){

      
      for (let i = 0; i < this.db.length; i++){
        
        if (this.db[i].id === id){
             this.db.splice(i, 1)       
        }        
      }
      
    }
  }  

  
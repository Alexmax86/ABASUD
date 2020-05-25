
 function loadPatientsTool() {     
      
    wipeMain();
    
    
    var form = document.createElement('form')
    mainPage.appendChild(form)

    var textBox = document.createElement('input')           //Creates input textbox
      textBox.setAttribute('type', 'text')
      textBox.style.width = '50%'
      textBox.style.marginLeft = '20px'    
      form.appendChild(textBox);


    var addButton = document.createElement('button');       //Creates add patient button and callback
      addButton.setAttribute = 'type', 'submit'
      addButton.innerHTML = 'Aggiungi'
      form.appendChild(addButton); 
      
    form.addEventListener('submit', function(event){
      event.preventDefault();
      if (textBox.value != ""){
        patientList.push({name: textBox.value})};
      updateTable();
      textBox.value = "";          
        })

    var patientsTable = document.createElement('table');    //Creates table of patients based on patientList[]
    patientsTable.style.border = '2px solid black'
    mainPage.appendChild(patientsTable);
    updateTable();
    
    
    
    function updateTable(){                                //UpdateTable function
      while(patientsTable.rows.length > 0) {
      patientsTable.deleteRow(0);
      }
      
      patientList.forEach(function (item, index){
        console.clear;
        console.log('Item numero: ' + index)
        var row = patientsTable.insertRow(-1);
        

        var cellName = row.insertCell(0)          
        cellName.innerHTML = item.name
        

        var cellDelete = row.insertCell(1)
        
        
        var btnDel = document.createElement('button');      
        btnDel.innerHTML = 'Delete';      
        cellDelete.appendChild(btnDel);
        btnDel.onclick = (function(){
          patientList.splice(row.rowIndex, 1);
          patientsTable.deleteRow(row.rowIndex);
          
        
        })
        

      })}
    
    

    
  
  }
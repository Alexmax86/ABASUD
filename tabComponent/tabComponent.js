function tabComponent({head}){

    let tab = document.createElement('table');              //Create table        
    tab.style.display = 'none'

    this.header = function(){
    var header = tab.createTHead();
    var row = header.insertRow(0);
        for (element of head){
            var headCell = row.insertCell(-1); nameH.innerHTML = head; nameH.className = 'tHeader'
        }
    
    appendTo.appendChild(tab)   
    }
}
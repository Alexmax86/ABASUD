function patientsView(){
    wipeMain()
    let floatButton = document.createElement('button');
    floatButton.className = "floatButton"
    floatButton.innerHTML = "Passa a visuale operatori"
    main.appendChild(floatButton);
    floatButton.addEventListener('click', function(event){      
      event.preventDefault();
      addHours();
    })

}
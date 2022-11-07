 function conc(){
    
    let list = document.querySelectorAll('body div p');
    var txt = '';

    for (el of list){
      txt += el.textContent; 
    }
    alert(txt)

  }
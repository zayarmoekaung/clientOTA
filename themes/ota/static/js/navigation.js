function home(){

    document.getElementById('home').style.display = 'block'; 
  document.getElementById('stage').style.display = 'none'; 
  document.getElementById('chpt').style.display = 'none'; 
}

function stage(){

    document.getElementById('home').style.display = 'none'; 
  document.getElementById('stage').style.display = 'block'; 
  document.getElementById('chpt').style.display = 'none'; 
}

function chapter(){

    document.getElementById('home').style.display = 'none'; 
  document.getElementById('stage').style.display = 'none'; 
  document.getElementById('chpt').style.display = 'block'; 
}
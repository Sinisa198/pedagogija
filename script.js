function checkforblank(){
  if(document.getElementById('fname').value==""){
    alert('Unesite Vase ime');
    document.getElementById('fname').style.borderColor = red;
    return false;
  }
  }

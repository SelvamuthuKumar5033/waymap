document.getElementById("crpass").addEventListener("input",function(){
  store();
})

function store(){
  var val = document.getElementById("crpass").value;
  localStorage.setItem("cnfrmpass",val);
}
function checkpass(){
  var pass1 = document.getElementById("crpass").value;
  var pass2 = document.getElementById("copass").value;
  if(pass1==="" || pass2===""){
    alert("Please Enter Password")
  }
  else if(pass1===pass2 ){
    document.getElementById("signinform").submit();
  }
  else{
    alert("Password Mismatch");
  }
}
function checkpass2(){
  var logpass1 = document.getElementById("logpass").value;
  var logpass2 = localStorage.getItem("cnfrmpass");
  if(logpass1===logpass2){
      document.getElementById("loginform").submit();
  }
  else{
    alert("Invalid email or Password");
  }
}

let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: {lat: 11.127123, lng: 78.656891},
    zoom: 10,
  });
}
// const location = new map([
//   Ariyalur
  
// ])
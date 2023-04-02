var guestList = ["Angela"];
var guestPassList = [];




document.querySelectorAll("button")[0].addEventListener("click", handleClickLogin);

function handleClickLogin(){
  var guestName = document.getElementById("username").value;
  var guestPass = document.getElementById("pass");
  if (guestList.includes(guestName)) {
      alert("Добро пожаловать, "+guestName+"!");
    } else {
      alert("Пользователь " + document.getElementById("username").value + " не зарегистрирован");
      document.getElementById("username").value="";

  }


document.querySelectorAll("button")[1].addEventListener("click", handleClickSignin);

function handleClickSignin(){

}

}

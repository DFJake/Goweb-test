var guestList = ["Angela"];
var guestPassList = ["Angelapass"];




document.querySelectorAll("button")[0].addEventListener("click", handleClickLogin);

function handleClickLogin(){
  var guestName = document.getElementById("username").value;

  if (guestList.includes(guestName))  {

      var gNameNumber = guestList.indexOf(guestName);
      var guestPass = document.getElementById("pass").value;
      // alert("Добро пожаловать, "+guestName+"! " + guestPassList[guestList.indexOf(guestName)]);

      if (guestPass == guestPassList[guestList.indexOf(guestName)]) {
        alert("Добро пожаловать, "+guestName+"!");
      } else {
        alert("Неверный пароль!");
      };

    } else {
      alert("Пользователь " + document.getElementById("username").value + " не зарегистрирован");
      document.getElementById("username").value="";
      document.getElementById("pass").value="";

  }



document.querySelectorAll("button")[1].addEventListener("click", handleClickSignin);

function handleClickSignin(){

}

}

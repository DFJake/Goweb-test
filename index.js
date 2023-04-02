var guestList = ["Angela","Ibra"];
var guestPassList = ["Angelapass","Ibrapass"];
var guestName;
var guestPass;



// Login button - обработчик кнопки логина
document.querySelectorAll("button")[0].addEventListener("click", handleClickLogin);

function handleClickLogin(){
  guestName = document.getElementById("username").value;

  if (guestList.includes(guestName))  {

      var gNameNumber = guestList.indexOf(guestName);
      guestPass = document.getElementById("pass").value;

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

}

// Sign-in button - обратотчик кнопки регистрации
document.querySelectorAll("button")[1].addEventListener("click", handleClickSignin);

function handleClickSignin(){
    guestName = document.getElementById("username").value;
    guestPass = document.getElementById("pass").value;

    if (guestList.includes(guestName) == false) {
        guestList.push(document.getElementById("username").value);
        guestPassList.push(document.getElementById("pass").value);
    } else {
      alert("Пользователь с таким именем уже существует.");
    }

}


document.getElementById("calc-wt").addEventListener("click", handleClickCalcwt);

function handleClickCalcwt(){
  var v_weight = document.getElementById("weight").value;
  document.getElementById("labcalc").innerHTML = (v_weight * 3) + " kg/c";
}

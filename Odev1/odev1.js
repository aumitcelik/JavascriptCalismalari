let userName = prompt("Lütfen adınızı giriniz:");
let myName = document.querySelector("#myName");

if (userName.length <= 0) {
  alert("Boş bırakılamaz");
  location.reload();
} else {
  myName.innerHTML = `${userName}`;
}

function time() {
  var days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  let date = new Date();
  let hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var day = date.getDay();
  if (hour < 10) {
    if (min < 10) {
      if (sec < 10) {
        document.getElementById("myClock").innerHTML =
          "0" + hour + ":" + "0" + min + ":" + "0" + sec + "-" + days[day];
      } else {
        document.getElementById("myClock").innerHTML =
          "0" + hour + ":" + "0" + min + ":" + sec + "-" + days[day];
      }
    } else {
      if (sec < 10) {
        document.getElementById("myClock").innerHTML =
          "0" + hour + ":" + min + ":" + "0" + sec + "-" + days[day];
      } else {
        document.getElementById("myClock").innerHTML =
          "0" + hour + ":" + min + ":" + sec + "-" + days[day];
      }
    }
  } else {
    if (min < 10) {
      if (sec < 10) {
        document.getElementById("myClock").innerHTML =
          hour + ":" + "0" + min + ":" + "0" + sec + "-" + days[day];
      } else {
        document.getElementById("myClock").innerHTML =
          hour + ":" + "0" + min + ":" + sec + "-" + days[day];
      }
    } else {
      if (sec < 10) {
        document.getElementById("myClock").innerHTML =
          hour + ":" + min + ":" + "0" + sec + "-" + days[day];
      } else {
        document.getElementById("myClock").innerHTML =
          hour + ":" + min + ":" + sec + "-" + days[day];
      }
    }
  }
}
setInterval(time, 1000);

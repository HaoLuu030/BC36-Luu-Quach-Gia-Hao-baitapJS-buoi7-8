var inputArr = [];

function showArr() {
  //get value
  var inputValue = document.getElementById("inputZone").value;
  //check if the input value is an interger
  if (Number.isInteger(inputValue * 1) === false || inputValue === '') {
    alert("Vui lòng nhập một số nguyên");
    return;
  }
  //push value into the global array
  inputArr.push(inputValue);
  //show it on screen
  document.getElementById("inputNumber").innerHTML = inputArr;
  // clear the input field
  document.getElementById("inputZone").value = "";
  // focus on the input after click the button
  document.getElementById("inputZone").focus();
  //show it on screen
  document.getElementById("inputNumber").innerHTML;
}

function clearArr() {
  //clear all the values in the array
  inputArr = [];
  //show it on screen
  document.getElementById("inputNumber").innerHTML = inputArr;
  //clear result
  document.getElementById("result").innerHTML="";
}

function showExtraInput(e) {
  //remove class "show" from all elements
  document.getElementById("ex6-position").classList.remove("show");
  document.getElementById("ex9-floatInput").classList.remove("show");
  //get the clicked button
  var id = document.getElementById(e.target.id).getAttribute("data-target");
  //add the class "show" to the clicked button
  document.getElementById(id).classList.add("show");
}

//clear extraInput
function clearExtraInput() {
  document.getElementById("ex6-position").classList.remove("show");
  document.getElementById("ex9-floatInput").classList.remove("show");
}

function addFloat() {
  var inputValue = document.getElementById("floatInput").value;
  if (inputValue === "") {
    alert("vui lòng nhập một số thực");
    return;
  }
  //push it into the array
  inputArr.push(inputValue);
  //show it on screen
  document.getElementById("inputNumber").innerHTML = inputArr;
  // clear the input field
  document.getElementById("floatInput").value = "";
  // focus on the input after click the button
  document.getElementById("floatInput").focus();
  //show it on screen
  document.getElementById("inputNumber").innerHTML;
}

function ex1() {
  if  (inputArr.length === 0) {
    alert ("dãy số còn trống, xin vui lòng nhập ít nhất một số nguyên");
    return;
  } 
  var total = 0;
  for (var i = 0; i < inputArr.length; i++) {
    if (inputArr[i] * 1 > 0) {
      total += inputArr[i] * 1;
    }
  }
  document.getElementById("result").innerHTML =
    "Tổng các số dương là: " + total.toString();
}

function ex2() {
  if  (inputArr.length === 0) {
    alert ("dãy số còn trống, xin vui lòng nhập ít nhất một số nguyên");
    return;
  } 
  var count = 0;
  for (var i = 0; i < inputArr.length; i++) {
    if (inputArr[i] * 1 > 0) {
      count++;
    }
  }
  if (count != 0) {
    document.getElementById("result").innerHTML =
      "Có " + count.toString() + " số dương";
    return;
  }
  document.getElementById("result").innerHTML = "Không có số dương";
}

function ex3() {
  if  (inputArr.length === 0) {
    alert ("dãy số còn trống, xin vui lòng nhập ít nhất một số nguyên");
    return;
  } 
  var min = inputArr[0];
  for (var i = 0; i < inputArr.length; i++) {
    if (inputArr[i] * 1 < min) {
      min = inputArr[i];
    }
  }
  document.getElementById("result").innerHTML =
    "Số nhỏ nhất là " + min.toString();
}

function ex4() {
  if  (inputArr.length === 0) {
    alert ("dãy số còn trống, xin vui lòng nhập ít nhất một số nguyên");
    return;
  } 
  var min = inputArr[0];
  for (var i = 0; i < inputArr.length; i++) {
    if (inputArr[i] * 1 < min && inputArr[i] * 1 > 0) {
      min = inputArr[i];
    }
  }
  document.getElementById("result").innerHTML =
    "Số dương nhỏ nhất là " + min.toString();
}

function ex5() {
  if  (inputArr.length === 0) {
    alert ("dãy số còn trống, xin vui lòng nhập ít nhất một số nguyên");
    return;
  } 
  for (var i = inputArr.length - 1; i >= 0; i--) {
    if ((inputArr[i] * 1) % 2 === 0) {
      document.getElementById("result").innerHTML =
        "Số chẵn cuối cùng là " + inputArr[i].toString();
      return;
    }
  }
  document.getElementById("result").innerHTML = -1;
}

function ex6() {
  var firstPosition = document.getElementById("position1").value;
  var secondPosition = document.getElementById("position2").value;
  if  (inputArr.length === 0) {
    alert ("dãy số còn trống, xin vui lòng nhập ít nhất một số nguyên");
    return;
  } else if (firstPosition === "" || secondPosition === "" || firstPosition < 0 || secondPosition < 0 || secondPosition > inputArr.length - 1 || firstPosition > inputArr.length - 1) {
    alert ("Vui lòng nhập vị trí phù hợp");
    return;
  }
  var temp = inputArr[firstPosition];
  inputArr[firstPosition] = inputArr[secondPosition];
  inputArr[secondPosition] = temp;
  document.getElementById("result").innerHTML =
    "Thứ tự mảng sau khi sắp xếp: " + inputArr.toString();
}

function ex7() {
  if  (inputArr.length === 0) {
    alert ("dãy số còn trống, xin vui lòng nhập ít nhất một số nguyên");
    return;
  } 
  for (var i = inputArr.length - 1; i >= 0; i--) {
    for (var k = 0; k < i; k++) {
      if (inputArr[k] * 1 > inputArr[k + 1] * 1) {
        var temp = inputArr[k];
        inputArr[k] = inputArr[k + 1];
        inputArr[k + 1] = temp;
      }
    }
  }
  document.getElementById("result").innerHTML =
    "Thứ tự mảng sau khi sắp xếp: " + inputArr.toString();
}

function ex8() {
  if  (inputArr.length === 0) {
    alert ("dãy số còn trống, xin vui lòng nhập ít nhất một số nguyên");
    return;
  } 
  var prime;
  for (var i = 0; i < inputArr.length; i++) {
    var isPrime = true;
    if (inputArr[i] * 1 < 2) {
      isPrime = false;
    }
    for (var k = 2; k < inputArr[i] - 1; k++) {
     if (inputArr[i] * 1 % k === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime === true) {
      prime = inputArr[i];
      document.getElementById("result").innerHTML =
      "Số nguyên tố đầu tiên là " + prime.toString();
      return;
    }
  }
  document.getElementById("result").innerHTML = -1;
}

function ex9() {
  if  (inputArr.length === 0) {
    alert ("dãy số còn trống, xin vui lòng nhập ít nhất một số nguyên");
    return;
  } 
  var count = 0;
  for (var i = 0; i < inputArr.length; i++) {
    if (Number.isInteger(inputArr[i] * 1)) {
      count++;
    }
  }
  document.getElementById("result").innerHTML = "Tổng số nguyên trong mảng mới là: " + count;
}

function ex10() {
  if  (inputArr.length === 0) {
    alert ("dãy số còn trống, xin vui lòng nhập ít nhất một số nguyên");
    return;
  } 
  var positive = 0;
  var negative = 0;
  for (var i = 0; i < inputArr.length; i++) {
    if (inputArr[i] * 1 > 0) {
      positive++;
    } else {
      negative ++;
    }
  }
  if (positive > negative) {
    document.getElementById("result").innerHTML = "Số lượng số dương: " + positive.toString() + " Số lượng số âm: " + negative.toString() + "\n" + "=> Mảng có nhiều số dương hơn." 
  } else {
    document.getElementById("result").innerHTML = "Số lượng số dương: " + positive.toString() + " Số lượng số âm: " + negative.toString() + "\n" + "=> Mảng có nhiều số âm hơn."
  }
}
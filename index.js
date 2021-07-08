console.log("here");

console.log(document);

//const divCapture = document.getElementById("1");

const h2Capture = document.getElementsByTagName("h2")[0];

const btnCapture = document.querySelector(".btn");

btnCapture.addEventListener("click", function clickEvent() {
  event.preventDefault(); //this line blocks the pages to get from refesh

  //creating empty object & array
  const empObj = {};
  const empArr = [];
  //getting username field from form
  const username = document.getElementById("input-username").value;

  //getting password field from form
  const password = document.getElementById("input-password").value;

  //getting email field from form
  const email = document.getElementById("input-email").value;

  //pushing username,password,email into empty object
  empObj.username = username;
  empObj.password = password;
  empObj.email = email;

  //console.log(username.length);
  if (!username) {
    document.getElementById("usernameRequired").innerHTML =
      "Username is Required";
    // console.log("length is zero");
    //statement
  } else {
    document.getElementById("usernameRequired").innerHTML = "";
    //console.log("length is not zero");
    //statement
  }

  //checking password value is empty
  if (password.length == 0) {
    document.getElementById("passwordRequired").innerHTML =
      "Password is Required";
  } else {
    document.getElementById("passwordRequired").innerHTML = "";
  }

  //checking email value is empty
  if (password.length == 0) {
    document.getElementById("emailRequired").innerHTML = "Email is Required";
  } else {
    document.getElementById("emailRequired").innerHTML = "";
  }

  //pushin values into empty array
  empArr.push(name);
  empArr.push(password);
  empArr.push(email);
  console.log(empArr);
});

/*function clickEvent() {
  // alert("clicked");
  const inner = (document.querySelector(".1").innerHTML = "ChangeHTML");
  //return inner;
  console.log(inner);
}*/

const usernmaeCapture = document.querySelector("username");
console.log(usernmaeCapture);

//console.log(divCapture);
console.log(h2Capture);
console.log(btnCapture);

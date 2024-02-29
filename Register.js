const validation = () => {
  const password = document.getElementById("exampleInputPassword").value;
  const error = document.getElementsByClassName("passwordValidation");
  const charP = document.getElementById("char");
  const symbolP = document.getElementById("symbol");
  const upperCase = document.getElementById("capital");
  const numberP = document.getElementById("number");
  console.log(password);
  console.log(error[0]);

  error[0].style.display = "block";
  password == ""
    ? (error[0].style.display = "none")
    : (error[0].style.display = "block");

  if (password.length > 9) {
    charP.style.color = "green";
  } else {
    charP.style.color = "red";
  }
  if (password.match(new RegExp(/[0-9]/))) {
    numberP.style.color = "green";
  } else {
    numberP.style.color = "Red";
  }

  if (password.match(new RegExp(/[A-Z]/))) {
    upperCase.style.color = "green";
  } else {
    upperCase.style.color = "red";
  }

  if (password.match(new RegExp(/[`~!@#$%^&*_?-]/))) {
    symbolP.style.color = "green";
  } else {
    symbolP.style.color = "red";
  }

  if (
    charP.style.color === "green" &&
    numberP.style.color === "green" &&
    upperCase.style.color == "green" &&
    symbolP.style.color == "green"
  ) {
    error[0].style.display = "none";
  }
};

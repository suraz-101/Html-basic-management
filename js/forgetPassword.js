// selecting the form element from html
const form = document.getElementById("forgetPasswordForm");
form.addEventListener("submit", (e) => {
  const email = document.getElementById("exampleInputEmail1").value;
  // preventing form from default submission
  e.preventDefault();
  // creating an instance of FormData to extract data of the form
  const formData = new FormData(form);
  //creating an object
  const object = {};
  // extracting each value and key from form using forEach
  formData.forEach((value, key) => {
    object[key] = value; // creating json of the
  });

  email === ""
    ? alert("email is required")
    : (window.location.href = "../verifyToken.html");
});

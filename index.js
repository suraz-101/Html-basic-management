// const showMyAge = () => {
//   const Age = document.getElementById("age").value;
//   const setAge = document.getElementById("rangeValue");
//   setAge.innerHTML = Age;
// };

// const showGenderValue = (gender) => {
//   console.log(document.getElementsByClassName("gender"));
//   document.getElementById("genderValue").innerHTML = gender;
// };

const btn = document.getElementById("button");
console.log(btn);
const formd = document.getElementById("formdata");
console.log(formd);
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const data = document.getElementById("formdata");
  const formData = new FormData(data);
  const object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  console.log(object);
});

// const formsData = () => {
//   const data = document.getElementById("formdata");
//   const formdata = new FormData(data);
//   const object = {};

//   console.log(formdata);
//   formdata.forEach((value, key) => {
//     object[key] = value; // Map each field name to its value in the object
//   });

//   console.log(object);
//   // console.log(object.profilepic.File);
// };

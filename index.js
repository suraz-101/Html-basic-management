const showMyAge = () => {
  const Age = document.getElementById("age").value;
  const setAge = document.getElementById("rangeValue");
  setAge.innerHTML = Age;
};

const showGenderValue = (gender) => {
  console.log(document.getElementsByClassName("gender"));
  document.getElementById("genderValue").innerHTML = gender;
};

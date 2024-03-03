const form = document.getElementById("verifyToken");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });

  console.log(object);
});

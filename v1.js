function submitForm() {
  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const village = document.getElementById("village").value;
  const district = document.getElementById("district").value;
  const state = document.getElementById("state").value;

  // Check if all fields are filled
  if (name && email && village && district && state) {
    alert(Form submitted successfully!\nName: ${name}\nEmail: ${email}\nVillage/City: ${village}\nDistrict: ${district}\nState: ${state});
    document.getElementById("loginForm").reset(); // Reset form after submission
  } else {
    alert("Please fill all the fields.");
  }
}
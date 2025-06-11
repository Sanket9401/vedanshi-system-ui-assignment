// Allowed user credentials
const validUsers = [
  { email: "hello@test.com", password: "test" },
  { email: "john.doe@test.com", password: "hello" },
  { email: "john.doe@test.com", password: "john" }
];

// Login function
function loginUser(event) {
  event.preventDefault();
  const email = document.getElementById("email-input").value.trim();
  const password = document.getElementById("password").value.trim();

  const user = validUsers.find(user => user.email === email && user.password === password);
  if (user) {
    localStorage.setItem("email", email);
    window.location.href = "../HomePage/homePage.html";
  } else {
    alert("Invalid credentials!");
  }
}

// Display logged in user's email on home page
function showUserEmail() {
  const email = localStorage.getItem("email");
  if (email) {
    document.getElementById("user-email").innerText = `${email},`;
  } else {
    window.location.href = "/pages/LoginPage/loginPage.html";
  }
}

// Color first rows
function colorFirstRow() {
  const rows = document.querySelectorAll("#dataTable tr");
  if (rows.length > 1) {
    rows[1].style.backgroundColor = "red";
  }
}

//Color last row
function colorLastRow() {
  const rows = document.querySelectorAll("#dataTable tr");
  if (rows.length > 1) {
    rows[rows.length - 1].style.backgroundColor = "red";
  }
}

//Reset colors
function resetColors() {
  const rows = document.querySelectorAll("#dataTable tr");
  rows.forEach((row, i) => {
    if (i !== 0) row.style.backgroundColor = "";
  });
}
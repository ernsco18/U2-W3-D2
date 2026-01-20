class User {
  constructor(name) {
    this.name = name;
  }
}

const users = [];

const form = document.getElementById("rubrica-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstName = document.getElementById("firstName").value;

  const row = document.getElementById("contacts-row");
  row.innerHTML += `
  <div class="col col-12 col-md-6 col-lg-4">
    <div class="card">
    <div class="card-body text-center">
                <p class="card-text">${firstName}</p>
                </div>
    </div>
  </div>
  `;

  form.reset();

  const newUser = new User(firstName);
  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));
});

console.log(users);

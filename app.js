// REGISTER
function register() {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let user = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    role: role.value
  };
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registered Successfully");
  location.href = "login.html";
}

// LOGIN
function login() {
  localStorage.setItem("currentUser", role.value);
  if (role.value === "seller") location.href = "seller/upload.html";
  if (role.value === "buyer") location.href = "buyer/marketplace.html";
  if (role.value === "admin") location.href = "admin/admin.html";
}

// AI MOCK CLASSIFICATION
function classifyWaste() {
  const types = ["Plastic", "Metal", "Paper", "E-Waste"];
  const result = types[Math.floor(Math.random() * types.length)];
  localStorage.setItem("classifiedWaste", result);
  document.getElementById("result").innerText = "AI Result: " + result;
}

// SELL LISTING
function createListing() {
  let listings = JSON.parse(localStorage.getItem("listings")) || [];
  listings.push({
    type: wasteType.value,
    qty: quantity.value,
    price: price.value,
    contact: contact.value
  });
  localStorage.setItem("listings", JSON.stringify(listings));
  alert("Listing Created");
}

// LOAD MARKETPLACE
function loadMarket() {
  let listings = JSON.parse(localStorage.getItem("listings")) || [];
  let output = "";
  listings.forEach((l, i) => {
    output += `
      <div class="card">
        <h3>${l.type}</h3>
        <p>Qty: ${l.qty}</p>
        <p>Price: ₹${l.price}</p>
        <button onclick="view(${i})">View</button>
      </div>`;
  });
  document.getElementById("market").innerHTML = output;
}

function view(i) {
  localStorage.setItem("viewIndex", i);
  location.href = "details.html";
}

// DETAILS
function loadDetails() {
  let listings = JSON.parse(localStorage.getItem("listings"));
  let l = listings[localStorage.getItem("viewIndex")];
  details.innerHTML = `
    <h2>${l.type}</h2>
    <p>Qty: ${l.qty}</p>
    <p>Price: ₹${l.price}</p>
    <button onclick="alert('Contact: ${l.contact}')">Buy</button>
  `;
}

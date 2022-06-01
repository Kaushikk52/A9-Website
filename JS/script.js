const checkbox = document.getElementById("checkbox");
const professional = document.getElementById("professional price");
const master = document.getElementById("master price");
const basic = document.getElementById("basic price");

checkbox.addEventListener("click", () => {
  basic.textContent = basic.textContent === " ₹10,000" ? " ₹20,000" : " ₹10,000";  //reverse 
  professional.textContent = professional.textContent === "₹20,000" ? "₹10,000 " : "₹20,000";
  master.textContent = master.textContent === "₹20,000" ? "₹10,000" : "₹20,000";
});

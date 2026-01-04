function generateWish() {
  const name = document.getElementById("name").value.trim();
  const msg = document.getElementById("msg").value.trim();

  if (!name || !msg) {
    alert("Please fill in all fields 🎄");
    return;
  }

  localStorage.setItem("name", name);
  localStorage.setItem("msg", msg);

  window.location.href = "wish.html";
}

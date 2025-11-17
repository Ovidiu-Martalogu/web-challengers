document.getElementById("btn").addEventListener("click", () => {
  const val = document.getElementById("inp").value;
  document.getElementById("text").textContent = "Ai scris: " + val;
});

// LOGIN
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("form");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Usuario simulado (luego será backend real)
      const user = {
        username: "chente",
        name: "Chente",
        role: "admin",
        verified: "admin" // check | platino | dorado | admin
      };

      window.location.href = "index.html";
    });
  }
});

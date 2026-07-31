const loginBtn = document.getElementById("loginBtn");
const code = document.getElementById("code");
const msg = document.getElementById("msg");

loginBtn.addEventListener("click", () => {

    const input = code.value.trim();

    if (input === "jaoney") {

        localStorage.setItem("duck-login", "true");

        window.location.href = "lucky.html";

    } else {

        msg.textContent = "❌ รหัสไม่ถูกต้อง";

    }

});

code.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        loginBtn.click();

    }

});

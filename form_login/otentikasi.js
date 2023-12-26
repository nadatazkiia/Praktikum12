function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "nada23" && password === "123212") {
        window.location.href = "sukses.html";
    } else {
        alert("Login Gagal");
    }
}
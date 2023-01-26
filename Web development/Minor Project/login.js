document.querySelector("#form").addEventListener("submit", submitFun);


function submitFun(elme) {
    elme.preventDefault();
    username = document.querySelector("#name").value;
    password =  document.querySelector("#password").value;

    if (username == "Prakhar1234" && password == "smartknower") {
       
        window.location.href = "main.html";
    } else {
        alert("Invalid username or password");
        document.querySelector("#form").reset();
    }

}
function myFunction() {
    var targetDiv = document.getElementById("model-login");
    if (targetDiv.style.display === "none") {
        targetDiv.style.display = "block";
    } else {
        targetDiv.style.display = "none";
    }
};


document.getElementById("model-login"),addEventListener("submit", (event)=>{
    event.preventDefault()
})

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace("contact.html")
    }
})

function login() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
}

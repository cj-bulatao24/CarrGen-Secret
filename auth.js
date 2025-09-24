// auth.js
function checkAuth() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if(!currentUser) {
        window.location.href = "index.html";
    }
}

// Run on page load
window.onload = checkAuth;

// Run also when using browser back/forward
window.addEventListener("pageshow", checkAuth);
// ================= USER AUTH CHECK =================

function checkUserAuth() {

    const token = localStorage.getItem("token");

    const role = localStorage.getItem("role");

    // Not logged in
    if (!token) {

        alert("Please login first");

        window.location.href = "index.html";

        return;
    }

    // Admin trying to access user page
    if (role === "admin") {

        window.location.href = "admin.html";
    }
}


// ================= ADMIN AUTH CHECK =================

function checkAdminAuth() {

    const token = localStorage.getItem("token");

    const role = localStorage.getItem("role");

    // Not logged in
    if (!token) {

        alert("Please login first");

        window.location.href = "index.html";

        return;
    }

    // Non-admin blocked
    if (role !== "admin") {

        alert("Access Denied");

        window.location.href = "dashboard.html";
    }
}


// ================= LOGOUT =================

function logout() {

    localStorage.clear();

    alert("Logged out successfully");

    window.location.href = "index.html";
}
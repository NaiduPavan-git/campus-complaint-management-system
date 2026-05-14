function goToComplaint() {
    window.location.href = "complaint.html";
}

function goToMyComplaints() {
    window.location.href = "my-complaints.html";
}

function toggleFields() {
    let type = document.getElementById("type").value;

    document.getElementById("groupFields").style.display =
        type === "group" ? "block" : "none";

    document.getElementById("individualFields").style.display =
        type === "individual" ? "block" : "none";
}

function addMember() {
    let div = document.createElement("div");

    div.innerHTML = `
        <div class="form-grid">
            <input placeholder="Name">
            <input placeholder="Roll No">
        </div>
    `;

    document.getElementById("members").appendChild(div);
}
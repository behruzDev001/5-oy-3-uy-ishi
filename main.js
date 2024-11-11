let rowIdCounter = 4;

function submitData() {
    const nameField = document.getElementById("inputName");
    alert("Name submitted: " + nameField.value);
    nameField.value = "";
}

function addNewRow() {
    const name = document.getElementById("inputNewName").value;
    const age = document.getElementById("inputNewAge").value;

    if (name.trim() === "" || age.trim() === "") {
        alert("Please enter both name and age.");
        return;
    }

    const bodyTable = document.getElementById("bodyTable");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${rowIdCounter}</td>
        <td>${name}</td>
        <td>${age}</td>
        <td>
            <button class="btn action-delete" onclick="removeRow(this)">Delete</button>
            <button class="btn action-edit" onclick="modifyRow(this)">Edit</button>
        </td>
    `;

    bodyTable.appendChild(row);
    rowIdCounter++;

    document.getElementById("inputNewName").value = "";
    document.getElementById("inputNewAge").value = "";
}

function removeRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function modifyRow(button) {
    const row = button.parentNode.parentNode;
    const nameCell = row.cells[1];
    const ageCell = row.cells[2];

    const newName = prompt("Enter new name:", nameCell.textContent);
    const newAge = prompt("Enter new age:", ageCell.textContent);

    if (newName !== null && newAge !== null) {
        nameCell.textContent = newName;
        ageCell.textContent = newAge;
    }
}




function getReplies() {
    return [
        "Bu aniq.",
        "Keyinroq so'rang.",
        "Ishonmang.",
        "Ha, shubhasiz!",
        "Manbalarim yo'q deyishmoqda.",
        "Natijalar yaxshi emas.",
        "Ishora ha tomon.",
        "Sizga hozir aytmayman."
    ];
}

function generateReply() {
    const userQuery = document.getElementById("queryInput").value;
    const outputDiv = document.getElementById("output");

    if (userQuery.trim() === "") {
        outputDiv.textContent = "Iltimos, savolingizni kiriting.";
        return;
    }

    const responses = getReplies();
    const randomIndex = Math.floor(Math.random() * responses.length);
    const randomReply = responses[randomIndex];

    outputDiv.textContent = "Magic 8 Ball javobi: " + randomReply;
}

document.addEventListener("DOMContentLoaded", function() {
    const actionBtn = document.getElementById("actionButton");
    actionBtn.addEventListener("click", generateReply);
});


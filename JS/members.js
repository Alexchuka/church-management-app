// Members Data
const members = [
    {
        id: "000001",
        firstName: "Chuka",
        lastName: "Nwachukwu",
        phoneNumber: +2347065941545,
        cell: "Excel",
        pcf: "Dominion",
        designation: "Cell Leader",
        department: "Ushering",
        address: "No 5, Jimoh Bajulaye Street, Gbagada, Lagos",
        status: "active"
    },
    {
        id: "000002",
        firstName: "Frank",
        lastName: "Eddie",
        phoneNumber: +23470659419384,
        cell: "Excel",
        pcf: "Haven",
        designation: "Cell Leader",
        department: "Ushering",
        address: "No 5, Jimoh Bajulaye Street, Gbagada, Lagos",
        status: "inactive"
    }
];

// Function that calls the above data and fill the table
const tableBody = document.querySelector(".table-card tbody");

function renderMembers(list) {
    for (const tableData of tableBody) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${members.firstName}</td>
        `;
    }
}
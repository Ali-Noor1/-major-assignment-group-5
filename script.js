// Load from localStorage
let parked = JSON.parse(localStorage.getItem("parked")) || [];
let history = JSON.parse(localStorage.getItem("history")) || [];

// --- Show Parked Vehicles ---
if (document.getElementById("parkedList")) {
    let list = "";
    parked.forEach(v => {
        list += `<tr>
            <td>${v.vnum}</td>
            <td>${v.owner}</td>
            <td>${v.type}</td>
            <td>${v.slot}</td>
            <td>${v.timeIn}</td>
        </tr>`;
    });
    document.getElementById("parkedList").innerHTML = list;
}
// Load from localStorage
let parked = JSON.parse(localStorage.getItem("parked")) || [];
let history = JSON.parse(localStorage.getItem("history")) || [];


// --- Register Vehicle ---
function registerVehicle() {
    let vnum = document.getElementById("vnum").value;
    let owner = document.getElementById("owner").value;
    let type = document.getElementById("type").value;
    let slot = document.getElementById("slot").value;

    let vehicle = {
        vnum,
        owner,
        type,
        slot,
        timeIn: new Date().toLocaleString()
    };

    parked.push(vehicle);
    localStorage.setItem("parked", JSON.stringify(parked));

    alert("Vehicle Registered Successfully!");
    window.location.href = "parked.html";
}
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

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

// --- Exit Vehicle Page ---
if (document.getElementById("exitList")) {
    let rows = "";
    parked.forEach((v, i) => {
        rows += `<tr>
            <td>${v.vnum}</td>
            <td>${v.owner}</td>
            <td><button class="btn-danger" onclick="exitVehicle(${i})">Exit</button></td>
        </tr>`;
    });
    document.getElementById("exitList").innerHTML = rows;
}

function exitVehicle(i) {
    let v = parked[i];
    let timeOut = new Date().toLocaleString();

    let record = {
        ...v,
        timeOut
    };

    history.push(record);
    parked.splice(i, 1);

    localStorage.setItem("parked", JSON.stringify(parked));
    localStorage.setItem("history", JSON.stringify(history));

    alert("Vehicle Exited Successfully!");
    location.reload();
}
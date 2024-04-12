import { drawGraf } from "./drowGraf.js";
async function fetchJson() {
    const url = new URL("http://localhost/Statistic/get-statistic.php");
    try {
        const response = await fetch(url.href, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error(`Ошбка HTTP: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Ошибка при отправке запроса", error);
        throw error;
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    

    const jsonData = await fetchJson();
    let back = document.querySelector(".Back").href = jsonData[1];
    drawGraf(jsonData);

    let table = document.querySelector("table");
    jsonData[0].forEach((_, i) => {
        const row = document.createElement('tr');

        const idCell = document.createElement('td');
        idCell.textContent = jsonData[0][i].c_id;
        row.appendChild(idCell);

        const sizeCell = document.createElement('td');
        sizeCell.textContent = jsonData[0][i].c_size_string;
        row.appendChild(sizeCell);

        const elipsedTimeCell = document.createElement('td');
        elipsedTimeCell.textContent = jsonData[0][i].c_elapsed_time;
        row.appendChild(elipsedTimeCell);

        const dateCell = document.createElement('td');
        dateCell.textContent = jsonData[0][i].c_date;
        row.appendChild(dateCell);

        table.appendChild(row);
    });

});





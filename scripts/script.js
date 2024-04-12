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
        return data;
    } catch (error) {
        console.error("Ошибка при отправке запроса", error);
        throw error;
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const jsonData = await fetchJson();

    drawGraf(jsonData);

    let table = document.querySelector("table");
    for (let i = 0; i < jsonData.length; i++) {

        const row = document.createElement('tr');

        const idCell = document.createElement('td');
        idCell.textContent = jsonData[i].C_id;
        row.appendChild(idCell);

        const sizeCell = document.createElement('td');
        sizeCell.textContent = jsonData[i].C_size_string;
        row.appendChild(sizeCell);

        const elipsedTimeCell = document.createElement('td');
        elipsedTimeCell.textContent = jsonData[i].C_elapsed_time;
        row.appendChild(elipsedTimeCell);

        const dateCell = document.createElement('td');
        dateCell.textContent = jsonData[i].C_date;
        row.appendChild(dateCell);

        table.appendChild(row);
    }
});





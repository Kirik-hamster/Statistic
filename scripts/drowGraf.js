function drawGraf(data) {
    let labels = data.map((i) => {
        return i.C_size_string;
    });

    let size = data.map((i) => {
        return 'item' + i.C_size;
    });

    let elapsedTime = data.map((i) => {
        return i.C_elapsed_time;
    });
    console.log(elapsedTime)

    let config = {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                    label: 'Elapsed time',
                    data: elapsedTime,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)', 
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    type: 'linear',
                    position: 'left',
                    ticks: {
                        callback: function(value, index, values) {
                            let unit = 'ns'; 
                            let convertedValue = value;

                            if (value >= 1e9) {
                                unit = 's';
                                convertedValue = value / 1e9;
                            } else if (value >= 1e6) {
                                unit = 'ms';
                                convertedValue = value / 1e6;
                            } else if (value >= 1e3) {
                                unit = 'µs';
                                convertedValue = value / 1e3;
                            }

                            return convertedValue.toFixed(1) + ' ' + unit;
                        }
                    }
                }
            }
        }
    };
    let ctx = document.getElementById('myChart').getContext('2d');

    var myChart = new Chart(ctx, config);
}

export {drawGraf}
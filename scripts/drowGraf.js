function drawGraf(data) {
    let size = data[0].map((i) => {
        return i.c_size;
    });

    let elapsedTime = data[0].map((i) => {
        return i.c_elapsed_time;
    });
   

    let config = {
        type: 'line',
        data: {
            labels: elapsedTime,
            datasets: [{
                    label: 'Elapsed time',
                    data: size,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)', 
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    ticks: {
                        callback: function(value, index, values) {
                            return formatSize(value);
                        }
                    }
                },
                x: {
                    ticks: {
                        callback: function(value, index, values) {
                            return formatTime(value);
                        }
                    }
                }
            }
        }
    };
    let ctx = document.getElementById('myChart').getContext('2d');

    var myChart = new Chart(ctx, config);
}

function formatSize(value) {
    let unit = 'B';
    let convertedValue = value;

    if (value >= 1e9) {
        unit = 'GB';
        convertedValue = value / 1e9;
    } else if (value >= 1e6) {
        unit = 'MB';
        convertedValue = value / 1e6;
    } else if (value >= 1e3) {
        unit = 'KB';
        convertedValue = value / 1e3;
    }

    return convertedValue.toFixed(1) + ' ' + unit;
}

function formatTime(nanoseconds){
    let time;
    let unit;
    if (nanoseconds < 1e3) {
        time = nanoseconds
        unit = 'ns'
    }
    if (nanoseconds < 1e6) {
        time = nanoseconds / 1e3;
        unit = 'μs';
    } else if (nanoseconds < 1e9) {
        time = nanoseconds / 1e6;
        unit = 'ms';
    } else {
        time = nanoseconds / 1e9;
        unit = 's';
    }

    return `${time.toFixed(2)} ${unit}`;
}
export {drawGraf}
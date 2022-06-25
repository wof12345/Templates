let myChart = new Chart(graph_cont, {
    type: 'line',
    data: {
        labels: chartCurrentData.labels,
        datasets: [{
            label: 'Time complexity graph',
            data: chartCurrentData.data,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',

            borderColor: 'rgba(255, 99, 132, 1)',

            borderWidth: 1
        }]
    },

    options: {
        scales: {
            y: {
                beginAtZero: true
            },
        },
        plugins: {
            title: {
                display: true,
                text: 'None'
            }
        },
        responsive: true,
        // maintainAspectRatio: false
    }
});
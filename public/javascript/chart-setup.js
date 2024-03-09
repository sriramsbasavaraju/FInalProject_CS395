const ctx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Monthly Revenue',
            // changed number
            data: [10000, 189392, 12000, 16000, 18000, 20000, 22000, 24000, 26000, 28000, 30000, 32000],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            tension: 0.1 // This makes the line chart a bit smoother
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false // Adjust if you want to start your scale with a value other than zero
            }
        }
    }
});

<template>
    <Bar id="my-chart-id-1" :options="chartOptions" :data="chartData" />
</template>
  
<script>
import { Bar, Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    components: { Bar },
    setup() {
        return {
            chartData: {
                labels: ['January', 'Febrary', 'March', 'April', 'May'],
                datasets: [
                    {
                        label: 'amount',
                        backgroundColor: [
                            'rgba(255, 99, 132)',
                            'rgba(255, 159, 64)',
                            'rgba(255, 205, 86)',
                            'rgba(75, 192, 192)',
                            'rgba(54, 162, 235)',
                            'rgba(153, 102, 255)'
                        ],
                        data: [31, 20, 12, 27, 20, 15],
                    }]
            },
            chartOptions: {
                responsive: true,
            }
        }
    }

}
</script>
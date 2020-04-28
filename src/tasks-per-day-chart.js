const tasksPerDayChartCanvas = document.getElementById('tasks-per-day-chart');
const tasksPerDayChartContext = tasksPerDayChartCanvas.getContext('2d');
let days = [];
let tasksPerDay = [];

const tasksPerDayChart = new Chart(tasksPerDayChartContext, {
  type: 'bar',
  borderWidth: 1,
  data: {
    labels: days,
    datasets: [
      {
        data: tasksPerDay,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: 'Aufgaben pro Tag',
    },
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

function updateTasksPerDayChart(tasklist) {
  days = []; // stores the dates without repeats
  tasksPerDay = []; // stores the number of tasks per day at the same index as days
  for (task of tasklist) {
    if (!days.includes(task.deadline)) {
      days.push(task.deadline);
      tasksPerDay.push(1);
    } else {
      dataIndex = days.findIndex((day) => {
        return day === task.deadline;
      });
      tasksPerDay[dataIndex]++;
    }
  }
  tasksPerDayChart.data.datasets[0].data = tasksPerDay;
  tasksPerDayChart.data.labels = days;
  tasksPerDayChart.update();
}

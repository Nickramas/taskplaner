const categoryChartCanvas = document.getElementById('category-chart');
const categoryChartContext = categoryChartCanvas.getContext('2d');

let percentageShareOfCategories = []; // 0: Schule, 1: Arbeit, 3: Privat

const categoryChart = new Chart(categoryChartContext, {
  type: 'pie',
  data: {
    labels: ['Schule', 'Arbeit', 'Privat'],
    datasets: [
      {
        data: percentageShareOfCategories,
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
      text: 'Aufteilung der Kategorien in %',
    },
  },
});

function updateCategoryChart(tasklist) {
  percentageShareOfCategories = [];

  let school = 0;
  let work = 0;
  let private = 0;

  for (task of tasklist) {
    switch (task.category) {
      case 'Schule':
        school++;
        break;
      case 'Arbeit':
        work++;
        break;
      case 'Privat':
        private++;
        break;
      default:
        break;
    }
  }

  sumOfAll = school + work + private;

  school = Math.round((school / sumOfAll) * 100);
  work = Math.round((work / sumOfAll) * 100);
  private = Math.round((private / sumOfAll) * 100);

  percentageShareOfCategories[0] = school;
  percentageShareOfCategories[1] = work;
  percentageShareOfCategories[2] = private;

  categoryChart.data.datasets[0].data = percentageShareOfCategories;
  categoryChart.update();
}

var ColumnChart = function(){
  var container = document.querySelector('#bar-graph');

  var char = new Highcharts.Chart({
    chart: {
      type: 'column', 
      renderTo: container
    },
    title: {
      text: "Quiche Varieties"
    },
    series: [{
      name: "Cohort G1", 
      data: [1, 8, 1, 1, 5], 
      colors: ['purple', 'mistyrose', 'goldenrod', 'hotpink', 'black']
    }],
    xAxis: {
      categories: ['Ke$ha', 'Lorraine', 'Cheese + Onion', 'Ellen', 'HATRED']
    }, 
    plotOptions: {
      series: {
        colorByPoint: true
      }
    }
  });
} 
<template>
  <Pie
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Pie } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from 'chart.js'


ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default {
  name: 'BarChart',
  components: { Pie },
  props: {
    chartId: {
      type: String,
      default: 'pi-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 50
    },
    height: {
      type: Number,
      default: 0
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      chartData: {
        labels: [ 'Cadre Direct Access Fund', 'Hotel', 'Mixed Use' ,'Office','Multifamily','Industrial'],
        datasets: [ { 
          backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16', '#E46651', '#00D8FF', '#DD1B16'],
          data: [40, 20, 12,3,9,33] } ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>
<script>
import { Doughnut } from 'vue-chartjs'
export default {
  extends: Doughnut,
  data(){
      return{
          chart:{
      labels: this.labels,
      datasets: [{
            backgroundColor:this.colors,
            data: this.values
        }],
    }
 }
  },
  mounted () {
    this.renderChart(this.chart, {responsive: false, maintainAspectRatio: false})
  },
  props:["labels", "colors", "values"]
}
</script>
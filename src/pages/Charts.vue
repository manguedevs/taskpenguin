<template>
  <q-page padding>
    <span style="font-size:46px; color:#B6B6B7">
        GRÁFICOS VÃO AQUI :)
    </span>
    <q-card flat>
      <q-card-section>
        <t-chart :labels="chart.labels" drawBorder :colors="chart.colors" :values="chart.values" :styles="{height: '55vh'}" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      abc:{"font-size":"20px", "font-weight":"bold"},
      chart:{
        labels:['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'], 
        colors:["#ca7e78", "#12b48a", "#fbb5da", "#95f8bb", "#3f1a79", "#359569", "#91f1cf", "#47b1de", "#f5b799", "#600a43", "#d3e1d4", "#43a5f6"],
        values:[541, 576, 984, 944, 834, 864, 662, 573, 607, 631, 629, 541]}
    }
  },

};
</script>


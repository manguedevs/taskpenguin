<template>
  <q-page padding class="flex">
    <span style="font-size:46px; color:#B6B6B7">
        Extrato da conta
    </span>
    <div class="row fit">

      <!-- ÚLTIMO MÊS -->
      <q-card flat class="q-mr-xl" style="width:24vw">
        <q-card-section>
          <div style="font-size:18px; color:#B6B6B7;">
            VALOR TOTAL DO ÚLTIMO MÊS
          </div>
          <div class="q-mt-sm" style="font-size:24px">
            R${{ prev }}
          </div>
        </q-card-section>
      </q-card>

      <!-- ESSE MÊS -->
      <q-card flat class="q-mr-xl" style="width:24vw">
        <q-card-section>
          <div style="font-size:18px; color:#B6B6B7;">
            VALOR TOTAL DO MÊS ATUAL
          </div>
          <div class="row q-mt-sm" style="font-size:24px">
            R${{ current }}
            <p class="q-ml-xs q-mt-xs text-bold" style="font-size:18px" :class="percentChange() > 0 ? 'text-negative' : 'text-positive'">
              ({{ percentChange().toFixed(2)}}%)
            </p>
          </div>
        </q-card-section>
      </q-card>

      <!-- EXTRATO -->
      <q-card flat style="width:24vw">
        <q-card-section>
          <div style="font-size:18px; color:#B6B6B7;">
            GERAR EXTRATO
          </div>
          <div class="row q-mt-sm" style="">

            <q-input style="width:140px" flat class="q-mr-xs" filled v-model="date1">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy v-model="datePicker" transition-show="scale" transition-hide="scale">
                      <q-date :locale="dateBR" style="overflow:hidden" mask="DD/MM/YYYY" v-model="date1">
                      </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
            <q-input style="width:140px" filled v-model="date2">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy v-model="datePicker2" transition-show="scale" transition-hide="scale">
                      <q-date ref="a" today-btn :locale="dateBR" style="overflow:hidden" mask="DD/MM/YYYY" v-model="date2">
                      </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>

            <q-btn @click="exportTable" flat class="q-ml-xs gradientBtn" style="width:35px; height:auto;font-size:8px" icon="fas fa-file-export"></q-btn>
          </div>
        </q-card-section>
      </q-card>
    </div>

    <!-- DATATABLE -->
    <q-card flat class="q-mt-md" style="opacity:0.9;height:70vh;width:100vw">
      <q-table ref="dataTable" title="Contas" :data="billList" :columns="columns" row-key="name">
        <template slot="body-cell-bank" slot-scope="col">
          <q-td>
            <q-avatar>
              <img
                  :src="col.value.blogo.length > 0 ? col.value.blogo : '/statics/default-bLogo.png'                 "
                  style="height:45px; width:45px"
              />
            </q-avatar>
            {{ col.value.bname }}
          </q-td>
        </template>

        <template slot="body-cell-paydate" slot-scope="col">
          <q-td style="width:170px">
            <span>{{col.row.paydate}}</span>
          </q-td>
        </template>

      </q-table>
    </q-card>
  </q-page>
</template>
<script>
import { exportFile } from 'quasar'

function wrapCsvValue (val, formatFn) {
  let formatted = formatFn !== void 0
    ? formatFn(val)
    : !!val.bname ? val.bname : val

  formatted = formatted === void 0 || formatted === null
    ? ''
    : String(formatted)

  formatted = formatted.split('"').join('""')
  /**
   * Excel accepts \n and \r in strings, but some other CSV parsers do not
   * Uncomment the next two lines to escape new lines
   */
  // .split('\n').join('\\n')
  // .split('\r').join('\\r')

  return `"${formatted}"`
}
export default {
	mounted(){
    this.$refs.dataTable.sort("paydate");
    console.log(this.$refs);
    this.$refs.a.setToday();
  },
  data() {
    return {
      columns: [
        {
          name: "bank",
          align: "left",
          label: "Banco",
          field: "bank",
          sortable: true
        },
        {
          name: "info",
          align: "left",
          label: "Informação",
          field: "bill_info",
          sortable: true
        },
        {
          name: "expiration",
          label: "Vencimento",
          field: "expdate",
          sortable: true
          // sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
        },
        {
          name: "paydate",
          align: "center",
          label: "Data de pagamento",
          field: "paydate",
          sortable: true,
          // sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
        },
        {
          name: "price",
          align: "center",
          label: "Valor da conta",
          field: "price",
          format: val => `R$ ${val}`,
          sortable: true
        }
      ],
      billList: [
        {
          bank: { bname: "Banco do Brasil", blogo: "/statics/logo-bb.png" },
          bill_info: "Conta referente ao Banco do Brasil",
          expdate: "12/02/2020",
          paydate: "08/02/2020",
          price: 78.99
        },
        {
          bank: {
            bname: "Vivo",
            blogo:
              "https://prismic-io.s3.amazonaws.com/zelas-telecom/d368f38e-ccc0-499a-b13c-77fd08c7ddd7_Logo-Vivo.png"
          },
          bill_info: "Conta de Internet",
          expdate: "11/02/2020",
          paydate: "10/02/2020",
          price: 99.33
        },
        {
          bank: { bname: "Unimed", blogo: "" },
          bill_info: "Conta plano de saúde Unimed",
          expdate: "09/02/2020",
          paydate: "07/02/2020",
          price: 240.48
        }
      ],
      prev: 750,
      current: 711.48,
      dateBR: {
        days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
        daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
        months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        firstDayOfWeek: 1
      },
      date1:null,
      date2:null,
      datePicker:false,
      datePicker2:false,
    };
  },
  methods: {
    percentChange() {
      // Decrease
      if (this.prev > this.current) {
        let change = ((this.current - this.prev) / this.prev) * 100;
        return change;
      } else {
        // Increase
        let change = ((this.current - this.prev) / this.prev) * 100;
        return `+${change}`;
      }
    },
    exportTable () {
      // naive encoding to csv format
      const content = [ this.columns.map(col => wrapCsvValue(col.label)) ].concat(
        this.billList.map(row => this.columns.map(col => wrapCsvValue(
          typeof col.field === 'function'
            ? col.field(row)
            : row[col.field === void 0 ? col.name : col.field],
          col.format
        )).join(','))
      ).join('\r\n')

      const status = exportFile(
        'table-export.csv',
        content,
        'text/csv'
      )

      if (status !== true) {
        this.$q.notify({
          message: 'Browser denied file download...',
          color: 'negative',
          icon: 'warning'
        })
      }
    }
  }
};
</script>


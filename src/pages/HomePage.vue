<template>
  <q-page padding class="flex">
    <q-card class="gastos" style="height:auto;width:100vw">
      <q-card-section>
        <div class="fit row">
          <div class="col-6 col-xs-6 text-h4">Resumo da conta</div>
          <div class="col-md-6" align="right">
            <q-btn color="secondary" style="height:5vh;">Extrato</q-btn>
          </div>
          <div class="col-md-3 col-xs-4 text-h6">
            Mês passado
            <c-penguin/>
            <p class="text-subtitle1">R$ {{ prev }}</p>
          </div>
          <div class="col-md-6 text-h6">
            Este mês
            <div class="text-subtitle1 row">
              <p>R$ {{ current }}</p>
              <p
                class="q-ml-xs text-bold"
                :class="percentChange() > 0 ? 'text-negative' : 'text-positive'"
              >({{ percentChange().toFixed(2) }}%)</p>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
    <q-card class="q-mt-md" style="height:100vh;width:100vw">
      <q-table title="Contas" :data="data" :columns="columns" row-key="name">
        <template slot="body-cell-bank" slot-scope="col">
          <q-td>
            <q-avatar>
              <img
                :src="
                  col.value.blogo.length > 0
                    ? col.value.blogo
                    : '/statics/default-bLogo.png'
                "
                style="height:45px; width:45px"
              />
            </q-avatar>
            {{ col.value.bname }}
          </q-td>
        </template>
     
        <template slot="body-cell-paydate" slot-scope="col">
          <q-td style="width:170px">
            <q-input filled v-model="col.row.paydate">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                      <q-date style="overflow:hidden" mask="DD/MM/YYYY" v-model="col.row.paydate" @input="() => $refs.qDateProxy.hide()"></q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </q-td>
        </template>

        <template slot="body-cell-actions">
          <q-td style="width:140px">
            <q-btn flat round size="xs" class="bg-transparent">
              <q-icon size="lg" color="positive" name="fas fa-check-circle"></q-icon>
            </q-btn>
            <q-btn flat round size="xs" class="bg-transparent q-ml-xs">
              <q-icon size="lg" color="negative" name="fas fa-times-circle"></q-icon>
            </q-btn>

          </q-td>
        </template>

      </q-table>
    </q-card>
  </q-page>
</template>
<script>
export default {
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
        },
        {
          name: "actions",
          align: "left",
          label: "Ações",
          field: "actions",
          sortable: false
        }
      ],
      data: [
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
      current: 711.48
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

  }
};
</script>
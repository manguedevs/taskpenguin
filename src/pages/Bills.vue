<template>
  <q-page padding class="flex">
    <span style="font-size:46px; color:#B6B6B7">
        Suas faturas
      </span>
    <q-card flat class="q-mt-md" style="opacity:0.9;height:70vh;width:100vw">
      <q-table ref="dataTable" :data="billList" :columns="columns" row-key="name">
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
            <span class="q-ml-lg">{{col.row.paydate}}</span>
          </q-td>
        </template>

        <template slot="body-cell-actions" slot-scope="col">
          <q-td style="width:60px">
            <q-btn :to="`/bills/info/${col.row.id}`" flat round size="xs" class="bg-transparent">
              <q-icon size="lg" color="blue-7" name="fas fa-info-circle"></q-icon>
            </q-btn>

          </q-td>
        </template>

      </q-table>
    </q-card>
  </q-page>
</template>
<script>
export default {
	mounted(){
		this.$refs.dataTable.sort("paydate");
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
        },
        {
          name: "actions",
          align: "center",
          label: "Ações"
        }
      ],
      billList: [
        {
          id:"01",
          bank: { bname: "Banco do Brasil", blogo: "/statics/logo-bb.png" },
          bill_info: "Conta referente ao Banco do Brasil",
          expdate: "12/02/2020",
          paydate: "08/02/2020",
          price: 78.99
        },
        {
          id:"02",
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
          id:"03",
          bank: { bname: "Unimed", blogo: "" },
          bill_info: "Conta plano de saúde Unimed",
          expdate: "09/02/2020",
          paydate: "07/02/2020",
          price: 240.48
        }
      ],
      prev: 750,
      current: 711.48,
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


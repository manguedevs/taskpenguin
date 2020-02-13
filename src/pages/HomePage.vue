<template>
  <q-page padding class="flex">
    <q-card class="gastos" style="opacity:0.9;height:auto;width:100vw">
      <q-card-section>
        <div class="fit row">
          <div class="col-6 col-xs-6 text-h4">Resumo da conta</div>
          <div class="col-md-6" align="right">
            <q-btn color="secondary" style="height:5vh;">Extrato</q-btn>
        
            <template>
              <div class="q-pa-md q-gutter-sm">
                <q-btn label="Dados Cadastrais" color="primary" @click="userdata = true, clear()" />
                <q-dialog v-model="userdata" persistent>
                  <q-card style="min-width: 350px">
                    
                    <q-card-section class ="bg-blue" >
                    
                    <div class="text-h6">Prencha com seus dados</div>    
                    </q-card-section>
                    <q-card-section class="q-pt-none">
                      <q-input label = "Nome completo (sem abreviações)*" v-model="person.name"/>
                      <q-input label ="CPF*" v-model="person.cpf"/>
                      <q-input label ="Sexo*" v-model="person.sex"/>
                      <q-input label ="Data de nascimento*" v-model="person.age"/>
                      <q-input label ="Email*" v-model="person.mail" />
                      <q-input label ="País*" v-model="person.country"/>
                      <q-input label ="Estado*" v-model="person.state"/>
                      <q-input label ="Cidade*" v-model="person.city"/>
                      <q-input label ="Cep*" v-model="person.postalcode"/>
                      <q-input label ="DDD*" v-model="person.ddd"/>
                      <q-input label ="Número de telefone (Sem DDD)* " v-model="person.cellphonenumber"/>          
                      <q-card-section class = "bg-blue q-mt-md">
                      <div class="text-h6" >Insira as imagens</div>
                      </q-card-section> 

                      <q-file class = "q-mb-sm q-mt-sm" label ="Foto sua (sem óculos)" outlined v-model="person.userpic">
                        <template v-slot:prepend>
                      <q-icon name="attach_file" />
                        </template>
                      </q-file>
                      <q-file label ="Foto de sua identidade" outlined v-model="person.identitypic">
                        <template v-slot:prepend>
                      <q-icon name="attach_file" />
                        </template>
                      </q-file>


                    </q-card-section>

                    <q-card-actions align="right" class="text-primary">
                      <q-btn flat label="Cancelar" v-close-popup />
                      <q-btn flat label="Finalizar cadastro" v-close-popup />
                    </q-card-actions>
                  </q-card>
                </q-dialog>
              </div>
            </template>
  
          </div>
          <div class="col-md-3 col-xs-4 text-h6">
            Mês passado
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
    <q-card class="q-mt-md" style="opacity:0.9;height:100vh;width:100vw">
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
            <q-input filled v-model="col.row.paydate">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy v-model="datePicker[col.row.bank.bname]" @input="checkDatePicker(col.row)" ref="qDateProxy" transition-show="scale" transition-hide="scale">
                      <q-date style="overflow:hidden" mask="DD/MM/YYYY" v-model="newPaymentDate">
                      </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </q-td>
        </template>

        <template slot="body-cell-actions">
          <q-td style="width:140px">
            <q-btn flat round size="xs" class="bg-transparent">
              <q-icon size="lg" color="positive" name="fas fa-check-circle" />
            </q-btn>
            <q-btn flat round size="xs" class="bg-transparent q-ml-xs">
              <q-icon size="lg" color="negative" name="fas fa-times-circle"/>
            </q-btn>

          </q-td>
        </template>

      </q-table>
    </q-card>
    <q-dialog v-model="paymentConfirm" persistent>
      <q-card style="width:25vw; background-color:">
        <q-card-section class="row">
          <q-icon class="col-12" size="64px" name="fas fa-exclamation-triangle" color="orange-8" />
          <span class="q-mx-sm text-justify">O dia que você selecionou é depois do vencimento de sua conta, se confirmar você ficará sujeito a cobranças extras do banco por conta do atraso no pagamento.</span>
        </q-card-section>

        <q-card-actions>
          <q-btn
              flat
              label="Estou ciente!"
              color="primary"
              v-close-popup
              @click="changePymtDate"
          />
          <q-btn flat label="Cancelar" color="negative" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>
<script>
export default {
	mounted(){
		this.$refs.dataTable.sort("paydate");
  },
  data() {
    return {

      userdata: false,
      person:{
      name:"" , cpf:"", sex:"" , age:"", mail:"", country:"", state:"", 
      city:"", postalcode:"", ddd:"" ,cellphonenumber:"", userpic:"", identitypic:""
      }, 
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
      datePicker: {},
      bill:"",
      newPaymentDate:"",
      paymentConfirm: false,
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

    checkDatePicker(bill){
      if (!this.datePicker[bill.bank.bname]){
        if (this.newPaymentDate > bill.expdate){ // TODO: Testar se isso não quebra, já que tá só comparando as strings e não date objects
          this.paymentConfirm = true;
        }else{
          this.changePymtDate();
        }
      }else{
        this.bill = bill;
        this.newPaymentDate = bill.paydate;
      }
    },
    changePymtDate(){
      this.bill.paydate = this.newPaymentDate;
      this.$q.notify({
        message: 'Data de pagamento alterada com sucesso!',
        color: 'positive'
      })
      // Send request to backend
    },
    clear(){
      this.person.name="" , this.person.cpf="", this.person.sex="" , this.person.age="", this.person.mail="",
      this.person.country="", this.person.state="", this.person.city="", this.person.postalcode="",
      this.person.ddd="" ,this.person.cellphonenumber="", this.person.userpic="", this.person.identitypic=""
    }
  }
};
</script>


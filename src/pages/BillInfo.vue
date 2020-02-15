<template>
  <q-page padding class="flex">

      <span style="font-size:46px; color:#B6B6B7">
        Informações da fatura
      </span>
      <!-- <div class="row fit"> -->
    <q-card flat style="height:70vh;width:100vw; font-size:18px" class="q-pa-sm">
        <!-- <div class="row fit">
            <q-card-section class="infoLabel col-3">
              Emissor:
              <q-separator style="width:80vw" class="q-mt-sm"/>
            </q-card-section>

            <q-card-section class="col-9">
              <q-avatar>
                <img :src="`${bill.bank.blogo}`">  
              </q-avatar> 
              
              <span style="margin-top:-2vh">{{ bill.bank.bname }}</span>

            </q-card-section>

            <q-card-section class="infoLabel col-3" style="margin-top: -22vh;">
              Informações sobre a fatura:
              <q-separator style="width:80vw" class="q-mt-sm"/>
            </q-card-section>

            <q-card-section class="col-9" style="margin-top: -22vh;">
              <span style="margin-top:-2vh">{{ bill.bill_info }}</span>
            </q-card-section>


            <q-card-section class="infoLabel col-3" style="margin-top: -22vh;">
              Informações sobre a fatura:
              <q-separator style="width:80vw" class="q-mt-sm"/>
            </q-card-section>

            <q-card-section class="col-9" style="margin-top: -22vh;">
              <span style="margin-top:-2vh">{{ bill.bill_info }}</span>
            </q-card-section>


            

        </div> -->

      <div class="row" style="height: 150px">
        <div class="infoTitle col-sm-3">Fatura do (a):</div>
        <div class="col-sm-8">
          {{ bill.bank.bname }}
          <br>
          <q-avatar class="q-ml-lg" style="height:60px; width:60px">
            <img :src="`${bill.bank.blogo}`">
          </q-avatar>
        </div>
        <q-separator style="width:70vw; height:1.2px"/>

        <div class="infoTitle col-sm-3">Informações sobre a fatura:</div>
        <div class="col-sm-8">{{ bill.bill_info }}</div>
        <q-separator style="width:70vw; height:1.2px"/>

        <div class="infoTitle col-sm-3">Data de vencimento:</div>
        <div class="col-sm-8">{{ bill.expdate }}</div>
        <q-separator style="width:70vw; height:1.2px"/>

        <div class="infoTitle col-sm-3">Data de pagamento:</div>
        <div class="col-sm-2">
          <q-input style="font-size:16px" filled v-model="bill.paydate">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy v-model="datePicker" @input="checkDatePicker(bill)" transition-show="scale" transition-hide="scale">
                      <q-date style="overflow:hidden" mask="DD/MM/YYYY" v-model="newPaymentDate">
                      </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
        </div>
        <q-separator style="width:70vw; height:1.2px"/>

        <div class="infoTitle col-sm-3">Valor da conta:</div>
        <div class="col-sm-8">R${{ bill.price }}</div>
        <q-separator style="width:70vw; height:1.2px"/>
        <div class="col-sm-2">
        <q-btn to="/bills" class="q-mt-md gradientBtn">Voltar</q-btn>
        </div>
      </div>
    </q-card>
    
    <!-- DIALOGO DE CONFIRMAÇÃO DE DATA APÓS VENCIMENTO -->
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
		this.a();
  },
  data() {
    return {
      bill:{
        id:'',
        bank:{
          bname:'',
          blogo:''
        },
        bill_info:"",
        expdate: "",
        paydate: "",
        price: 0

      },
      datePicker:false,
      newPaymentDate:"",
      paymentConfirm:false,
    };
  },
  methods: {
    a(){
      // console.log(this.$route.params.id);
      this.bill = {
          id:"01",
          bank: { bname: "Banco do Brasil", blogo: "/statics/logo-bb.png" },
          bill_info: "Conta referente ao Banco do Brasil",
          expdate: "12/02/2020",
          paydate: "08/02/2020",
          price: 78.99
        }
    },
    checkDatePicker(bill){
      if (!this.datePicker){
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
  }
};
</script>

<style lang="scss" scoped>
.infoTitle{
  font-size: 22px;
  height: 8vh;
}
</style>
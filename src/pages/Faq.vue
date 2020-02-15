<template>
    <q-page padding>
        <span style="font-size:46px; color:#B6B6B7">
        Perguntas frequentes
      </span>
      <q-card flat style="height:auto;width:80vw; font-size:18px" class="q-pa-sm">
          <q-expansion-item
              v-for="(question, index) in questions"
              :key="index"
              style="width:100%;background-color: #F0F0F0"
              group="a"
              :label="`${question.question}`"

          >
            <q-card>
                    <q-card-section style="background-color:#D8D8D8">
                        {{ lorem }}
                    </q-card-section>
                </q-card>
            </q-expansion-item>
      </q-card>
    </q-page>
</template>

<script>
export default {
    data(){
        return{
            questions:[
                {question:"Quais as minhas opções de pagamentos?", answer:""},
                {question:"O Taskpenguin tem alguma tarifa?", answer:""},
                {question:"Como pago minhas tarifas com o Taskpenguin?", answer:""},
                {question:"É possivel agendar pagamentos ?", answer:""},
                {question:"Vou precisar passar por algum tipo de análise ?", answer:""},
                {question:"Como solicito o extrato da minha tarifa?", answer:""},
                {question:"O que acontece se eu não tiver saldo suficiente para pagar minha conta ?", answer:""},
                {question:"Recebo algum desconto por pagamento adiantado?", answer:""},
                {question:"Quanto tempo para o aplicativo reconhecer o pagamento ?", answer:""},
                {question:"Meu pagamento ainda não foi reconhecido, o que eu faço?", answer:""},
                {question:"Minha tarifa vai vencer em um feriado, o que faço?", answer:""},
                {question:"Fiz um pagamento parcelado, como pagar o restante ?", answer:""},
                {question:"Posso parcelar mais de uma fatura?", answer:""},
                {question:"Posso alterar as condições do parcelamento ou cancelá-lo?", answer:""},
                {question:"Como é feito os cálculos das parcelas da fatura?", answer:""},
                {question:"O que acontece se eu não pagar minha fatura?", answer:""},
                {question:"Atrasei o pagamento da fatura, meu nome pode ser negativado?", answer:""},
                {question:"Qual o valor total da minha divida?", answer:""},
                {question:"Qual a multa por atraso de pagamentos?", answer:""},
                {question:"Como acesso a conta pelo computador ?", answer:""},
                {question:"Como altero o e-mail cadastrado?", answer:""},
                {question:"Como recupero minha senha?", answer:""},
                {question:"Posso colocar uma senha de proteção para acessar o aplicativo?", answer:""},
                {question:"Como alterar o endereço da minha conta?", answer:""},
                {question:"Posso solicitar o aplicativo para me notificar com antecêdencia que a tarifa irá vencer?", answer:""}
            ],
            
            lorem: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit quae exercitationem, repellendus totam, quam ducimus nobis doloremque commodi voluptatum vitae aut quisquam deserunt quidem porro reiciendis expedita debitis fugiat laboriosam!"
        }
        
    }
}
</script>
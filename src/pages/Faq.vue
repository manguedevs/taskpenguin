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
                        {{ question.answer }}
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
                {question:"Quais as minhas opções de pagamentos?", answer:"A possibilidade é somente por cartão de crédito."},
                {question:"O Taskpenguin tem alguma tarifa?", answer:"Não, será livre de mensalidades, totalmente gratuito."},
                {question:"Como pago minhas tarifas com o Taskpenguin?", answer:"Solicitando ao mordomo, ou entrando na aba de contas, pagando com o método de pagamento selecionado."},
                {question:"É possivel agendar pagamentos ?", answer:"Sim, na tela de pagamentos, é possível selecionar a data que o pagamento será efetuado."},
                {question:"Vou precisar passar por algum tipo de análise ?", answer:"Sim, para a segurança da empresa e do próprio usuário, necessitamos de uma análise de informações para liberar o uso do aplicativo."},
                {question:"Como solicito o extrato da minha tarifa?", answer:"Através da tela de extrato da conta. Lá é possível ver todas as informações de transações da conta do usuário."},
                {question:"O que acontece se eu não tiver saldo suficiente para pagar minha conta ?", answer:"O aplicativo impedirá o usuário de finalizar o pagamento, e só permitindo após ter saldo suficiente."},
                {question:"Recebo algum desconto por pagamento adiantado?", answer:"Dependendo da tarifa, o banco ou a instituição poderá informar que existe um desconto se a tarifa for paga até certa data."},
                {question:"Quanto tempo para o aplicativo reconhecer o pagamento ?", answer:"Dependendo da agência bancária, o tempo para o pagamento cair pode variar, mas geralmente dentro de alguns minutos, o pagamento é confirmado."},
                {question:"Meu pagamento ainda não foi reconhecido, o que eu faço?", answer:"Tente aguardar mais algum tempo, se demorar muito, entre em contato com sua agência bancária para descobrir o motivo."},
                {question:"Minha tarifa vai vencer em um feriado, o que faço?", answer:"Tente pagar sua tarifa alguns dias antes, para que não ocorra nenhum atraso ou imprevisto, e o pagamento seja efetuado."},
                {question:"Fiz um pagamento parcelado, como pagar o restante ?", answer:"O próprio aplicativo irá informar quantas parcelas ainda existem da tarifa, e o valor a ser pago."},
                {question:"Posso parcelar mais de uma fatura?", answer:"Sim, poderá parcelar inúmeras parcelas, desde que a tarifa permita o parcelamento."},
                {question:"Posso alterar as condições do parcelamento ou cancelá-lo?", answer:"Não, depois de confirmado o tipo de pagamento, terá que manter esse padrão até a quitação da dívida."},
                {question:"Como é feito os cálculos das parcelas da fatura?", answer:"Dependendo da tarifa, a instituição ou agência bancária permite que o usuário faça um número de parcelas, podendo aplicar juros ou não."},
                {question:"O que acontece se eu não pagar minha fatura?", answer:"Geralmente será gerada uma multa ou juros com o passar dos dias, e só irá cessar a tarifa quanto o usuário pagá-la."},
                {question:"Atrasei o pagamento da fatura, meu nome pode ser negativado?", answer:"A partir do momento que entra em atraso, seu nome pode ser negativado sim, mas o mordomo lhe informará antes da tarifa vencer."},
                {question:"Qual o valor total da minha dívida?", answer:"Na aba de contas, será informado o valor total de todas as tarifas que precisam ser pagas."},
                {question:"Qual a multa por atraso de pagamentos?", answer:"A multa pode variar dependendo da instituição que está cobrando a tarifa, poderá ser uma multa ou aplicar um juros."},
                {question:"Como acesso a conta pelo computador ?", answer:"Após se registrar no aplicativo, sua conta vai estar liberada para acessar pelo site."},
                {question:"Como altero o e-mail cadastrado?", answer:"Não será possível fazer a substituição do email cadastrado, o primeiro que for inserido, será permanente."},
                {question:"Como recupero minha senha?", answer:'Através da opção "esqueci minha senha", será enviado um email para o email cadastrado, com dados para a substituição da senha do usuário.'},
                {question:"Posso colocar uma senha de proteção para acessar o aplicativo?", answer:"Não, o aplicativo não tem a opção de por um PIN de segurança, somente a senha da conta do usuário."},
                {question:"Como alterar o endereço da minha conta?", answer:"Na configuração de conta do usuário, terá a opção de editar o endereço da conta."},
                {question:"Posso solicitar o aplicativo para me notificar com antecêdencia que a tarifa irá vencer?", answer:"Sim, pedindo pelo chat ao mordomo, ele sempre irá notificar você com alguns dias de antecedência ao vencimento da tarifa."}
            ],


        }

    }
}
</script>

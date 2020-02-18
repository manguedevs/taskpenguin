<template>

    <div class="penguin">
        <div class="penguin fixed-bottom-right cursor-pointer">
            <q-avatar @click="openChat" square class="q-ma-xs" style="width:160px;height:80px">
                <img class="q-ml-xs" src="https://trello-attachments.s3.amazonaws.com/5e449fdbcf03d28e8517290e/1024x532/0c78fcd0276a77363f1f63fe8d450e7d/Penguinn.png" style="width:160px;height:80px">
                <q-skeleton v-if="hasClicked" size="60px" type="circle" animation="fade" style="z-index:-1;background: rgb(255,184,140);
    background: radial-gradient(circle, rgba(255,184,140,1) 50%, rgba(229,101,144,1) 75%);margin-top:-90px "/>
                
            </q-avatar>
        </div>
    
        <q-card v-if="chatBox" @click="scroll" >
            <div style="background-color:#B6B6B7B3" class="chat fixed-bottom-right q-px-md" :class="[chatBox ? 'chatOpen' : 'chatClose']">
                <q-scroll-area ref="chatScroll" style="height:inherit">
                <q-chat-message
                    v-for="(message, index) in messages"
                    :key="index"
                    :name="message.name"
                    :text="message.text"
                    :sent="message.name == 'User'"
                    :bg-color="message.name.includes('[BOT]') ? 'grey-6' : 'grey-12'"
                    :style="{width: message.name.includes('[BOT]') ? '20vw' : ''}"
                >
                    <div v-if="messageOpts(message) > 0" class="fit row">
                    <q-btn style="width:12vw;" class="gradientBtn q-mt-sm q-ml-sm col-md-6" align="right" v-for="(options, index) in message.opts" :key="index" @click="options.action">
                        {{ options.msg }}
                    </q-btn>
                    </div>
                </q-chat-message>
                </q-scroll-area>    
            </div>
        </q-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            chatBox: false,
            botName: "Albert",
            typing: true,
            messages:[],
            hasClicked:true,
            billList: [{
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
                }],
            nextToExpire:null,
            
        }
    },
    methods:{
        openChat(){
            this.chatBox = !this.chatBox;
            this.hasClicked=false;
            this.messages = [];
            this.firstChat();
        },
        firstChat() {        
            this.newMessage({name:`[BOT] ${this.botName}`, text:[`Olá, eu sou o ${this.botName}, como posso ajudá-lo hoje?`]});

            this.newMessage(
                {name:`User`, opts:[{msg:"Informações sobre minhas faturas",action:this.faturas},{msg:"Informações sobre minha conta", action:this.conta},{msg:"Perguntas frequentes", action:this.faq}]}
                );
        },  
        newMessage(msg) {
            this.messages.push(msg);;
        },
        scroll () {
            let chat = this.$refs.chatScroll;
            chat.setScrollPosition(chat.scrollSize);
        },
        a(){
            console.log("a");
        },
        messageOpts(msg){
            try {
                return Object.keys(msg.opts).length;
            } catch (error) {
                return 0;
            }
        },
        faturas(){
            let msgBot = {name:`[BOT] ${this.botName}`, text:["O que você gostaria de saber sobre suas faturas?"]};
            this.newMessage(msgBot);
            let msgUser = {name: `User`,opts:[{msg:"Conta mais próxima do vencimento",action:this.nextExpire},{msg:"Valor total de minhas contas deste mês", action:this.totalBills},{msg:"Detalhes de uma conta específica", action:this.a}]};
            this.newMessage(msgUser);
        },
        nextExpire(){
            let billList = this.billList;
            let billCloser = billList[0];
            for (let i = 0; i < billList.length; i++) {
                billCloser.expdate > billList[i].expdate ? billCloser = billList[i] : ''
            }

            this.newMessage({name:`[BOT] ${this.botName}`, text:[`A conta mais próxima de vencer é a do(a) ${billCloser.bank.bname} no valor de  R$${billCloser.price}, no dia ${billCloser.expdate}`]});
        },
        totalBills(){
            let total = 0;
            for (let i = 0; i < this.billList.length; i++) {
                total += this.billList[i].price;
            }
            this.newMessage({name:`[BOT] ${this.botName}`, text:[`O valor total de suas contas deste mês é de: R$${total.toFixed(2)}`]});
        },
        conta(){
            let msgBot = {name:`[BOT] ${this.botName}`, text:["O que você gostaria de ver?"]};
            this.newMessage(msgBot);
            let msgUser = {name: `User`,opts:[{msg:"Sumário de meu cadastro",action:this.sumConta}]};
            this.newMessage(msgUser);
        },
        faq(){
            let msgBot = {name:`[BOT] ${this.botName}`, opts:[{msg:"Clique aqui para ser redirecionado ao FAQ", action:this.goFaq}]};
            this.newMessage(msgBot);
        },
        goFaq(){
            this.$router.push("/faq");
        }
    }
}
</script>

<style lang="scss" scoped>
.penguin{
    z-index: 2000;
}

.chat{
    height:70vh;
    max-width:35vw;
    width:30vw;
    background-color:#CDE1E0;
    overflow: hidden;
}

.chatOpen{
    animation: open 1.2s;
}

.chatClose{
    animation: open 1.2s;
    animation-direction: reverse
}

@keyframes open {
    0%{
        height: 0vh;
    }
    100%{
        height: 70vh;
    }
    
}
</style>
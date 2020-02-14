<template>

    <div class="penguin">
        <div class="penguin fixed-top-right cursor-pointer">
            <q-avatar @click="chatBox = !chatBox" style="width:130px;height:65px;" square>
                <img src="https://trello-attachments.s3.amazonaws.com/5e449fdbcf03d28e8517290e/1024x532/0c78fcd0276a77363f1f63fe8d450e7d/Penguinn.png">
            </q-avatar>
        </div>

        <div v-if="chatBox" @click="scroll">
            <div
                class="chat fixed-top-right q-px-md q-pt-sm"
            >
                <q-scroll-area ref="chatScroll" style="height:inherit">
                <q-chat-message
                    v-for="(message, index) in messages"
                    :key="index"
                    :name="message.name"
                    :text="message.text"
                    :sent="message.name == 'User'"
                    :bg-color="message.name.includes('[BOT]') ? 'grey-6' : 'grey-12'"
                >
                    <div v-if="messageOpts(message) > 0" class="fit row">
                    <q-btn style="" class="q-mt-sm col-md-6" align="right" v-for="(options, index) in message.opts" :key="index" @click="options.action">
                        {{ options.msg }}
                    </q-btn>
                    </div>
                </q-chat-message>
                </q-scroll-area>    
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
        this.firstChat();    
    },
    data() {
        return {
            chatBox: false,
            botName: "AlgumNome",
            typing: true,
            // messages:[{name:"[Bot] ALGUMNOME",text:["Olá, eu sou o ALGUMNOME, como posso lhe ajudar hoje?"], opts:[{msg:'Salve', action:this.a}]},
            //     {name:"User",text:["Bo dia"]},
            //     {name:"[Bot] ALGUMNOME",text:["Salve salve"]}]
            messages:[],
            
        }
    },
    methods:{
        firstChat() {
            // {name:`[BOT] ${this.botName}`, text:[`Olá, eu sou o ${this.botName}, , como posso ajudá-lo hoje?`], opts:[{msg:"Botão", action:this.funcao}]}
            
            this.newMessage({name:`[BOT] ${this.botName}`, text:[`Olá, eu sou o ${this.botName}, , como posso ajudá-lo hoje?`]});

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
            let msgUser = {name: `User`,opts:[{msg:"Conta mais próxima do vencimento",action:this.a},{msg:"Valor total de minhas contas deste mês", action:this.a},{msg:"Detalhes de uma conta específica", action:this.a}]};
            this.newMessage(msgUser);
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
    margin-top: 9vh; 
    background-color:#CDE1E0;
    overflow: hidden;
}

</style>
<template>
    <q-page padding>
        <span style="font-size:46px; color:#B6B6B7">
            Minha conta
        </span>
        
        <!-- PERFIL -->
        <q-expansion-item header-style="height:10vh" label="PERFIL" style="background-color:#fff; color:#B6B6B7;font-size:20px">
            <q-separator></q-separator>
            <q-card flat style="color:black; height:100%">
                <q-card-section>
                    <div class="row">
                        <q-avatar style="height:200px; width:200px">
                            <img src="https://static.thenounproject.com/png/48550-200.png" >
                        </q-avatar>

                        <div class="column">
                            <div class="col-2 q-mb-md q-ml-sm">
                                <q-input readonly filled v-model="person.name" label="Nome"/>
                            </div>

                            <div class="col-2 q-mb-md q-ml-sm">
                                <q-input readonly filled v-model="person.lastName" label="Sobrenome"/>
                            </div>
                            
                            <div class="col-2 q-mb-md q-ml-sm">
                                <q-input readonly filled v-model="person.cpf" label="CPF"/>
                            </div>
                            
                            <div class="col-2 q-mb-md q-ml-sm">
                                <q-input readonly filled v-model="person.phone" label="Telefone"/>
                            </div>
                        </div>
                        
                    </div>
                </q-card-section>
            </q-card>
        </q-expansion-item>


        <q-expansion-item class="q-mt-md" header-style="height:10vh" label="DETALHES DE PAGAMENTO" style="background-color:#fff; color:#B6B6B7;font-size:20px">
            <q-separator></q-separator>
            <q-card flat style="color:black">
                <q-card-section>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis possimus atque at commodi assumenda enim, voluptate voluptatum et quia autem animi quibusdam, qui deserunt, quas quidem officiis maxime quaerat modi!
                </q-card-section>
            </q-card>
        </q-expansion-item>


    </q-page>
</template>

<script>
export default {
    data(){
        return{
            person:{
                name:"Jorginho",
                lastName:"Gameplays",
                cpf:"12345678950",
                phoneArea:"48",
                phone:"999999999"
            }
        }
    }
}
</script>
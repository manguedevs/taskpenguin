<template>
  <q-page padding>
    <span style="font-size:46px; color:#B6B6B7">
      Minha conta
    </span>

    <!-- PERFIL -->
    <q-expansion-item
      header-style="height:10vh"
      label="PERFIL"
      style="background-color:#fff; color:#B6B6B7;font-size:20px"
    >
      <q-separator></q-separator>
      <q-card flat style="color:black; height:100%">
        <q-card-section>
          <div class="row justify-center">
            <q-avatar style="height:200px; width:200px">
              <img src="https://static.thenounproject.com/png/48550-200.png" />
            </q-avatar>
          </div>
          <div class="row justify-center ">
            <div class="col-3 q-pa-xs">
              <q-input readonly filled v-model="person.name" label="Nome" />
            </div>
            <div class="col-7 q-pa-xs">
              <q-input
                readonly
                filled
                v-model="person.lastName"
                label="Sobrenome"
              />
            </div>
          </div>
          <div class="row justify-center">
            <div class="col-10 q-pa-xs">
              <q-input readonly filled v-model="person.email" label="Email" />
            </div>
          </div>
          <div class="row justify-center">
            <div class="col-5 q-pa-xs">
              <q-input readonly filled v-model="person.cpf" label="CPF" />
            </div>
            <div class="col-5 q-pa-xs">
              <q-input readonly filled v-model="person.cnpj" label="CNPJ" />
            </div>
          </div>
          <div class="row justify-center">
            <div class="col-1 q-pa-xs">
              <q-input readonly filled v-model="person.phoneArea" label="DDD" />
            </div>
            <div class="col-4 q-pa-xs">
              <q-input
                readonly
                filled
                v-model="person.phone"
                label="Número de telefone"
              />
            </div>
            <div class="col-5 q-pa-xs">
              <q-input
                
                filled
                name="casanRegistration"
                ref="casanRegistration"
                v-model="person.casanRegistration"
                label="Matrícula (Casan)"
                outlined
                class="cursor-pointer"
                color="black"
              />
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-expansion-item>

    <q-expansion-item
      class="q-mt-md"
      header-style="height:10vh"
      label="DETALHES DE PAGAMENTO"
      style="background-color:#fff; color:#B6B6B7;font-size:20px"
    >
      <q-separator></q-separator>
      <q-card flat style="color:black">
        <q-card-section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          possimus atque at commodi assumenda enim, voluptate voluptatum et quia
          autem animi quibusdam, qui deserunt, quas quidem officiis maxime
          quaerat modi!
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      person: {
        email: "Jorginho@jorge.com",
        name: "Jorginho",
        lastName: "Gameplays",
        cpf: "12345678950",
        phoneArea: "48",
        phone: "999999999",
        cnpj: "13012040102"
      }
    };
  }
};
</script>

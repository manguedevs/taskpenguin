<template>
  <div>
    <form id="login" @submit="signUp">
      <div class="text-center text-white headerToTop">
        <span class="loginTitle">
          <strong>TASK</strong>PENGUIN
        </span>
      </div>
      <div class="row justify-center inputToHeader">
        <div class="col-8 col-lg-3">
          <q-input
            outlined
            name="mail"
            ref="mail"
            v-model="mail"
            placeholder="Email"
            class="cursor-pointer mail"
            color="white"
            dark
            dense
            clearable
            clear-icon="close"
            :rules="[rules.required]"
          >
            <template v-slot:prepend>
              <q-icon name="mail" />
            </template>
          </q-input>
        </div>
      </div>
      
      <div class="row justify-center q-mt-md">
        <div class="col-8 col-lg-3">
          <q-input
            outlined
            name="pass"
            ref="pass"
            v-model="password"
            :type="isPwd ? 'password' : 'text'"
            placeholder="Password"
            class="cursor-pointer"
            color="white"
            dark
            dense
            :rules="[rules.required, rules.min, rules.passwordMatches]"
          >
            <template v-slot:prepend>
              <q-icon name="vpn_key" />
            </template>
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </div>
      </div>

      <div class="row justify-center q-mt-md">
        <div class="col-8 col-lg-3">
          <q-input
            outlined
            name="repass"
            ref="repass"
            v-model="repassword"
            :type="isPwd ? 'password' : 'text'"
            placeholder="Confirm Password"
            class="cursor-pointer"
            color="white"
            dark
            dense
            :rules="[rules.required, rules.min, rules.passwordMatches]"
          >
            <template v-slot:prepend>
              <q-icon name="vpn_key" />
            </template>
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </div>
      </div>

      <div class="row justify-center q-mt-md">
        <q-btn @click ="dialog=true"
          dense
          type="submit"
          id="register"
          class="text-lowercase q-px-md"
        >Register</q-btn>
      </div>

      <div class="row justify-center q-mt-md hiperlinks text-white">
        <a href="/login" class="q-mr-sm">Already have Login?</a> |
        <a class="q-ml-sm" href="/login/password-recovery">Forgot password?</a>
      </div>
      
      <!-- Inicio register 2 -->
      <template>

  <div>
    <form id="login" @submit="signUp">

    <q-dialog
      v-model="dialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-down"
      transition-hide="slide-up"
    >
      <q-card id="register2" class="text-white">
        <q-bar>
          <q-space />
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section class="q-pt-none">
        
      <div class="text-center text-white">
        <span class="loginTitle">
          <strong>TASK</strong>PENGUIN
        </span>
      </div>
        <div class="row justify-center q-mt-md q-gutter-md">
          
            <div class="col-8">

          <q-input
            rounded
            filled
            name="name"
            ref="name"
            v-model="person.name"
            label="Nome completo (Sem abreviações)*"
            class="cursor-pointer" 
            color="white"
            
            dense
            :rules="[rules.required]"
          >
          <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          
          </q-input>      

            </div>
        </div>
          <div class="row justify-center q-mt-md q-gutter-md">
            <div class="col-5">

          <q-input
            filled
            name="cpf"
            ref="cpf"
            v-model="person.cpf"
            label="CPF*"
            class="cursor-pointer" 
            color="white"
            dense
            :rules="[rules.required]"
          >
           <template v-slot:prepend>
              <q-icon name class = "fas fa-id-card"></q-icon>
            </template>
          </q-input>

            </div>
              <div class="col-5">

                <q-input
                  filled
                  name="age"
                  ref="age"
                  v-model="person.age"
                  label="Data de nascimento"
                  class="cursor-pointer"
                  color="white"
                  dense
                  :rules="[rules.required]"
                >
                <template v-slot:prepend>
              <q-icon name class = "fas fa-calendar-day"></q-icon>
            </template>
                </q-input>      
            </div>

            
          </div>

        <div class="row justify-center q-mt-md q-gutter-md">
            <div class="col-5">
                <q-input
                  filled
                  name="sex"
                  ref="sex"
                  v-model="person.sexo"
                  label="Sexo "
                  class="cursor-pointer"
                  color="white" 
                  dense
                  :rules="[rules.required]"
                >
                <template v-slot:prepend>
              <q-icon name class = "fas fa-calendar-day"></q-icon>
            </template>
                </q-input>      
            </div>

             <div class="col-5">

                <q-input
                  filled
                  name="cep"
                  ref="cep"
                  v-model="person.cep"
                  label="CEP"
                  class="cursor-pointer"
                  color="white"
                  dense
                  :rules="[rules.required]"
                >
                <template v-slot:prepend>
              <q-icon name class = "fas fa-calendar-day"></q-icon>
            </template>
                </q-input>      
            </div>
        </div>

        <div class="row justify-center q-mt-md q-gutter-md">
            <div class="col-3">
                <q-input
                  filled
                  name="country"
                  ref="country"
                  v-model="person.age"
                  label="País"
                  class="cursor-pointer"
                  color="white"
                  dense
                  :rules="[rules.required]"
                >
                <template v-slot:prepend>
              <q-icon name class = "fas fa-calendar-day"></q-icon>
            </template>
                </q-input>      
            </div>

             <div class="col-3">
                <q-input
                  filled
                  name="state"
                  ref="state"
                  v-model="person.age"
                  label="Estado"
                  class="cursor-pointer"
                  color="white"
                  dense
                  :rules="[rules.required]"
                >
                <template v-slot:prepend>
              <q-icon name class = "fas fa-calendar-day"></q-icon>
            </template>
                </q-input>      
            </div>
            <div class="col-3">
                <q-input
                  filled
                  name="city"
                  ref="city"
                  v-model="person.age"
                  label="Cidade"
                  class="cursor-pointer"
                  color="white"
                  dense
                  :rules="[rules.required]"
                >
                <template v-slot:prepend>
              <q-icon name class = "fas fa-calendar-day"></q-icon>
            </template>
                </q-input>      
            </div>
        </div>
        <div class="row justify-center q-mt-md q-gutter-md">
            <div class="col-4">
                <q-input
                  filled
                  name="ddd"
                  ref="ddd"
                  v-model="person.ddd"
                  label="DDD"
                  class="cursor-pointer"
                  color="white"
                  dense
                  :rules="[rules.required]"
                >
                <template v-slot:prepend>
              <q-icon name class = "fas fa-calendar-day"></q-icon>
            </template>
                </q-input>      
            </div>

             <div class="col-4">

                <q-input
                  filled
                  name="cellphone"
                  ref="cellphone"
                  v-model="person.cellphonenumber"
                  label="Número de telefone"
                  class="cursor-pointer"
                  color="white"
                  dense
                  :rules="[rules.required]"
                >
                <template v-slot:prepend>
              <q-icon name class = "fas fa-calendar-day"></q-icon>
            </template>
                </q-input>      
            </div>
    
        </div>    
          
        </q-card-section>
      </q-card>
    </q-dialog>
    </form>
  </div>
  
</template>
<!-- Fim register 2 -->
      <div class="row justify-center marginToFotter">
        <div>
          <q-btn
            color="white"
            size="sm"
            round
            outline
            icon="fab fa-facebook-f"
            class="animated fadeInLeft delay-1s q-mr-sm"
            href="https://www.facebook.com/konselior/"
            target="_blank"
          ></q-btn>
        </div>

        <div>
          <q-btn
            color="white"
            size="sm"
            round
            outline
            icon="fab fa-linkedin-in"
            class="animated fadeInLeft delay-1s"
            href="https://www.linkedin.com/company/konselior/about/"
            target="_blank"
          ></q-btn>
        </div>

        <div>
          <q-btn
            color="white"
            size="sm"
            round
            outline
            icon="far fa-envelope"
            class="animated fadeInLeft delay-1s q-ml-sm"
            href="http://konselior.com"
            target="_blank"
          ></q-btn>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {

    clear(){
      this.person.name="" , this.person.cpf="", this.person.sex="" , this.person.age="", this.person.mail="",
      this.person.country="", this.person.state="", this.person.city="", this.person.postalcode="",
      this.person.ddd="" ,this.person.cellphonenumber="", this.person.userpic="", this.person.identitypic=""
    },
    resetForm() {
      this.mail = "";
      this.password = "";
      this.repassword = "";
    },
    showNotification(err) {
      if (!err) {
        this.$q.notify({
          message: "User created successfully!",
          icon: "announcement",
          color: "primary"
        });
        this.dialog = true;
        this.resetForm();
      } else if (err.code == "user_exists") {
        this.$q.notify({
          message: "Incorrect user or passoword",
          icon: "announcement",
          color: "primary"
        });
      } else {
        this.$q.notify({
          message: "An error occurred, please try again later.",
          icon: "announcement",
          color: "primary"
        });
      }
    },
    signUp(e) {
      this.$refs.mail.validate();
      this.$refs.pass.validate();
      this.$refs.repass.validate();

      e.preventDefault();
      if (
        this.$refs.mail.hasError ||
        this.$refs.pass.hasError ||
        this.$refs.repass.hasError
      ) {
        return;
      }
      this.$auth.signUp(this.mail, this.password, (err, resp) => {
        this.showNotification(err);
        if (!err) setTimeout(() => this.$router.push("login"), 1000);
      });
    }
  },
  data() {
    return {
      person:{
      name:"" , cpf:"", sex:"" , age:"", mail:"", country:"", state:"", 
      city:"", postalcode:"", ddd:"" ,cellphonenumber:"", userpic:"", identitypic:""
      },
      dialog: false,
      maximizedToggle: true,
      mail: null,
      password: null,
      repassword: null,
      isPwd: true,
      rules: {
        required: value => !!value || "Campo Obrigatorio",
        min: v => (v && v.length >= 8) || "Minimo de 8 caracteres",
        passwordMatches: v => v === this.password || "As senhas não conferem.",
        emailMatch: () => "The email s and password you entered don't match"
      }

    };
  }
};
</script>

<style>
.headerToTop {
  margin-top: 100px;
}
.inputToHeader {
  margin-top: 60px;
}

.marginToFotter {
  margin-top: 110px;
}

#register2{
  color:black;
  background-image : url(https://trello-attachments.s3.amazonaws.com/5e3f2503250c2e1b50dcea6d/5e437ec048b1b627bbbd4cf1/01047d2be1c773f67193b7ec7c3949da/71705888-daf8-4cfc-83e8-7d05bcfe431b_rw_1920.jpg)
}

.loginTitle {
  padding-top: 10px;
  font-size: 45px;
  letter-spacing: 2px;
  background: linear-gradient(90deg, rgba(255,184,140,0.8) 30%, rgba(229,101,144,1) 55%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

#register{
  background: rgb(255,184,140);
  background: linear-gradient(90deg, rgba(255,184,140,1) 0%, rgba(229,101,144,1) 100%); 
  color:whitesmoke;
  width: 25vw;
  height: 7vh;
  font-size:16px
}

html,
body {
  height: 100%;
  overflow-x: hidden;
}
body {
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: left top;
  background-image: url(https://trello-attachments.s3.amazonaws.com/5e3f2503250c2e1b50dcea6d/5e437ec048b1b627bbbd4cf1/39e47323c89cf58079250dcb8dc51867/maxresdefault.jpg);
}
.hiperlinks {
  font-size: 11px;
}

a {
  text-decoration: none;
}

a:visited {
  color: white;
}

a:link {
  color: white;
}
</style>



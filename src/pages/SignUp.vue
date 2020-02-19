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
            @keyup="validateRegisterDataStep1"
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
            @keyup="validateRegisterDataStep1"
            v-model="password"
            :type="isPwd ? 'password' : 'text'"
            placeholder="Senha"
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
            @keyup="validateRegisterDataStep1"
            v-model="repassword"
            :type="isPwd ? 'password' : 'text'"
            placeholder="Confirmar Senha"
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
        <q-btn
          dense
          :disable="!registerDataValidatedStep1"
          id="register"
          class="text-lowercase q-px-md"
          @click="dialog = true"
        >Registrar</q-btn>
      </div>

      <div class="row justify-center q-mt-md hiperlinks text-white">
        <a href="/login" class="q-mr-sm">Já tem uma conta?</a> |
        <a class="q-ml-sm" href="/login/password-recovery">Esqueceu a senha?</a>
      </div>

      <!-- Inicio register 2 -->
      <template>
        <div>
          <form id="login">
            <q-dialog
              v-model="dialog"
              persistent
              :maximized="maximizedToggle"
              transition-show="slide-down"
              transition-hide="slide-up"
            >
              <q-card id="register2" class="text-white">
                <q-card-section class="q-pt-none q-mt-xl q-pt-xl">
                  <div class="text-center text-white">
                    <span class="loginTitle">
                      <strong>TASK</strong>PENGUIN
                    </span>
                    <br />
                    <span class="loginTitle" style="font-size: 17px">Só mais um passo...</span>
                  </div>
                  <div class="row justify-center q-mt-md q-gutter-md">
                    <div class="col-3">
                      <q-input
                        outlined
                        name="name"
                        @keyup="validateRegisterDataStep2"
                        ref="name"
                        v-model="person.name"
                        label="Nome"
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
                    <div class="col-5">
                      <q-input
                        outlined
                        name="lastName"
                        ref="lastName"
                        @keyup="validateRegisterDataStep2"
                        v-model="person.lastName"
                        label="Sobrenome"
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
                    <div class="col-4">
                      <q-input
                        outlined
                        name="cpf"
                        ref="cpf"
                        @keyup="validateRegisterDataStep2"
                        v-model="person.cpf"
                        label="CPF"
                        class="cursor-pointer"
                        color="white"
                        dense
                        :rules="[rules.required]"
                      >
                        <template v-slot:prepend>
                          <q-icon name class="fas fa-id-card"></q-icon>
                        </template>
                      </q-input>
                    </div>
                    <div class="col-4">
                      <q-input
                        outlined
                        name="cnpj"
                        ref="cnpj"
                        @keyup="validateRegisterDataStep2"
                        v-model="person.cnpj"
                        label="CNPJ"
                        class="cursor-pointer"
                        color="white"
                        dense
                        :rules="[rules.required]"
                      >
                        <template v-slot:prepend>
                          <q-icon name class="fas fa-id-card"></q-icon>
                        </template>
                      </q-input>
                    </div>
                  </div>
                  <div class="row justify-center q-mt-md q-gutter-md">
                    <div class="col-1">
                      <q-input
                        outlined
                        name="phoneArea"
                        ref="phoneArea"
                        @keyup="validateRegisterDataStep2"
                        v-model="person.phoneArea"
                        label="DDD"
                        class="cursor-pointer"
                        color="white"
                        dense
                        :rules="[rules.required]"
                      >
                        <template v-slot:prepend>
                          <q-icon name class="fas fa-calendar-day"></q-icon>
                        </template>
                      </q-input>
                    </div>

                    <div class="col-7">
                      <q-input
                        outlined
                        name="phone"
                        ref="phone"
                        @keyup="validateRegisterDataStep2"
                        v-model="person.phone"
                        label="Número de telefone"
                        class="cursor-pointer"
                        color="white"
                        dense
                        :rules="[rules.required]"
                      >
                        <template v-slot:prepend>
                          <q-icon name class="fas fa-calendar-day"></q-icon>
                        </template>
                      </q-input>
                    </div>
                  </div>
                  <div class="row justify-center q-mt-md q-gutter-md">
                    <div class="col-2">
                      <q-btn
                        to="/login"
                        dense
                        type="submit"
                        id="register"
                        class="text-lowercase q-px-md full-width"
                      >Cancelar</q-btn>
                    </div>
                    <div class="col-6">
                      <q-btn
                        :disable="!registerDataValidatedStep2"
                        @click="signUp"
                        dense
                        type="submit"
                        id="register"
                        class="text-lowercase q-px-md full-width"
                      >Registrar</q-btn>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </q-dialog>
          </form>
        </div>
      </template>
    </form>
  </div>
</template>
<script>
import api from "../resources";

export default {
  data() {
    return {
      registerDataValidatedStep1: false,
      registerDataValidatedStep2: false,
      person: {
        email: this.mail,
        password: this.password
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
  },
  methods: {
    validateRegisterDataStep1() {
      if (this.mail && this.password && this.repassword) {
        this.registerDataValidatedStep1 = true;
      } else {
        this.registerDataValidatedStep1 = false;
      }
    },
    validateRegisterDataStep2() {
      if (
        this.person.name &&
        this.person.cpf &&
        this.person.cnpj &&
        this.person.phoneArea &&
        this.person.phone
      ) {
        this.registerDataValidatedStep2 = true;
      } else {
        this.registerDataValidatedStep1 = false;
      }
    },
    resetRegisterStep2() {
      this.person.name = "";
      this.person.cpf = "";
      this.person.cnpj = "";
      this.person.phoneArea = "";
      this.person.phone = "";
    },
    resetForm() {
      this.mail = "";
      this.password = "";
      this.repassword = "";
      this.resetRegisterStep2();
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
    async signUp(e) {
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
        api.person.create(this.person);
        this.$auth.signUp(this.mail, this.password, (err, resp) => {
          this.showNotification(err);
          if (!err) setTimeout(() => this.$router.push("login"), 1000);
        });
    }
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

#register2 {
  color: black;
  background-image: url(https://trello-attachments.s3.amazonaws.com/5e3f2503250c2e1b50dcea6d/5e437ec048b1b627bbbd4cf1/01047d2be1c773f67193b7ec7c3949da/71705888-daf8-4cfc-83e8-7d05bcfe431b_rw_1920.jpg);
}

.loginTitle {
  padding-top: 10px;
  font-size: 45px;
  letter-spacing: 2px;
  background: linear-gradient(
    90deg,
    rgba(255, 184, 140, 0.8) 30%,
    rgba(229, 101, 144, 1) 55%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

#register {
  background: rgb(255, 184, 140);
  background: linear-gradient(
    90deg,
    rgba(255, 184, 140, 1) 0%,
    rgba(229, 101, 144, 1) 100%
  );
  color: whitesmoke;
  width: 25vw;
  height: 7vh;
  font-size: 16px;
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



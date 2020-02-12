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
            rounded
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
            rounded
            name="pass"
            ref="pass"
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
            rounded
            name="repass"
            ref="repass"
            v-model="repassword"
            :type="isPwd ? 'password' : 'text'"
            placeholder="Confirme sua Senha"
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
          outline
          rounded
          dense
          color="white"
          type="submit"
          id="register"
          class="text-lowercase q-px-md"
        >Registrar</q-btn>
      </div>

      <div class="row justify-center q-mt-md hiperlinks text-white">
        <a href="/login" class="q-mr-sm">Ja possui Login?</a> |
        <a class="q-ml-sm" href="/login/password-recovery">Esqueceu a senha?</a>
      </div>

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
    resetForm() {
      this.mail = "";
      this.password = "";
      this.repassword = "";
    },
    showNotification(err) {
      if (!err) {
        this.$q.notify({
          message: "Usuário criado com sucesso!",
          icon: "announcement",
          color: "primary"
        });
        this.resetForm();
      } else if (err.code == "user_exists") {
        this.$q.notify({
          message: "Usuário já existe, tente outro usuário ou realize o login.",
          icon: "announcement",
          color: "primary"
        });
      } else {
        console.error("Unknown error", err);
        this.$q.notify({
          message: "Ocorreu um erro, por favor tente novamente mais tarde.",
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

.loginTitle {
  padding-top: 10px;
  font-size: 45px;
  letter-spacing: 2px;
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
  background-image: url(https://www.itl.cat/pngfile/big/37-372787_hd-flat-design-wallpaper-full-hd.jpg  );
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



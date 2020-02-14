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
        <q-btn 
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
      
      
      <template>
  <div class="q-pa-md q-gutter-sm">
    

    <q-dialog
      v-model="dialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-primary text-white">
        <q-bar>
          <q-space />

          
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
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



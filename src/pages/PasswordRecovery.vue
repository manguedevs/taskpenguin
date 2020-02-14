<template>
  <div>
    <form id="login" @submit="forgotPassword">
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
        <q-btn
          dense
          type="submit"
          id="continue"
          class="text-lowercase q-px-md"
        >Continue</q-btn>
      </div>

      <div class="row justify-center q-mt-md hiperlinks text-white">
        <a href="/login" class="q-mr-sm">Already have Login?</a> |
        <a class="q-ml-sm" href="/login/signup">Register</a>
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
    },
    showNotification(err) {
      if (!err) {
        this.$q.notify({
          message: "Um e-mail foi enviado para sua caixa de mensagem.",
          icon: "announcement",
          color: "primary"
        });
      } else {
        this.$q.notify({
          message: "Ocorreu um erro, por favor tente novamente mais tarde.",
          icon: "announcement",
          color: "primary"
        });
      }
    },
    forgotPassword(e) {
      this.$refs.mail.validate();

      if (this.$refs.mail.hasError) {
        return;
      }

      e.preventDefault();
      this.$auth.forgotPassword(this.mail, (err, resp) => {
        if (err) {
          this.showNotification(err);
        } else {
          this.resetForm();
          this.showNotification();
        }
      });
    }
  },
  data() {
    return {
      mail: null,
      rules: {
        required: value => !!value || "Campo Obrigatorio"
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

#continue{
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



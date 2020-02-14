<template>
  <div>
    <form id="login" @submit="login">
    <div class="text-center text-white headerToTop">
      <span class="loginTitle">
        <strong>TASK</strong>PENGUIN
      </span>
    </div>

    <div class="row justify-center inputToHeader">
      <div class="col-8 col-lg-3">
        <q-input
          outlined
          name="user"
          ref="user"
          v-model="user"
          placeholder="Name"
          class="cursor-pointer user"
          color="white"
          dark
          dense
          clearable
          clear-icon="close"
          :rules="[rules.required]"
        >
          <template v-slot:prepend>
            <q-icon name="person" />
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
          :rules="[rules.required, rules.min]"
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
          id="enter"
          class="text-lowercase q-px-md">Login</q-btn
      >
    </div>

    <div class="row justify-center q-mt-md hiperlinks text-white">
      <a href="/login/password-recovery" class="q-mr-sm">Forgot password?</a> |
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
          href="#"
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
          href="#"
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
          href="#"
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
    limparForm(){
      this.password = ""
    },
    showNotification (status) {
      if(status == "invalid_grant"){
        this.$q.notify({
        message: 'Incorrect user or password',
        icon: 'announcement',
        color: 'primary'
      })
      }
      else {
        this.$q.notify({
        message: 'An error occurred, please try again later.',
        icon: 'announcement',
        color: 'primary'
      })
      }
      
    },
    login(e) {
      this.$refs.user.validate()
      this.$refs.pass.validate()
      e.preventDefault();
      if (this.$refs.user.hasError || this.$refs.pass.hasError) {
        return;
      }
      
      //this.loading = true;
      this.$auth.newLogin(this.user, this.password, err => {
        if (err && err.code == "invalid_grant") {
          this.showNotification(err.code)
          console.log("Error", err);
        } else if (err) {
          this.showNotification(err.code)
          console.log("Error", err);
        }
        //this.loading = false;
      });
    }
  },
  data() {
    return {
      user: null,
      password: null,
      isPwd: true,
      rules: {
        required: value => !!value || "Required field",
        min: v => (v && v.length >= 8) || "Minimum of 8 characters"
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

.marginToFotter{
  margin-top: 110px
}

.loginTitle {
  padding-top: 10px;
  font-size: 45px;
  letter-spacing: 2px;
  background: linear-gradient(90deg, rgba(255,184,140,0.8) 30%, rgba(229,101,144,1) 55%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
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
#enter{
  background: rgb(255,184,140);
  background: linear-gradient(90deg, rgba(255,184,140,1) 0%, rgba(229,101,144,1) 100%); 
  color:whitesmoke;
  width: 25vw;
  height: 7vh;
  font-size:16px
}
</style>



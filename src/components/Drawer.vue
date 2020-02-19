<template>
  <div>
    <q-drawer show-if-above :width="250" :breakpoint="0">
      <q-list
        exact-active-class="activeLink"
        class="items"
        style="background-color:#191F28;height: 100%;border-right: 1px solid #bbb; color:#B6B6B7"
      >
        <q-item class="q-pt-md q-pb-md" style="color:white">
          <div class="row" style="margin-left:-0.5vw; height:100px">
            <div class="col-12 text-center">
              <span class="loginTitle drawerTitle" style>
                <strong>TASK</strong>PENGUIN
              </span>
              <br />
              <q-avatar size="84px" color="teal-2">
                <img src="https://static.thenounproject.com/png/48550-200.png" />
              </q-avatar>
            </div>
            <div class="text-center q-pt-sm text-subtitle1 full-width">
                <b>{{ user.nickname }}</b>
                <br />
                {{ user.name }}
            </div>
          </div>
        </q-item>

        <!-- <q-item
          active-class="activeLink"
          class="drawerItems row q-mt-xl q-pt-md"
          v-ripple
          to="/home"
          style=" margin-top: 70px"
          clickable
        >
          <span class="q-ml-md">
            <q-icon class="q-mr-sm" name="fas fa-chart-bar" />Informações
          </span>
        </q-item> -->

        <q-item
          active-class="activeLink"
          class="drawerItems row q-mt-xl q-pt-md"
          v-ripple
          to="/bills"
          style=" margin-top: 70px"
          clickable
        >
          <span class="q-ml-md">
            <q-icon class="q-mr-sm" name="fas fa-envelope" />Lista de faturas
          </span>
        </q-item>

        <q-item
          active-class="activeLink"
          class="drawerItems row q-pt-md"
          v-ripple
          to="/bills/report"
          clickable
        >
          <span class="q-ml-md">
            <q-icon style class="q-mr-sm" name="fas fa-file-export" />Extrato
          </span>
        </q-item>

        <q-item
          active-class="activeLink"
          class="drawerItems row q-pt-md"
          v-ripple
          to="/account"
          clickable
        >
          <span class="q-ml-md">
            <q-icon class="q-mr-sm" name="fas fa-user-cog" />Dados cadastrais
          </span>
        </q-item>

        <q-item
          active-class="activeLink"
          class="drawerItems row q-pt-md"
          v-ripple
          to="/faq"
          clickable
        >
          <span class="q-ml-md">
            <q-icon class="q-mr-sm" name="fas fa-question-circle" />FAQ
          </span>
        </q-item>

        <q-item
          active-class="activeLink"
          class="drawerItems absolute-bottom row q-pt-md"
          v-ripple
          @click="logout"
          clickable
        >
          <span class="q-ml-md">
            <q-icon class="q-mr-sm" name="fas fa-sign-out-alt" style="transform: rotate(180deg)" />Sign out
          </span>
        </q-item>
      </q-list>
    </q-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: this.$auth.user
    };
  },
  methods: {
    logout() {
      this.$auth.logout();
    }
  }
};
</script>

<style lang="scss">
.drawerTitle {
  font-size: 22px;
  background: linear-gradient(
    90deg,
    rgba(255, 184, 140, 0.8) 30%,
    rgba(229, 101, 144, 1) 75%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.drawerItems {
  font-size: 15px;
  height: 50px;
}
</style>
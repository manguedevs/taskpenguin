<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar style="height:9vh">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="drawer = !drawer"
        />

        <q-toolbar-title>
          <span class="loginTitle">
            <strong>TASK</strong>PENGUIN
          </span>
      </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="600">
      <q-list style="height: 100%;border-right: 1px solid #bbb">
        <q-item class="q-mb-sm" style="height:21vh">
          <q-img
            class="absolute-top"
            src="https://cdn.quasar.dev/img/material.png"
            style="height: 150px"
          >
            <div class="absolute-bottom bg-transparent">
              <q-avatar size="64px" class="q-mb-sm q-ml-xl" color="teal-2">
                <img
                  src="https://static.thenounproject.com/png/48550-200.png"
                />
              </q-avatar>
              <div class="text-weight-bold">Jorge Ogrande</div>
              <div>jorge@ogrande.com</div>
            </div>
          </q-img>
        </q-item>
        <q-item v-ripple to="/" clickable>
          <q-item-section avatar>
            <q-icon name="fas fa-money-check-alt" />
          </q-item-section>
          <q-item-section>Home</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <div class="text-right">  
      <span class="loginTitle">
            <strong>TASK</strong>PENGUIN &copy; 2019
      </span>
  </div>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",

  data() {
    return {
      drawer: false
    };
  }
};
</script>

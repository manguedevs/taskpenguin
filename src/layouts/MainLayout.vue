<template>
  <q-layout view="lHh Lpr lFf">

    <t-header/>
    
    <q-page-container>
      <router-view />
    </q-page-container>
    <t-footer />
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

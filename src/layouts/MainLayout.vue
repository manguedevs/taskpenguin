<template>
  <q-layout view="lHh Lpr lFf" style="overflow: hidden;">
    <div class="backg absolute-top"></div>

    <t-header/>
    <q-page-container>
      <router-view />
    </q-page-container>
    <t-penguin/>
    <t-footer id="footer" />
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

<style lang="scss">
.backg{
  height: 100%;
  width: 100vw;
  background-image:url("https://trello-attachments.s3.amazonaws.com/5e3f2503250c2e1b50dcea6d/5e437ec048b1b627bbbd4cf1/01047d2be1c773f67193b7ec7c3949da/71705888-daf8-4cfc-83e8-7d05bcfe431b_rw_1920.jpg");
  background-size: cover;
  filter: blur(2px);
  z-index: -1;
}

#footer{
  font-size: 16px;
  z-index: 50;
  color: white;
  margin-top: 11vh;
}

</style>
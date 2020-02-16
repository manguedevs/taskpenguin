<template>
  <q-layout view="lHh Lpr lFf" style="overflow: hidden;">
    <div class="backg absolute-top"></div>

    <t-drawer/>
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
  background-color:#F8F9FA;
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

.activeLink{
  color:#F8F9FA;
  background: linear-gradient(90deg, rgba(255,184,140,0.6) 0%, rgba(229,101,144,0.0) 100%);
  background-size: 30% 100%;
  background-repeat: no-repeat;
  border-radius: 2px;
}

.activeLink{
  i{
    background: rgb(255,184,140);
    background: linear-gradient(90deg, rgba(255,184,140,1) 0%, rgba(248,161,141,1) 45%, rgba(229,101,144,1) 100%); 
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.gradientBtn{
  font-size:15px;
  height:6vh; 
  width:10vw;
  background: rgb(255,184,140);
  background: linear-gradient(90deg, rgba(255,184,140,1) 0%, rgba(229,101,144,1) 100%); 
  color:whitesmoke
}

</style>
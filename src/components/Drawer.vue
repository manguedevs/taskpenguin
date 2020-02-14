<template>
    <div>
        <q-drawer
            v-model="menu"
            show-if-above
            :width="230"
            :breakpoint="600"
        >
            <q-list style="background-color:#EFEEEE;height: 100%;border-right: 1px solid #bbb; color:white">
            <q-item class="q-pt-md" style="background-color:#305F72">
                <div class="row" style="margin-left:-0.5vw; height:100px">
                    <div class="col-3">
                    <q-avatar size="56px" class="" color="teal-2">
                    <img
                        src="https://static.thenounproject.com/png/48550-200.png"
                    />
                    </q-avatar>
                    </div>
                    <div class="col-6 q-ml-md q-mt-sm">
                        <b>Jorge Ogrande</b>
                        jorge@ogrande.com
                    </div>
                </div>
            </q-item>
            <q-item v-ripple to="/" clickable>
                <q-item-section avatar>
                <q-icon name="fas fa-money-check-alt" />
                </q-item-section>
                <q-item-section>Home</q-item-section>
            </q-item>
            </q-list>
        </q-drawer>
    </div>
</template>

<script>

  export default {
      props:{menu:Boolean},
  }
</script>
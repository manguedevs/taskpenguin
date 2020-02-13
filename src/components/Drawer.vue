<template>
    <div>
        <q-drawer v-model="menu" show-if-above :width="200" :breakpoint="600">
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
    </div>
</template>

<script>

  export default {
      props:{menu:Boolean},
  }
</script>
<template>
    <div>
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
        <t-drawer :menu="drawer"/>
    </div>
</template>

<script>
export default {
    data(){
        return{
            drawer:true
        }
    },
    methods: {
        a(){
            console.log(this.drawer);
            this.drawer = !this.drawer
        }
    }
}
</script>
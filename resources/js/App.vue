<template>
    <div>
        <headerTop/>
        <router-view></router-view>
        <SuccessModal></SuccessModal>
    </div>
</template>

<script>
import SuccessModal from './components/_success_alert'
import headerTop from "./components/inc/header_top";
export default {
    name: "App.vue",
    components: {
        SuccessModal,
        headerTop
    },


}
</script>

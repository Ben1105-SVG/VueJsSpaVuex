<template>
<div class="alert-parent">
    <b-alert
        :show="dismissCountDown"
        dismissible
        variant="success"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
        @close="false"
    >
        <p class="success_message">{{ message }}</p>
    </b-alert>
</div>
</template>

<script>
export default {
    name: "success_modal",
    data() {
        return {
            dismissSecs: 5,
            dismissCountDown: 0,
            showDismissibleAlert: false,
            message: false
        }
    },
    methods: {
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        },
        showAlert() {
            this.dismissCountDown = this.dismissSecs
        },
    },
    mounted() {
        this.$root.$on('successCheck', (data) => {
            this.message = data.message
            this.showAlert()
        })
    },

}
</script>

<style scoped>
.alert-parent{
    position: fixed;
    bottom: 30px;
    right: 30px;
}
.success_message{
    font-size: 20px;
    padding: 13px 48px;
    color: #fff;
    margin: 0 auto;
}
</style>

<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="grid align__item">

                <div class="register">

                    <svg xmlns="http://www.w3.org/2000/svg" class="site__logo" width="56" height="84" viewBox="77.7 214.9 274.7 412"><defs><linearGradient id="a" x1="0%" y1="0%" y2="0%"><stop offset="0%" stop-color="#8ceabb"/><stop offset="100%" stop-color="#378f7b"/></linearGradient></defs><path fill="url(#a)" d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z"/></svg>

                    <h2>Sign Up</h2>

                    <form method="post"  @submit.prevent="send_form" class="form">
                        <div class="form__field">
                            <input type="text" name="username" value="" v-model="form_fields.username"  placeholder="Username">
                        </div>
                        <div class="form__field" v-show="errors.username">
                              <input type="text" disabled :value=" errors.username" class="bg-danger">
                        </div>

                        <div class="form__field">
                            <input type="text" name="phone" value="" v-model="form_fields.phone" placeholder="Phone">
                        </div>
                        <div class="form__field" v-show="errors.phone">
                            <input type="text" disabled :value=" errors.phone" class="bg-danger">
                        </div>

                        <div class="form__field">
                            <input type="email" name="email" value="" v-model="form_fields.email" placeholder="info@mailaddress.com">
                        </div>
                        <div class="form__field" v-show="errors.email">
                            <input type="text" disabled :value=" errors.email" class="bg-danger">
                        </div>

                        <div class="form__field">
                            <input type="password" name="password" value="" v-model="form_fields.password" placeholder="•••••••••">
                        </div>
                        <div class="form__field" v-show="errors.password">
                            <input type="text" disabled :value=" errors.password" class="bg-danger">
                        </div>

                        <div class="form__field">
                            <input type="password" name="password_confirmation" v-model="form_fields.password_confirmation" placeholder="•••••••••">
                        </div>
                        <div class="form__field">
                            <input type="submit" value="Sign Up">
                        </div>

                    </form>

                    <p>Already have an accout? <router-link to="/">Log in</router-link></p>

                </div>

            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "Register",
    data(){
        return{
            form_fields: {
                username: '',
                email: '',
                phone: '',
                password: '',
                password_confirmation: ''
            },
            success: false,
            errors: []
        }
    },
    methods:{
        send_form(){
            this.$store.dispatch('registration_form_submit',this.form_fields).then((response)=>{
                this.success = response
                this.$router.push({name:'login',params:response})
            }).catch((error)=>{
                this.errors = error
            })
        }
    },
}
</script>

<style scoped>

</style>

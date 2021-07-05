<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="grid align__item">
                <div class="register">

<!--                    <div class="alert-success">-->
<!--                        <p>-->
<!--                            Congratulations you have successfully registered-->
<!--                        </p>-->
<!--                    </div>-->
                    <svg xmlns="http://www.w3.org/2000/svg" class="site__logo" width="56" height="84" viewBox="77.7 214.9 274.7 412"><defs><linearGradient id="a" x1="0%" y1="0%" y2="0%"><stop offset="0%" stop-color="#8ceabb"/><stop offset="100%" stop-color="#378f7b"/></linearGradient></defs><path fill="url(#a)" d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z"/></svg>
                    <h2>Sign In</h2>
                    <form action="" method="post" class="form"  @submit.prevent="">
                        <div class="form__field">
                            <input type="email" name="email" placeholder="info@mailaddress.com">
                        </div>
                        <div class="form__field">
                            <input type="password" name="password" placeholder="•••••••••">
                        </div>
                        <div class="form__field">
                            <input type="submit" value="Sign in">
                        </div>
                    </form>
                    <p>Don't have an accout? <router-link to="/register">Register account</router-link></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {

            }
        },
        methods:{
            form_submit() {
                this.$store.dispatch('')
            }
        }
    }
</script>

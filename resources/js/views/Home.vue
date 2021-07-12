<template>
<div class="container big_conteiner">
    <section class="profile">
    <header class="header">
        <div class="details">
            <img :src="`storage/avatars/${get_auth_user.avatar}`" alt="John Doe" class="profile-pic">
            <h1 class="heading"><span>@</span> {{ get_auth_user.username }}</h1>
            <div class="stats">
                <div class="col-5">
                    <h4>Phone</h4>
                    <p>+374 {{ get_auth_user.phone}}</p>
                </div>
                <div class="col-5">
                    <h4>Gender</h4>
                    <p>{{ get_auth_user.gender}}</p>
                </div>
                <div class="col-5">
                    <h4>Localion</h4>
                    <p>{{ get_auth_user.locality }}</p>
                </div>
                <div class="col-5">
                    <h4>Email</h4>
                    <p> {{ get_auth_user.email}}</p>
                </div>
            </div>
                <div class="col-12 w-100">
                    <h4>About</h4>
                    <p> {{ get_auth_user.about }}</p>
                </div>
        </div>
    </header>
        <div class="main">
            <div class="container ">
                <div class="row edit_profile">
                    <form @submit.prevent="UpdateProfile">
                        <div class="form-row">
                            <div class="col-md-4 mb-3">
                                <label for="validationServerUsername">Username</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroupPrepend3">@</span>
                                    </div>
                                    <input type="text" class="form-control " id="validationServerUsername" v-model="get_auth_user.username " name="username" placeholder="Username" aria-describedby="inputGroupPrepend3" >
                                </div>
                                <div class="form__field" v-show="errors.username">
                                    <input type="text" disabled :value=" errors.username" class="bg-danger">
                                </div>
                            </div>

                            <div class="col-md-4 mb-3">
                                <label for="validationServerUsername">Email</label>
                                <div class="input-group">
                                    <input type="text" class="form-control " id="validationServerEmail" v-model="get_auth_user.email" name="email" placeholder="Username" aria-describedby="inputGroupPrepend3" >
                                </div>
                                <div class="form__field" v-show="errors.email">
                                    <input type="text" disabled :value=" errors.email" class="bg-danger">
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="validationServerUsername">Phone</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroupPrepend@phone">+374</span>
                                    </div>
                                    <input type="text" class="form-control " id="validationServerPhone" v-model="get_auth_user.phone" placeholder="Phone" name="phone"  aria-describedby="inputGroupPrepend3" >
                                </div>
                                <div class="form__field" v-show="errors.phone">
                                    <input type="text" disabled :value=" errors.phone" class="bg-danger">
                                </div>
                            </div>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gender" id="exampleRadios2" v-model="get_auth_user.gender" value="Female">
                            <label class="form-check-label p-l-5" for="exampleRadios2">
                                Female
                            </label>
                            <input class="form-check-input" type="radio" name="gender" id="exampleRadios1" v-model="get_auth_user.gender" value="Male" checked>
                            <label class="form-check-label" for="exampleRadios1">
                                Male
                            </label>
                        </div>
                        <div class="form-row">
                            <div class="col-md-6 mb-3">
                                <label for="validationServer03">Locality</label>
                                <input type="text" class="form-control " id="validationServer03" placeholder="City" v-model="get_auth_user.locality" name="locality">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">About me</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" v-model="get_auth_user.about" name="about" rows="3"></textarea>
                        </div>
                        <div class="form-group">
                            <div class="input-group mb-3">
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" name="avatar" @change="changeAvatar($event)" id="inputGroupFile01">
                                    <label class="custom-file-label" for="inputGroupFile01">Choose image</label>
                                </div>
                            </div>
                        </div>
                        <button class="btn  btn_submit_form" type="submit">Save details</button>
                    </form>
                </div>
            </div>
        </div>
</section>

</div>

</template>

<script>
export default {
    name: "Home",
    data(){
        return {
            success: false,
            errors: {},
            form_fields: {
                // avatar:'',
                username: '',
                email: '',
                phone: '',
                about: '',
                locality: '',
                gender: '',
            }
        }
    },
    computed:{
        get_auth_user(){
            return {...this.$store.getters['User/get_auth_user']}
        },
        get_errors(){
            return {...this.$store.getters['User/get_errors']}
        },
    },
    watch:{
        get_errors(){
            this.errors = this.get_errors
        }
    },
    methods:{
        changeAvatar(event){
           let file =  event.target.files[0]
             this.form_fields.avatar = file;
        },
        UpdateProfile(){
            var username = this.get_auth_user.username
            const form_data = new FormData()
            form_data.append('username',username)
            form_data.append('email', this.get_auth_user.email)
            form_data.append('phone', this.get_auth_user.phone)
            form_data.append('about', this.get_auth_user.about)
            form_data.append('locality', this.get_auth_user.locality)
            form_data.append('gender', this.get_auth_user.gender)
            form_data.append('avatar', this.form_fields.avatar)
            this.$store.dispatch('User/update_profile',form_data).then(()=>{
                this.errors = {}
                this.$store.dispatch('User/get_user_data')
                this.success = true
                this.$root.$emit('successCheck',{message:"Your profile has been successfully updated"});
            })
        }
    },
}
</script>
<style scoped>
form{
    width: 100%;
}
b{
    color: white;
    font-size: 25px!important;
}
/*.card {*/
/*    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);*/
/*    max-width: 300px;*/
/*    margin: auto;*/
/*    text-align: center;*/
/*}*/

/*.title {*/
/*    color: grey;*/
/*    font-size: 18px;*/
/*}*/

/*button {*/
/*    border: none;*/
/*    outline: 0;*/
/*    display: inline-block;*/
/*    padding: 8px;*/
/*    color: white;*/
/*    background-color: #000;*/
/*    text-align: center;*/
/*    cursor: pointer;*/
/*    width: 100%;*/
/*    font-size: 18px;*/
/*}*/

/*a {*/
/*    text-decoration: none;*/
/*    font-size: 22px;*/
/*    color: black;*/
/*}*/

/*button:hover, a:hover {*/
/*    opacity: 0.7;*/
/*}*/
</style>

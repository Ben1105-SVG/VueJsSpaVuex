<template>
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
</template>

<script>
export default {
    name: "EditProfile",
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

}
</script>
<style scoped>
form{
    width: 100%;
}
.imgParent{
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    border: 2px solid #fff;
    margin: 0 auto
;
}
.imgParent img{
    border-radius: 50%;
    border: unset;
    width: 100%;
    height: 100%;
}
.custom-file-label::after{
    background: #43C6AC;
    background: -webkit-linear-gradient(to right, #F8FFAE, #43C6AC);
    background: linear-gradient(to right, #F8FFAE, #43C6AC);
}
.input-group-text{
    background: #43C6AC;
    background: -webkit-linear-gradient(to right, #F8FFAE, #43C6AC);
    background: linear-gradient(to right, #F8FFAE, #43C6AC);
}
input[type=text],input[type=password],imput[type=email],textarea{
    border-color: #43C6AC
}
b{
    color: white;
    font-size: 25px!important;
}
</style>

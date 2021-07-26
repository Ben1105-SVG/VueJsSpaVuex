<template>
    <div class="details">
        <div class="imgParent">
            <img :src="`storage/avatars/${get_auth_user.avatar}`" alt="John Doe" class="profile-pic">
        </div>
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
</template>

<script>
export default {
    name: "userDetails",
    computed:{
        get_auth_user(){
            return {...this.$store.getters['User/get_auth_user']}
        }
    },
}
</script>

<style scoped>

</style>

<template>
    <div>
        <b-navbar  toggleable="lg" type="dark">
            <b-navbar-brand > <router-link class="route-link" to="/home">Home</router-link></b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <router-link class="route-link nav-item nav-link" to="/posts/all">All Posts</router-link>
                    <router-link class="route-link nav-item nav-link" to="/posts">My Posts</router-link>
                    <router-link class="route-link nav-item nav-link" to="/posts/add">Add Post</router-link>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown text="Lang" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template #button-content>
                            <em>User</em>
                        </template>
                        <b-dropdown-item @click="logOut">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: "header-top",
    created(){
        this.$store.dispatch('User/get_user_data');
    },
    methods:{
        logOut(){
            this.$store.dispatch('log_out').then(()=>{
                this.$router.push('/')
            });
        },
    }
}
</script>
<style scoped>
.navbar{
    background-color: peru;
    padding-bottom: 20px;
}
.route-link{
    color:inherit;
    text-decoration:unset
}
</style>

<template>
    <div>
        <b-navbar  toggleable="lg" type="dark" v-if="user_token">
            <b-navbar-brand > <router-link class="route-link" to="/">Home</router-link></b-navbar-brand>

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
        <b-navbar  toggleable="lg" type="dark" v-else>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <router-link class="route-link nav-item nav-link" to="/register">Registration</router-link>
                    <router-link class="route-link nav-item nav-link" to="/login">Login</router-link>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown text="Lang" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
    name: "header-top",
    data(){
        return{
             user_token : false
        }
    },
    watch:{
        $route (to, from){
            this.user_token = Cookies.get('user_token') ?true :false
        }
    },
    mounted() {
        this.$store.dispatch('User/get_user_data');
    },
    methods:{
        logOut(){
            this.$store.dispatch('log_out').then(()=>{
                this.$router.push('/login')
            });
        },
    }
}
</script>
<style scoped>
.navbar{
    background: #43C6AC;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #F8FFAE, #43C6AC);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #F8FFAE, #43C6AC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */;
    padding-bottom: 20px;
}
.route-link{
    color:inherit;
    text-decoration:unset
}
</style>

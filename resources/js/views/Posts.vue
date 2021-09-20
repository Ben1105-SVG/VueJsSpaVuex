<template>
    <Posts
        :posts="get_all_posts"
        :title="'My posts'"
        :type="'by_user'"
    ></Posts>
</template>

<script>
import Posts from "../components/Posts";

export default {
    name: "my-posts",
    computed: {
        get_all_posts() {
            return {...this.$store.getters['Post/get_posts_by_user_id_']}
        },
    },
    created() {
        this.$store.dispatch('Post/get_posts_by_user_id');
    },
    components:{
        Posts
    }
}

</script>

<style scoped>
h2{
    text-align: center;
    padding: 25px 0;
}
</style>

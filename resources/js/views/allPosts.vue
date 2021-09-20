<template>
    <Posts
        :posts="get_all_posts"
        :title="'All posts'"
        :type="'all'"
    ></Posts>
</template>

<script>
import Posts from "../components/Posts";

export default {
    name: "all-posts",
    computed: {
        get_all_posts() {
            return {...this.$store.getters['Post/get_all_posts']}
        },
    },
    created() {
        this.$store.dispatch('Post/get_all_posts');
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

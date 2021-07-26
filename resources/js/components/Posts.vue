<template>
    <section class="posts-wrapper" v-if="checkLength(posts)">
        <h2>{{ title }}</h2>
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col post-card" v-for="post in posts" :key="post.id">
                <div class="card">
                    <img :src="`../storage/Post-avatars/${post.image}`" class="card-img-top" alt="...">
                    <p class="card-text">
                        {{  post.content }}
                    </p>
                    <div class="card-body">
                        <div class="change_post"  v-if="get_auth_user.id === post.user_id" >
                            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M 18.414062 2 C 18.158062 2 17.902031 2.0979687 17.707031 2.2929688 L 15.707031 4.2929688 L 14.292969 5.7070312 L 3 17 L 3 21 L 7 21 L 21.707031 6.2929688 C 22.098031 5.9019687 22.098031 5.2689063 21.707031 4.8789062 L 19.121094 2.2929688 C 18.926094 2.0979687 18.670063 2 18.414062 2 z M 18.414062 4.4140625 L 19.585938 5.5859375 L 18.292969 6.8789062 L 17.121094 5.7070312 L 18.414062 4.4140625 z M 15.707031 7.1210938 L 16.878906 8.2929688 L 6.171875 19 L 5 19 L 5 17.828125 L 15.707031 7.1210938 z"/></svg>
                            <svg height="19" @click="destroy_post(post.id)" viewBox="0 0 511.992 511.992" width="19" xmlns="http://www.w3.org/2000/svg"><path d="m415.402344 495.421875-159.40625-159.410156-159.40625 159.410156c-22.097656 22.09375-57.921875 22.09375-80.019532 0-22.09375-22.097656-22.09375-57.921875 0-80.019531l159.410157-159.40625-159.410157-159.40625c-22.09375-22.097656-22.09375-57.921875 0-80.019532 22.097657-22.09375 57.921876-22.09375 80.019532 0l159.40625 159.410157 159.40625-159.410157c22.097656-22.09375 57.921875-22.09375 80.019531 0 22.09375 22.097657 22.09375 57.921876 0 80.019532l-159.410156 159.40625 159.410156 159.40625c22.09375 22.097656 22.09375 57.921875 0 80.019531-22.097656 22.09375-57.921875 22.09375-80.019531 0zm0 0" fill="#e76e54"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section v-else>
        <h2> Posts not found</h2>
    </section>
</template>

<script>
export default {
    name: "Posts",
    data(){
        return{
            change: false
        }
    },
    props: {
        posts: {
            required: true
        },
        title: {
            required: true
        },
        type:{
            required:true
        }
    },
    methods:{
        checkLength(obj){
           return Object.keys(obj).length > 0 ? true : false
        },
        activate_change(){
            this.change = true
        },
        destroy_post(id){
            this.$store.dispatch('Post/destroy',id).then(()=>{
                if (this.type === 'all'){
                    this.$store.dispatch('Post/get_all_posts').then(()=>{
                    })
                }else if(this.type === 'by_user'){
                    this.$store.dispatch('Post/get_posts_by_user_id').then(()=>{
                    });
                }

            })
        },
        updatePost(data){
            this.$store.dispatch('Post/update_post',data).then(()=>{
                this.$root.$emit('successCheck',{message:'Your post is successfully updated'});
                this.change = false
            })
        },
    },
    computed:{
        get_auth_user() {
            return {...this.$store.getters['User/get_auth_user']}
        },
    }
}
</script>


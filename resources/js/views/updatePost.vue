<template>
    <div class="container">
    <section class="posts-wrapper">
        <h2>My Posts</h2>
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col post-card">
                <div class="card">
                    <img :src="`/storage/Post-avatars/${ get_specified_post.image }`" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p>{{ get_specified_post.content }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="posts">
        <h2>Update Post</h2>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="form-cont">
                        <label for="textarea_post">
                            Post content
                            <textarea name="" id="textarea_post" v-model="get_specified_post.content"></textarea>
                            <div class="form__field" v-show="postErrors.content">
                                <input type="text" disabled :value="postErrors.content" class="bg-danger">
                            </div>
                        </label>
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" name="avatar" @change="PostImage" id="inputGroupFile00">
                            <div class="form__field" v-show="postErrors.image">
                                <input type="text" disabled :value="postErrors.image" class="bg-danger">
                            </div>
                            <label class="custom-file-label" for="inputGroupFile00">Choose image</label>
                        </div>
                        <button class="add_post" @click.prevent="updatePost(get_specified_post)">Add post</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>

<script>
export default {
    name: "addPost",
    data() {
        return {
            postErrors: {},
            post: {
                content: '',
                image: {},
                user_id: ''
            },
        }
    },
    computed: {
        get_post_errors() {
            return {...this.$store.getters['Post/get_all_errors']}
        },
        get_auth_user() {
            return {...this.$store.getters['User/get_auth_user']}
        },
        get_specified_post() {
            return {...this.$store.getters['Post/get_specified_post'].data}
        }
    },
    mounted() {
        this.$store.dispatch('Post/post_show',this.$route.params.id).then((response)=>{
            console.log(this.get_specified_post)
        })
    },
    created() {
        this.post.user_id = this.get_auth_user.id
    },
    methods:{
        PostImage(event){
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = () => {
                this.post.image = reader.result;
            }
        },
        updatePost(data){
            this.$store.dispatch('Post/update_post',data).then(()=>{
                this.$root.$emit('successCheck',{message:'Your post is successfully updated'});
            })
        },
    }
}
</script>

<style scoped>

</style>

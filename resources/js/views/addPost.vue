<template>
    <section class="posts">
        <h2>Add Posts</h2>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="form-cont">
                        <label for="textarea_post">
                            Post content
                            <textarea name="" id="textarea_post" v-model="post.content"></textarea>
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
                        <button class="add_post" @click.prevent="addPost">Add post</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
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
            }
        }
    },
    computed: {
        get_post_errors() {
            return {...this.$store.getters['Post/get_all_errors']}
        },
        get_auth_user() {
            return {...this.$store.getters['User/get_auth_user']}
        },
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

        addPost(){
            this.$store.dispatch('Post/add_post',this.post).then(()=>{
                this.$root.$emit('successCheck',{message:'Your post added'});
                this.postErrors = {};
                this.post.content = ''
                this.post.image = ''
            }).catch((error)=>{
                this.postErrors = {...this.get_post_errors}
            })
        },
    }
}
</script>

<style scoped>

</style>

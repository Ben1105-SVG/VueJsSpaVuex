export default {

    state: {
        posts:{},
        errors:{},
        allPosts:{}
    },

    mutations: {
        SET_POSTS(state,data){
            state.posts = data
        },
        SET_ALL_POSTS(state,data){
            state.allPosts = data
        },
        SET_ERRORS(state, data){
            state.errors = data
        }
    },

    actions: {
        add_post({commit},data){
            return new Promise((replace,reject)=>{
                let token = Cookies.get('user_token');
                axios.post('/api/post/add',data,{
                    headers: {
                        'Accept': 'application/json',
                        'content-type':'application/json',
                        'Authorization': 'Bearer '+ token,
                    }
                })
                    .then(function (response){
                        replace(response)
                    }).catch((error)=>{
                        commit('SET_ERRORS',error.response.data.message)
                        reject(error)
                })
            })

        },
        update_post({commit},data){
            return new Promise((replace,reject)=>{
                let token = Cookies.get('user_token');
                axios.post('/api/post/update',data,{
                    headers: {
                        'Accept': 'application/json',
                        'content-type':'application/json',
                        'Authorization': 'Bearer '+ token,
                    }
                })
                    .then(function (response){
                        replace(response)
                    }).catch((error)=>{
                    commit('SET_ERRORS',error.response.data.message)
                    reject(error)
                })
            })

        },
        get_posts_by_user_id({commit}){
            return new Promise((replace,reject)=>{
                let token = Cookies.get('user_token');
                axios.get('/api/post',{
                    headers: {
                        'Accept': 'application/json',
                        'content-type':'application/json',
                        'Authorization': 'Bearer '+ token,
                    }
                })
                    .then(function (response){
                        commit('SET_POSTS',response.data)
                        replace(response)
                    }).catch((error)=>{
                    commit('SET_ERRORS',error.response.data.message)
                    reject(error)
                })
            })
        },
        get_all_posts({commit}){
            return new Promise((replace,reject)=>{
                let token = Cookies.get('user_token');
                axios.get('/api/post/all',{
                    headers: {
                        'Accept': 'application/json',
                        'content-type':'application/json',
                        'Authorization': 'Bearer '+ token,
                    }
                })
                    .then(function (response){
                        commit('SET_ALL_POSTS',response.data)
                        replace(response)
                    }).catch((error)=>{
                    commit('SET_ERRORS',error.response.data.message)
                    reject(error)
                })
            })

        },
        destroy({commit},id){
            return new Promise((resolve,reject)=>{
                let token = Cookies.get('user_token');
                axios.post('/api/post/delete',{id:id},{
                    headers:{
                        'Accept': 'application/json',
                        'content-type':'application/json',
                        'Authorization': 'Bearer '+ token,
                    }
                }).then((response)=>{
                    resolve(response)
                }).catch((error)=>{
                    console.log(error.status)
                    reject(error)
                })
            })
        }
    },

    getters: {
        get_posts_by_user_id_(state){
            return state.posts
        },
        get_all_posts(state){
            return state.allPosts
        },
        get_all_errors(state){
            return state.errors
        }
    },

    namespaced: true
}

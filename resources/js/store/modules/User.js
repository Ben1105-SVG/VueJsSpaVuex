export default{
    state:{
        auth:{},
        errors: {}
    },

    mutations:{
        USER_DATA(state, data){
            state.auth = data
        },
        SET_NAME(state, val) {
            state.name = val
        },
        SET_ERRORS(state, data){
            state.errors = data
        }
    },

    actions:{
        get_user_data({commit}){
            return new Promise((resolve, reject) => {
                let token = Cookies.get('user_token');
                if (!token || token === undefined) return
                axios.get('/api/user',
                    {
                        headers: {
                            'Accept': 'application/json',
                            'content-type':'application/json',
                            'Authorization': 'Bearer '+ token
                        }
                    }).then(function (response){
                    commit('USER_DATA',response.data)
                    resolve(response);
                }).catch((error)=>{
                    console.log(error)
                    reject(error)
                })
            })
        },
        update_profile({commit,state},data){
            return new Promise((resolve,reject)=>{
                let token = Cookies.get('user_token');
                axios.post(`api/user/update/${state.auth.id}`, data,{
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type' : 'multipart/form-data',
                        'Authorization': 'Bearer '+ token,
                    }
                })
                    .then(function (response){
                        resolve(response);
                    }).catch((error)=>{
                        commit('SET_ERRORS',error.response.data.message)
                    reject(error)
                })
            })
        }
    },

    getters:{
        get_auth_user(state){
            return {...state.auth}
        },
        get_errors(state){
            return {...state.errors}
        }
    },

    namespaced: true
}

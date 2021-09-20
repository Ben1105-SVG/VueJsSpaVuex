import store from "../store";

export default{
    state:{
        response_data:{
            error:[]
        },
        user_token: false
    },
    mutations:{
        LOGIN(state, data){
            state.user_token = data.data
            Cookies.set('user_token',data.data,'1000')
        },
        SET_ERROR(state, data){
            state.response_data.error  = data
        },
    },
    actions:{
        login_form_submit({commit}, data){
            return new Promise((resolve, reject) => {
                axios.post('api',data)
                    .then(function (response){
                        commit('LOGIN',response)
                        resolve(response)
                    }).catch((error)=>{
                        error.response?  commit('SET_ERROR',error.response.data.message) :  false
                        reject(error)
                });
            })
        },
        log_out({commit}){
            return new Promise((resolve,reject) =>{
            axios.post('api/logout',
                {}, {
                    headers: {
                        'Accept': 'application/json',
                        'content-type':'application/json',
                        'Authorization': 'Bearer '+ Cookies.get('user_token')
                    }
                })
                .then(function (response){
                    Cookies.remove('user_token')
                    resolve(response)
                }).catch((error)=>{
                reject(error)
            })
            })
        },
        checkIfVerifiedEmail({commit},id){
            axios.get(`verify_account/${id}`).then((response)=>{

            }).catch((error)=>{

            })
        }
    },
    getters:{
        get_response(state){
            return state.response_data
        },
        check_user_token(state){
            return state.user_token
        }
    }
}

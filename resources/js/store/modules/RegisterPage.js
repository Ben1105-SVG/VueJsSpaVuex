export default{
    state:{
        form_response:{
            errors:[],
            success:false
        }
    },

    mutations:{
        SET_FORM_FIELDS(state, data) {
            state.form_response.success = data
        },
        SET_ERRORS(state, data) {
            state.form_response.errors = data
        },
    },

    actions:{
        registration_form_submit({commit} ,params) {
            axios.post(`api/register`,params)
                .then(function (response) {
                    commit('SET_FORM_FIELDS', response.data.success)
                }).catch((error)=>{
                    commit('SET_ERRORS',error.response.data.message)
            })
        },

    },

    getters:{
        getFormResponse(state) {
            return state.form_response
        },
        get_auth_user(state) {
            return 456
        }
    }
}

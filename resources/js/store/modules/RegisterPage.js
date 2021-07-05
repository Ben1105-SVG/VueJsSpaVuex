export default{
    state:{

    },

    mutations:{
        SET_CAROUSEL_MOVIES(state, data) {
            state.movieCarousel = data.results
        },

    },

    actions:{
        registration_form_submit({commit}) {
            axios.post(`http://localhost/register`)
                .then(function (response) {
                    console.log(response)
                    commit('SET_CAROUSEL_MOVIES', response.data)
                }).catch((error)=>{
                alert('something went wrong while trying to load the Carousel!')
            })
        },

    },

    getters:{
        getMovieCarousel(state) {
            return state.movieCarousel
        },

    }
}

export default function guest({next}){
    if (Cookies.get('user_token')){
        return next({
            name: 'home'
        })
    }
    return next()
}

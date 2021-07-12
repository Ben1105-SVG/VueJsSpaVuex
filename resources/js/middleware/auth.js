export default function  auth({next}){
    if (!Cookies.get('user_token')){
        return next({
            name: 'login'
        })
    }
    return next()
}

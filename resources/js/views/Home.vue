<template>
<div class="container big_conteiner">
    <section class="profile">
    <header class="header">
        <userDetails/>
    </header>
        <div class="main">
            <div class="container ">
                <editProfile/>
            </div>
        </div>
</section>

</div>

</template>

<script>
import editProfile from "../components/editProfile";
import userDetails from "../components/userDetails";
export default {
    name: "Home",
    components:{
        editProfile,
        userDetails
    }
}
</script>


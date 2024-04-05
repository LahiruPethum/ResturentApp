<template>
    <h1>Wlcome to home page</h1>



</template>

<script>


export default {
    name:'HomePage',
    mounted(){
        let user = localStorage.getItem('userInfo');
        if(!user){
            this.$router.push({name:'SignUp'});
        }
    }
}


</script>
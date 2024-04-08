<template>
    <AppHeader />
    <h1>Hi {{name}}, Welcome to Add page</h1>
</template>

<script>
import AppHeader from './AppHeader.vue' 

export default {
    name: 'AddResturent',
    components: {
        AppHeader 
    },
    data(){
        return{
            name:''
        }
    },
    mounted() {
        let user = localStorage.getItem('userInfo');
        this.name = JSON.parse(user).name;
        if (!user) {
            this.$router.push({ name: 'SignUp' });
        }
    }
}
</script>

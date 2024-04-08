<template>
    <AppHeader />
    <h1>Welcome to home page</h1>
</template>

<script>
import AppHeader from './AppHeader.vue' 

export default {
    name: 'HomePage',
    components: {
        AppHeader 
    },
    mounted() {
        let user = localStorage.getItem('userInfo');
        if (!user) {
            this.$router.push({ name: 'SignUp' });
        }
    }
}
</script>

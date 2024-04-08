<template>
    <AppHeader />
    <h1>Hi {{ name }}, Welcome to home page</h1>
    <table class="table container">
        <thead class="table-dark">
            <tr >
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Contact</th>
                <th scope="col">Address</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in resturant" :key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.contact}}</td>
                <td>{{item.address}}</td>
            </tr>
            
        </tbody>
    </table>

   
</template>

<script>
import axios from 'axios';
import AppHeader from './AppHeader.vue'

export default {
    name: 'HomePage',
    components: {
        AppHeader
    },

    data() {
        return {
            name: '',
            resturant: []
        }
    },

    async mounted() {
        let user = localStorage.getItem('userInfo');
        this.name = JSON.parse(user).name;
        if (!user) {
            this.$router.push({ name: 'SignUp' });
        }

        let result = await axios.get('http://localhost:3000/resturents');
        // console.warn(result);
        this.resturant = result.data;
    }
}
</script>
<style>
table{
    margin-top: 60px;
}
</style>
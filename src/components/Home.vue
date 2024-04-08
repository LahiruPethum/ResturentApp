<template>
    <AppHeader />
    <h1>Hi {{ name }}, Welcome to home page</h1>
    <table class="table container">
        <thead class="table-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Contact</th>
                <th scope="col">Address</th>

                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in resturant" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.contact }}</td>
                <td>{{ item.address }}</td>
                <td><router-link :to="`/update/` + item.id"><button class="btn btn-warning" style="margin-left: 10px;">Edit</button></router-link>
                    <button class="btn btn-danger" style="margin-left: 10px;" v-on:click="deleterest(item.id)">Delete</button>
                </td>
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

    

    methods:{
       async deleterest(id){
            let result = await axios.delete('http://localhost:3000/resturents/'+id);
            if (result.status==200) {
                this.loaddata();
            }
        },


        async loaddata() {
        let user = localStorage.getItem('userInfo');
        this.name = JSON.parse(user).name;
        if (!user) {
            this.$router.push({ name: 'SignUp' });
        }

        let result = await axios.get('http://localhost:3000/resturents');
        // console.warn(result);
        this.resturant = result.data;
    }
    },
    async mounted() {
        this.loaddata();
    }
   
}
</script>
<style>
table {
    margin-top: 60px;
}
</style>
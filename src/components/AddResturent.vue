<template>
    <AppHeader />
    <h1>Hi , Welcome to Add page</h1>
    <div class="addform position-relative top-0 start-50 translate-middle-x">
        <div class="form-group">
            <label for="restaurantName">Name</label>
            <input type="text" class="form-control" id="restaurantName" placeholder="Enter Restaurant Name"
                v-model="Restaurant.name">
        </div>
        <div class="form-group">
            <label for="contactNumber">Contact number</label>
            <input type="text" class="form-control" id="contactNumber" placeholder="Enter Contact Number"
                v-model="Restaurant.contact">
        </div>
        <div class="form-group">
            <label for="address">Address</label>
            <input type="text" class="form-control" id="address" placeholder="Enter Address"
                v-model="Restaurant.address">
        </div>
        <button type="button" v-on:click="add" class="btn btn-primary">Add Restaurant</button>
    </div>
</template>

<script>
import axios from 'axios';
import AppHeader from './AppHeader.vue'

export default {
    name: 'AddRestaurant',
    components: {
        AppHeader
    },
    data() {
        return {
            // name: '',
            Restaurant: {
                name: '',
                contact: '',
                address: ''
            }
        }
    },
    methods: {
        async add() {
            
            const result = await axios.post('http://localhost:3000/resturents',{
                name:this.Restaurant.name,
                address:this.Restaurant.address,
                contact:this.Restaurant.contact
            });

            if(result.status == 201){
                this.$router.push({name:'HomePage'})
            }
            // console.log("result" , result);
        }
    },
    mounted() {
        let user = localStorage.getItem('userInfo');
        // this.name = JSON.parse(user).name;
        if (!user) {
            this.$router.push({ name: 'SignUp' });
        }
    }
}
</script>

<style scoped>
.addform {
    margin-top: 60px;
    width: 800px;
    text-align: left;
}

.form-group {
    margin-top: 20px;
}

button {
    margin-top: 20px;
}
</style>

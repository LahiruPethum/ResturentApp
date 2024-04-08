<template>
    <div>
        <AppHeader />
        <h1>Hi, Welcome to Update page</h1>
        <div class="addform position-relative top-0 start-50 translate-middle-x">
            <div class="form-group">
                <label for="restaurantName">Name</label>
                <input type="text" class="form-control" id="restaurantName" placeholder="Enter Restaurant Name"
                    v-model="name">
            </div>
            <div class="form-group">
                <label for="contactNumber">Contact number</label>
                <input type="text" class="form-control" id="contactNumber" placeholder="Enter Contact Number"
                    v-model="contact">
            </div>
            <div class="form-group">
                <label for="address">Address</label>
                <input type="text" class="form-control" id="address" placeholder="Enter Address"
                    v-model="address">
            </div>
            <button type="button" @click="update" class="btn btn-primary">Update Restaurant</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import AppHeader from './AppHeader.vue'

export default {
    name: 'UpdateResturent',
    components: {
        AppHeader
    },
    data() {
        return {
            name: '',
            contact: '',
            address: ''
        }
    },
    methods: {
        async update() {
            try {
                const result = await axios.put(`http://localhost:3000/resturents/${this.$route.params.id}`, {
                    name: this.name,
                    address: this.address,
                    contact: this.contact,
                });

                if (result.status === 200) {
                    this.$router.push({ name: 'HomePage' });
                }
            } catch (error) {
                console.error("Error updating restaurant:", error.response ? error.response.data : error.message);
                // Optionally, inform the user with a message
            }
        }
    },
    async mounted() {
        let user = localStorage.getItem('userInfo');
        if (!user) {
            this.$router.push({ name: 'SignUp' });
        }
        try {
            const result = await axios.get(`http://localhost:3000/resturents/${this.$route.params.id}`);
            this.name = result.data.name;
            this.address = result.data.address;
            this.contact = result.data.contact;
        } catch (error) {
            console.error("Error fetching restaurant details:", error.response ? error.response.data : error.message);
            // Optionally, inform the user with a message
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

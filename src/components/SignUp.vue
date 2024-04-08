<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <h1 style="margin-top: 60px;">Sign Up</h1>

    <div class="form position-relative top-0 start-50 translate-middle-x">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">User Name</label>
            <input type="text" v-model="name" class="form-control" id="username" aria-describedby="emailHelp">

        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email Address</label>
            <input type="email" v-model="email" class="form-control" id="exampleInputEmail1"
                aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" v-model="password" class="form-control" id="exampleInputPassword1">
        </div>
        <!-- <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
        </div> -->

        <button type="submit" v-on:click="submit" class="btn btn-primary">Sign Up</button>

        <p style="text-align: center;"><router-link to="/login"> login</router-link></p>
    </div>


</template>


<script>
import axios from 'axios';
export default {
    name: 'SignUp',

    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },

    methods: {
        async submit() {
            let result = await axios.post('http://localhost:3000/users', {
                name: this.name,
                email: this.email,
                password: this.password
            });

            // console.log(result);

            if (result.status === 201) { // Check result.status instead of result itself
                localStorage.setItem("userInfo", JSON.stringify(result.data));
                this.$router.push({ name: 'HomePage' });
            }
        }


    },

    mounted(){
        let user = localStorage.getItem('userInfo');
        if(user){
            this.$router.push({name:'HomePage'})
        }
    }


}
</script>




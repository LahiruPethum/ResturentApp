<template>
    <h1>Sign Up</h1>

    <div class="position-relative top-0 start-50 translate-middle-x">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">User Name</label>
            <input type="text" v-model="name" class="form-control" id="username" aria-describedby="emailHelp">
           
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email Address</label>
            <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
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

        <button type="submit" v-on:click="submit" class="btn btn-primary">Submit</button>
    </div>


</template>


<script>
import axios from 'axios';
export default {
    name: 'SignUp',

    data(){
        return{
            name:'',
            email:'',
            password:''
        }
    },

    methods:{
        async submit(){
            let result = await axios.post('http://localhost:3000/users',{
                name:this.name,
                email:this.email,
                password:this.password
            });
            console.log(result);

            if(result==201){
                alert('sign-up done');
                localStorage.setItem("user Info",JSON.stringify(result.data));
            }
        }
       
    }
}
</script>

<style>
form {
    /* width: 300px;
   text-align:left;
   margin-left: 200px;
   display: block; */


    justify-content: center;
    text-align: left;
    height: 500px;
    width: 400px;
}
</style>
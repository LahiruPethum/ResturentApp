<template>
    <nav class="navbar navbar-expand-lg bg-dark">
        <router-link to="/"><a class="navbar-brand"> Navbar</a></router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse form-inline" id="navbarNav">
            <ul class="navbar-nav ">
                <li class="nav-item">
                    <router-link to="/add"><a class="nav-link" >Add Resturant</a></router-link>
                </li>
                <!-- <li class="nav-item">
                    <router-link to="/update"> <a class="nav-link" href="#">Update Resturant</a></router-link>
                </li> -->
                <li class="nav-item">
                    <a class="nav-link " href="#" v-on:click="logout">Logout</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'AppHeader',

    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({name:'LogIn'})
        }
    }
}


</script>

<style>
.navbar {
    padding-left: 20px;
    padding-right: 20px;
}

.nav-link {
    color: white;
    margin-right: 20px;
    text-decoration: none;

}

.nav-link:hover {
    color: yellow;
}

.navbar-brand {
    color: white;
    margin-left: 20px;
}

.navbar-brand:hover {
    color: yellow;
}

.navbar-collapse {
    justify-content: flex-end;
}
</style>

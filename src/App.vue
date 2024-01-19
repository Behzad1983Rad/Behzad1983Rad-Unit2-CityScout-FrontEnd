<script setup>
import { RouterLink, RouterView, useRouter  } from 'vue-router'
import { ref , onMounted} from 'vue'
import {useCookies} from 'vue3-cookies'
import {decodeCredential, googleLogout} from 'vue3-google-login'

const {cookies} = useCookies()
const router = useRouter();
const isLoggedIn = ref(false)
const userName = ref('')

const callback = (response) => {
    isLoggedIn.value = true
    const userData = decodeCredential(response.credential)
    // console.log(userData.email)
    userName.value = userData.given_name
    cookies.set('user_session', response.credential)
    fetch(`${import.meta.env.VITE_API_URL}/user/login` , {
        method: "POST",
        headers: {
            "user-email": userData.email,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userEmail: userData.email
        })
    })
    .then( () => {
        console.log('session saved')
    })
    .catch( err => console.error(err))
}
const checkSession = () => {
    if (cookies.isKey('user_session')){
        isLoggedIn.value = true
        const userData = decodeCredential(cookies.get('user_session'))
        userName.value = userData.given_name
    }
}
const handleLogout = () => {
    googleLogout()
    cookies.remove('user_session')
    isLoggedIn.value = false
    router.push('/');
}
onMounted(checkSession)
</script>
<template>
    <body class="p-3 mb-2 bg-dark text-white">
        
   
  <header style="background-color: rgba(0, 255, 255, 0);" >
    <nav style="margin-left: 30px;" class="navbar navbar-expand-lg navbar-light bg-dark"  >
  <div class="container-fluid">
    
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink class="nav-link active" style="color: rgb(251, 252, 200);" aria-current="page" href="#" to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" style="color: rgb(251, 252, 200);" href="#" to="/discover">Discover Destinations</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" style="color: rgb(251, 252, 200);" href="#" v-if="isLoggedIn" to="/trip">Explore your Trips</RouterLink>
        </li>
      </ul>
      <span class="navbar-text">
        <button type="button" class="btn btn-danger"  v-if="isLoggedIn" @click="handleLogout">Log Out</button>
        <GoogleLogin type="button"  v-else :callback="callback" />
      </span>
    </div>
  </div>
</nav>
   
  </header>
  <RouterView />
</body>
</template>
<style>
body{
  background-image: url('../src/assets/images/img1.jpg');
  background-size: cover;
  background-position: center;
  background-repeat:no-repeat;
  min-height: 100vh;
  min-width: 100%;
  background-color: rgba(250, 235, 215, 0);

  
  
}

</style>
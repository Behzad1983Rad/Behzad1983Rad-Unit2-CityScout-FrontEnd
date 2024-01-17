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
    console.log(userData.email)
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
  <header >
    <div class="wrapper">
        <nav class="d-flex justify-content-center"  >
            <div class="routerLink">
                <RouterLink  to="/">Home</RouterLink> &nbsp; &nbsp;&nbsp;&nbsp;
                <RouterLink  to="/discover">Discover Destinations</RouterLink> &nbsp; &nbsp;&nbsp;&nbsp;
                <RouterLink v-if="isLoggedIn" to="/trip">Explore your Trips</RouterLink> &nbsp; &nbsp;&nbsp;&nbsp;
            </div>
        <div class="d-flex justify-content-end">
            <button type="button" class="btn btn-danger"  v-if="isLoggedIn" @click="handleLogout">Log Out</button>
            <GoogleLogin type="button"  v-else :callback="callback" />
        </div>
      </nav>
    </div>
  </header>
  <RouterView />
</template>
<style>
  nav {
    margin-top: 15px;
    margin-left: 50px;
  }
</style>
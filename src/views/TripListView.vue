<script setup>
import { ref, onMounted } from 'vue'
import {RouterLink} from 'vue-router'
import {useCookies} from 'vue3-cookies'
import {decodeCredential} from 'vue3-google-login'
import NewTrip from '@/components/NewTrip.vue';

const tripsBe = ref([])
const isLoggedIn = ref(false)
const userName = ref('')
const {cookies} = useCookies()
const userEmail = ref('')

const fetchData = () => {
    fetch(`${import.meta.env.VITE_API_URL}/trip`, {
        headers:{
            "user-email": userEmail.value,
            "Content-Type": "application/json"
        },
    })
    .then( response => response.json() )
    .then( result => {
        tripsBe.value = result
    } )
}
function deleteTrip(tripId) {
    fetch(`${import.meta.env.VITE_API_URL}/trip/${tripId}`, {
        method: "DELETE"
    })
    .then(() => {
        alert('Trip deleted')
        fetchData()
    })
    .catch(err => console.error(err))
}

const checkSession = () => {
    if (cookies.isKey('user_session')){
        isLoggedIn.value = true
        const userData = decodeCredential(cookies.get('user_session'))
        console.log(userData)
        userName.value = userData.given_name
        userEmail.value = userData.email
    }
}

onMounted(() => {
    checkSession();
    fetchData();
});
</script>

<template >
    <h2 >Trip List</h2>
    <ul >
        <li v-for="trip in tripsBe" :key="trip._id">
            <RouterLink :to="'/trip/'+ trip._id" >{{ `My Trip to ${trip.destination} in ${trip.dateOfArrival} `}}</RouterLink>
            <button type="button" class="btn btn-outline-dark" @click="deleteTrip(trip._id)">Delete </button> &nbsp;
            <RouterLink :to="'/trip/update/' + trip._id">Edit Trip</RouterLink>
        </li>
    </ul>
    <hr>
    <NewTrip  :fetchData="fetchData" />
</template>
<style>
h2, ul {
    margin-left: 50px;
    margin-bottom: 50px;
}
li {
    margin-bottom: 10px;
}
button {
    align-content: flex-end;
}
</style>
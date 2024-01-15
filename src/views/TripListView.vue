<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import {RouterLink} from 'vue-router'
import {useCookies} from 'vue3-cookies'
import {decodeCredential, googleLogout} from 'vue3-google-login'
import NewTrip from '@/components/NewTrip.vue';

const tripsBe = ref([])
const isLoggedIn = ref(false)

const userName = ref('')
const {cookies} = useCookies()


const fetchData = () => {
    fetch(`${import.meta.env.VITE_API_URL}/trip`)
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
        userName.value = userData.given_name
    }
}

// onMounted(() => {
//     fetchData()
//     checkSession()
// })
onMounted(() => {
    fetchData(); 

    const pollingInterval = setInterval(() => {
        fetchData();
    }, 200);

    checkSession();

    
    onUnmounted(() => {
        clearInterval(pollingInterval);
    });
});






</script>


<template>

    <h1>Trip List</h1>
    <ul>
        <li v-for="trip in tripsBe" :key="trip._id">
            <RouterLink :to="'/trip/'+ trip._id" >{{ `My Trip to ${trip.destination} in ${trip.dateOfArrival} `}}</RouterLink>
            <button @click="deleteTrip(trip._id)">Delete Trip</button> &nbsp;
            <RouterLink :to="'/trip/update/' + trip._id">Edit Trip</RouterLink>

        </li>
    </ul>
    <hr>
    
    <NewTrip  :fetchData="fetchData" />


</template>


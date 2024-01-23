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
        method: 'GET',
        mode: 'cors',
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
        // console.log(userData)
        userName.value = userData.given_name
        userEmail.value = userData.email
    }
}

onMounted(() => {
    checkSession();
    fetchData();
});
</script>

<template>
    <main>
    <h2 >Trip List</h2>
    <ul>
        <li style="display:flex; flex-direction: row; justify-content: flex-start; align-content: center; align-items: center;" v-for="trip in tripsBe" :key="trip._id">
            <RouterLink class="tripList" style=" width: 200px;" :to="'/trip/'+ trip._id" >{{ `My Trip to ${trip.destination} in ${trip.dateOfArrival} `}}</RouterLink>
            <button type="button" class="bn632-hover bn21" @click="deleteTrip(trip._id)">Delete </button> &nbsp;
            <RouterLink id="textUnderLine" class="bn632-hover bn22"  :to="'/trip/update/' + trip._id">Edit Trip</RouterLink>
        </li>
    </ul>
</main>
    
    <NewTrip  :fetchData="fetchData" />
</template>
<style>
 ul {
    margin-left: 50px;
    margin-bottom: 50px;
}
li {
    margin-bottom: 10px;
}
button {
    align-content: flex-end;
}
h2 {
    margin-left: 110px;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #f8920c;
}

.tripList {
    text-decoration:none;
     color: rgb(250, 250, 250);
    
}

#textUnderLine {
    text-decoration: none;
    text-align: center;
    

}

.bn632-hover {
  width: 100px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin: 20px;
  height: 30px;
  text-align:center;
  border: none;
  background-size: 300% 100%;
  border-radius: 50px;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
}

.bn632-hover:hover {
  background-position: 100% 0;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out; 
}

.bn632-hover:focus {
  outline: none;
}

.bn632-hover.bn22 {
  background-image: linear-gradient(
    to right,
    #f8920c,
    #d4c712,
    #ef9d43,
    #e75516
  );
  box-shadow: 0 4px 15px 0 rgba(252, 104, 110, 0.75);
}
</style>
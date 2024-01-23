<script setup>
import {ref} from 'vue';
import {decodeCredential} from 'vue3-google-login'
import {useCookies} from 'vue3-cookies'

const { fetchData } = defineProps(['fetchData'])

const {cookies} = useCookies()
const userEmail = ref('')
const userData = decodeCredential(cookies.get('user_session'))
userEmail.value = userData.email

const trip = ref({
    destination: '',
    dateOfArrival: null,
    duration: null,
    cost: null,
});

function addTrip() {
    if (trip.value.destination === '' || trip.value.dateOfArrival === ''
     || trip.value.duration ==='' || trip.value.cost ==='') {
        alert('All values are required')
        return
    }
    fetch(`${import.meta.env.VITE_API_URL}/trip/new` , {
        method: "POST",
        mode: 'cors',
        headers: {
            "user-email": userEmail.value ,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(trip.value)
    })
    .then( () =>{
        trip.value ={
            destination: '',
            dateOfArrival: null,
            duration: null,
            cost: null,
            user: ''
        }
        fetchData()
    })
    .catch (err => {
        console.error(err)
    })
}
</script>
<template>
  <main >
    <form class="row">
  <div class="col-md-6">    
    <label for="destination" class="form-label">Destination: *</label>
    <input type="text" class="form-control" name="destination" placeholder="destination" v-model="trip.destination" required>
  </div>
  <div class="col-md-6">
    <label for="dateOfArrival" class="form-label">Date of Arrival: *</label>
    <input type="number" class="form-control" name="dateOfArrival" placeholder="Date Of Arrival" v-model="trip.dateOfArrival" required>
  </div>

  <!-- <div class="row" > -->
  <div class="col-md-6">
    <label for="duration" class="form-label">Duration: *</label>
    <input type="number" class="form-control" name="duration" placeholder="Duration" aria-label="Duration" v-model="trip.duration" required>
    
  </div>
  <div class="col-md-6" >
    <label for="cost" class="form-label" >Travel Expense *</label>
    <input type="number" class="form-control" name="cost" placeholder="USD" aria-label="USD" v-model="trip.cost" required>

  </div>
<!-- </div> -->
  <div style="margin-top: 10px;" class="col-12">
    <button type="button" class="bn632-hover bn21" @click="addTrip">Add Trip</button>
  </div>
</form>

  </main>
  </template>
  <style>
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

.bn632-hover.bn21 {
  background-image: linear-gradient(
    to right,
    #d30520,
    #ff9a44,
    #ef9d43,
    #e75516
  );
  box-shadow: 0 4px 15px 0 rgba(252, 104, 110, 0.75);
}

    
  </style>
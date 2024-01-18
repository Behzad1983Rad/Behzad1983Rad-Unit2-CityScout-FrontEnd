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
        headers: {
            "user-email": userEmail.value ,
            "Content-Type": "application/json"
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
  <main class="p-3 mb-2 bg-dark text-white">
    <form class="row g-3">
  <div class="col-md-6">    
    <label for="destination" class="form-label">Destination: *</label>
    <input type="text" class="form-control" name="destination" placeholder="destination" v-model="trip.destination" required>
  </div>
  <div class="col-md-6">
    <label for="dateOfArrival" class="form-label">Date of Arrival: *</label>
    <input type="number" class="form-control" name="dateOfArrival" placeholder="Date Of Arrival" v-model="trip.dateOfArrival" required>
  </div>
  <div class="col-12">
    <label for="duration" class="form-label">Duration: *</label>
    <input type="number" class="form-control" name="duration" placeholder="Duration" v-model="trip.duration" required>
  </div>
  <div class="col-12">
    <label for="cost" class="form-label">TravelExpense *</label>
    <input type="number" class="form-control" name="cost" placeholder="USD" v-model="trip.cost" required>
  </div>
  <div class="col-12">
    <button type="button" class="btn btn-success" @click="addTrip">Add Trip</button>
  </div>
</form>

  </main>
  </template>
  <style>
    
  </style>
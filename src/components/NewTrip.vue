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
    <h3>Add a new Trip</h3>
    <div class="tripForm">
      <div class="formGroup">
        <label for="destination">Destination: *</label>
        <input type="text" name="destination" placeholder="destination" v-model="trip.destination" required>
      </div>
      <div class="formGroup">
        <label for="dateOfArrival">Date of Arrival: *</label>
        <input type="number" name="dateOfArrival" placeholder="Date Of Arrival" v-model="trip.dateOfArrival" required>
      </div>
      <div class="formGroup">
        <label for="duration">Duration: *</label>
        <input type="number" name="duration" placeholder="Duration" v-model="trip.duration" required>
      </div>
      <div class="formGroup">
        <label for="cost">TravelExpense *</label>
        <input type="number" name="cost" placeholder="USD" v-model="trip.cost" required>
      </div>
      <button type="button" class="btn btn-success" @click="addTrip">Add Trip</button>
    </div>
  </template>
  <style>
    h3 {
        margin-left: 50px;
    }
    input {
        margin-right: 180px;
    }
    .tripForm {
      display: flex;
      flex-direction: column;
      padding-right: 30px;
    }
    .formGroup {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 10px;
    }
    .formGroup label {
      margin-left: 50px;
      flex-shrink: 0; /* Prevent label from shrinking */
    }
    .formGroup input {
      width: 200px; /* Set the width of the input */
      margin-left: auto; /* Align input to the right */
    }
    button {
      width: 100px; /* Set the fixed width */
      margin-left: 50px;
      height: 35px;
    }
  </style>
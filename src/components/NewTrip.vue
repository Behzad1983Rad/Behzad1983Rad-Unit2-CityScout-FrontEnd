<script setup>
import {ref, defineProps} from 'vue';


const tripsBe = ref([])


const fetchData = () => {
    fetch(`${import.meta.env.VITE_API_URL}/trip`)
    .then( response => response.json() )
    .then( result => {
        tripsBe.value = result
    } )
}

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
    <label for="destination">Destination: *</label>
    <input type="text" name="destination" placeholder="destination" v-model="trip.destination" required>
    <label for="dateOfArrival">Date of Arrival: *</label>
    <input type="number" name="dateOfArrival" placeholder="Date Of Arrival" v-model="trip.dateOfArrival" required>
    <label for="duration">Duration: *</label>
    <input type="number" name="duration" placeholder="Duration" v-model="trip.duration" required>
    <label for="cost">:How much did you spend? *</label>
    <input type="number" name="cost" placeholder="USD" v-model="trip.cost" required>
    <button @click="addTrip">Add Trip</button>
  </div>
</template>

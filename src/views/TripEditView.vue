<script setup>
import { ref, onMounted } from 'vue';

import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()
const tripId = route.params.id

const trip = ref({
    destination: '',
    dateOfArrival: null, 
    duration: null, 
    cost: null, 
  });


const LoadTripData = () => {
    fetch(`${import.meta.env.VITE_API_URL}/trip/${tripId}`)
    .then(res => res.json()) 
    .then(data => {
        trip.value = {
            destination: data.destination,
            dateOfArrival: data.dateOfArrival,
            duration: data.duration,
            cost: data.cost
        }
    })
}

const updateTrip = () => {
    fetch(`${import.meta.env.VITE_API_URL}/trip/${tripId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(trip.value)
    })
    .then( ()  => {
        router.replace({name: 'trip'})
    })
    .catch(err => console.error(err))

}

onMounted(LoadTripData)


</script>

<template>

    <h1>Edit {{trip.destination}}</h1>

    <div class="tripForm">
        <label for="destination">Destination: *</label>
        <input type="text" name="destination" placeholder="destination" v-model="trip.destination" required>
        <label for="dateOfArrival">Date of Arrival: *</label>
        <input type="number" name="dateOfArrival" placeholder="Date Of Arrival" v-model="trip.dateOfArrival" required>
        <label for="duration">Duration: *</label>
        <input type="number" name="duration" placeholder="Duration" v-model="trip.duration" required>
        <label for="cost">Cost: *</label>
        <input type="number" name="cost" placeholder="Cost" v-model="trip.cost" required>
        <button @click="updateTrip">Add Trip</button>

    </div>


</template>
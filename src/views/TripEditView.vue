<script setup>
import { ref, onMounted } from 'vue';

import { useRoute, useRouter } from 'vue-router';

const userEmail = ref()
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
    fetch(`${import.meta.env.VITE_API_URL}/trip/${tripId}` , 
    {
      method: 'GET',
      mode: 'cors',
      headers:{
          "user-email": userEmail.value,
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*'
        },
    })
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
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*'
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
     <main >

    <h1>Edit {{trip.destination}}</h1>
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
    <input type="number" class="form-control" name="cost" placeholder="Cost" v-model="trip.cost" required>
  </div>
  <div class="col-12">
    
    <button type="button" class="btn btn-success" @click="updateTrip">Add Trip</button>
  </div>
</form>



</main>


</template>
<script setup>
import {ref, onMounted} from 'vue'
import { useRoute } from 'vue-router';

const trip = ref({})

onMounted(() => {
    const route = useRoute()

    fetch(`${import.meta.env.VITE_API_URL}/trip/${route.params.id}`)
    .then(response => response.json())
    .then( result => {
        trip.value = result
        
    })
    .catch(err => console.error(err))
})
</script>

<template>
  <h3>{{ trip.destination }}</h3>
  <h2>The city should be connected to an API providing info about this city</h2>
  
  
</template>

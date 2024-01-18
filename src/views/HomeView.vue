<script setup>
</script>

<template >
  <main class="p-3 mb-2 bg-dark text-white">
    
    <div v-if="isLoggedIn">
        <h2>Hello {{ userName }}</h2>
      
    </div>
    <h3>Welcome to <strong>Trip Explorer</strong> - Your Ultimate Travel Companion! </h3>
    <h4>Explore, Record, and Discover Your Journeys</h4>
    <h5>Embark on a seamless journey of exploration with TripExplorer, the perfect travel app designed to elevate your adventures. Whether you're a globetrotter, an occasional explorer, or a passionate traveler, TripExplorer is here to enhance every step of your journey.</h5>
  </main>
</template>

<style>

</style>

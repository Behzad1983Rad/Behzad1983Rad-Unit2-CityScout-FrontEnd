<script setup>
</script>

<template>
  <main>
    <div v-if="isLoggedIn">
        <h2>Hello {{ userName }}</h2>
      
    </div>
    <h3>Welcome to <strong>City Scout</strong> Your Ultimate Trip Companion!</h3>
    <h4>Whether you're a seasoned traveler or planning your first adventure, <strong>City Scout</strong> is here to make your trip planning experience seamless and enjoyable. Navigate through your personalized dashboard, where you can easily manage your upcoming trips, view your saved destinations, and get quick access to the latest travel tips.</h4>
  </main>
</template>

<style>
h3 {
  margin-left: 50px;
  margin-top: 50px;
  margin-right: 20px;
}

h4 {
  margin-left: 50px;
  margin-right: 20px;
  margin-top: 25px;
}
</style>

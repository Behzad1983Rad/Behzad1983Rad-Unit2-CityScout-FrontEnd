<script setup>
import { ref } from 'vue';

const selectedCountry = ref('');

const showCountryDetails = (country) => {
  console.log('showCountryDetails called with:', country);

  selectedCountry.value = country;
};
</script>

<template>
  <body class="p-3 mb-2 bg-dark text-white">
  <div>
    <h2>Your Next Country to Visit</h2>

    <div v-if="selectedCountry">
      <h3>Details for {{ selectedCountry.name }}</h3>
      <!-- <p>Name of the country: {{ selectedCountry.name }}</p> -->
      <!-- <p>Language: {{ selectedCountry.language }}</p>
      <p>Currency: {{ selectedCountry.currency }}</p>
      <p>Flag: <img :src="selectedCountry.flag" alt="Country Flag"></p>
      <p>Cities:</p> -->
      <ul>
        <li v-for="city in selectedCountry.cities" :key="city">{{ city }}</li>
      </ul>
    </div>
  </div>
</body>
</template>

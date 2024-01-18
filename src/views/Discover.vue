<script setup>
import { ref } from 'vue';

import HolidayResults from '@/components/HolidayResults.vue';

const countries = ref([]);
const cityName = ref('');


const searchCity = async () => {
  try {
    const response = await fetch(`http://localhost:4000/countries?search=${cityName.value}`);
    if (response.ok) {
      const fetchedCountries = await response.json();
      console.log(fetchedCountries);     
      
      countries.value = fetchedCountries.countries
    
    } else {
      console.error('Error fetching countries:', response.statusText);
    }
  } catch (error) {
    console.error('Error fetching countries:', error.message);
  }
};

</script>
<template>
  <div class="container">
    <h1 class="jumbotron text-center">Discover Your Next Trip</h1>
    <div class="row">
      <div class="col-xs-6 col-xs-offset-3">
        <div class="input-group">
          <input v-model="cityName" type="text" class="form-control" placeholder="Name a Country">
          <span class="input-group-btn">
            <button type="button" class="btn btn-success" @click="searchCity">Go</button>
          </span>
        </div>
      </div>
    </div>
    <hr>
    <div v-for="country in countries" :key="country.code">
    <h1>{{ country.name }}</h1>
    <img :src="country.flag" alt="Flag" />  
    <h2>Languages:
    
    </h2>
    <ul>
      <li v-for="(language, index) in country.languages" :key="index">
        {{ language }}
      </li>
    </ul>
    <h2>Cities:</h2>
      <ul>
        <li v-for="(subdivision, index) in country.subdivisions" :key="index">
          {{ subdivision.name }}
        </li>
      </ul>
    
    <h2>Weekend Holidays:</h2>
    <ul>
      <li v-for="(day, index) in country.weekend" :key="index">
        {{ day.name }}
      </li>
    </ul>


  

</div>
  
  </div>
</template>


<style>
</style>

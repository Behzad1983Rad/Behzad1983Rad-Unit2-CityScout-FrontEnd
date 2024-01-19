<script setup>
import { ref } from 'vue';

import HolidayResults from '@/components/HolidayResults.vue';

const countries = ref([]);
const cityName = ref('');


const searchCity = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/countries?search=${cityName.value}`,
    {
      method: 'GET',
      headers:{
          "user-email": userEmail.value,
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*'

        },
    });
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
<main >
  <div class="container">
    <h1 >Discover Your Next Trip</h1>
    <div class="row">
      <div class="col-xs-6 col-xs-offset-3">
        <div style="width: 420px; margin-left: 30px;" class="input-group">
          <input  v-model="cityName" type="text" class="form-control" placeholder="Name a Country">
          <span class="input-group-btn">
            <button type="button" class="btn btn-success" @click="searchCity">Go</button>
          </span>
        </div>
      </div>
    </div>

   
   
    <div v-for="country in countries" :key="country.code">
      <h1>{{ country.name }}</h1>
      <img :src="country.flag" alt="Flag" />  
      
      <h3>Language:</h3>
    
    <ul>
      <li v-for="(language, index) in country.languages" :key="index">
        {{ language }}
      </li>
    </ul>
    <h2>Cities:</h2>
      <ol class="list-group">
        <li  v-for="(subdivision, index) in country.subdivisions" :key="index">
          {{ subdivision.name }}
        </li>
      </ol>
   
    
    <h2>Weekend Holidays:</h2>
    <ul class="list-group list-group-horizontal">
      <li class="list-group-item" style="color: rgb(21, 5, 78);" v-for="(day, index) in country.weekend" :key="index">
        {{ day.name }}
      </li>
    </ul>

  </div>
  
</div>
</main>
</template>


<style>


h3 {
  margin-left: 30px;
  margin-top: 10px;
  text-shadow: 0px 0px 5px rgba(128, 0, 0, 1);
}
h1 {
  margin-left: 30px;  
  margin-top: 50px;
  margin-bottom: 50px;
  text-shadow: 0px 0px 5px rgba(128, 0, 0, 1);

}
h2 {
  margin-left: 30px;
  text-shadow: 0px 0px 5px rgba(128, 0, 0, 1);
}

ol {
  margin-left: 50px;
}
li {
  margin-left: 30px;
}
img {
  margin-left: 50px;
}
</style>

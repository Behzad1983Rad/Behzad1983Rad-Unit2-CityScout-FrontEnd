<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const trip = ref({});

onMounted(() => {
    const route = useRoute();

    fetch(`${import.meta.env.VITE_API_URL}/trip/${route.params.id}`)
        .then(response => response.json())
        .then(result => {
            trip.value = result;
            searchCity();
        })
        .catch(err => console.error(err));
});

const countries = ref([]);
const cityName = ref('');

const searchCity = async () => {
    try {
        const response = await fetch(`http://localhost:4000/countries?search=${trip.value.destination}`);
        if (response.ok) {
            const fetchedCountries = await response.json();
            countries.value = fetchedCountries.countries;
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
    <div>
        
        <div v-for="country in countries" :key="country.code">
            <h1>{{ country.name }}</h1>
            <img :src="country.flag" alt="Flag" />
            <h2>Languages:</h2>
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
</main>
</template>

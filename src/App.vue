<script setup>
import { ref } from "vue";

const selectedCity = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
</script>

<template>
  <div style="width: 200px">
    <Button label="Click" style="marginBottom: 8px" />
    <Listbox v-model="selectedCity" :options="cities" optionLabel="name"  />
  </div>
</template>



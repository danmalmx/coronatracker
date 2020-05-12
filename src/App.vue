<template>
  <div id="app" class="container">
    <Cards 
      :data = this.data 
      />
    <CountryPicker />
    <Chart />
  </div>
</template>

<script>
import { 
  Cards, 
  CountryPicker ,
  Chart, 
  } from '@/components';

  import { fetchData } from './api'

export default {
  data() {
    return {
      data: {},
      
    }
  },
  components: {
    Cards,
    Chart,
    CountryPicker
  },

  async mounted() {
    const fetchedData = await fetchData();
    this.data = fetchedData;
    console.log(this.data)
  }
  
}
</script>

<style lang="scss">

body {
  background-color: rgb(250,250,250);
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>

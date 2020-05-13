<template>
  <div class="container">
    <Card :data = data />
  </div>

  <!-- <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>{{data.confirmed.value}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card> -->

</template>

<script>
import Card from './Card'
export default {
    props: ['data'],
    data() {
        return {
        }
    },

    components: {
      Card
    }

}

</script>

<style lang="scss" scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>
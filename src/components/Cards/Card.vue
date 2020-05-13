<template>

  <!-- <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">Infected</div>
        <v-list-item-title class="headline mb-1">REAL DATA</v-list-item-title>
        <v-list-item-title class="headline mb-1">REAL DATA</v-list-item-title>
        <v-list-item-subtitle>Number of active cases of COVID-19</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card> -->

<!-- TEST 2 -->
    <v-container>
        <v-card
        class="mx-auto"
        max-width="344"
    >
        <v-row dense>
            <!-- <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
            > -->

            <div>
            <!-- INFECTED -->

                <v-card>
                    <v-list-item three-line>
                        <v-list-item-content>
                            <div class="overline mb-4">Infected</div>
                            <v-list-item-title class="headline mb-1">{{data.confirmed.value}}</v-list-item-title>
                            <v-list-item-title class="headline mb-1">REAL DATA</v-list-item-title>
                            <v-list-item-subtitle>Number of active cases of COVID-19</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
            </v-card>

            </div>
            
            <div>
            <!-- RECOVERED -->
                <v-card>
                    <v-list-item three-line>
                        <v-list-item-content>
                            <div class="overline mb-4">Recovered</div>
                            <v-list-item-title class="headline mb-1">{{data.recovered.value}}</v-list-item-title>
                            <v-list-item-title class="headline mb-1">Last Updated: {{ data.lastUpdate | date }}</v-list-item-title>
                            <v-list-item-subtitle>Number of recoveries from COVID-19</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
            </v-card>
        </div>

        <div>
          <!-- DEATHS -->
            <v-card>
                <v-list-item three-line>
                    <v-list-item-content>
                        <div class="overline mb-4">Deaths</div>
                        <v-list-item-title class="headline mb-1">{{data.deaths.value}}</v-list-item-title>
                        <v-list-item-title class="headline mb-1"> <a :href="data.deaths.detail" target="_blank">Further details</a></v-list-item-title>
                        <v-list-item-subtitle>Number of deaths caused by COVID-19</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
          </v-card>
        </div>

        <!-- </v-col> -->
      </v-row>
  </v-card>
</v-container>

</template>

<script>
  export default {
    props: ['data'],
    data: () => ({
      cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      ],
    }),
  }
</script>

<style scoped>

a {
    text-decoration: none;
    cursor: pointer;
}

</style>
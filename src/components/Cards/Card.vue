  <!-- <v-container>
    <v-card
    class="mx-auto"
    max-width="344"
    >
      <v-row dense>
        <div class="infected">
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
          
        <div class="recovered">
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

        <div class="deaths">
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
      </v-row>
    </v-card>
  </v-container> -->

 <template>
  <v-container v-if="!data" class="grey lighten-5 mx-2">Loading...</v-container>
  <v-container v-else class="grey lighten-5 mx-2">
    <v-row class="ma-auto">
      <v-col cols="8">
        <v-card 
          class="pa-2"
          width="350px"
        >
           <v-list-item>
              <v-list-item-content>
                <div class="overline mb-4">Infected</div>
                <v-list-item-title class="headline mb-1">{{data.confirmed.value}}</v-list-item-title>
                <v-list-item-title class="headline mb-1"> <a :href="data.deaths.detail" target="_blank">Further details</a></v-list-item-title>
                <v-list-item-subtitle>Number of deaths caused by COVID-19</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8">
        <v-card 
          class="pa-2"
          width="350px"
        >
           <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">Recovered</div>
                <v-list-item-title class="headline mb-1">
                  <CountUp 
                    start = {0}
                    end = {data.recovered.value}
                    duration = {2.5
                    separator=','                  
                  />
                  {{data.recovered.value}}</v-list-item-title>
                <v-list-item-title class="headline mb-1"> <a :href="data.deaths.detail" target="_blank">Further details</a></v-list-item-title>
                <v-list-item-subtitle>Number of deaths caused by COVID-19</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8">
        <v-card 
          class="pa-2"
          width="350px"
        >
           <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">Deaths</div>
                <v-list-item-title class="headline mb-1">
                  <ICountUp 
                    :delay = "delay"
                    :endVal = "endVal"
                    :options = "options"                  
                  />
                  
                  </v-list-item-title>
                <v-list-item-title class="headline mb-1"> <a :href="data.deaths.detail" target="_blank">Further details</a></v-list-item-title>
                <v-list-item-subtitle>Number of deaths caused by COVID-19</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ICountUp from 'vue-countup-v2';
import CountUp from 'countup.js'
export default {
  props: ['data'],
  data() {
    return {
       delay: 100,
        endVal: 500000,
        options: {
          useEasing: true,
          useGrouping: true,
          separator: ',',
    }
    }
  },
  components: {
    ICountUp
  }
}
</script>
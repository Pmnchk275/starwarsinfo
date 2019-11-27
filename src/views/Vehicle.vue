<template>
  <div class="vehicle">
    <v-card
    max-width="100%"
    min-width="100%"
    outlined>
      <v-card-title>
        <v-btn 
        text
        icon
        color="secondary"
        @click="$router.go(-1)">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <h4>{{ title }}: {{ vehicle.name }}</h4>
      </v-card-title>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item>
          <v-list-item-content>Model:</v-list-item-content>
          <v-list-item-content class="align-end">{{ vehicle.model }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Manufacturer:</v-list-item-content>
          <v-list-item-content class="align-end">{{ vehicle.manufacturer }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Cost in credits:</v-list-item-content>
          <v-list-item-content class="align-end">{{ vehicle.cost_in_credits }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Length:</v-list-item-content>
          <v-list-item-content class="align-end">{{ vehicle.length }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Max atmosphering speed:</v-list-item-content>
          <v-list-item-content class="align-end">{{ vehicle.max_atmosphering_speed }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Crew:</v-list-item-content>
          <v-list-item-content class="align-end">{{ vehicle.crew }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Passengers:</v-list-item-content>
          <v-list-item-content class="align-end">{{ vehicle.passengers }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Cargo capacity:</v-list-item-content>
          <v-list-item-content class="align-end">{{ vehicle.cargo_capacity }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Consumables:</v-list-item-content>
          <v-list-item-content class="align-end">{{ vehicle.consumables }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Vehicle class:</v-list-item-content>
          <v-list-item-content class="align-end">{{ vehicle.vehicle_class }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-expansion-panels>
            <v-expansion-panel v-if="vehicle.pilots">
              <v-expansion-panel-header>Pilots</v-expansion-panel-header>
              <v-expansion-panel-content>
                [<template v-for="(pilot, key) in vehicle.pilots">
                  <router-link
                  :key="key"
                  :to="correctLink(pilot)">
                    {{ correctLink(pilot) }}
                  </router-link>
                  <span :key="`span${key}`">, </span>
                </template>]
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel v-if="vehicle.films">
              <v-expansion-panel-header>Films</v-expansion-panel-header>
              <v-expansion-panel-content>
                [<template v-for="(film, key) in vehicle.films">
                  <router-link
                  :key="key"
                  :to="correctLink(film)">
                    {{ correctLink(film) }}
                  </router-link>
                  <span :key="`span${key}`">, </span>
                </template>]
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-list-item>
      </v-list>
      <v-card-actions>
        <v-btn
        color="secondary"
        class="mx-1"
        @click="$router.go(-1)">
          Back
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Vehicle',
  created() {
    axios.get(`https://swapi.co/api/${this.$route.name}s/${this.$route.params.id}/`).then(({ data }) => {
      this.vehicle = data;
    });
  },
  computed: {
    title() {
      return {
        vehicle: 'Vehicle',
        starship: 'Starship'
      }[this.$route.name] || 'Vehicle'
    }
  },
  data: () => ({
    vehicle: {}
  })
}
</script>

<template>
  <div class="planet">
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
        <h4>Planet: {{ planet.name }}</h4>
      </v-card-title>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item>
          <v-list-item-content>Rotation period:</v-list-item-content>
          <v-list-item-content class="align-end">{{ planet.rotation_period }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Orbital period:</v-list-item-content>
          <v-list-item-content class="align-end">{{ planet.orbital_period }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Diameter:</v-list-item-content>
          <v-list-item-content class="align-end">{{ planet.diameter }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Climate:</v-list-item-content>
          <v-list-item-content class="align-end">{{ planet.climate }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Gravity:</v-list-item-content>
          <v-list-item-content class="align-end">{{ planet.gravity }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Terrain:</v-list-item-content>
          <v-list-item-content class="align-end">{{ planet.terrain }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Surface water:</v-list-item-content>
          <v-list-item-content class="align-end">{{ planet.surface_water }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Population:</v-list-item-content>
          <v-list-item-content class="align-end">{{ planet.population }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Terrain:</v-list-item-content>
          <v-list-item-content class="align-end">{{ planet.terrain }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Terrain:</v-list-item-content>
          <v-list-item-content class="align-end">{{ planet.terrain }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-expansion-panels>
            <v-expansion-panel v-if="planet.residents">
              <v-expansion-panel-header>Residents</v-expansion-panel-header>
              <v-expansion-panel-content>
                [<template v-for="(resident, key) in planet.residents">
                  <router-link
                  :key="key"
                  :to="correctLink(resident)">
                    {{ correctLink(resident) }}
                  </router-link>
                  <span :key="`span${key}`">, </span>
                </template>]
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel v-if="planet.films">
              <v-expansion-panel-header>Films</v-expansion-panel-header>
              <v-expansion-panel-content>
                [<template v-for="(film, key) in planet.films">
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
  name: 'Planet',
  created() {
    axios.get(`https://swapi.co/api/planets/${this.$route.params.id}/`).then(({ data }) => {
      this.planet = data;
    });
  },
  data: () => ({
    planet: {}
  })
}
</script>

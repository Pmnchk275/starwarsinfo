<template>
  <div class="film">
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
        <h4>Film: {{ film.title }}</h4>
      </v-card-title>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item>
          <v-list-item-content>Episode id:</v-list-item-content>
          <v-list-item-content class="align-end">{{ film.episode_id }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Opening crawl:</v-list-item-content>
          <v-list-item-content class="align-end">{{ film.opening_crawl }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Director:</v-list-item-content>
          <v-list-item-content class="align-end">{{ film.director }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Producer:</v-list-item-content>
          <v-list-item-content class="align-end">{{ film.producer }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Release date:</v-list-item-content>
          <v-list-item-content class="align-end">{{ film.release_date }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>Characters</v-expansion-panel-header>
              <v-expansion-panel-content>
                [<template v-for="(character, key) in film.characters">
                  <router-link
                  :key="key"
                  :to="correctLink(character)">
                    {{ correctLink(character) }}
                  </router-link>
                  <span :key="`span${key}`">, </span>
                </template>]
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>Planets</v-expansion-panel-header>
              <v-expansion-panel-content>
                [<template v-for="(planet, key) in film.planets">
                  <router-link
                  :key="key"
                  :to="correctLink(planet)">
                    {{ correctLink(planet) }}
                  </router-link>
                  <span :key="`span${key}`">, </span>
                </template>]
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>Species</v-expansion-panel-header>
              <v-expansion-panel-content>
                [<template v-for="(spec, key) in film.planets">
                  <router-link
                  :key="key"
                  :to="correctLink(spec)">
                    {{ correctLink(spec) }}
                  </router-link>
                  <span :key="`span${key}`">, </span>
                </template>]
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>Vehicles</v-expansion-panel-header>
              <v-expansion-panel-content>
                [<template v-for="(vehicle, key) in film.vehicles">
                  <router-link
                  :key="key"
                  :to="correctLink(vehicle)">
                    {{ correctLink(vehicle) }}
                  </router-link>
                  <span :key="`span${key}`">, </span>
                </template>]
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>Starships</v-expansion-panel-header>
              <v-expansion-panel-content>
                [<template v-for="(starship, key) in film.starships">
                  <router-link
                  :key="key"
                  :to="correctLink(starship)">
                    {{ correctLink(starship) }}
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
  name: 'Film',
  created() {
    axios.get(`https://swapi.co/api/films/${this.$route.params.id}/`).then(({ data }) => {
      this.film = data;
    });
  },
  data: () => ({
    film: {}
  })
}
</script>

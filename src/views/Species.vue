<template>
  <div class="species">
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
        <h4>Species: {{ species.name }}</h4>
      </v-card-title>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item>
          <v-list-item-content>Classification:</v-list-item-content>
          <v-list-item-content class="align-end">{{ species.classification }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Designation:</v-list-item-content>
          <v-list-item-content class="align-end">{{ species.designation }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Average height:</v-list-item-content>
          <v-list-item-content class="align-end">{{ species.average_height }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Skin colors:</v-list-item-content>
          <v-list-item-content class="align-end">{{ species.skin_colors }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Hair colors:</v-list-item-content>
          <v-list-item-content class="align-end">{{ species.hair_colors }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Eye colors:</v-list-item-content>
          <v-list-item-content class="align-end">{{ species.eye_colors }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Average lifespan:</v-list-item-content>
          <v-list-item-content class="align-end">{{ species.average_lifespan }}</v-list-item-content>
        </v-list-item>
        <v-list-item v-if="species.homeworld">
          <v-list-item-content>Homeworld:</v-list-item-content>
          <v-list-item-content class="align-end">
            <router-link :to="correctLink(species.homeworld)">{{ correctLink(species.homeworld) }}</router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Language:</v-list-item-content>
          <v-list-item-content class="align-end">{{ species.language }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-expansion-panels>
            <v-expansion-panel v-if="species.people">
              <v-expansion-panel-header>People</v-expansion-panel-header>
              <v-expansion-panel-content>
                [<template v-for="(person, key) in species.people">
                  <router-link
                  :key="key"
                  :to="correctLink(person)">
                    {{ correctLink(person) }}
                  </router-link>
                  <span :key="`span${key}`">, </span>
                </template>]
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel v-if="species.films">
              <v-expansion-panel-header>Films</v-expansion-panel-header>
              <v-expansion-panel-content>
                [<template v-for="(film, key) in species.films">
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
  name: 'Species',
  created() {
    axios.get(`https://swapi.co/api/species/${this.$route.params.id}/`).then(({ data }) => {
      this.species = data;
    });
  },
  data: () => ({
    species: {}
  })
}
</script>

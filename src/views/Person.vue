<template>
  <div class="person" :key="person.url">
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
        <h4>Person: {{ person.name }}</h4>
      </v-card-title>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item>
          <v-list-item-content>Height:</v-list-item-content>
          <v-list-item-content class="align-end">{{ person.height }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Mass:</v-list-item-content>
          <v-list-item-content class="align-end">{{ person.mass }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Hair color:</v-list-item-content>
          <v-list-item-content class="align-end">{{ person.hair_color }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Skin color:</v-list-item-content>
          <v-list-item-content class="align-end">{{ person.skin_color }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Eye color:</v-list-item-content>
          <v-list-item-content class="align-end">{{ person.eye_color }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Birth year:</v-list-item-content>
          <v-list-item-content class="align-end">{{ person.birth_year }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Gender:</v-list-item-content>
          <v-list-item-content class="align-end">{{ person.gender }}</v-list-item-content>
        </v-list-item>
        <v-list-item v-if="person.homeworld">
          <v-list-item-content>Homeworld:</v-list-item-content>
          <v-list-item-content class="align-end">
            <router-link :to="correctLink(person.homeworld)">{{ correctLink(person.homeworld) }}</router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-expansion-panels>
            <v-expansion-panel v-if="person.films">
              <v-expansion-panel-header>Films</v-expansion-panel-header>
              <v-expansion-panel-content>
                [<template v-for="(film, key) in person.films">
                  <router-link
                  :key="key"
                  :to="correctLink(film)">
                    {{ correctLink(film) }}
                  </router-link>
                  <span :key="`span${key}`">, </span>
                </template>]
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel v-if="person.species">
              <v-expansion-panel-header>Species</v-expansion-panel-header>
              <v-expansion-panel-content>
                [<template v-for="(spec, key) in person.species">
                  <router-link
                  :key="key"
                  :to="correctLink(spec)">
                    {{ correctLink(spec) }}
                  </router-link>
                  <span :key="`span${key}`">, </span>
                </template>]
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel v-if="person.vehicles">
              <v-expansion-panel-header>Vehicles</v-expansion-panel-header>
              <v-expansion-panel-content>
                [<template v-for="(vehicle, key) in person.vehicles">
                  <router-link
                  :key="key"
                  :to="correctLink(vehicle)">
                    {{ correctLink(vehicle) }}
                  </router-link>
                  <span :key="`span${key}`">, </span>
                </template>]
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel v-if="person.starships">
              <v-expansion-panel-header>Starships</v-expansion-panel-header>
              <v-expansion-panel-content>
                [<template v-for="(starship, key) in person.starships">
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
export default {
  name: 'Person',
  computed: {
    person() {
      return this.$store.getters['person/data']; 
    }
  },
  created() {
    this.$store.dispatch('person/getPerson', {
      id: this.$route.params.id
    });
  },
}
</script>

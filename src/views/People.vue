<template>
  <div class="people">
    <v-card
    :loading="isLoading"
    max-width="100%"
    min-width="100%"
    outlined>
      <v-card-title>
        <h4>People</h4>
      </v-card-title>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item
        v-for="(person, key) in people"
        :key="key"
        @click="$router.push(correctLink(person.url))">
          <v-list-item-content>
            <h4>
              #{{ getPersonId(correctLink(person.url)) }} {{ person.name }}
            </h4>
          </v-list-item-content>
          <v-list-item-content class="align-end">
            Gender: {{ person.gender }}
            <div v-if="person.homeworld">
              Homeworld: <router-link :to="correctLink(person.homeworld)">{{ correctLink(person.homeworld) }}</router-link>
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-card-actions>
        <v-btn
        :disabled="!previous || isLoading" 
        color="secondary"
        class="mx-1"
        @click="getData(previous)">
          Previous
        </v-btn>
        <v-btn
        :disabled="!next || isLoading"
        color="secondary"
        class="mx-1"
        @click="getData(next)">
          Next
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'People',
  computed: {
    people() {
      return this.$store.getters['people/data']; 
    },
    next() {
      return this.$store.getters['people/next']; 
    },
    previous() {
      return this.$store.getters['people/previous']; 
    },
    isLoading() {
      return this.$store.getters['people/isLoading']; 
    }
  },
  created() {
    if (!this.people) {
      this.$store.dispatch('people/getPeople');
    }
  },
  methods: {
    getData(url) {
      this.$store.dispatch('people/getPeople', {
        url
      });
    },
    getPersonId(url) {
      return url.replace('/people/', '').replace('/', '')
    },
  }
}
</script>

import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#3c73ae', // #47b
        secondary: '#645e64', // #666
        tertiary: '#383337', // #433
        quaternary: '#d6dee7', // #dee
        fivefold: '#9ba0a8', //#aab
      },
    },
  },
});

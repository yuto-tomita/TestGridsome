import DefaultLayout from '~/layouts/Default.vue'
import 'prismjs/themes/prism.css'
import VueCompositionApi from '@vue/composition-api'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'
import 'prismjs/themes/prism-tomorrow.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFolder, faTags } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add( faFolder, faTags, faClock, faTwitter, faGithub);

export default function (Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Stylish&display=swap'
  })
  Vue.component('Layout', DefaultLayout)
  Vue.component("v-fa", FontAwesomeIcon)
  Vue.use(VueCompositionApi)
  Vue.use(Vuetify);
  appOptions.vuetify = new Vuetify({
    customVariables: ['~/assets/css/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.grey.darken4,
          accent: colors.shades.black,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          github: '#211F1F',
          facebook: '#3B5998',
          twitter: '#1DA1F2',
          qiita: '#4cb10d'
        },
      }
    }
  })
}

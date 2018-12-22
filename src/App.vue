<template>
  <v-app>
    <v-navigation-drawer
            v-model="drawer"
            app
            style="position:fixed; top:0; left:0; overflow-y:scroll;"
    >
        <v-toolbar flat>
            <v-list>
                <v-list-tile>
                    <v-list-tile-title class="title">
                        Menu
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-toolbar>
        <v-divider></v-divider>
        <v-list dense class="pt-0">
            <v-list-tile :to="{name: 'home'}" exact>
                <v-list-tile-action>
                    <v-icon>mdi-home-outline</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>Aktualności</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile :to="{name: 'place'}">
                <v-list-tile-action>
                    <v-icon>mdi-map-search-outline</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>Miejsce</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile :to="{name: 'agenda'}">
                <v-list-tile-action>
                    <v-icon>mdi-calendar-outline</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>Agenda</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile :to="{name: 'partners'}">
                <v-list-tile-action>
                    <v-icon>mdi-heart-outline</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>Partnerzy</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile :to="{name: 'blog'}">
                <v-list-tile-action>
                    <v-icon>mdi-account-circle-outline</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>Blog</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>

    <v-content>
        <v-container fluid>
            <main>
                <v-fade-transition mode="out-in">
                    <router-view></router-view>
                </v-fade-transition>
            </main>
        </v-container>
    </v-content>

      <v-footer
              dark
              height="auto"
              app
      >
          <v-toolbar>
              <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
              <v-toolbar-title>Aktualności</v-toolbar-title>
          </v-toolbar>
      </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import {RestService} from './services/RestService';
import {ChangeService} from './services/ChangeService';
import {DbService} from "./services/DbService";
import {createConnection} from 'typeorm';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      drawer: false,
    }
  },
  created() {
      if (window.plugins) {
          window.plugins.OneSignal
              .startInit("7352b8f7-e82c-449e-b402-a760d22871ef")
              .endInit();
      }
      const restService = new RestService();
      const changeService = new ChangeService();
      changeService.getLastChangeId().then(lastId => {
          restService.getDataFromApi(lastId).then(objects => {
              changeService.parseChangesFromJsonArray(objects).then(() => {});
          });
      });

      //console.log(await restService.getDataFromApi(lastId));

  }
}
</script>

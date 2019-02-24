<template>
  <v-app v-if="loaded">
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
        <v-container fluid class="int-background">
            <main style="height: 100%">
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
              <v-toolbar-title>{{$route.meta.title}}</v-toolbar-title>
          </v-toolbar>
      </v-footer>
  </v-app>
    <div v-else>
        <div class="logo-container">
            <v-img
                    :src="require('../public/img/logo_for_web.png')"
                    class="my-3"
                    contain
            ></v-img>
            Synchronizacja danych...
        </div>
    </div>
</template>

<script>
    import '@babel/polyfill';
import {RestService} from './services/RestService';
import {ChangeService} from './services/ChangeService';

export default {
  name: 'App',
  components: {},
  data() {
    return {
      drawer: false,
        loaded: false,
        timerId: null,
    };
  },
  created() {
      const restService = new RestService();
      const changeService = new ChangeService();

      const self = this;

      if (window.plugins) {
          window.plugins.OneSignal
              .startInit('7352b8f7-e82c-449e-b402-a760d22871ef')
              .inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.Notification)
              .endInit();
      }

      document.addEventListener('offline', function() {
          alert('Brak połączenia. Nie wykorzystujesz pełnej funkcjonalności aplikacji.');
          clearInterval(this.timerId);
          timerId = null;
      }, false);

      document.addEventListener('online', function() {
          changeService.getLastChangeId().then((lastId) => {
              restService.getDataFromApi(lastId).then((objects) => {
                  changeService.parseChangesFromJsonArray(objects).then(() => {
                      this.loaded = true;
                      this.timerId = setInterval(() => {
                          changeService.getLastChangeId().then((lastId) => {
                              restService.getDataFromApi(lastId).then((objects) => {
                                  changeService.parseChangesFromJsonArray(objects).then(() => {
                                  });
                              });
                          });
                      }, 30000);
                  });
              });
          });
      }, false);

      const networkState = navigator['connection'].type;
      if (networkState) {
          if (networkState !== 'none') {
              changeService.getLastChangeId().then((lastId) => {
                  restService.getDataFromApi(lastId).then((objects) => {
                      changeService.parseChangesFromJsonArray(objects).then(() => {
                          this.loaded = true;
                          this.timerId = setInterval(() => {
                              changeService.getLastChangeId().then((lastId) => {
                                  restService.getDataFromApi(lastId).then((objects) => {
                                      changeService.parseChangesFromJsonArray(objects).then(() => {});
                                  });
                              });
                          }, 30000);
                      }).catch((e) => {
                          alert("Problem z pobraniem danych. Aplikacja może zawierać nieaktualne dane. Błąd (0x0004)");
                          self.loaded = true;
                      });
                  }).catch((e) => {
                      alert("Problem z pobraniem danych. Aplikacja może zawierać nieaktualne dane. Błąd (0x0003)");
                      self.loaded = true;
                  });
              }).catch((e) => {
                  alert("Problem z pobraniem danych. Aplikacja może zawierać nieaktualne dane. Błąd (0x0002)");
                  self.loaded = true;
              });
              return;
          }
      }
      alert('Brak połączenia. Nie wykorzystujesz pełnej funkcjonalności aplikacji.');
      this.loaded = true;
  },
};
</script>

<style>
    .int-background{
        background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 277px), url("assets/bg.png") repeat-y;
        background-size: 634px ;
        background-position: center top;
        margin-bottom: 15px;
        height: 100%;
    }
    .logo-container{
        width: 90%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }
</style>

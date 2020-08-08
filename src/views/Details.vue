<template>
  <main-wrapper
    no-menu
  >
    <v-card
      v-if="ready"
      class="overflow-hidden"
    >
      <app-header
        :title="show.name"
        :backdrop-image="show.backdrop_src"
        :subtitle="subtitle"
        :height="headerHeight"
        @back="returnToPreviousPage"
      />
      <v-card
        class="px-3 pt-2 overflow-y-auto card-max-height mt-n4"
        :class="expandedHeight"
        rounded="t-xl"
        id="scroll-target"
        v-scroll.self="onScroll"
      >
        <v-card-subtitle>
          <v-row>
            <v-col
              v-if="show.genres.length !== 0"
              class="pb-1 pt-0"
              cols="6"
              md="3"
            >
              <span class="caption text-uppercase"> Gênero: </span><br>
              {{show.genres.join(', ')}}
            </v-col>
            <v-col
              class="pb-1 pt-0"
              cols="6"
              md="3"
            >
              <span class="caption text-uppercase"> Status: </span><br>
              {{show.status}}
            </v-col>
            <v-col
              class="pb-1 pt-0"
              cols="6"
              md="3"
            >
              <span class="caption text-uppercase"> Estreia: </span><br>
              {{premiere}}
            </v-col>
            <v-col
              v-if="show.last_air_date"
              class="pb-1 pt-0"
              cols="6"
              md="3"
            >
              <span class="caption text-uppercase"> Último episódio: </span><br>
              {{finale}}
            </v-col>
            <v-col
              class="pb-1 pt-0"
              cols="6"
              md="3"
            >
              <span class="caption text-uppercase"> Duração do episódio: </span><br>
              {{show.episode_run_time}} min
            </v-col>
            <v-col
              class="pb-1 pt-0"
              cols="6"
              md="3"
            >
              <span class="caption text-uppercase"> Total de Episódios: </span><br>
              {{numberOfEpisodes}}
            </v-col>
          </v-row>
        </v-card-subtitle>
        <v-card-text>
          <div
            class="pt-3"
          >
            <p
              class="mx-3 mb-3 caption pr-3 text-end text-uppercase"
            >
              Sinopse
            </p>
            <v-divider class="mb-5"/>
            {{show.overview}}
          </div>
          <div
            class="pt-3"
          >
            <p
              class="mx-3 mb-3 caption pr-3 text-end text-uppercase"
            >
              Elenco
            </p>
            <v-divider></v-divider>
            <actors-carousel
              :actors="cast"
            />
          </div>
          <div
            class="pt-3"
            v-if="renderType !== 'season'"
          >
            <p
              class="mx-3 mb-3 caption pr-3 text-end text-uppercase"
            >
              Temporadas
            </p>
            <v-divider></v-divider>
            <v-row
              class="mt-4"
            >
              <checkable-card
                v-for="(card, index) in show.seasons"
                class="pb-2"
                :key="index"
                :title="card.title"
                :img-src="card.src"
                :loading="card.loading"
                :disabled="card.loading"
                @status-changed="handleCheck(index)"
                @click="redirect(index)"
              />
            </v-row>
          </div>
          <div
            v-else
            class="pt-3"
          >
            <p
              class="mx-3 mb-3 caption pr-3 text-end text-uppercase"
            >
              Episódios
            </p>
            <v-divider class="mb-5"></v-divider>
            <v-expansion-panels
              v-model="activePanel"
              popout
              flat
            >
              <v-expansion-panel
                v-for="(episode, index) in season.episodes"
                :key="index"
              >
                <v-expansion-panel-header
                  class="pa-0"
                  disable-icon-rotate
                >
                  <episode-panel-header
                    :title="episode.title"
                    :img-src="episode.src"
                    :active="index === activePanel"
                  />
                  <template
                    v-slot:actions
                  >
                    <span></span>
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-row>
                    <v-col
                      class="pt-0"
                      cols="12"
                    >
                      {{ episode.aired }}
                      <!-- <span class="caption text--disabled">
                        - {{ episode.runtime }}
                      </span> -->
                    </v-col>
                  </v-row>
                  {{ episode.description }}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-card-text>
      </v-card>
    </v-card>
    <v-row
      v-else-if="loading || loadingSeason"
      class="fill-height"
      align="center"
      justify="center"
    >
      <v-progress-circular
        indeterminate
        color="primary"
      />
    </v-row>
    <v-alert
      v-else
      dense
      text
      type="error"
    >
      Ops, tivemos um problema de conexão. Se o problema persistir contate o suporte.
    </v-alert>
  </main-wrapper>
</template>

<script>
/* eslint-disable no-console */
import moment from 'moment';
import 'moment/locale/pt-br';
import {
  getSerieDetails,
  getSerieCredits,
  getSerieSeason,
} from '@/services';
import {
//
} from 'vue-feather-icons';
import AppHeader from '../components/AppHeader.vue';
import ActorsCarousel from '../components/ActorsCarousel.vue';
import CheckableCard from '../components/CheckableCard.vue';
import EpisodePanelHeader from '../components/EpisodePanelHeader.vue';

export default {
  components: {
    AppHeader,
    ActorsCarousel,
    CheckableCard,
    EpisodePanelHeader,
  },

  props: {
    ids: {
      type: Object,
      default: null,
      required: true,
    },
    type: {
      type: String,
      default: 'show',
    },
    seasonNumber: {
      type: Number,
      default: null,
    },
  },

  data() {
    return {
      renderType: this.type,
      seasonIndex: this.seasonNumber,
      loading: false,
      error: false,
      loadingCast: false,
      errorCast: false,
      loadingSeason: false,
      errorSeason: false,
      headerHeight: '180px',
      activePanel: null,
      show: null,
      cast: null,
      season: null,
    };
  },

  beforeMount() {
    this.fillSerieDetails();
    if (this.renderType === 'season') {
      this.fillSeasonDetails();
    }
    this.fillCastInfo();
  },

  watch: {
    renderType(value) {
      if (value === 'season') {
        this.fillSeasonDetails();
      }
    },
  },

  methods: {
    fillSeasonDetails() {
      this.loadingSeason = true;
      this.errorSeason = false;
      getSerieSeason(this.ids.tmdb, this.seasonIndex).then((data) => {
        const totalEpisodes = data.episodes.length;
        const firstAirDate = data.episodes[0].air_date;
        const lastAirDate = data.episodes[totalEpisodes - 1].air_date;
        const episodes = data.episodes.map((episode) => ({
          ...episode,
          title: `${episode.season_number}x${episode.episode_number} ${episode.name}`,
          description: episode.overview,
          aired: episode.air_date ? moment(episode.air_date).format('DD [de] MMMM [de] YYYY') : null,
          src: `https://image.tmdb.org/t/p/original${episode.still_path}`,
        }));
        this.season = {
          ...data,
          episodes,
          first_air_date: firstAirDate ? moment(firstAirDate).format('DD [de] MMMM [de] YYYY') : null,
          last_air_date: lastAirDate ? moment(lastAirDate).format('DD [de] MMMM [de] YYYY') : null,
          number_of_episodes: totalEpisodes,
        };
        this.loadingSeason = false;
      }).catch(() => {
        this.loadingSeason = false;
        this.errorSeason = true;
      });
    },

    fillSerieDetails() {
      this.loading = true;
      this.error = false;
      getSerieDetails(this.ids.tmdb).then((data) => {
        this.show = data;
        const genres = this.show.genres.map((genre) => genre.name);
        const seasons = this.show.seasons.map((season) => ({
          id: season.id,
          season_number: season.season_number,
          title: season.name,
          src: `https://image.tmdb.org/t/p/w342${season.poster_path}`,
          loading: false,
        }));
        this.show = {
          ...data,
          genres,
          seasons,
          episode_run_time: data.episode_run_time[0],
          first_air_date: data.first_air_date ? moment(data.first_air_date).format('DD [de] MMMM [de] YYYY') : null,
          last_air_date: data.last_air_date ? moment(data.last_air_date).format('DD [de] MMMM [de] YYYY') : null,
          backdrop_src: `https://image.tmdb.org/t/p/w780${data.backdrop_path}`,
        };
        this.loading = false;
      }).catch(() => {
        this.loading = false;
        this.error = true;
      });
    },

    fillCastInfo() {
      this.loadingCast = true;
      this.errorCast = false;
      getSerieCredits(this.ids.tmdb).then(({ cast }) => {
        this.cast = cast.map((actor) => ({
          ...actor,
          src: `https://image.tmdb.org/t/p/w185${actor.profile_path}`,
        }));
        this.loadingCast = false;
      }).catch(() => {
        this.loadingCast = false;
        this.errorCast = true;
      });
    },

    onScroll(e) {
      if (e.target.scrollTop > 130) {
        this.headerHeight = '130px';
        return;
      }
      this.headerHeight = '180px';
    },

    returnToPreviousPage() {
      if (this.renderType === 'season') {
        this.renderType = 'show';
        return;
      }
      this.$router.go(-1);
    },

    handleCheck(index) {
      this.show.seasons[index].loading = true;
      setTimeout(() => { this.show.seasons[index].loading = false; }, 5000);
    },

    redirect(index) {
      this.renderType = 'season';
      this.seasonIndex = this.show.seasons[index].season_number;
    },
  },

  computed: {
    expandedHeight() {
      return this.headerHeight === '130px' ? 'expanded-body' : '';
    },

    subtitle() {
      return this.season ? this.season.name : null;
    },

    premiere() {
      return this.renderType === 'season' ? this.season.first_air_date : this.show.first_air_date;
    },

    finale() {
      return this.renderType === 'season' ? this.season.last_air_date : this.show.last_air_date;
    },

    numberOfEpisodes() {
      if (this.renderType === 'season') {
        return `${this.season.number_of_episodes} episódios na temporada`;
      }
      return `${this.show.number_of_episodes} em ${this.show.number_of_seasons} temporadas`;
    },

    ready() {
      return !(this.loading && this.loadingCast)
        && (this.renderType !== 'season' || !this.loadingSeason)
        && (this.renderType !== 'season' || !this.errorSeason)
        && !(this.error && this.errorCast);
    },
  },
};
</script>

<style scoped>
.card-max-height {
  max-height: calc(100vh - 180px + 16px);
}

.card-max-height.expanded-body {
  max-height: calc(100vh - 130px + 16px);
}
</style>

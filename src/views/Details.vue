<template>
  <main-wrapper
    no-menu
  >
    <v-card
      v-if="ready"
      class="overflow-hidden"
    >
      <app-header
        v-if="show.name"
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
              v-if="show.status"
              class="pb-1 pt-0"
              cols="6"
              md="3"
            >
              <span class="caption text-uppercase"> Status: </span><br>
              {{status}}
            </v-col>
            <v-col
              v-if="premiere"
              class="pb-1 pt-0"
              cols="6"
              md="3"
            >
              <span class="caption text-uppercase"> Estreia: </span><br>
              {{premiere}}
            </v-col>
            <v-col
              v-if="finale"
              class="pb-1 pt-0"
              cols="6"
              md="3"
            >
              <span class="caption text-uppercase"> Último episódio: </span><br>
              {{finale}}
            </v-col>
            <v-col
              v-if="show.episode_run_time"
              class="pb-1 pt-0"
              cols="6"
              md="3"
            >
              <span class="caption text-uppercase"> Duração do episódio: </span><br>
              {{show.episode_run_time}} min
            </v-col>
            <v-col
              v-if="show.status !== STATUS.IN_PRODUCTION"
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
            v-if="overview"
            class="pt-3"
          >
            <p
              class="mx-3 mb-3 caption pr-3 text-end text-uppercase"
            >
              Sinopse
            </p>
            <v-divider class="mb-5"/>
            {{overview}}
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
            v-if="showSeasonSection"
            class="pt-3"
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
            v-if="showEpisodesSection"
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
  getSerieSummary,
} from '@/services';
import AppHeader from '../components/AppHeader.vue';
import ActorsCarousel from '../components/ActorsCarousel.vue';
import CheckableCard from '../components/CheckableCard.vue';
import EpisodePanelHeader from '../components/EpisodePanelHeader.vue';
import { SEASON } from '../constants/routes';
import { STATUS_TRANSLATION, STATUS } from '../constants/status';
import { GENRES_TRANSLATION } from '../constants/genres';

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
    },
    seasonNumber: {
      type: [Number, String],
      default: null,
    },
    slug: {
      type: String,
      default: null,
      required: true,
    },
  },

  data() {
    return {
      STATUS,
      internalIds: this.ids,
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
    if (this.internalIds === null) {
      this.handleDirectRouteAccess();
      return;
    }
    this.fillSerieDetails();
    if (this.type === 'season') {
      this.fillSeasonDetails();
    }
    this.fillCastInfo();
  },

  watch: {
    type(value) {
      if (value === 'season') {
        this.fillSeasonDetails();
      }
    },
  },

  methods: {
    handleDirectRouteAccess() {
      getSerieSummary(this.slug).then(({ ids }) => {
        this.internalIds = ids;
        this.fillSerieDetails();
        if (this.type === 'season') {
          this.fillSeasonDetails();
        }
        this.fillCastInfo();
      }).catch(() => {
        // redirect to 404 page
        this.$router.push('/');
      });
    },

    fillSeasonDetails() {
      this.loadingSeason = true;
      this.errorSeason = false;
      getSerieSeason(this.internalIds.tmdb, this.seasonNumber).then((data) => {
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
      getSerieDetails(this.internalIds.tmdb).then((data) => {
        this.show = data;
        const genres = this.show.genres.map(
          (genre) => GENRES_TRANSLATION[genre.name] ?? genre.name,
        );
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
          backdrop_src: `https://image.tmdb.org/t/p/w1280${data.backdrop_path}`,
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
      getSerieCredits(this.internalIds.tmdb).then(({ cast }) => {
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
      this.$router.go(-1);
    },

    handleCheck(index) {
      this.show.seasons[index].loading = true;
      setTimeout(() => { this.show.seasons[index].loading = false; }, 5000);
    },

    redirect(index) {
      this.$router.push({
        name: SEASON.NAME,
        params: {
          seasonNumber: this.show.seasons[index].season_number,
          ids: this.internalIds,
        },
      });
    },
  },

  computed: {
    type() {
      return this.seasonNumber !== null ? 'season' : 'tv-show';
    },

    expandedHeight() {
      return this.headerHeight === '130px' ? 'expanded-body' : '';
    },

    subtitle() {
      return this.type === 'season' ? this.season.name : null;
    },

    status() {
      return STATUS_TRANSLATION[this.show.status] ?? this.show.status;
    },

    overview() {
      return this.type === 'season' ? this.season.overview : this.show.overview;
    },

    premiere() {
      return this.type === 'season' ? this.season.first_air_date : this.show.first_air_date;
    },

    finale() {
      return this.type === 'season' ? this.season.last_air_date : this.show.last_air_date;
    },

    numberOfEpisodes() {
      if (this.type === 'season') {
        return `${this.season.number_of_episodes} episódios na temporada`;
      }
      return `${this.show.number_of_episodes} em ${this.show.number_of_seasons} temporadas`;
    },

    showSeasonSection() {
      return this.type !== 'season' && this.show.status !== STATUS.IN_PRODUCTION;
    },

    showEpisodesSection() {
      return this.type === 'season' && this.show.status !== STATUS.IN_PRODUCTION;
    },

    ready() {
      return !(this.loading && this.loadingCast)
        && (this.type !== 'season' || !this.loadingSeason)
        && (this.type !== 'season' || !this.errorSeason)
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

<template>
  <main-wrapper
    no-menu
  >
    <v-card class="overflow-hidden">
      <app-header
        title="Psych"
        subtitle="4ª Temporada"
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
              class="pb-1 pt-0"
              cols="6"
              md="3"
            >
              <span class="caption text-uppercase"> Gênero: </span><br>
              Ação, Aventura, Comédia
            </v-col>
            <v-col
              class="pb-1 pt-0"
              cols="6"
              md="3"
            >
              <span class="caption text-uppercase"> Status: </span><br>
              Cancelada
            </v-col>
            <v-col
              class="pb-1 pt-0"
              cols="6"
              md="3"
            >
              <span class="caption text-uppercase"> Estreia: </span><br>
              25 de setembro de 2007
            </v-col>
            <v-col
              class="pb-1 pt-0"
              cols="6"
              md="3"
            >
              <span class="caption text-uppercase"> Último episódio: </span><br>
              21 de março de 2012
            </v-col>
            <v-col
              class="pb-1 pt-0"
              cols="6"
              md="3"
            >
              <span class="caption text-uppercase"> Duração do episódio: </span><br>
              40 min
            </v-col>
            <v-col
              class="pb-1 pt-0"
              cols="6"
              md="3"
            >
              <span class="caption text-uppercase"> Total de Episódios: </span><br>
              91 em 5 temporadas
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
              Atores
            </p>
            <v-divider></v-divider>
            <actors-carousel
              :actors="actors"
            />
          </div>
          <div
            class="pt-3"
            v-if="type !== 'season'"
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
                v-for="(card, index) in cards"
                class="pb-2"
                :key="index"
                :title="!card.src ? card.title : null"
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
                v-for="(episode, index) in episodes"
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
                      <span class="caption text--disabled">
                        - {{ episode.runtime }}
                      </span>
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
      v-if="loading"
      justify="center"
    >
      <v-progress-circular
        indeterminate
        color="primary"
      />
    </v-row>
    <v-alert
      v-else-if="error"
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
import {
//
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

  data() {
    return {
      loading: false,
      error: false,
      headerHeight: '180px',
      activePanel: null,
      type: 'season',
      episodes: [
        {
          title: '4x05 Shawn Gets the Yips',
          description: 'After a cop bar is shot up in an apparent robbery during Officer McNab\'s birthday celebration, Shawn realizes the shooter was actually targeting Lassiter.',
          aired: '12 September 2009 01:00 on USA Network',
          runtime: '42 mins',
          src: 'https://image.tmdb.org/t/p/w227_and_h127_bestv2/b8mUarVZtTsvHWiV2htl7ibC28e.jpg',
        },
        {
          title: '4x06 Bollywood Homicide',
          description: 'Raj, a young East Indian man whose serious girlfriends have all met with suspicious accidents, is convinced that he is the victim of a curse, but Shawn and Gus aren\'t buying the supernatural explanation. They are convinced that a mysterious assailant is actually responsible and they\'re out to catch the culprit.',
          aired: '19 September 2009 01:00 on USA Network',
          runtime: '42 mins',
          src: 'https://image.tmdb.org/t/p/w227_and_h127_bestv2/bek5mmpDFypkTwBUABTUY1BUQZ0.jpg',
        },
        {
          title: '4x07 High Top Fade Out',
          description: 'Shawn and Gus investigate the death of Leonald Callahan, aka Diddle, a computer cryptologist who was the baritone in Gus’s old college a capella group.',
          aired: '26 September 2009 01:00 on USA Network',
          runtime: '43 mins',
          src: 'https://image.tmdb.org/t/p/w227_and_h127_bestv2/dFpScHJvBRkZf275qrbhV00YOK5.jpg',
        },
      ],
      cards: [
        {
          title: '1ª Temporada',
          src: 'https://image.tmdb.org/t/p/w130_and_h195_bestv2/sKBT62pd7hY6g394dxh0nLpBVtQ.jpg',
          loading: false,
        },
        {
          title: '2ª Temporada',
          src: 'https://image.tmdb.org/t/p/w130_and_h195_bestv2/saFSDEenUvCmJUDE3XaEclPnx2j.jpg',
          loading: false,
        },
        {
          title: '3ª Temporada',
          src: 'https://image.tmdb.org/t/p/w130_and_h195_bestv2/fp1z9onRhSOCOXWb4HtYgVPGixD.jpg',
          loading: false,
        },
        {
          title: '4ª Temporada',
          src: 'https://image.tmdb.org/t/p/w130_and_h195_bestv2/3FhlRt6oYEAbCbVjbbCq8IBIVam.jpg',
          loading: false,
        },
      ],
      actors: [
        {
          name: 'James Roday',
          character: 'Shawn Spencer',
          regularity: 'regular', // recurring, guest
          src: 'https://image.tmdb.org/t/p/w138_and_h175_face/1iRFSkNsB45BHUMyWww2h6K9B8Z.jpg',
        },
        {
          name: 'Dulé Hill',
          character: 'Burton Guster',
          regularity: 'regular', // recurring, guest
          src: 'https://image.tmdb.org/t/p/w138_and_h175_face/fPJ8lIx6WwBgO2AhnHQSeiZiAUy.jpg',
        },
        {
          name: 'Timothy Omundson',
          character: 'Carlton Lassiter',
          regularity: 'regular', // recurring, guest
          src: 'https://image.tmdb.org/t/p/w138_and_h175_face/fPhLMiodU7mVegOYvJ8aoj84ZHJ.jpg',
        },
        {
          name: 'Maggie Lawson',
          character: 'Juliet O\'Hara',
          regularity: 'regular', // recurring, guest
          src: 'https://image.tmdb.org/t/p/w138_and_h175_face/9AZEDpnDrOMkCf9hqWhY4szrv3X.jpg',
        },
        {
          name: 'Kirsten Nelson',
          character: 'Karen Vick',
          regularity: 'regular', // recurring, guest
          src: 'https://image.tmdb.org/t/p/w138_and_h175_face/7TfweasXJLw5cKNAiV1xYzIJYcT.jpg',
        },
        {
          name: 'Corbin Bernsen',
          character: 'Henry Spencer',
          regularity: 'regular', // recurring, guest
          src: 'https://image.tmdb.org/t/p/w138_and_h175_face/mLftTYHrvct0VBB8pGhJjLHZUXQ.jpg',
        },
        {
          name: 'Sage Brocklebank',
          character: 'Buzz McNab',
          regularity: 'recurring',
          src: 'https://image.tmdb.org/t/p/w138_and_h175_face/7BFFanLsfc2m4FU7Hvw8GDTGOEt.jpg',
        },
      ],
    };
  },

  methods: {
    onScroll(e) {
      if (e.target.scrollTop > 130) {
        this.headerHeight = '130px';
        return;
      }
      this.headerHeight = '180px';
    },

    returnToPreviousPage() {
      console.log('Return to previous page');
    },

    handleCheck(index) {
      this.cards[index].loading = true;
      setTimeout(() => { this.cards[index].loading = false; }, 5000);
    },

    redirect(index) {
      const traktWebsite = 'https://trakt.tv';
      console.log(`Redirect to ${this.cards[index].title} Season's Page`);
      window.location = `${traktWebsite}/shows/${this.cards[index].ids.slug}/seasons/${index}`;
    },
  },

  computed: {
    expandedHeight() {
      return this.headerHeight === '130px' ? 'expanded-body' : '';
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

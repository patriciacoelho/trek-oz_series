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
          >
            <p
              class="mx-3 mb-3 caption pr-3 text-end text-uppercase"
            >
              Temporadas
            </p>
            <v-divider></v-divider>
          </div>
          <div
            class="pt-3"
          >
            <p
              class="mx-3 mb-3 caption pr-3 text-end text-uppercase"
            >
              Recomendações
            </p>
            <v-divider></v-divider>
          </div>
          <br><br><br>
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

export default {
  components: {
    AppHeader,
    ActorsCarousel,
  },

  data() {
    return {
      loading: false,
      error: false,
      headerHeight: '180px',
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

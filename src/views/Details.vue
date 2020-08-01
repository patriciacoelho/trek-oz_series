<template>
  <main-wrapper
    no-menu
  >
    <v-img
      :src="'https://i1.wp.com/elrincon.tv/wp-content/uploads/2014/02/psych.jpg'"
      height="180px"
      class="mb-n4"
    />
    <v-card
      class="px-3 pt-2"
      rounded="xl"
    >
      <v-card-title class="headline primary--text font-weight-bold">Psych</v-card-title>
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

export default {
  components: {
    //
  },

  data() {
    return {
      search: '',
      cards: [],
      loading: false,
      error: false,
    };
  },

  methods: {
    //
  },
};
</script>

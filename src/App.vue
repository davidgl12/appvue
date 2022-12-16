<template>
    <v-app>
        <router-view />
    </v-app>
</template>

<script>
import axios from 'axios';

const ruta = 'http://localhost:3000';

export default {
  data: () => ({
    usuario_actual: null,
  }),
  props: {
    source: String,
  },
  mounted() {
    this.obtenerUsuario();
  },
  methods: {

    async obtenerUsuario() {
      return axios({
        method: 'get',
        url: ruta + '/api/usuario_actual',
      })
        .then((respuesta) => {
          this.usuario_actual = respuesta.data.usuario_actual;
          console.log({respuesta});
        })
        .catch(() => {
          this.$router.push({ name: 'Login' });
        });
    },
    logout() {
      return axios({
        method: 'get',
        url: ruta + '/api/logout',
      })
        .then(() => {
          this.$router.push({ name: 'Login' });
        })
        .catch(() => {
        });
    },
  },
};
</script>

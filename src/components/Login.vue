<template>
  <div>
    <v-form v-model="valido" ref="formulario" lazy-validation>
      <v-text-field
        label="Email:"
        v-model="email"
        :rules="reglasEmail"
        required>
      </v-text-field>
      <v-text-field
        label="Contrseña:"
        v-model="contrasenia"
        type="password"
        required>
      </v-text-field>
      <div :style="{'display': 'flex', 'justify-content': 'center'}">
        <v-btn @click="acceder" :disabled="!valido">Acceder</v-btn>
        <v-btn @click="registrar">Registrarse</v-btn>
      </div>
    </v-form>
  </div>
  <br>
  <br>
  <div :style="{'display': 'flex', 'justify-content': 'space-between'}">
      <v-btn @click="fb" class="btn facebook">Login con Facebook</v-btn>
      <a href="http:/localhost:3000/login/google"><v-btn class="btn google">Login con Google</v-btn></a>
      <a href="http:/localhost:3000/login/linkedin"><v-btn class="btn linkedin" >Login con LinkedIn</v-btn></a>
  </div>
</template>

<script>
import axios from 'axios';

import Swal from 'sweetalert2';

export default {
  data: () => ({
    valido: true,
    email: '',
    contrasenia: '',
    reglasEmail: [
      v => !!v || 'Email requerido',
      v => /\S+@\S+\.\S+/.test(v) || 'Email invalido',
    ],
  }),
  methods: {
    async acceder() {
      return axios({
        method: 'post',
        data: {
          email: this.email,
          contrasenia: this.contrasenia,
        },
        // url: 'http://localhost:8081/usuarios/login',
        url: 'http://localhost:3000/usuarios/login',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          window.localStorage.setItem('auth', res.data.token);
          Swal.fire('', 'Ha iniciado sesión correctamente', 'success')
          /* eslint-disable no-unused-vars */
          .then((res) => this.$router.push({ name: 'Principal' }))
        })
        .catch((error) => {
          const mensaje = error.response.data;
          Swal.fire('Error', `${mensaje}`, 'error');
          this.$router.push({ name: 'Login' });
        });
    },
    async registrar() {
      if (this.valido) {
        // Agregar proceso
        return axios({
          method: 'post',
          data: {
            nombre: this.nombre,
            email: this.email,
            contrasenia: this.contrasenia,
          },
          url: 'http://localhost:3000/usuarios/registro',
          // url: '/usuarios/registro',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(() => {
            Swal.fire(
              'Excelente',
              'Se ha registrado correctamente',
              'success',
            );
            this.$router.push({ name: 'PrincipalPagina' });
          })
          .catch((error) => {
            const mensaje = error.response.data.mensaje;
            Swal.fire('Error', `${mensaje}`, 'error')
            this.$router.push({ name: 'Login' });
          });
      }
      return true;
    },
    async fb() {
        window.location.replace("http:/localhost:3000/login/facebook");
    },
    limpiar() {
      this.$refs.formulario.reset();
    },
  },
};
</script>
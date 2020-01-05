<template>
  <div class="card z-depth-5">
    <div class="card-content">
      <div class="row">
        <span class="card-title">Bem vindo</span>
        <form class="form">
          <div class="row">
            <div class="input-field col s12 l12 lx12">
              <input type="text" class="validate" id="u_input" />
              <label for="u_input">E-mail</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12 l12 lx12">
              <input type="password" name="p_input" id="p_input" />
              <label for="p_input">Senha</label>
            </div>
          </div>
          <div class="row">
            <button type="button" class="waves-effect waves-light btn-large blue darken-3 z-depth-2">
              Login
            </button>
          </div>
          <div class="row">
            <button type="button" class="waves-effect waves-light btn-large blue lighten-2 z-depth-2">
              <font-awesome-icon :icon="['fab', 'google']" size="lg" ></font-awesome-icon>
              Login com conta google
            </button>
          </div>
          <div class="row">
            <button type="button" class="waves-effect waves-light btn-large red lighten-1 z-depth-2">
              Voltar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import "reflect-metadata";
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {
  }
})
export default class AuthForm extends Vue {}
</script>
<style lang="scss">
.card {
  margin-top: 30%;
  .form {
    padding: 15px;

    button {
      margin: 5px;
      width: 98%;
    }
  }
}
</style>
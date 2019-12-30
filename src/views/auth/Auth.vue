<template>
  <div>
    <form>
      <label>Login</label>
      <input type="text" name="u_input" id="u_input">
      <label>Password</label>
      <input type="password" name="p_input" id="p_input">
      <button>Auth</button>
    </form>
  </div>
</template>

<script lang="ts">
import 'reflect-metadata'
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class Auth extends Vue {}
</script>

<style scoped>

</style>
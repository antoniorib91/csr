<template>
  <div class="container">
    <div class="row">
      <div class="container">
        <div class="row">
          <div class="col s10 l6 xl6 offset-s1 offset-l3 offset-xl3">
            <AuthForm></AuthForm>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import 'reflect-metadata'
import { Component, Vue, Prop } from 'vue-property-decorator';
import AuthForm from './components/AuthForm.vue';

@Component({
  components: {
    AuthForm
  }
})
export default class Auth extends Vue {}
</script>

<style lang="scss" scoped>
.centered {
  align-items: center;
  justify-content: center;
}
</style>
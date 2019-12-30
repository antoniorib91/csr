<template>
  <div class="nav">
    <div class="nav__links">Links</div>
    <div><Logo></Logo></div>
    <div class="nav__links">Links2</div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Logo from './Logo.vue';
@Component({
  components: {
    Logo
  }
})
export default class Menu extends Vue {
  @Prop() private msg!: string;
}
</script>
<style lang="scss">
.nav {
  display: flex;
  justify-content: center;
  width: 100%;

  &__links {
    line-height: 100px;
  }
}
</style>
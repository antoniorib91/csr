<template>
  <div class="nav">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  components: {}
})
export default class Menu extends Vue {
  @Prop() private msg!: string;
}
</script>

<style lang="scss">

@import '@/assets/scss/variables.scss';
.nav {
  display: flex;
  justify-content: center;
  width: 100%;
  background-image: linear-gradient(to right, $brown_shades , $brown);
  position: relative;
  -webkit-box-shadow: 0  3px 12px -4px  $black;
  -moz-box-shadow: 0  3px 12px -4px  $black;
  box-shadow: 0  3px 12px -4px  $black;
//  #222;
}
</style>
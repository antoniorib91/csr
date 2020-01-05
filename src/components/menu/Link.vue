<template>
  <div class="nav__links">
    <a :href="url" >
      <slot></slot>
    </a>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator'

  @Component({})
  export default class Link extends Vue {
    @Prop({default: '#'})
    url: string | undefined;
  }
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';
.nav {
  &__links {
    font-family: 'Playfair';
    font-style:  italic;
    font-weight: bold;
    font-size: 21px;  
    line-height: 100px;
    padding: 0px 10px; 
    a {
       color: $black2;
      &:hover {
        color: $black;
        font-size: 22px;
      }
    }
  }
}
</style>
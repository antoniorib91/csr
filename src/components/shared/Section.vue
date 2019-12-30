<template>
  <div class="section">
    <slot></slot>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  
  @Component({})
  export default class Section extends Vue {}
</script>
<style lang="scss">
.section {
  padding: 10px 20px;
}
</style>
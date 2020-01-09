<template>
  <div>
    <img id="logo" width="150" height="100" src="@/assets/logo.png"/>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  
  @Component({})
  export default class Logo extends Vue {}
</script>

<style lang="scss" scoped>
#logo {
  position: absolute;
  margin: 0px 10px 0px -70px;
}
</style>
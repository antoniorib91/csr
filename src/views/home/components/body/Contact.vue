<template>
  <div class="row">
    <div class="col s12 l12 xl12">
      <div class="event">
        <h1 class="center-align">Contato:</h1>  
     
      </div>
    </div>
  </div>  
</template>
<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator'

  @Component({})
  export default class Contact extends Vue {}
</script>
<style lang="scss">
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 80vh;
}
</style>
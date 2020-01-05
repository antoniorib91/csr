<template>
  <div class="row">
    <div class="col s12 l6 xl6">
      <div class="about">
        <h1 class="center-align">Sobre nós:</h1>  
        <p class="center-align">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula turpis non erat luctus, quis vestibulum quam rutrum. 
          Sed dapibus et dolor in ornare. Praesent imperdiet nisi at varius laoreet. Proin quis nisi vel ex tempus dignissim. Curabitur sit amet cursus felis.
          Nulla facilisi. Vivamus pharetra at enim blandit finibus. Sed quam magna, viverra ut pellentesque ac, congue quis velit.
          Phasellus condimentum tincidunt tellus ut ornare. Fusce commodo odio tristique rhoncus imperdiet. 
          In a nunc rutrum, ullamcorper nunc id, pellentesque nulla. Ut in efficitur neque. Morbi et volutpat ante, vitae iaculis nisi. 
          Duis eget dignissim quam, placerat egestas nulla. Nulla non est odio.  
        </p>  
      </div>
    </div>
    <div class="col s12 l6 xl6">
      <h1>Carol Photo Here</h1>
    </div>
  </div>  
</template>
<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator'

  @Component({})
  export default class About extends Vue {}
</script>
<style lang="scss">
.about {
  height: 88vh;
}
</style>
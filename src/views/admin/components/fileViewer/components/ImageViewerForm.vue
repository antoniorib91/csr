<template>
  <div :class="klass">
    <div class="input-field col s12 l12 lx12">
      <input type="text" name="d_input" id="d_input" />
      <label for="p_input">Descrição</label>
    </div>
    <div class="input-field col s12 l12 lx12">
      <input type="text" name="t_input" id="t_input" />
      <label for="p_input">Título da Imagem para o SEO</label>
    </div>
  </div>
</template>
<script lang="ts">
import 'reflect-metadata'
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {
    
  }
})
export default class ImageViewerForm extends Vue {
  @Prop()
  public imageDate: object | undefined;
}
</script>
<style lang="scss">

</style>
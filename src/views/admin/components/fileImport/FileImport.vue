<template>
  <div class="col s12 l12 lx12">
    <label for="i_file" class="input_file">
      <span class="waves-effect waves-light btn blue lighten-2" >
        <font-awesome-icon :icon="['fas', 'file-upload']" size="lg" ></font-awesome-icon> 
      </span>
      <span>{{ fileTitle }}</span>
    </label>
    <input type="file" id="i_file" />
  </div>
</template>
<script lang="ts">
import 'reflect-metadata'
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {
    
  }
})
export default class FileImport extends Vue {

  private INITIALTITLE: string = 'Nenhum arquivo selecionado';
  
  public fileTitle: string = this.INITIALTITLE;

}
</script>
<style lang="scss">
#i_file {
  visibility: hidden;
}

.input_file {
  cursor: pointer;

  span {
    margin-right: 5px;
  }
}
</style>
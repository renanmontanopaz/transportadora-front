<template>


  <columns>
    <div class="column">
      <h1 class="title">Cadastrar Frete</h1>
    </div>
    <div class="formulario">
      <div class="field">
        <label class="label">Cidade de Origem</label>
        <div class="control">
          <input class="input" type="text" placeholder="Insira a cidade">
        </div>
      </div>

      <div class="field">
        <label class="label">Cidade de Destino</label>
        <div class="control">
          <input class="input" type="text" placeholder="insira a cidade">
        </div>
      </div>

      <div class="field">
        <label class="label">Produto</label>
        <div class="control">
          <input class="input" type="text" placeholder="insira o produto">
        </div>
      </div>

      <div class="field">
        <label class="label">Preço por tonelada</label>
        <div class="control">
          <input class="input" type="text" placeholder="Informe o preço">
        </div>
      </div>

      <div class="field">
        <label class="label">Caminhão</label>
        <div class="control">
          <input class="input" type="text" placeholder="Informe o caminhão">
        </div>
      </div>

      <div class="field">
        <label class="label">Motorista</label>
        <div class="control">
          <div class="select">
            <select>
              <option>Lucas</option>
              <option>Schulz</option>
              <option>Allyson</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-success" style="background-color: #00D1B2; font-weight: bold">Cadastrar</button>
        </div>
        <div class="control">
          <button class="button is-link is-light"><router-link to="/frete">Voltar</router-link></button>
        </div>
      </div>
    </div>
  </columns>

</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
@Component
export default class CadastroFreteView extends Vue{

}
</script>

<style scoped>

  .formulario{
    position: absolute;
    max-width: 427px;
    width: 60%;
    left: 50%;
    top: 70%;
    transform: translate(-50%,-70%);
  }
</style>
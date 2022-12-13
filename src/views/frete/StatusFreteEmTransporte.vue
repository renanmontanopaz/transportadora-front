<template>
  <columns>
    <div class="column">
      <h1 class="title">Preencha os dados para iniciar o frete</h1>
    </div>
    <div class="container">
      <div class="column is-offset-4 is-4">
        <label class="label">Quilômetro Inicial do Caminhão</label>
        <div class="control">
          <input class="input" type="number" placeholder="KM">
        </div>
      </div>
      <div class="column is-offset-4 is-4">
        <label class="label">Peso Inicial</label>
        <div class="control">
          <input class="input" type="number" placeholder="Peso">
        </div>
      </div>
      <div class="column is-offset-4 is-4">
        <label class="label">Data do Transporte</label>
        <div class="control">
          <input class="input" type="date" placeholder="Data">
        </div>
      </div>
      <div class="control">
        <button class="button is-link" style="background-color: #00D1B2; font-weight: bold">Alterar</button>
      </div>
    </div>
  </columns>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {Frete} from "@/model/Frete";
import {FreteClient} from "@/client/Frete.client";



@Component
export default class StatusFreteEmTransporte extends Vue{

  private freteClient: FreteClient = new FreteClient();

  public onClickAlterar(): void{
    this.freteClient.atualizar()
  }
}
</script>

<style scoped>

</style>
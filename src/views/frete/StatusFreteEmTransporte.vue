<template>
  <div>
    <div class="column">
      <h1 class="title">Preencha os dados para iniciar o frete</h1>
    </div>
    <div class="container">
      <div class="column is-offset-4 is-4 field">
        <label class="label">Quilômetro Inicial do Caminhão</label>
        <div class="control">
          <input class="input" type="text" v-model="frete.quilometragemIni" placeholder="KM">
        </div>
      </div>
      <div class="column is-offset-4 is-4 field">
        <label class="label">Peso Inicial</label>
        <div class="control">
          <input class="input" type="text" v-model="frete.pesoInicial" placeholder="Peso">
        </div>
      </div>
      <div class="column is-offset-4 is-4 field">
        <label class="label">Data do Transporte</label>
        <div class="control">
          <input class="input" type="datetime-local" v-model="frete.dataInicio" placeholder="Data">
        </div>
      </div>
      <div class="column is-offset-4 is-4 field">
        <label class="label">Observação</label>
        <div class="control">
          <textarea class="input" type="text" v-model="frete.observacao" placeholder="Observação"/>
        </div>
      </div>
      <div class="control">
        <button @click="Atualizar()" class="button is-link" style="background-color: #00D1B2; font-weight: bold">Alterar</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {Frete} from "@/model/Frete";
import {FreteClient} from "@/client/Frete.client";
import router from "@/router";



@Component
export default class StatusFreteEmTransporte extends Vue{

  public frete: Frete = new Frete();
  private freteClient: FreteClient = new FreteClient();
  private id = Number(this.$route.params.id);
  public freteList: Frete[] = []

  public mounted(): void{
    this.getFrete();
  }

  private getFrete(): void{
    this.freteClient.findById(Number(this.id)).then(
        success =>{
          this.frete = success
          this.frete.statusFrete = 1
          //this.frete = new Frete();
          console.log(this.frete)
        },
        error => console.log(error)
    )
  }

  public Atualizar(): void{
    this.freteClient.atualizar(this.frete).then(
        success =>{
          this.frete = new Frete();
          //this.atualizastatus();
          console.log('Registro atualizado com sucesso')
        },
        error =>{
          console.log(error)
        }
    )

  }
  public atualizastatus(): void{
    this.freteClient.atualizarStatusCargaParaEmTransporte(this.frete).then(
        success =>{
          this.frete = new Frete();
          console.log('atualizado')
        },
        error =>{
          console.log(error)
        }
    )
  }
}
</script>

<style scoped>

</style>
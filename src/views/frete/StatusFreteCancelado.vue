<template>
  <div>
    <div class="column">
      <h1 class="title">Preencha os dados</h1>
    </div>
    <div class="container">
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

@Component
export default class StatusFreteCancelado extends Vue{
  public frete: Frete = new Frete();
  private freteClient: FreteClient = new FreteClient();
  private id = Number(this.$route.params.id);

  public mounted(): void{
    this.getFrete();
  }

  private getFrete(): void{
    this.freteClient.findById(Number(this.id)).then(
        success =>{
          this.frete = success
          this.frete.statusFrete = 5
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
}
</script>

<style scoped>

</style>
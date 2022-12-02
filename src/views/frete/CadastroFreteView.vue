<template>


  <columns>
    <div class="column">
      <h1 class="title">Cadastrar Frete</h1>
    </div>
    <div class="formulario">
      <div class="field">
        <label class="label" onchange="">Cidade de Origem</label>
        <div class="control">
          <input class="input" v-model="frete.cidadeOrigem" type="text" placeholder="Text input">
        </div>
      </div>

      <div class="field">
        <label class="label">Cidade de Destino</label>
        <div class="control">
          <input class="input" type="text" v-model="frete.cidadeDestino" placeholder="Text input">
        </div>
      </div>

      <div class="field">
        <div class="select">
        <select v-model="frete.produto">
          <option>Select dropdown</option>
          <option>With options</option>
        </select>
      </div>
      </div>

      <div class="field">
        <label class="label">Caminhão</label>
        <div class="control">
          <input class="input" type="text" v-model="frete.caminhao" placeholder="Text input">
        </div>
      </div>

      <div class="field">
        <label class="label">Preço por Tonelada</label>
        <div class="control">
          <input class="input" type="text" v-model="frete.precoTonelada" placeholder="Text input">
        </div>
      </div>

      <div class="field">
        <label class="label">Motorista</label>
        <div class="control">
          <input class="input" type="text" v-model="frete.motorista" placeholder="Text input">
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-success" style="background-color: #00D1B2; font-weight: bold" onclick="onClickCadastrar()">Cadastrar</button>
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
import {FreteClient} from "@/client/Frete.client";
import {Frete} from "@/model/Frete";
import {Produto} from "@/model/Produto";
import {ProdutoClient} from "@/client/Produto.client";

@Component
export default class CadastroFreteView extends Vue{

  private freteClient: FreteClient = new FreteClient()
  private produtoClient: ProdutoClient = new ProdutoClient()
  public frete: Frete = new Frete()
  public produtoList: Produto[] = []

  public mounted(): void{

    this.selectProdutoList();
  }

  public onClickCadastrar(): void {

    debugger

    this.freteClient.cadastrar(this.frete).then(
        success =>{
          console.log('Registro cadastrado com sucesso')
          this.frete = new Frete()
        },
        error =>{
          console.log(error)
        }
    )
  }

  private selectProdutoList(): void{
    this.produtoClient.findAll().then(
        success => this.produtoList = success,
        error => console.log(error)
    )
  }
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
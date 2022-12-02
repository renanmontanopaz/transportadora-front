<template>
  <columns>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="column is-four-fifths">
        <a class="navbar-item is-four-fifths" href="#">
          <h1 class="title">Lista de Frete</h1>
        </a>

      </div>
      <div class="column">
        <router-link to="/cadastrar-frete"><button class="button is-success" style="background-color: #00D1B2; font-weight: bold">Cadastrar Frete</button></router-link>
      </div>
    </nav>

    <div class="tabela">
      <table class="table is-bordered is-striped is-narrow is-hoverable">
        <thead class="blue">
        <tr style="background: hsl(171deg, 100%, 41%)">
          <th>Data</th>
          <th>Status do Frete</th>
          <th>Cidade de Origem</th>
          <th>Cidade de Destino</th>
          <th>Placa do Caminhão</th>
          <th>Produto</th>
          <th>Opções</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in freteList" :key="item.id">
          <th>{{item.cadastrar}}

          </th>
          <td>
            <span v-if="item.statusFrete === 'CARGA'" class="tag is-info"> Em carga </span>
            <span v-if="item.statusFrete === 'EM_TRANSPORTE'" class="tag is-info"> Em transporte </span>
            <span v-if="item.statusFrete === 'INTERROMPIDO'" class="tag is-warning"> Interrompido </span>
            <span v-if="item.statusFrete === 'DESCARGA'" class="tag is-primary"> Descarga </span>
            <span v-if="item.statusFrete === 'FATURADO'" class="tag is-success"> Faturado </span>
            <span v-if="item.statusFrete === 'CANCELADO'" class="tag is-danger"> Cancelado </span>
          </td>
          <td>{{item.cidadeOrigem.nome}}</td>
          <td>{{item.cidadeDestino.nome}}</td>
          <td>{{item.caminhao.placa}}</td>
          <td>{{item.produto.nome}}</td>
          <td>
            <div v-if="item.statusFrete === 'CARGA'">
              <button class="button is-small is-default">T</button>
              <button class="button is-small is-default">I</button>
              <button class="button is-small is-default">C</button>
            </div>
            <div v-if="item.statusFrete === 'EM_TRANSPORTE'">
              <button class="button is-small is-default">I</button>
              <button class="button is-small is-default">D</button>
            </div>
            <div v-if="item.statusFrete === 'IMTERROMPIDO'">
              <button class="button is-small is-default">CR</button>
              <button class="button is-small is-default">T</button>
              <button class="button is-small is-default">C</button>
            </div>
            <div v-if="item.statusFrete === 'DESCARGA'">
              <button class="button is-small is-default">F</button>
            </div>
            <div v-if="item.statusFrete === 'FATURADO'">
              Sem ação
            </div>
            <div v-if="item.statusFrete === 'CANCELADO'">
              <button class="button is-small is-default">I</button>
              <button class="button is-small is-default">C</button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </columns>

  <!--<font-awesome-icon icon="fa-solid fa-pen-to-square" /> |
  <font-awesome-icon icon="fa-solid fa-trash" />-->
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import {FreteClient} from "@/client/Frete.client";
  import {Frete} from "@/model/Frete";


  @Component
  export default class FreteListView extends Vue{
    private freteClient: FreteClient = new FreteClient()
    private freteList: Frete[] = []

    public mounted(): void{
      this.listarFretes()
    }

    private listarFretes(): void {
      this.freteClient.findAll().then(
          success => {
            this.freteList = success
          },
          error =>{
            console.log(error)
          }
      )
    }

  }

</script>

<style scoped>

  .tabela{
    align-content: center;
    align-items: center;
    justify-content: center;
    display: flex;
  }
</style>
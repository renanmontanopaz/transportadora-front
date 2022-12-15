<template>
  <div name="coluna">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="column is-four-fifths">
        <a class="navbar-item is-5" href="#">
          <h1 class="title">Lista de Frete</h1>
        </a>


      </div>
      <div class="column">
        <router-link to="/cadastrar-frete"><button class="button is-success" style="background-color: #00D1B2; font-weight: bold">Cadastrar Frete</button></router-link>
      </div>
    </nav>

    <div class="control has-icons-left has-icons-right column is-offset-4 is-4 field is-grouped">
      <input class="input" type="text" v-model="idbusca" placeholder="Pesquise frete por ID">
      <span class="icon is-medium is-left">
    <i class="fas fa-envelope"></i>

  </span>
      <span class="icon is-medium is-right">
    <i class="fas fa-check"></i>

  </span>
      <div class="control">
        <button @click="BuscarFrete()" class="button is-link" style="background-color: #00D1B2; font-weight: bold">Pesquisar</button>
      </div>
    </div>
    <div class="tabela">

      <table class="table is-bordered is-striped is-narrow is-hoverable">
        <thead class="blue">
        <tr style="background: hsl(171deg, 100%, 41%)">
          <th>ID do Frete</th>
          <th>Data &nbsp; &nbsp; &nbsp;|&nbsp; &nbsp; &nbsp; Hora</th>
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
          <td>{{item.id}}</td>
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
              <button @click="onClickAlterar(item.id)" class="button is-small is-default">T</button>
              <button @click="onClickAlterarInt(item.id)" class="button is-small is-default">I</button>
              <button @click="onClickAlterarCanc(item.id)" class="button is-small is-default">C</button>
            </div>
            <div v-if="item.statusFrete === 'EM_TRANSPORTE'">
              <button @click="onClickAlterarInt(item.id)" class="button is-small is-default">I</button>
              <button @click="onClickAlterar(item.id)" class="button is-small is-default">D</button>
            </div>
            <div v-if="item.statusFrete === 'IMTERROMPIDO'">
              <button class="button is-small is-default">CR</button>
              <button @click="onClickAlterar(item.id)" class="button is-small is-default">T</button>
              <button @click="onClickAlterarCanc(item.id)" class="button is-small is-default">C</button>
            </div>
            <div v-if="item.statusFrete === 'DESCARGA'">
              <button class="button is-small is-default">F</button>
            </div>
            <div v-if="item.statusFrete === 'FATURADO'">
              Sem ação
            </div>
            <div v-if="item.statusFrete === 'CANCELADO'">
              <button @click="onClickAlterarInt(item.id)" class="button is-small is-default">I</button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!--<font-awesome-icon icon="fa-solid fa-pen-to-square" /> |
  <font-awesome-icon icon="fa-solid fa-trash" />-->
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import {FreteClient} from "@/client/Frete.client";
  import {Frete} from "@/model/Frete";
  import router from "@/router";


  @Component
  export default class FreteListView extends Vue{
    private freteClient: FreteClient = new FreteClient()
    private freteList: Frete[] = []
    public frete: Frete = new Frete()
    public fretebusca: Frete = new Frete()
    private idbusca = Number(null)

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

    private BuscarFrete(): void{
      this.freteClient.findById(this.idbusca).then(
          success => {
            this.fretebusca = success
            console.log(this.fretebusca)
          },
          error =>{
            console.log(error)
          }
      )
    }

    public onClickAlterar(id: number): void{
      router.push({path: `/em-transporte/${id}`})
    }
    public onClickAlterarInt(id: number): void{
      router.push({path: `/interrompido/${id}`})
    }
    public Atualizar(): void{
      this.freteClient.atualizar(this.frete).then(
          success =>{
            this.frete = new Frete()
            //this.atualizastatus();
            console.log('Registro atualizado com sucesso')
          },
          error =>{
            console.log(error)
          }
      )

    }
    public onClickAlterarCanc(id: number): void{
      router.push({path: `/cancelado/${id}`})
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
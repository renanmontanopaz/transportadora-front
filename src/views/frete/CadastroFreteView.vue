<template>


  <columns>
    <div class="column">
      <h1 class="title">Cadastrar Frete</h1>
    </div>
    <div class="container">
      <div class="column is-offset-3 is-6 field is-grouped">
        <div class="column is-fullwidth">
          <label class="label">Estado de Origem</label>
          <div class="select is-fullwidth">
            <select @change="myFunction()"  id="estado" type="text">
              <option selected="" disabled="" hidden></option>
              <option  :value="item.id" v-for="item in estadosList" :key="item.id">{{item.estado}}</option> -->
            </select>
          </div>
        </div>
        <div class="column is-fullwidth">
          <label class="label">Cidade de Origem</label>
          <div class="select is-fullwidth">
            <select  type="text" v-model="frete.cidadeOrigem">
              <option :value="item"  v-for="item in cidadeEstadoList" >{{item.nome}}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="column is-offset-3 is-6 field is-grouped">
        <div class="column is-fullwidth">
          <label class="label">Estado de Destino</label>
          <div class="select is-fullwidth">
            <select @change="myFunctionDois()"  id="estado02" type="text">
              <option selected="" disabled="" hidden></option>
              <option  :value="item.id" v-for="item in estadosList" :key="item.id">{{item.estado}}</option> -->
            </select>
          </div>
        </div>
        <div class="column is-fullwidth">
          <label class="label">Cidade de Destino</label>
          <div class="select is-fullwidth">
            <select type="text" value="" v-model="frete.cidadeDestino">
              <option :value="item"  v-for="item in cidadeEstadoList2" :key="item.id">{{item.nome}} </option>
            </select>
          </div>
        </div>
      </div>
      <div class="column is-offset-3 is-6 field is-grouped">
        <div class="column is-fullwidth">
          <label class="label">Caminhão</label>
          <div class="select is-fullwidth">
            <select type="text" v-model="frete.caminhao">
              <option :value="item" v-for="item in caminhaoList" :key="item.id">{{item.placa}}</option>
            </select>
          </div>
        </div>
        <div class="column is-fullwidth">
          <label class="label">Motorista</label>
          <div class="select is-fullwidth">
            <select type="text" v-model="frete.motorista">
              <option :value="item" v-for="item in motoristaList" :key="item.id">{{item.nome}}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="column is-offset-3 is-6 field is-grouped">
        <div class="column is-fullwidth">
          <label class="label">Preço por Tonelada</label>
          <div class="control">
            <input class="input" type="text" v-model="frete.precoTonelada" placeholder="Text input">
          </div>
        </div>
        <div class="column is-fullwidth">
          <label class="label">Produto</label>
          <div class="select is-fullwidth">
            <select type="text" v-model="frete.produto">
              <option :value="item"  v-for="item in produtoList" >{{item.nome}}</option>
            </select>
          </div>
        </div>
      </div>



      <div class="column is-offset-3 is-6 field is-grouped">
        <div class="control">
          <button class="button is-link" style="background-color: #00D1B2; font-weight: bold" @click="onClickCadastrar()">Cadastrar</button>
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
import {Cidade} from "@/model/Cidade";
import {CidadeClient} from "@/client/Cidade.client";
import {CaminhaoClient} from "@/client/Caminhao.client";
import {Caminhao} from "@/model/Caminhao";
import {UsuarioClient} from "@/client/Usuario.client";
import {Usuario} from "@/model/Usuario";
import {EstadoClient} from "@/client/Estado.client";
import {Estado} from "@/model/Estado";

@Component
export default class CadastroFreteView extends Vue{

  private freteClient: FreteClient = new FreteClient()
  private produtoClient: ProdutoClient = new ProdutoClient()
  private cidadeClient: CidadeClient = new CidadeClient()
  private caminhaoClient: CaminhaoClient = new CaminhaoClient()
  private motoristaClient: UsuarioClient = new UsuarioClient()
  private estadoClient: EstadoClient = new EstadoClient()
  public frete: Frete = new Frete()
  public estadosList: Estado[] = []
  public produtoList: Produto[] = []
  public cidadeList: Cidade[] = []
  public caminhaoList: Caminhao[] = []
  public motoristaList: Usuario[] = []
  public cidadeEstadoList: Cidade[] = []
  public cidadeEstadoList2: Cidade[] = []

  public mounted(): void{

    this.selectMotoristaList();
    this.selectCaminhaoList();
    this.selectProdutoList();
    this.selectCidadeList();
    this.selectEstadoList();
    //this.myFunction();
  }

  public onClickCadastrar(): void {


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
  private selectCidadeList(): void{
    this.cidadeClient.findAll().then(
        success => this.cidadeList = success,
        error => console.log(error)
    )
  }
  private selectEstadoList(): void{
    this.estadoClient.findAll().then(
        success => this.estadosList = success,
        error => console.log(error)
    )
  }
  private selectCaminhaoList(): void{
    this.caminhaoClient.findAll().then(
        success => this.caminhaoList = success,
        error => console.log(error)
    )
  }
  private selectMotoristaList(): void{
    this.motoristaClient.findAll().then(
        success => this.motoristaList = success,
        error => console.log(error)
    )
  }
  public myFunction(): void {

     let idEstado  = (<HTMLSelectElement>document.getElementById('estado')).value;
     this.cidadeClient.findByEstado(Number(idEstado)).then(
         success => this.cidadeEstadoList = success,
         error => console.log(error)
    )
     console.log(this.cidadeEstadoList);
  }

  public myFunctionDois(): void {

    let idEstado2  = (<HTMLSelectElement>document.getElementById('estado02')).value;
    this.cidadeClient.findByEstado(Number(idEstado2)).then(
        success => this.cidadeEstadoList2 = success,
        error => console.log(error)
    )
    console.log(this.cidadeEstadoList);
  }
}
</script>

<style scoped>

</style>
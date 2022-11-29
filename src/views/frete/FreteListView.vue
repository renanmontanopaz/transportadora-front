<template>
  <columns>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="column is-four-fifths">
        <a class="navbar-item is-four-fifths" href="#">
          <h1 class="title">Lista de Frete</h1>
        </a>

      </div>
      <div class="column">
        <router-link to="/cadastrar-frete"><button class="button is-success">Cadastrar Frete</button></router-link>
      </div>
    </nav>

    <div class="tabela">
      <table class="table is-bordered">
        <thead>
        <tr class="is-selected">
          <th>Data</th>
          <th>Status do Frete</th>
          <th>Cidade de Origem</th>
          <th>Cidade de Destino</th>
          <th>Placa do Caminhão</th>
          <th>Opção</th>
        </tr>
        </thead>
        <tfoot>
        <tr class="is-selected">
          <th>Data</th>
          <th>Status do Frete</th>
          <th>Cidade de Origem</th>
          <th>Cidade de Destino</th>
          <th>Placa do Caminhão</th>
          <th>Opção</th>
        </tr>
        </tfoot>
        <tbody>
        <tr>
          <th>11/11/2222</th>
          <td><a href="#" title="Leicester City F.C.">Em Transporte</a>
          </td>
          <td>Fod do Iguaçu</td>
          <td>Toledo</td>
          <td>BEW5E07</td>
          <td>
            <font-awesome-icon icon="fa-solid fa-pen-to-square" /> |
            <font-awesome-icon icon="fa-solid fa-trash" />
          </td>
        </tr>
        <tr>
          <th>11/11/2222</th>
          <td><a href="#" title="Leicester City F.C.">Em Transporte</a>
          </td>
          <td>Fod do Iguaçu</td>
          <td>Toledo</td>
          <td>BEW5E07</td>
          <td>
            <font-awesome-icon icon="fa-solid fa-pen-to-square" /> |
            <font-awesome-icon icon="fa-solid fa-trash" /></td>
        </tr>
        <tr>
          <th>11/11/2222</th>
          <td><a href="#" title="Leicester City F.C.">Em Transporte</a>
          </td>
          <td>Fod do Iguaçu</td>
          <td>Toledo</td>
          <td>BEW5E07</td>
          <td>
            <font-awesome-icon icon="fa-solid fa-pen-to-square" /> |
            <font-awesome-icon icon="fa-solid fa-trash" />
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </columns>

</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
@Component
export default class FreteListView extends Vue{
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
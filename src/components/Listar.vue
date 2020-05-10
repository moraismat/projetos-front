<template>
  <div>
    <nav class="nav-extends deep-purple accent-4">
        <div class="nav-wrapper">
            <ul>
                <li><router-link to="/cadastro">Cadastro</router-link></li>
                <li><router-link to="/listar">Listar</router-link></li>
            </ul>
        </div>
    </nav>
      
  <div class="container-fluid">
    
    <table v-on="listar()">
      <thead>
        <tr>
            <th>Titulo</th>
            <th>Descrição</th>
            <th>Cliente</th>
            <th>Data</th>
            <th>Pessoas Envolvidas</th>
            <!--<th><button class="waves-effect waves-light btn-small" @click="listar()">Listar</button></th>-->
          </tr>
      </thead>
      <tbody>
        <div class="alert alert-warning" role="alert" v-show="projetos.length == 0">
          Nenhum projeto cadastrado!
        </div>
        <tr class="table table-striped" v-show="projetos.length > 0">

          <tr v-for="projeto of projetos" :key="projeto.id">
            <td>{{projeto.titulo}}</td>
            <td>{{projeto.descricao}}</td>
            <td>{{projeto.cliente}}</td>
            <td>{{projeto.dataEntrega}}</td>
            <td>{{projeto.pessoasEnvolvidas}}</td>

        </tr>


      </tbody>

    </table>

  </div>
</div>
</template>

<script>

import Projeto from '../services/projetos'


export default{

  

  data(){
    return{
      // Guardar os dados dos campos nome, quantidade e valor
      projeto: {
        id: '',
        titulo: '',
        descricao: '',
        cliente: '',
        dataEntrega: '',
        pessoasEnvolvidas: ''
      },
      projetos: [],
      errors: []
    }
  },

  // Carregando a API
  

    // Criando os metodos
  methods:{

    //Metodo Listar
    listar(){
      Projeto.listar().then(resposta => {
      this.projeto = {}
      this.projetos = resposta.data
      })
    },

    remover(projeto){
      
        Projeto.apagar(projeto).then(() => {
        this.listar()
      })
      
    }

  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>

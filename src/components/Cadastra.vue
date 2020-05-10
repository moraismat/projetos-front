<template>
  
  <div>
      <nav class="nav-extends deep-purple accent-4">
          <div class="nav-wrapper">
              <ul>
                <li><router-link to="/cadastro">Cadastro</router-link></li>
                <li><router-link to="/listar">Listar</router-link></li>
              </ul>
          </div>
          <ul>
          <li v-for="(erro, index) of errors" :key="index">
            campo <b>{{erro.field}}</b> - {{ erro.defaultMessage}}
          </li>
          </ul>
          
      </nav>

      <div class="row">
      
      <form class="col s12" style="margin: 10px" @submit.prevent="salvar">
          <div class="row">
              <div class="input-field col s12">        
                  <label>Titulo do Projeto</label><br>
                  <input type="text" v-model="projeto.titulo">
              </div>    
          </div>
          <div class="row">
              <div class="input-field col s12">        
                  <label>Descrição do Projeto</label><br>
                  <input type="text" v-model="projeto.descricao">
              </div>
          </div>
          <div class="row">
              <div class="input-field col s12">        
                  <label>Nome do Cliente</label><br>
                  <input type="text" v-model="projeto.cliente">
              </div>
          </div>
          <div class="row">
              <div class="input-field col s12">        
                  <label>Pessoas Envolvidas</label><br>
                  <input type="text" v-model="projeto.pessoasEnvolvidas">
              </div>
          </div>
          <div class="row">
              <div class="input-field col s12">        
                  <div>
                      <label>Data de Entrega</label><br>
                      <input type="date" v-model="projeto.dataEntrega">
                  </div>
              </div>    
          </div>
      
      <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>

      </div>
             

    <table class="highlight" @on-load="listar()">

        <thead>

          <tr>
            <th>Titulo</th>
            <th><button class="btn btn-primary" @click="listar()" type="submit">Listar</button></th>
          </tr>

        </thead>

        <tbody>
            <div class="alert alert-warning" role="alert" v-show="projetos.length == 0">
             Nenhum projeto cadastrado
            </div>
            <tr>

                <tr v-for="projeto of projetos" :key="projeto.id">
                    <td>{{projeto.titulo}}</td>
                    <td>
                      <button @click="editar(projeto)" class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
                      <button @click="remover(projeto)" class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
                    </td>

            </tr>

        </tbody>
      
      </table>



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

    //metodos para criar
    salvar(){

      if(!this.projeto.id){
        Projeto.salvar(this.projeto).then(() =>{
        alert("Salvo com sucesso!")
        this.listar()
      }).catch(e => {
        this.errors = e.response.data.errors
      })
      }else{
        Projeto.atualizar(this.projeto).then(() =>{
        this.projeto = {}
        alert("Salvo com sucesso!")
        this.listar()
      }).catch(e => {
        this.errors = e.response.data.errors
      })
      }

     
    },

    editar(projeto){
      this.projeto = projeto
    },

    remover(projeto){
      if(confirm('Deseja excluir o produto?')){
        Projeto.apagar(projeto).then(() => {
        this.listar()
      })
      }
      
    }

    }

    

}
</script>
<style scoped>

</style>
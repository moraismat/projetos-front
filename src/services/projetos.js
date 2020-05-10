import {http} from './config'

export default{
    
    // Metodo Listar
    listar:() => {
        return http.get('projetos')
    }, 
    
    // Método salvar
    salvar:(projeto)=>{
        return http.post('projeto',projeto)
    },

    atualizar:(projeto) => {
        return http.put('projeto', projeto)
    },

    apagar:(projeto) => {
        return http.delete('projeto', {data: projeto})
    }
    
}
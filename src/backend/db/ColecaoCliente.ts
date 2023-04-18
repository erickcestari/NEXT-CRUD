import Cliente from "@/core/Cliente";
import ClienteRespositorio from "@/core/ClienteRepositorio";
import firebase from "../config";
export default class ColecaoCliente implements ClienteRespositorio{

     #conversor = {   // conversor vai converter a classe cliente para algo que vai ser persistido no firestore
                    
        toFirestore(cliente: Cliente) {
            return{
                nome: cliente.nome,
                idade: cliente.idade,
            }
        },
                // recebe algo do firestore e converte pra classe 
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions) : Cliente {
            const dados = snapshot.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot.id )

        }
    }


    async salvar(cliente: Cliente): Promise<Cliente> {
        if(cliente?.id){
            await this.#colecao().doc(cliente.id).set(cliente)
            return cliente
        } else{
            const docRef = await this.#colecao().add(cliente)
            const doc = await docRef.get()
            return doc.data() as Cliente
        }
    }

    async excluir(cliente: Cliente): Promise<void> {
        
        return this.#colecao().doc(cliente.id).delete()
    }

    async obterTodos(): Promise<Cliente[]> {
        const query = await this.#colecao().get()
        return query.docs.map(doc => doc.data()) ??  []
    }

    #colecao() {
        return firebase
        .firestore().collection('clientes')
        .withConverter(this.#conversor)
    }
}
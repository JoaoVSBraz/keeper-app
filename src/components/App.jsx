import React, { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import CreateArea from "./CreateArea"

function App() {
    // A função useState() retorna um Array de duas posições. A primeira trata-se da variável que obterá a característica de estado. A segunda trata-se de uma função que atualiza a primeira.
    // Abaixo a técnica Destructuring é utilizada para extrair duas variáveis, cada uma contendo uma posição do array retornado pelo useState().
    const [notes, setNotes] = useState([])

    // A função addNote() abaixo executa a função setNotes() para atualizar o array adicionando um novo objeto. Ela é executada quando o usuário clica no botão Add da interface.
    function addNote(newNote) {

        // A expressão '...prevNotes' na verdade é um operador chamado Spread Operator. Ele realiza uma cópia do array especificado imediatamente após os 3 pontos.
        setNotes((prevNotes) => {
            return [...prevNotes, newNote]
        })
    }

    // A função deleteNote() executa uma sequência de funções a fim de deletar um objeto específico identificado pelo parâmetro id fornecido. 
    
    //A primeira função executada é a setNotes() que executa uma arrow function com um parâmetro, que neste caso, refere-se ao array de notes. Esta arrow function, por sua vez, executa a função filter() em cima do array de notes recebido como parâmetro. Por fim, esta, retorna todos os elementos que possuem o índice (index) diferente do id informado no início.
    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((note, index) => {
                return index !== id
            })
        })
    }

    return (
        <div>
            <Header />

            {/* Componente CreateArea recebe como propriedade a função addNote() */}
            <CreateArea onAdd={addNote} />

            {/* Iteração em cima do array Notes retornando um componente para cada posição */}
            {notes.map((note, index) => <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote} />)}
            <Footer />
        </div>
    )
}

export default App
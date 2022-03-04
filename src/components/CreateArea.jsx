import React, { useState } from "react"
import AddIcon from '@mui/icons-material/Add'
import Fab from '@mui/material/Fab'
import Zoom from '@mui/material/Zoom'

function CreateArea(props) {

    const [note, setNote] = useState({
        title: '',
        content: ''
    })

    // A função handleChange() é um Event Handler: Uma função executada sempre que um evento ocorre. Neste caso, o evento trata-se do onChange presente nos elementos Input e Textarea.
    function handleChange(e) {

        // Abaixo os atributos 'name' e 'value' são extraídos do evento e armazenados em variáveis através da técnica de Destructuring.
        const { name, value } = e.target

        // Abaixo o uso de colchetes envolvendo 'name' indica que o elemento em questão não é uma propriedade, mas uma variável dinâmica que armazenou o atributo name do elemento que disparou o evento. Dessa forma, a propriedade pode ser 'title' ou 'name'. 
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    // Acho que a função submitNote() também é um Event Handler, apesar de não ter certeza.
    function submitNote(e) {

        // A função onAdd() trata-se da função addNote() localizada no componente App e recebida como propriedade pelo elemento CreateArea.
        props.onAdd(note)

        // O objeto note, após ser enviado ao componente App no passo anterior, tem seus valores resetados a fim refleti-los na interface.
        setNote({
            title: '',
            content: ''
        })

        // A função preventDefaul() é utilizada abaixo para evitar o comportamento de auto reload executado por padrão pelo evento.
        e.preventDefault()
    }

    return (
        <>
            <form className="create-note">
                <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
                <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
                <Zoom in={true}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </>
    )
}

export default CreateArea
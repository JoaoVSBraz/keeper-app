import React from "react"
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {

    // A função handleClick() é um Event Handler. Ela executa a função deleteNote() pertencente ao componente App e recebida como propriedade para o componente Note.
    function handleClick() {
        props.onDelete(props.id)
    }

    return (
        <div className="note">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <button onClick={handleClick}>
                <DeleteIcon />
            </button>
        </div>
    )
}

export default Note
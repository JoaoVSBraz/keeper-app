import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"

function App() {
    return (
        <div>
            <Header />
            <Note title='titulo' content='conteudo' />
            <Footer />
        </div>
    )
}

export default App
import React from "react"

function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer>
            <p>João Braz &copy; {year}</p>
        </footer>
    )
}

export default Footer
import React from 'react'

const Footer = ({ length }) => {
    return (
        <footer>
            {
                length === 0 ? (
                    <p>No Item</p>
                ) : (
                    <p>{length} List {length === 1 ? "Item" : "Items"}</p>
                )
            }
        </footer>
    )
}

export default Footer
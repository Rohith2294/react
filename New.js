import React from 'react'

const  New =({match}) => {
    return (
        <div>
             <p>This Is The {match.params.name}</p>
        </div>
    )
}

export default New

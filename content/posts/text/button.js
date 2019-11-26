import React from 'react'

const Button = () => {
    const [ count, setCount ] = React.useState(0)
    return <button onClick={()=> setCount(count + 1)}>click({count})</button>
}

export default Button
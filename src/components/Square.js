import React from 'react'

const Square = ({ index }) => {
    console.log(index)
  return (
    <button
        
        style={index % 2 === 0 ? styles.light : styles.dark}
    >
    </button>
  )
}

const styles = {
    dark: {
        width: 60,
        height: 60,
        backgroundColor: '#631616',
        borderWidth: 0,
    },
    light: {
        width: 60,
        height: 60,
        backgroundColor: '#bc8f8f',
        borderWidth: 0,
    },

}

export default Square
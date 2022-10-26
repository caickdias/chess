import React from 'react'

const Square = (index) => {
  return (
    <div style={index % 2 === 0 ? styles.light : styles.dark}>

    </div>
  )
}

const styles = {
    dark: {
        width: 60,
        height: 60,
        backgroundColor: 'gray',
        borderWidth: 1,
    },
    light: {
        width: 60,
        height: 60,
        backgroundColor: 'white',
        borderWidth: 1,
    },

}

export default Square
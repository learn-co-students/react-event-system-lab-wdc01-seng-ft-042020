// Code Keypad Component Here

import React from 'react'

class Keypad extends React.Component{

    pass = () => {
        console.log('Entering password...')
    }

    render(){
        return(
            <div className='Keypad'>
                <input type='password' onKeyUp={this.pass}/>

            </div>
        )
    }

}

export default Keypad;
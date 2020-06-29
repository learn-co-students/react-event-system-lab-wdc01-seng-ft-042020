// Code EyesOnMe Component Here

import React from 'react'

class EyesOnMe extends React.Component{

    good = () => {
        console.log('Good!')
    }

    bad = () => {
        console.log('Hey! Eyes on me!')
    }

    render(){
        return(
            <div className='EyesOnMe'>

                <button onFocus={this.good} onBlur={this.bad}>Button</button>

            </div>
        )
    }

}

export default EyesOnMe;
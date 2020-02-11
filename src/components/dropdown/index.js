import React, { useState } from "react"
import { Link } from "react-router-dom"
import { DropdownWrap, DropdownAction, DropdownScreen } from "./index.styled"
import img from "../../theme/images/profile.png"

const DropdownComponent = () => {
    const [ toggle, setToggle ] = useState(false)
    const handleClick = () => {
        const newToggle = !toggle
        setToggle( newToggle )
    }
    return (<DropdownWrap>
        <DropdownAction onClick={handleClick}>
            <img src={img} /> <span className='username'>Mauricio Herrera</span> <span className='icon-arrow' />
        </DropdownAction>
        <DropdownScreen open={toggle}>
            <ul>
                <li><Link to='/'>My profile</Link></li>
                <li><Link to='/'>Settings</Link></li>
                <li><Link to='/' className='logout'>Settings</Link></li>
            </ul>
        </DropdownScreen>
    </DropdownWrap>)
}

export default DropdownComponent
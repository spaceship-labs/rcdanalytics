import React from "react"
import { DropdownWrap, DropdownAction, DropdownScreen } from "./index.styled"
import img from "../../theme/images/profile.png"

const DropdownComponent = () => <DropdownWrap>
    <DropdownAction> <img src={img} /> Mauricio Herrera</DropdownAction>
    <DropdownScreen>
        <ul>
            <li><a>My profile</a></li>
            <li><a>Settings</a></li>
            <li><a className='logout'>Settings</a></li>
        </ul>
    </DropdownScreen>
</DropdownWrap>

export default DropdownComponent
import React from "react"
import { MenuItem, MenuItemLink } from "./index.styled"

const MenuItemComponent = ({ item, level, hadleClick }) => {
    if (item.ref) {
        return <MenuItem onClick={hadleClick} level={level} active={item.active}>
            {item.icon && <span className={`icon-${item.icon}`} />}
            {item.title}
            {item.items && <span className={`icon-arrow`} />}
        </MenuItem>
    }
    return <MenuItemLink level={level} active={item.active} to={item.link}>
        {item.icon && <span className={`icon-${item.icon}`} />}
        {item.title}
    </MenuItemLink>
}

export default MenuItemComponent
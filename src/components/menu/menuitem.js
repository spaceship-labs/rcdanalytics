import React from "react"
import { MenuItem, MenuItemLink, Tooltip } from "./index.styled"

const MenuItemComponent = ({ item, level, hadleClick }) => {
    const tooltip = item.description ? <Tooltip>
        <h5>{item.title}</h5>
        <p>{item.description}</p>
    </Tooltip> : ""
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
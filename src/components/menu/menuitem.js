import React, { useRef } from "react"
import { MenuItem, MenuItemLink } from "./index.styled"

const MenuItemComponent = ({ item, level, hadleClick, handleOnMouseOver, handleOnMouseLeave }) => {
    const componentItem = useRef(null)
    if (item.ref) {
        return (
            <MenuItem
                onMouseOver={() => { handleOnMouseOver(item, componentItem) }}
                onMouseLeave={handleOnMouseLeave}
                ref={componentItem}
                onClick={hadleClick} level={level} active={item.active}>
                {item.icon && <span className={`icon-${item.icon}`} />}
                {item.title}
                {item.items && <span className={`icon-arrow`} />}
            </MenuItem>
        )
    }
    return (
        <MenuItemLink
            onMouseOver={() => { handleOnMouseOver(item, componentItem) }}
            onMouseLeave={handleOnMouseLeave}
            ref={componentItem}
            level={level} active={item.active} to={item.link}>
            {item.icon && <span className={`icon-${item.icon}`} />}
            {item.title}
        </MenuItemLink>
    )
}

export default MenuItemComponent
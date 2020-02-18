import React, { Fragment, useRef, useState, useEffect } from "react"
import { Menu, MenuDropdown } from "./index.styled"
import MenuItemComponent from "./menuitem"

const MenuComponent = ({ handleOnMouseOver, handleOnMouseLeave }) => {

    const [menu, setMenu] = useState({
        'scorecard': {
            icon: 'chart', title: 'Scorecard', link: '/home',
            active: false,
            ref: false,
            h: 0,
        },
        'business': {
            icon: 'business', title: 'Negocios', link: '',
            active: false,
            ref: useRef(null),
            h: 0,
            items: {
                'hotel': {
                    icon: 'hotel', title: 'Hotel', link: '',
                    active: false,
                    ref: useRef(null),
                    h: 0,
                    items: {
                        'dashboard': { title: 'Dashboard', link: '/home', active: false, h: 0, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor."},
                        'daily': { title: 'Daily', link: '/home', active: false, h: 0, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor." },
                        'kpikpo': { title: 'KPI / KPO', link: '/home', active: false, h: 0, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor." },
                    }
                },
                'club': {
                    icon: 'club', title: 'Club Vacacional', link: '',
                    active: false,
                    ref: useRef(null),
                    h: 0,
                    items: {
                        'dashboard': { title: 'Dashboard', link: '/home', active: false, h: 0, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor." },
                        'daily': { title: 'Daily', link: '/home', active: false, h: 0, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor." },
                        'kpikpo': { title: 'KPI / KPO', link: '/home', active: false, h: 0, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor." },
                    }
                },
                'tours': {
                    icon: 'tours', title: 'Servicios Turísticos', link: '',
                    active: false,
                    ref: useRef(null),
                    h: 0,
                    items: {
                        'dashboard': { title: 'Dashboard', link: '/home', active: false, h: 0, },
                        'daily': { title: 'Daily', link: '/home', active: false, h: 0, },
                        'kpikpo': { title: 'KPI / KPO', link: '/home', active: false, h: 0, },
                    }
                },
                'casino': {
                    icon: 'casino', title: 'Casino', link: '',
                    active: false,
                    ref: useRef(null),
                    h: 0,
                    items: {
                        'dashboard': { title: 'Dashboard', link: '/home', active: false, h: 0, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor." },
                        'daily': { title: 'Daily', link: '/home', active: false, h: 0, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor." },
                        'kpikpo': { title: 'KPI / KPO', link: '/home', active: false, h: 0, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor." },
                    }
                },
            }
        },
        'area': {
            icon: 'area', title: 'Areas', link: '/home',
            active: false,
            ref: false,
            h: 0,
        },
    })

    useEffect(() => {
        //console.log( menu )
    })

    const hadleClick = (item, subitem, level, key, subkey) => {
        const newMenu = {...menu}
        //console.log('REF', item.ref.current.clientHeight)
        if (level === '1') {
            const newActive = !item.active
            newMenu[key] = { ...item, active: newActive, h: item.ref.current.clientHeight }
        }
        if (level === '2') {
            const newActive = !subitem.active
            const subH = subitem.ref.current.clientHeight
            const h = item.ref.current.clientHeight
            let flag = false
            Object.keys(newMenu[key].items).map(mapSubKey => {
                if (mapSubKey !== subkey) {
                    if (newMenu[key].items[mapSubKey].active === true){
                        flag = true
                        newMenu[key].items[mapSubKey].active = false
                    }
                }
            } )
            console.log('H', h, subH)
            const newH = newActive === true ? h + (flag===true?0:subH) : h - subH
            newMenu[key] = { ...item, h: newH }
            newMenu[key].items[subkey] = { ...subitem, active: newActive, h: subH }
        }

        setMenu( newMenu )
    }

    return (<Fragment>
        <Menu level="1">
            {Object.keys(menu).map((itemKey, index) => {
                const item = menu[ itemKey ]
                return <li key={`li-1-${index}`}>
                    <MenuItemComponent
                        hadleClick={() => hadleClick(item, null, '1', itemKey, null)}
                        handleOnMouseOver={handleOnMouseOver}
                        handleOnMouseLeave={handleOnMouseLeave}
                        item={item} level='1' />
                    {
                        item.items &&
                        <MenuDropdown h={item.h} active={item.active}><Menu ref={item.ref} level="2">{Object.keys(item.items).map((subitemkey, subindex) => {
                            const subitem = item.items[ subitemkey ]
                            return <li key={`li-2-${subindex}`}>
                                <MenuItemComponent
                                    hadleClick={() => hadleClick(item, subitem, '2', itemKey, subitemkey)}
                                    handleOnMouseOver={handleOnMouseOver}
                                    handleOnMouseLeave={handleOnMouseLeave}
                                    item={subitem} level='2' />
                                {
                                    subitem.items &&
                                    <MenuDropdown h={subitem.h} active={subitem.active}><Menu ref={subitem.ref} level="3">{
                                        Object.keys(subitem.items).map((subsubitemkey, subsubindex) => {
                                            const subsubitem = subitem.items[subsubitemkey]
                                            return <li key={`li-3-${subsubindex}`}>
                                                <MenuItemComponent
                                                    handleOnMouseOver={handleOnMouseOver}
                                                    handleOnMouseLeave={handleOnMouseLeave}
                                                    item={subsubitem} level='3' />
                                            </li>
                                        } )
                                    }</Menu></MenuDropdown>
                                }
                                </li>
                            } )}
                        </Menu></MenuDropdown>
                    }
                </li>
            } )}
        </Menu>
        
    </Fragment>)
}

export default MenuComponent
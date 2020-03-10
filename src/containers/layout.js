import React, { Fragment, useState, useEffect } from "react"
import HeaderComponent from "../components/header"
import SidebarComponent from "../components/sidebar"
import { ContentWrapper, Content } from "../theme/layout.styled"

const Layout = ({ children }) => {
  const [sidebarToggle, setSidebarToggle] = useState(true)
  const [width, setWidth] = useState(0)
  const handleToggleSidebar = () => {
    const newToggle = !sidebarToggle
    setSidebarToggle(newToggle)
  }
  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth
      setWidth(newWidth)
      //if (newWidth >= 840)
      setSidebarToggle(newWidth >= 840)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    };
  }, []);
  return (
      <Fragment>
          <HeaderComponent sidebarToggle={sidebarToggle} handleToggleSidebar={handleToggleSidebar} />
          <ContentWrapper>
            <SidebarComponent sidebarToggle={sidebarToggle} handleToggleSidebar={handleToggleSidebar} />
            <Content>
                <section>{children}</section>
            </Content>
          </ContentWrapper>
      </Fragment>
  )
}

export default Layout
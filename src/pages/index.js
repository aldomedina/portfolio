import React, { useState, Fragment } from "react"
import "../styles/global.css"
import styled from "styled-components"
import { graphql } from "gatsby"
import Face from "../components/Face"
import About from "../components/About"
import Projects from "../components/Projects"
import SEO from "../components/seo"

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`

const Nav = styled.ul`
  padding: 0;
  margin: 10px;
  display: flex;
  align-content: flex-start;
  border: 1px solid white;
  list-style-type: none;
`

const NavItem = styled.li`
  cursor: pointer;
  border: 1px solid white;
  background: black;
  font-family: "Terminal";
  padding: 10px;
  text-transform: uppercase;
  color: white;
  transition: all 0.1s ease-in;
  &:hover {
    background: #a693f5;
  }
`

const Content = styled.div`
  font-family: "Terminal-Open";
  font-size: 1.4rem;
  line-height: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    background-color: rgba(0, 0, 0, 0.3);
  }
`

export const query = graphql`
  {
    allSanityProject {
      edges {
        node {
          title
          slug {
            current
          }
        }
      }
    }
  }
`

const IndexPage = () => {
  const [activeSection, setSection] = useState("portfolio")
  const showSection = active => {
    if (active === "about") {
      return <About />
    } else if (active === "portfolio") {
      return <Projects />
    }
  }
  return (
    <Fragment>
      <SEO title={`Aldo`} />
      <Content>
        <NavContainer>
          <Nav>
            <NavItem onClick={() => setSection("landing")}>{":-)"}</NavItem>
            <NavItem onClick={() => setSection("portfolio")}>Portfolio</NavItem>
            <NavItem onClick={() => setSection("about")}>About</NavItem>
          </Nav>
        </NavContainer>
        <div>{showSection(activeSection)}</div>
        <Face />
      </Content>
    </Fragment>
  )
}
export default IndexPage

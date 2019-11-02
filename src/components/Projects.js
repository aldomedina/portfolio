import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled, { css } from "styled-components"
import Other from "./Other"

const ListContainer = styled.div`
  height: 100%;
`
const List = styled.ul`
  list-style-type: none;
  text-align: center;
  font-size: 6.2em;
  padding: 0;
  margin-top: 100px;
  margin-bottom: 100px;
  @media (max-width: 768px) {
    font-size: 2em;
    text-align: left;
  }
`

const ListItem = styled.li`  
  margin-right: 0.3em;
  margin-left: 0.3em;
  width: calc(100% - 0.6em)
  line-height: 1.1;
  text-transform: uppercase;
  @media (max-width: 768px) {
    margin-right: 0.3em;
    margin-left: 0.3em;
  }
`

const ProjectTitle = styled.div`
  cursor: pointer;
  color: white;
  text-decoration: none;
  transition: all 0.1s ease-in;
  line-height: 1;
  margin-bottom: 2.5rem;
  max-width: 100%;
  &:hover {
    color: #a693f5;
    transform: skewX(5deg);
  }
  &:link,
  &:visited,
  &:active {
    text-decoration: none;
  }
`

const BtnContainer = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  border: 1px solid white;
  transition: all 1s easy-in;
  display: flex;
  background: black;
  transition: all 0.1s ease-in;

  &:hover {
    background: #a693f5;
  }
`
const Btn = styled.div`
  padding: 15px;
  padding-bottom: 7px;
  border: 1px solid white;
  line-height: 1;
  font-size: 3rem;
  cursor: pointer;
  ${props =>
    props.proj &&
    css`
      text-decoration: line-through;
    `}

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const Projects = () => {
  const data = useStaticQuery(
    graphql`
      {
        allSanityProject {
          edges {
            node {
              title
              year
              slug {
                current
              }
            }
          }
        }
      }
    `
  )

  const [activeOther, setOther] = useState("close")
  const handleOther = () => {
    if (activeOther === "open") {
      return <Other action={() => setOther("close")} />
    } else {
      return <div />
    }
  }
  const numerize = str => {
    let arrStr = str.split("-")
    let num = Number(arrStr[0])
    return num
  }
  const showList = () => {
    const sortedProjects = data.allSanityProject.edges.sort(
      (p1, p2) => numerize(p2.node.year) - numerize(p1.node.year)
    )

    const dom = sortedProjects.map(({ node: project }) => (
      <ListItem key={project.slug.current}>
        <Link
          style={{ textDecoration: "none", cursor: "pointer" }}
          to={project.slug.current}
        >
          <ProjectTitle> {project.title}</ProjectTitle>
        </Link>
      </ListItem>
    ))

    return dom
  }
  return (
    <div>
      <ListContainer>
        <List>{showList()}</List>
        <BtnContainer onClick={() => setOther("open")}>
          <Btn>OTHER PROJECTS</Btn>
        </BtnContainer>
      </ListContainer>
      <div>{handleOther()}</div>
    </div>
  )
}

export default Projects

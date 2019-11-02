import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const MainContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
  display: grid;
  justify-items: center;
  align-content: center;
`
const ProjContainer = styled.div`
  width: max-content;
  z-index: 2;
  @media (max-width: 768px) {
    padding: 10px;
    width: calc(100% - 20px);
  }
`

const Upbox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const Controls = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  border: 1px white solid;
  width: max-content;
`
const Control = styled.div`
  font-size: 2rem;
  cursor: pointer;
  width: max-content;
  height: max-content;
  border: 1px white solid;
  padding: 12px;
  padding-bottom: 3px;
  line-height: 1;
  background: black;
  display: grid;
  justify-items: center;
  &:hover {
    background: #a693f5;
  }
`
const Info = styled.div`
  border: 2px white solid;
  padding: 10px;
  background: black;
  background: black;
  max-width: 150px;
  font-size: 1rem;
  font-family: "SG";
  margin-left: -50px;
  margin-bottom: 30px;
`
const Img = styled.img`
  margin: 0;
  max-width: 700px;
  max-height: 500px;
  @media (max-width: 768px) {
    max-width: 100%;
    max-height: 380px;
  }
`

const Other = props => {
  const data = useStaticQuery(
    graphql`
      {
        allSanityOtherProjects {
          edges {
            node {
              description
              image {
                asset {
                  url
                }
              }
            }
          }
        }
      }
    `
  )

  const [activeOther, setOther] = useState(
    Math.floor(Math.random() * data.allSanityOtherProjects.edges.length)
  )
  const showOther = () => {
    const { description, image } = data.allSanityOtherProjects.edges[
      activeOther
    ].node
    return (
      <ProjContainer>
        <Controls>
          <Control
            onClick={() => {
              if (activeOther > 0) {
                setOther(activeOther - 1)
              } else {
                setOther(8)
              }
            }}
          >
            {"<"}
          </Control>
          <Control onClick={props.action}>X</Control>
          <Control
            onClick={() => {
              if (activeOther < 8) {
                setOther(activeOther + 1)
              } else {
                setOther(0)
              }
            }}
          >
            {">"}
          </Control>
        </Controls>
        <Upbox>
          <Img src={image.asset.url} />
          <Info>{description}</Info>
        </Upbox>
      </ProjContainer>
    )
  }
  return <MainContainer>{showOther()}</MainContainer>
}

export default Other

import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String) {
    sanityProject(slug: { current: { eq: $slug } }) {
      title
      year
      rol
      slug {
        current
      }
      description
      gallery {
        asset {
          url
        }
      }
    }
  }
`

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  @media (max-width: 768px) {
    grid-template-rows: max-content 1fr;
    grid-template-columns: 100%;
  }
`
const InfoContainer = styled.div`
  min-width: max-content;
`
const Container = styled.div`
  border: 1px solid white;
  margin: 10px;
  margin-top: -2px;
  margin-left: 73px;
  width: 360px;
  @media (max-width: 768px) {
    margin-left: 10px;
    width: calc(100vw - 24px);
  }
`
const X = styled.div`
  border: 2px solid white;
  padding: 15px;
  padding-bottom: 4px;
  line-height: 1;
  margin: 10px;
  margin-bottom: 0;
  width: max-content;
  font-family: "Terminal-Open";
  font-size: 3rem;
  color: white;
  transition: all 0.1s ease-in;
  &:hover {
    background: #a693f5;
  }
`
const Box = styled.div`
  padding: 15px;
  border: 1px solid white;
  display: grid;
  align-content: center;
`
const Meta = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
`
const Title = styled.h1`
  margin: 0;
  line-height: 1;
  text-transform: uppercase;
  font-family: "Terminal";
`

const Gallery = styled.div`
  height: 95vh;
  overflow-y: scroll;
  overflow-x: hidden;
  display: grid;
  justify-items: center;
  @media (max-width: 768px) {
    height: 100%;
  }
`
const Img = styled.img`
  max-width: 700px;
  margin-top: 30px;
  padding-bottom: 30px;
  &:first-child {
    margin-top: 100px;
  }
  @media (max-width: 768px) {
    max-width: calc(100% - 20px);
  }
`

const Project = ({ data }) => {
  const { slug, title, description, gallery, year, rol } = data.sanityProject

  return (
    <div>
      <SEO title={title} />
      <ProjectContainer>
        <InfoContainer>
          <Link to="/" style={{ textDecoration: "none" }}>
            <X>X</X>
          </Link>
          <Container>
            <Box>
              <Title>{title}</Title>
            </Box>
            <Box>
              <p>{description}</p>
            </Box>

            <Meta>
              <Box>{rol}</Box>
              <Box>{year}</Box>
            </Meta>
          </Container>
        </InfoContainer>
        <Gallery>
          {gallery.length > 0
            ? gallery.map((obj, i) => (
                <Img key={i} src={obj.asset.url} alt={slug.current} />
              ))
            : " "}
        </Gallery>
      </ProjectContainer>
    </div>
  )
}

export default Project

import React from "react"
import styled from "styled-components"

const Container = styled.div`
  border: 2px solid white;
  margin: 10px;
  margin-top: 54.4px;
  max-width: 350px;
  background: black;
`

const Text = styled.p`
  margin: 15px;
  font-family: "SG";
  font-size: 1rem;
  line-height: 1.2;
`

export default function About() {
  return (
    <Container>
      <Text>
        contact: aldo.medina.z@gmail.com <br />
        <br />
        I'm a designer that likes to create (with) code. I also have a dark past
        in economics and a more memorable one in the world of constructionist
        pedagogy and experimental public policies. All of those experiences have
        as a common thread a permanent interest in creating trough technology.{" "}
        <br />
        <br />
        * Current playground: AI and AR.
        <br />
        * Favorite stack: JAM Stack.
        <br />* Based in Lisbon.
      </Text>
    </Container>
  )
}

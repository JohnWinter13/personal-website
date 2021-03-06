import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/layout'
import Contact from '../components/contact'

import Typography from '@material-ui/core/Typography';

import 'typeface-bad-script';
import 'typeface-roboto';

const IndexPage = ({ data }) => (
  <Layout>
    <Img style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", zIndex: "-1"}} fixed={data.file.childImageSharp.fixed}/>
    <div style = {{marginTop: 60, textAlign: 'center',}}>
      <Typography variant="h2" style={{color: "#FFF", fontFamily: "Bad Script"}}>Hello World!</Typography>
      <br/>
      <Typography variant="h6" style={{color: '#FFF'}}>I&#39;m a computer science student at McMaster University.</Typography>
      <Typography variant="h6" style={{color: '#FFF'}}>Passionate about software development, computing and problem solving.</Typography>
      <Contact></Contact>
    </div>  
  </Layout>   
)

export const imgQuery = graphql`
  query {
    file(relativePath: { eq: "background.jpg" }) { 
      childImageSharp {
        fixed(width: 2048) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default IndexPage

import React, { FunctionComponent } from 'react'
import { H1, Box } from '@cogito-study/alea'
import { Layout } from '../components/layout'
import SEO from '../components/SEO'

const Index: FunctionComponent = () => {
  return (
    <Layout>
      <SEO />
      <H1>Hellooooo World</H1>
      <Box></Box>
    </Layout>
  )
}

export default Index

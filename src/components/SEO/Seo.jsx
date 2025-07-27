import React from 'react'
import { Helmet } from 'react-helmet-async'

function Seo({ title, description } ) {
  return (
    // <Helmet  titleTemplate="Sunny Kumar">
    //     <title>{title}</title>
    //     <meta name="description" content={description} />
    // </Helmet>
    <Helmet>
  <title>Sunny Kumar</title>
  <meta name="description" content="Sunny Kumar is a Full Stack Developer specializing in UI design and clean, bug-free code. Explore projects built with React, Tailwind, Node, and MongoDB." />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://sunnykumar.me/" />
</Helmet>

  )
}

export default Seo
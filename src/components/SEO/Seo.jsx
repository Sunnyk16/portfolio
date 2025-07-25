import React from 'react'
import { Helmet } from 'react-helmet-async'

function Seo({ title, description } ) {
  return (
    <Helmet  titleTemplate="%s | Sunny Kumar">
        <title>{title}</title>
        <meta name="description" content={description} />
    </Helmet>
  )
}

export default Seo
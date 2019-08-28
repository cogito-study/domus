import React from 'react'
import Helmet from 'react-helmet'

const defaultProps = {
  username: '',
}

type Props = { title: string; desc: string; image: string } & typeof defaultProps

const Twitter = ({ username, title, desc, image }: Props) => (
  <Helmet>
    {username && <meta name="twitter:creator" content={username} />}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={desc} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:image:alt" content={desc} />
  </Helmet>
)

export default Twitter

Twitter.defaultProps = defaultProps

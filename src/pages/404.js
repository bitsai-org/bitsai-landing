import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout/Layout'

import HomeThumbnail from '../images/bitsai-og.png'

const TITLE =
  'BitSai - 404 NOT FOUND'

const DESCRIPTION =
  'A cross-platform, modern, and open source Bitcoin wallet for the masses. But page 404 NOT FOUND'

const NotFound = () => (
  <Layout>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION}/>

      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:image" content={HomeThumbnail} />
      <meta property="og:image:alt" content="bitsai-home-page"/>
      <meta property="og:url" content="https://bitsai.co" />
      <meta property="og:site_name" content={TITLE} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="Landing page" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={`https://bitsai.co${HomeThumbnail}`} />
      <meta name="twitter:image:alt" content="bitsai-home-page" />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:site" content="bitsai" />
      <meta name="twitter:creator" content="Firas" />

      <script
        data-goatcounter="https://bitsai.goatcounter.com/count"
        async
        src="//gc.zgo.at/count.js"
      ></script>
    </Helmet>

    <div className="container justify-center px-8 mx-auto lg:flex">
      <div className="mt-48 text-center rounded-sm lg:text-left lg:w-1/2">
        <h1 className="text-4xl font-bold leading-none text-center lg:text-5xl xl:text-6xl">
          404 NOT FOUND
        </h1>
        <p className="mt-6 text-xl font-light text-center lg:text-2xl">
          You just hit a page that doesn&#39;t exist...
        </p>
      </div>
    </div>
  </Layout>
)

export default NotFound

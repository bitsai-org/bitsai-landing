import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout/Layout'

import Hero from '../components/sections/Hero'
import Features from '../components/sections/Features'
import IllustrationFeatures from '../components/sections/IllustrationFeatures'
import Download from '../components/sections/Download'

import OwlSvg from '../assets/owl-only.svg'

import '../css/layout.css'

const TITLE =
 'BitSai - Bitcoin Wallet'

const DESCRIPTION =
'A cross-platform, modern, and open source Bitcoin wallet for the masses.'

const Index = () => (
  <Layout>
    <Helmet>
      <title>BitSai - Bitcoin Wallet</title>‍
      <meta name="description" content={DESCRIPTION}/>

      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:image" content={OwlSvg}/>
      <meta property="og:url" content="https://bitsai.co" />
      <meta property="og:site_name" content={TITLE} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="Landing page" />

      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:card" content={OwlSvg} />
      <meta name="twitter:site" content="Firas" />
      <meta name="twitter:creator" content="Firas" />
      <meta name="twitter:image" content={OwlSvg} />
    </Helmet>

    <Hero />
    <Features />
    <IllustrationFeatures />
    <Download />
  </Layout>
)

export default Index

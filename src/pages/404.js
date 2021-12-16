import React from 'react'
import Layout from '../components/layout/Layout'

const NotFound = () => (
  <Layout>
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

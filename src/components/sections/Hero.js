import React from 'react'
import Button from '../Button'
import HeroBtcSvg from '../../assets/hero.svg'

const Hero = () => (
  <section className="pt-20 md:pt-40" id="main">
    <div className="container px-8 mx-auto lg:flex">
      <div className="text-center rounded-sm lg:text-left lg:w-1/2">
        <h1 className="font-bold">
          <span
            className="text-4xl leading-none lg:text-5xl xl:text-6xl"
          >
            BitSai
          </span>
          <span className="text-1xl lg:text-2xl xl:text-3xl">
            「bit・財」
          </span>
        </h1>
        <p className="mt-6 text-xl font-light lg:text-2xl">
          A cross-platform, modern, and open source Bitcoin wallet for the masses.
        </p>
        <p className="mt-8 md:mt-12">
          <Button
            className="lg"
            onClick={() => {
              window.open('https://testnet.bitsai.co', '_blank')
            }}
          >
            Get Started
          </Button>
        </p>
        <p className="mt-4 text-gray-600">Launch the app in the <b>testnet</b> network</p>
      </div>
      <div className="lg:w-1/2">
        <HeroBtcSvg className="w-full h-full"/>
      </div>
    </div>
  </section>
)

export default Hero

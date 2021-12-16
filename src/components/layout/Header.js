import React from 'react'
import Button from '../Button'

const Header = () => (
  <header className="sticky top-0 z-10 bg-white shadow">
    <div className="container flex flex-col items-center justify-between px-8 py-4 mx-auto sm:flex-row">
      <a href="/#main">
        <img
          src="owl-bitsai.png"
          alt="bitsai-logo"
          style={{
            height: '3rem'
          }}
        />
      </a>
      <div className="flex items-center">
        <div className="flex mt-4 sm:mt-0">
          <a className="px-4" href="/#features">
            Features
          </a>
          <a className="px-4" href="/#get-it">
            Get it
          </a>
          <a className="px-4" href="/#about">
            About
          </a>
        </div>
        <div className="hidden md:block">
          <Button
            className="text-sm"
            onClick={() => {
              window.open('https://testnet.bitsai.co', '_blank')
            }}
          >
            Launch App
          </Button>
        </div>
      </div>
    </div>
  </header>
)

export default Header

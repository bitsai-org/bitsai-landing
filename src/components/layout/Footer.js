import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { SiBuymeacoffee } from 'react-icons/si'
import { FaBitcoin } from 'react-icons/fa'

const Footer = () => (
  <footer
    id="about"
    className="container px-3 py-16 mx-auto mt-48 text-gray-800"
    style={{
      borderStyle: 'solid',
      borderTopWidth: '2px',
      borderColor: '#ebdbb2',
    }}
    //className="container px-3 py-16 mx-auto mt-48 mb-8 text-gray-800"
  >
    <div className="flex flex-col -mx-3 sm:flex-row">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">About</h2>
        <p className="mt-1 mb-6 sm:mb-0">
          BitSai is an open-source project, made with ♥ by <a
            href="https://firas.cc"
            target="_blank"
            className="font-bold"
          >
            Firas
          </a>.
        </p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Support Us</h2>
        <p className="mt-1 mb-6 sm:mb-0">
          You can support BitSai by
          <div className="flex items-center mb-2">
            <AiFillGithub className="mr-2"/>
            <a
              href="https://github.com/bitsai-org/bitsai"
              target="_blank"
              className="font-bold"
            >
              contributing code
            </a>
          </div>
          <div className="flex items-center mb-2">
            <SiBuymeacoffee className="mr-2"/>
            <a
              href="https://www.buymeacoffee.com/Adoliin"
              target="_blank"
              className="font-bold"
            >
              buying Firas a cup of coffee
            </a>
          </div>
          <div className="flex items-center ">
            <FaBitcoin className="mr-2"/>
            <a
              href="https://github.com/bitsai-org/bitsai#donating"
              target="_blank"
              className="font-bold"
            >
              donating crypto
            </a>
          </div>
        </p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">
          Resources
        </h2>
        <ul className="mt-1 leading-loose sm:mb-0">
          <li>
            <a
              className="font-bold"
              target="_blank"
              href="https://github.com/bitsai-org/bitsai/blob/mainnet/LICENSE.md"
            >
              License
            </a>
          </li>
          <li>
            <a
              className="font-bold"
              target="_blank"
              href="https://github.com/bitsai-org"
            >
              Source Code
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
)

export default Footer

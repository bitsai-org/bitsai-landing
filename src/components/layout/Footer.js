import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { SiBuymeacoffee } from 'react-icons/si'

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
          BitSai is an open-source, not-for-profit project that is made with ♥ by <a
            href="https://firas.cc"
            target="_blank"
            className="font-bold" rel="noreferrer"
          >
            Firas
          </a>.
        </p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Support Us</h2>
        <p className="mt-1 mb-6 sm:mb-0">
          You can support BitSai by
          <div className="flex items-center ">
            <AiFillGithub className="mr-2"/>
            <a
              href="https://github.com/Adoliin"
              target="_blank"
              className="font-bold" rel="noreferrer"
            >
              contributing code
            </a>
          </div> or
          <div className="flex items-center ">
            <SiBuymeacoffee className="mr-2"/>
            <a
              href="https://www.buymeacoffee.com/Adoliin"
              target="_blank"
              className="font-bold" rel="noreferrer"
            >
              buying Firas a cup of coffee
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
              href=""
            >
              License
            </a>
          </li>
          <li>
            <a className="font-bold" href="">
              Github Repository
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
)

export default Footer

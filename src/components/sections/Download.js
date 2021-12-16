import React from 'react'
import {
  Tab,
  Tabs,
  TabList,
  TabPanel
} from 'react-tabs'
import '../../css/my-react-tabs.css'

//import { BsWindows } from 'react-icons/bs'
//import { FaLinux } from 'react-icons/fa'
import { FaApple } from 'react-icons/fa'
import { FaAndroid } from 'react-icons/fa'
import { FaFirefoxBrowser } from 'react-icons/fa'

import { MdOpenInNew } from 'react-icons/md'

const Download = () => (
  <section
    id="get-it"
    className="py-20 lg:pb-20 lg:pt-24"
  >

    <div
      className="container mx-auto mt-24 text-center "
    >
      <h2 className="text-4xl font-semibold lg:mb-12 lg:text-5xl">
        Get it
      </h2>
      <Tabs className="flex flex-col sm:flex-row">
        <TabList className="flex flex-col justify-center">
          {/*<Tab>
            <div className="flex items-center">
              <BsWindows className="tab-icon"/>
              <p className="tab-text">Windows</p>
            </div>
          </Tab>
          <Tab>
            <div className="flex items-center">
              <FaApple className="tab-icon"/>
              <p className="tab-text">Mac</p>
            </div>
          </Tab>
          <Tab>
            <div className="flex items-center">
              <FaLinux className="tab-icon"/>
              <p className="tab-text">Linux</p>
            </div>
          </Tab>*/}
          <Tab>
            <div className="flex items-center">
              <FaFirefoxBrowser className="tab-icon"/>
              <p className="tab-text">Browser</p>
            </div>
          </Tab>
          <Tab>
            <div className="flex items-center">
              <FaAndroid className="tab-icon"/>
              <p className="tab-text">Android</p>
            </div>
          </Tab>
          <Tab>
            <div className="flex items-center">
              <FaApple className="tab-icon"/>
              <p className="tab-text">iOS</p>
            </div>
          </Tab>
        </TabList>

        <div
          //className="w-full p-2 "
          style={{
            width: '100%',
            padding: '0.5rem',
            borderStyle: 'solid',
            borderLeftWidth: '4px',
            borderColor: '#fabd2f',
            textAlign: 'left'
          }}
        >
          <TabPanel>
            <h2 className="text-2xl font-semibold leading-tight">
              Browser
            </h2>
            <p className="mt-2 text-lg font-light leading-relaxed">
              To start using the app just open the mainnet or testnet link below (it is that easy)
              <br/>
              <b>Disclaimer:</b> BitSai is still in BETA so it is highly
              recommended to use it in testnet only (testnet is a bitcoin network
              where all btc are worthless).
              <br />
              <b>
                With that said we are not responsible for any loss of funds
                (eg. real btc in mainnet), check LICENSE*.
              </b>
            </p>

            <h3 className="mt-4 text-xl font-semibold leading-tight">
              Testnet
            </h3>
            <div className="flex items-center text-lg font-light leading-relaxed">
              <MdOpenInNew className="mr-1"/>
              <a
                href="https://testnet.bitsai.co"
                className="font-bold"
                target="_blank" rel="noreferrer"
              >
                testnet.bitsai.co
              </a>
            </div>
            <h3 className="mt-2 text-xl font-semibold leading-tight">
              Mainnet <span className="text-lg font-light leading-relaxed">
                (not recommended at this time)
              </span>
            </h3>
            <div className="flex items-center text-lg font-light leading-relaxed">
              <MdOpenInNew className="mr-1"/>
              <a
                href="https://testnet.bitsai.co"
                className="font-bold"
                target="_blank" rel="noreferrer"
              >
                app.bitsai.co
              </a>
            </div>
          </TabPanel>

          <TabPanel>
            <h2 className="text-2xl font-semibold leading-tight">
              Android
            </h2>
            <p className="mt-2 text-lg font-light leading-relaxed">
              To use BitSai in iOS you don&apos;t have to download it from a
              centralised app store (like google&apos;s play sotre). You can use it
              directly within your browser of choice or you can get it as PWA
              (progressive web app).
              <br/>
              To get BitSai as an app in your home screen (as a PWA) all you
              have to do is:
              <ul className="mt-1 font-bold">
                <li>
                  1. Open BitSai in your browser of choice (Chrome or Firefox
                  recommended)
                </li>
                <li>
                  2. Press on the 3 dots in the top right corner and than press
                  on &quot;Add to Home screen&quot;
                </li>
                <li>
                  3. You are done! Now you can find BitSai in your home screen
                  and start using it like any other app
                </li>
              </ul>
            </p>
          </TabPanel>
          <TabPanel>
            <h2 className="text-2xl font-semibold leading-tight">
              iOS
            </h2>
            <p className="mt-2 text-lg font-light leading-relaxed">
              To use BitSai in iOS you don&apos;t have to download it from a
              centralised app store (like apple&apos;s app sotre). You can use it
              directly within your browser of choice or you can get it as PWA
              (progressive web app).
              <br/>
              To get BitSai as an app in your home screen (as a PWA) all you
              have to do is:
              <ul className="mt-1 font-bold">
                <li>
                  1. Open BitSai in your browser of choice (Chrome or Firefox
                  recommended)
                </li>
                <li>
                  2. Press on the 3 dots in the top right corner and than press
                  on &quot;Add to Home screen&quot;
                </li>
                <li>
                  3. You are done! Now you can find BitSai in your home screen
                  and start using it like any other app
                </li>
              </ul>
            </p>
          </TabPanel>
        </div>

      </Tabs>
    </div>

  </section>
)

export default Download

import React from 'react'
import Card from '../Card'

import { RiOpenSourceFill } from 'react-icons/ri'
import { IoRocketSharp } from 'react-icons/io5'
import { FaDesktop } from 'react-icons/fa'
import { IoShield } from 'react-icons/io5'
import { ImExit } from 'react-icons/im'
import { BsLightningFill } from 'react-icons/bs'

const featuresList = [
  [
    {
      title: 'Free and Open Source',
      p: 'Just like Bitcoin core, BitSai is free and open source and will always stay that way.',
      icon: <RiOpenSourceFill className="mr-2" size="2rem"/>,
    },
    {
      title: 'Modern',
      p: 'BitSai leverages all the modern and latest Bitcoin soft and hard forks to bring a modern experience to your Bitcoin finances',
      icon: <IoRocketSharp className="mr-2" size="2rem"/>,
    },
    {
      title: 'Cross-platform',
      p: 'We aim to be as cross-platform as possible. By being a web app, virtually any platform that supports modern web browser can use BitSai',
      icon: <FaDesktop className="mr-2" size="2rem"/>,
    }
  ],
  [
    {
      title: 'Secure',
      p: 'Your wallet is encrypted locally and all of the transactions are signed locally. Bottom line: Bitsai never stores anything on external servers and your private keys never leave your device.',
      icon: <IoShield className="mr-2" size="2rem"/>,
    },
    {
      title: 'Forgiving and no Lock-In',
      p: 'When initially creating a wallet, Bitsai generates for you a mnemonic seed that you can save and use in any other bitcoin wallet (BIP39 compliant). Additionally, even if your device malfunctions or gets lost you can use that same mnemonic seed to recover all your funds.',
      icon: <ImExit className="mr-2" size="2rem"/>,
    },
    {
      title: 'Fast',
      p: 'BitSai aims to be as fast as possible by using the Blockstream API to process transactions.',
      icon: <BsLightningFill className="mr-2" size="2rem"/>,
    },
  ],
]

const Features = () => (
  <section id="features" className="py-20 lg:pt-48">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-semibold lg:text-5xl">Features</h2>
      <FeatureCards />
    </div>
  </section>
)

const FeatureCards = () => {
  const res = []
  for (const threeFeatures of featuresList) {
    res.push(
      <div className="flex flex-col mt-12 sm:flex-row sm:-mx-3">
        {
          threeFeatures.map((feature, index) => {
            return (
              <div className="flex-1 px-3" key={index}>
                <Card className="mb-8">
                  <div className="flex items-center justify-center">
                    {feature.icon}
                    <p className="text-xl font-semibold">
                      {feature.title}
                    </p>
                  </div>
                  <p className="mt-4">
                    {feature.p}
                  </p>
                </Card>
              </div>
            )
          })
        }
      </div>
    )
  }
  return res
}

export default Features

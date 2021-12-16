import React from 'react'
import SplitSection from '../SplitSection'

import FriendlySvg from '../../assets/friendly.svg'
import PortableSvg from '../../assets/portable.svg'
import PrivateSvg from '../../assets/private.svg'

const IllustrationFeatures = () => (
  <>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Private
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Your private keys are encrypted and stored locally in your device.
            And every time you generate a receiving address you get a random one
            so that each incoming transaction can be only be associated with a
            single address.
          </p>
        </div>
      }
      secondarySlot={<PrivateSvg className="w-full h-full"/>}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            User-friendly and elegant UI
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Sending and receiving bitcoins could not get easier than this.
            BitSai is so easy, even a one-year-old can start transacting
            bitcoins with it.
          </p>
        </div>
      }
      secondarySlot={<FriendlySvg className="w-full h-full"/>}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Portable
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Take BitSai app everywhere you go. If your platform supports a
            browser then it most certainly supports BitSai.
          </p>
        </div>
      }
      secondarySlot={<PortableSvg className="w-full h-full"/>}
    />
  </>
)

export default IllustrationFeatures

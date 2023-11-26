'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../../sanity.config'

const AdmiPage = () => {
  return (
    <NextStudio
        config={config}
    />
  )
}

export default AdmiPage
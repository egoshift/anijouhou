import React, { Fragment, useEffect, useState } from "react";
import { Image } from "semantic-ui-react";

import getRandomNumber from "src/utils/getRandomNumber";
import { CHIBI, CHIBI_CONFIG } from 'src/constants/chibi'

import { ChibiContainer } from './Chibi.styles'

type Props = {
  randomized?: boolean,
  character?: string,
}

function Chibi({ randomized = true, character = '' }: Props): JSX.Element {
  const characterKeys = Object.keys(CHIBI)
  const [characterIndex, setCharacterIndex] = useState(characterKeys[0])
  const [characterImageIndex, setCharacterImageIndex] = useState(0)

  useEffect(() => {
    setCharacterIndex(characterKeys[getRandomNumber(characterKeys.length)])
  }, [])

  useEffect(() => {
    setTimeout(() => {
      let nextImageIndex = characterImageIndex + 1

      if (nextImageIndex >= CHIBI[characterIndex].length)
        nextImageIndex = 0
      
      setCharacterImageIndex(nextImageIndex)
    }, 1000)
  }, [characterImageIndex])

  return (
    <ChibiContainer>
      {CHIBI[characterIndex].map((src, index) => {
        return <Image className={characterImageIndex === index ? 'active' : ''} key={index} src={src} height={CHIBI_CONFIG.height} width={CHIBI_CONFIG.width} /> 
      })}
    </ChibiContainer>
  )
}

export default Chibi
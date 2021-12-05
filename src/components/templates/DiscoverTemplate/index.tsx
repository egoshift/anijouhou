import React, { ReactNode } from 'react'
import { Grid } from 'semantic-ui-react'

import { DiscoverTemplateGrid } from './DiscoverTemplate.styles'

const { Column, Row } = Grid

type Props = {
  children?: ReactNode
}

function DiscoverTemplate({ children }: Props): JSX.Element {
  return (
    <DiscoverTemplateGrid stretched>
      <Row stretched textAlign='center' verticalAlign='middle'>
        <Column>
          {children}
        </Column>
      </Row>
    </DiscoverTemplateGrid>
  )
}

export default DiscoverTemplate
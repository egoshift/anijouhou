import styled from 'styled-components'
import { Input } from 'semantic-ui-react'

export const DiscoverInput = styled(Input)({
  '&&& > input': {
    paddingTop: '1.5rem',
    paddingBottom: '1.5rem',
    fontSize: '1.2em',
    borderRadius: '4rem',
  },
  '& .icon': {
    fontSize: '1.2em',
  },
  '&&& .search.icon': {
    marginRight: '1rem',
  },
  '& > .ui.dropdown': {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '4em',
    paddingRight: '4rem',
  },
  '& > .ui.label': {
    borderRadius: '4rem',
  }
})
import React from "react";
import { Container, Dropdown, Icon } from "semantic-ui-react";

import DiscoverTemplate from "src/components/templates/DiscoverTemplate";
import Chibi from "src/components/molecules/Chibi";

import { DiscoverInput } from "./DiscoverPage.styles";

const options = [
  { key: 'anime', 'text': 'Anime', value: 'anime' },
  { key: 'manga', 'text': 'Manga', value: 'manga' }
]

function DiscoverPage(): JSX.Element {
  return (
    <DiscoverTemplate>
      <Container>
        <Chibi />
        <DiscoverInput
          fluid
          icon={<Icon name='search' />}
          label={<Dropdown defaultValue='anime' options={options} />}
          labelPosition="left"
          placeholder='Search info'
          type="text"
        />
      </Container>
    </DiscoverTemplate>
  )
}

export default DiscoverPage
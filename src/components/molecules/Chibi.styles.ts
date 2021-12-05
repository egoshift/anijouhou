import styled from "styled-components";
import { Container } from "semantic-ui-react";

export const ChibiContainer = styled(Container)({
  marginBottom: '2rem',
  '&&& img': {
    display: 'none',
  },
  '&&& img.active': {
    display: 'inline-block',
  },
})
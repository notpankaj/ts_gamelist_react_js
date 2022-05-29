import React, { ReactElement } from "react";
import { Game } from "../../types";
import styled from "styled-components";
import { Img, StyledLink } from "./styles";
import {
  backgroundColor,
  primaryTextColor,
  secondaryTextColor,
  tertiaryTextColor,
} from "../../styles/theme";

import windowsIcon from "../../Assets/icons/windows.svg";
import browserIcon from "../../Assets/icons/browser.svg";
import { BROWSER, WINDOWs } from "./constants";
import { breakpoints } from "../../styles/breakpoints";

interface Props {
  content: Game;
}
function GameCard({ content }: Props): ReactElement {
  const { id, title, thumbnail, short_description, genre, platform } = content;
  const link = `/game/${id}`;
  const icons = platform.split(",").map((p) => {
    let icon = null;
    switch (p.trim()) {
      case BROWSER: {
        icon = (
          <Icon key={`${id}=browser`} alt="browser-icon" src={browserIcon} />
        );
        break;
      }
      case WINDOWs: {
        icon = (
          <Icon key={`${id}=windows`} alt="windows-icon" src={windowsIcon} />
        );
        break;
      }
      default: {
        icon = (
          <>
            <Icon key={`${id}=browser`} alt="browser-icon" src={browserIcon} />
            <Icon key={`${id}=windows`} alt="windows-icon" src={windowsIcon} />
          </>
        );
        break;
      }
    }

    return icon;
  });
  return (
    <StyledLink to={link}>
      <Img src={thumbnail} alt={`${title} logo`} />
      <Details>
        <Title>{title}</Title>
        <ShortDes>{short_description}</ShortDes>
        <Gener>{genre}</Gener>
        {icons}
      </Details>
    </StyledLink>
  );
}

export default GameCard;

const Details = styled.div`
  padding: 20px;
  @media (min-width: ${breakpoints.tablet}) {
    white-space: nowrap;
  }
`;
const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 520;
  color: ${primaryTextColor};

  @media (min-width: ${breakpoints.tablet}) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const ShortDes = styled.p`
  font-size: 16px;
  color: ${secondaryTextColor};
  @media (min-width: ${breakpoints.tablet}) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const Gener = styled.p`
  padding: 2px 4px;
  margin: 0 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  color: ${tertiaryTextColor};
  background: ${backgroundColor};
  float: right;
`;
const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

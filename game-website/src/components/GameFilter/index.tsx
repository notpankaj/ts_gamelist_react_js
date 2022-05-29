import React, { ChangeEvent, ReactElement } from "react";
import { GENRES, PLATFORMS, SORT_BY, TAGS } from "./constants";
import styled from "styled-components";
import { backgroundColor, secondaryTextColor } from "../../styles/theme";
import { breakpoints } from "../../styles/breakpoints";
interface Props {
  onChange: (e: ChangeEvent<HTMLFormElement>) => void;
}

function GameFilter({ onChange }: Props): ReactElement {
  return (
    <Form onChange={onChange}>
      <Label htmlFor="platform-select">
        Platform:
        <Select name="platform" id="platform-select">
          {PLATFORMS.map((platform) => (
            <option key={platform.value} value={platform.value}>
              {platform.display}
            </option>
          ))}
        </Select>
      </Label>
      <Label htmlFor="genre-select">
        Genre:
        <Select name="genre" id="genre-select">
          {GENRES.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.display}
            </option>
          ))}
        </Select>
      </Label>
      <Label htmlFor="tag-select">
        Tag:
        <Select name="tag" id="tag-select">
          {TAGS.map((tag) => (
            <option key={tag.value} value={tag.value}>
              {tag.display}
            </option>
          ))}
        </Select>
      </Label>
      <Label htmlFor="sortBy-select">
        Sort By:
        <Select name="sortBy" id="sortBy-select">
          {SORT_BY.map((sortBy) => (
            <option key={sortBy.value} value={sortBy.value}>
              {sortBy.display}
            </option>
          ))}
        </Select>
      </Label>
    </Form>
  );
}

export default GameFilter;

const Form = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 542px;
  padding: 0 16px;
  margin: 24px auto;
  box-sizing: border-box;
  color: ${secondaryTextColor};
  font-weight: bold;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: ${breakpoints.tablet};
  }
  @media (max-width: ${breakpoints.desktop}) {
    max-width: 1010px;
  }
`;
const Label = styled.label`
  margin-right: 16px;
  flex-basis: 25%;
  &:last-of-type {
    margin-right: 0;
  }
`;

const Select = styled.select`
  width: 100%;
  margin-top: 0;
  color: white;
  background-color: ${backgroundColor};
`;

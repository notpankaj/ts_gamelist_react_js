import React, { ChangeEvent, ReactElement } from "react";
import { Game } from "../../types";
import GameCard from "../GameCard";
import GameFilter from "../GameFilter";
import { List, ListItem } from "./styles";

interface Props {
  err?: string;
  games?: Game[];
  onFilterChange: (e: ChangeEvent<HTMLFormElement>) => void;
}

function GameListRender({ err, games, onFilterChange }: Props): ReactElement {
  if (err) {
    return <p>unable to fetch games</p>;
  }
  if (!games?.length) {
    return <p>No Games Available</p>;
  }
  return (
    <>
      <GameFilter onChange={onFilterChange} />
      <List>
        {games?.map((game) => (
          <ListItem key={game.id}>
            <GameCard content={game} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GameListRender;

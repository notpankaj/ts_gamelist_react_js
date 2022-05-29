import React, {
  ChangeEvent,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import GameListRender from "./GameList.render";
import { Game } from "../../types";
import { API_HOST, API_KEY } from "../../utils/constants";
import { FileWatcherEventKind } from "typescript";

type Filter = {
  platform: string;
  sortBy: string;
  tag?: string;
  genre?: string;
};

function GameList(): ReactElement {
  const [filter, setFilter] = useState<Filter>({
    platform: "browser",
    sortBy: "relevance",
  });
  const [games, setGames] = useState<Game[]>([]);
  const [err, setErr] = useState<string>("");

  console.log(filter);
  useEffect(() => {
    const { genre, platform, sortBy, tag } = filter;
    axios
      .get("/games", {
        baseURL: `https://${API_HOST}/api`,
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": API_HOST,
        },
        params: {
          category: genre,
          platform,
          tag,
          "sort-by": sortBy,
        },
      })
      .then((res) => setGames(res.data))
      .catch((err) => setErr(err.message));
  }, [filter]);

  const onFilterChange = useCallback((e: ChangeEvent<HTMLFormElement>) => {
    console.log(e);
    setFilter((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
    e.preventDefault();
  }, []);

  return (
    <div>
      <GameListRender games={games} err={err} onFilterChange={onFilterChange} />
    </div>
  );
}

export default GameList;

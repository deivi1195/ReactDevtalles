import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";

//const gifsCache: Record<string, Gif[]> = {}; //se coloca afuera para que la informacion no se pierda cuando se vuelva a renderizar el componente por algun cambio en sus props

export const useGifs = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClicked = async (term: string) => {
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }

    const gifs = await getGifsByQuery(term);
    setGifs(gifs);
  };

  const handleSearch = async (query: string) => {
    query = query.trim().toLowerCase();

    if (query.length === 0) return;

    if (previousTerms.includes(query)) return;

    // const currentTerms = previousTerms.slice(0,6);
    // currentTerms.unshift(query);
    // setPreviousTerms( currentTerms )

    setPreviousTerms([query, ...previousTerms].splice(0, 7));

    const gifs = await getGifsByQuery(query);

    setGifs(gifs);

    gifsCache.current[query] = gifs;

    console.log(gifsCache);
  };

  return {
    previousTerms,
    gifs,

    handleTermClicked,
    handleSearch,
  };
};

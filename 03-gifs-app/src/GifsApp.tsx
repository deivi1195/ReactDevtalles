import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const handleTermClicked = (term: string) => {
    console.log({ term });
  };

  const handleSearch =  async (query: string) => {
    query = query.trim().toLowerCase()
    
    if (query.length === 0) return;

    if (previousTerms.includes(query)) return;
    
    // const currentTerms = previousTerms.slice(0,6);
    // currentTerms.unshift(query);
    // setPreviousTerms( currentTerms )

    setPreviousTerms( [query, ... previousTerms].splice(0,7) )

    const gifs = await getGifsByQuery(query);

    setGifs(gifs)

    console.log({ gifs })

  };

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descrube y comparte el Gif perfecto"
      />

      {/* SearchBar */}
      <SearchBar 
        type="text" 
        placeholder="Buscar Gifs"
        onQuery={handleSearch}
      />

      {/* Busquedas previas */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      {/* Gifs */}
      <GifList gifs={gifs} />
    </>
  );
};

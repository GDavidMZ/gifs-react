import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.actions";

//nconst gifsCache: Record<string, Gif[]> = {}


const useGifs = () => {

    const [PreviousTerms, setPreviousTerms] = useState<string[]>([]);
    const [gifsData, setGifsData] = useState<Gif[]>([]);

    const gifsCache = useRef<Record<string, Gif[]>>({})

    const handleTermClicked = async (term: string) => {
        if (gifsCache.current[term]) {
            setGifsData(gifsCache.current[term]);
            return;
        }

        const gifs = await getGifsByQuery(term); 
        setGifsData(gifs); 
    }

    const handleSearch = async (query: string = '') => {
        query = query.trim().toLocaleLowerCase();

        if (query.length === 0) return;

        if (PreviousTerms.includes(query)) return;
        setPreviousTerms([query, ...PreviousTerms].splice(0, 7));
        const gifs = await getGifsByQuery(query);
        setGifsData(gifs);

        gifsCache.current[query] = gifs;         
    }
    return {
        gifsData,
        // Methods
        handleTermClicked,
        handleSearch,
        PreviousTerms
    }
}

export default useGifs
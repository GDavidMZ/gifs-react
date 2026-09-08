import { useState } from "react"
import GifList from "./gifs/components/GifList"
import PreviousSearches from './gifs/components/PreviousSearches';
import CustomHeader from "./shared/components/CustomHeader"
import SearchBar from "./shared/components/SearchBar"
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.actions";
import type { Gif } from "./gifs/interfaces/gif.interface";

const GifsApp = () => {

    const [PreviousTerms, setPreviousTerms] = useState<string[]>([]); 
    const [gifsData, setGifsData] = useState<Gif[]>([]); 

    const handleTermClicked = (term:string) => {
        console.log({term});
    }

    const handleSearch = async (query:string = '') => {
        query = query.trim().toLocaleLowerCase(); 

        if (query.length === 0) return; 

        if (PreviousTerms.includes(query)) return;
        setPreviousTerms([query, ...PreviousTerms].splice(0,7)); 
        const gifs = await getGifsByQuery(query);
        setGifsData(gifs);
    }

    return (
        <>
            {/*/ Header */}
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif perfecto" />
            
            {/* Search */}
            <SearchBar 
                placeholder="Buscar Gifs" 
                onQuery={handleSearch}
            />
            {/* Búsquedas previas */}
            <PreviousSearches searches={PreviousTerms} onlabelClicked={handleTermClicked} />
            
            {/* Gifs */}
            <GifList gifs={gifsData} />

        </>
    )
}

export default GifsApp
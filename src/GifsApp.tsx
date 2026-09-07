import { useState } from "react"
import GifList from "./gifs/components/GifList"
import PreviousSearches from './gifs/components/PreviousSearches';
import { mockGifs } from "./mock-data/gifs.mock"
import CustomHeader from "./shared/components/CustomHeader"
import SearchBar from "./shared/components/SearchBar"

const GifsApp = () => {

    const [PreviousTerms, setPreviousTerms] = useState(['anime']); 

    const handleTermClicked = (term:string) => {
        console.log({term});
    }

    const handleSearch = (query:string) => {
        console.log({query})
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
            <GifList gifs={mockGifs} />

        </>
    )
}

export default GifsApp
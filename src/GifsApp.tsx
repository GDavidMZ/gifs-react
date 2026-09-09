import GifList from "./gifs/components/GifList"
import PreviousSearches from './gifs/components/PreviousSearches';
import CustomHeader from "./shared/components/CustomHeader"
import SearchBar from "./shared/components/SearchBar"
import useGifs from "./gifs/hooks/useGifs";

const GifsApp = () => {

    const {handleSearch, handleTermClicked, PreviousTerms, gifsData} = useGifs(); 

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
import PreviousSearches from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import CustomHeader from "./shared/components/CustomHeader"
import SearchBar from "./shared/components/SearchBar"

const GifsApp = () => {
    return (
        <>
            {/*/ Header */}
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif perfecto" />
            
            {/* Search */}
            <SearchBar placeholder="Buscar Gifs" />

            {/* Búsquedas previas */}
            <PreviousSearches />
            
            {/* Gifs */}
            <div className="gifs-container">
                {
                    mockGifs.map((gif) => (
                        <div key={gif.id} className="gif-card" >
                            <img src={gif.url} alt={gif.title} />
                            <h3> {gif.title} </h3>
                            <p> {gif.width} x {gif.height} (1.5mb) </p>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default GifsApp
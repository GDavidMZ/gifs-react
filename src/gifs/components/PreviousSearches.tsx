import type { FC } from "react"

interface Props {
    searches: string[];
    onlabelClicked: (term:string) => void; 
}

const PreviousSearches: FC<Props> = ({ searches, onlabelClicked }) => {
    return (
        <div className="previous-searches">
            <h2>Busquedas previas</h2>
            <ul className="previous-searches-list">
                {searches.map(term => (
                    <li key={term}
                        onClick={() => onlabelClicked(term)}
                    >{term}</li>
                ))}
            </ul>
        </div>
    )
}

export default PreviousSearches
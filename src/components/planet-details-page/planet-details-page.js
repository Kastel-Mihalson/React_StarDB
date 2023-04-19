import './planet-details-page.css';
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import { Record } from "../item-details/item-details";
import { useParams } from "react-router-dom";

const PlanetDetailsPage = () =>
{
    const swapiService = new SwapiService();
    const { id } = useParams();

    return(
        <ItemDetails
            itemId={id}
            getData={swapiService.getPlanet}
            getImageUrl={swapiService.getPlanetImage}>

                <Record field="population" label="Population" />
                <Record field="rotationPeriod" label="Rotation period" />
                <Record field="diameter" label="Diameter" />

        </ItemDetails>
    )
}

export default PlanetDetailsPage;
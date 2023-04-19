import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";

import './app.css'
import PeoplePage from "../people-page/people-page";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from '../swapi-service-context/swapi-service-context';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StarshipsPage from "../starships-page";
import PlanetPage from "../planets-page/planets-page";
import ItemDetails from "../item-details";
import { Record } from "../item-details/item-details";
import PlanetDetailsPage from "../planet-details-page/planet-details-page";

export default class App extends Component {
    swapiService = new SwapiService();

    render() {
        return (
            <div>
                <SwapiServiceProvider value={this.SwapiService}>
                    <Router>
                        <Header />
                        <RandomPlanet />
                        <Routes>
                            <Route path="/" element={<h2>Welcome to star db</h2>} />
                            <Route path="/people" element={<PeoplePage />} />
                            <Route path="planets" element={<PlanetPage />} />
                            <Route path="/planets/:id" element={<PlanetDetailsPage />} />
                            <Route path="/starships" element={<StarshipsPage />} />
                        </Routes>
                    </Router>
                </SwapiServiceProvider>
            </div>
        )
    }
}
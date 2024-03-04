import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import('./pages/Home'));
const Work = React.lazy(() => import('./pages/Work'));
const NewHouses = React.lazy(() => import('./pages/NewHouses'));
const Alterations = React.lazy(() => import('./pages/Alterations'));
const Commercial = React.lazy(() => import('./pages/Commercial'));
const Educational = React.lazy(() => import('./pages/Educational'));
const Small = React.lazy(() => import('./pages/Small'));
const RiverHouse = React.lazy(() => import('./pages/new-house-pages/river-house'));
const PezulaHills = React.lazy(() => import('./pages/new-house-pages/pezula-hills'));
const PezulaFynbos = React.lazy(() => import('./pages/new-house-pages/pezula-fynbos'));
const Gradient = React.lazy(() => import('./pages/new-house-pages/gradient'));
const KennetStreet = React.lazy(() => import('./pages/new-house-pages/kennet-street'));
const SomerSet = React.lazy(() => import('./pages/new-house-pages/somerset'));
const Swartvlei = React.lazy(() => import('./pages/new-house-pages/swartvlei'));
const Townsend = React.lazy(() => import('./pages/new-house-pages/townsend'));
const WesternHead = React.lazy(() => import('./pages/new-house-pages/western-head'));
const PezulaCliffs = React.lazy(() => import('./pages/new-house-pages/pezulaCliffs'));
const EasternViews = React.lazy(() => import('./pages/new-house-pages/easternViews'));
const AndrewAve = React.lazy(() => import('./pages/new-house-pages/andrewAve'));
const IbisIsland = React.lazy(() => import('./pages/alteration-pages/ibisIsland'));
const HillviewCrescent = React.lazy(() => import('./pages/alteration-pages/hillviewCrescent'));
const HornDrive = React.lazy(() => import('./pages/alteration-pages/hornDrive'));
const CearnDrive = React.lazy(() => import('./pages/alteration-pages/cearnDrive'));
const RedBridgeRoad = React.lazy(() => import('./pages/alteration-pages/redBridgeRoad'));
const MiGym = React.lazy(() => import('./pages/commercial/migym'));
const ProposedDentistry = React.lazy(() => import('./pages/commercial/proposedDentistry'));
const VehicleTesting = React.lazy(() => import('./pages/commercial/vehicleTesting'));
const RairPlett = React.lazy(() => import('./pages/commercial/rairPlett'));
const ProposedOakhillIMAD = React.lazy(() => import('./pages/educational/proposedIMAD'));
const MasefundeLibrary = React.lazy(() => import('./pages/educational/masefundeLibrary'));
const ProposedOSCBoarding = React.lazy(() => import('./pages/educational/proposedBoarding'));
const OakhillMusicRoom = React.lazy(() => import('./pages/educational/oakhillMusicRoom'));
const LearningCommons = React.lazy(() => import('./pages/educational/learningCommons'));
const OSCPavillion = React.lazy(() => import('./pages/small/oscPavillion'));
const KennetStreetCottage = React.lazy(() => import('./pages/small/kennetStreetCottage'));
const Noetzie = React.lazy(() => import('./pages/small/noetzie'));
const DentalSurgery = React.lazy(() => import('./pages/small/dentalSurgery'));
const Router = () => {
  return (
    <Suspense>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/our-work' Component={Work}></Route>
        <Route path='/new-houses' Component={NewHouses}></Route>
        <Route path='/alterations' Component={Alterations}></Route>
        <Route path='/commercial' Component={Commercial}></Route>
        <Route path='/educational' Component={Educational}></Route>
        <Route path='/small' Component={Small}></Route>
        <Route path='/new-houses/river-house' Component={RiverHouse}></Route>
        <Route path='/new-houses/pezula-hills' Component={PezulaHills}></Route>
        <Route path='/new-houses/pezula-fynbos' Component={PezulaFynbos}></Route>
        <Route path='/new-houses/gradient' Component={Gradient}></Route>
        <Route path='/new-houses/kennet-street' Component={KennetStreet}></Route>
        <Route path='/new-houses/somerset-house' Component={SomerSet}></Route>
        <Route path='/new-houses/swartvlei' Component={Swartvlei}></Route>
        <Route path='/new-houses/townsend' Component={Townsend}></Route>
        <Route path='/new-houses/western-head' Component={WesternHead}></Route>
        <Route path='/new-houses/pezula-cliffs' Component={PezulaCliffs}></Route>
        <Route path='/new-houses/eastern-views' Component={EasternViews}></Route>
        <Route path='/new-houses/andrew-avenue' Component={AndrewAve}></Route>
        <Route path='/alterations/ibis-island' Component={IbisIsland}></Route>
        <Route path='/alterations/hillview-crescent' Component={HillviewCrescent}></Route>
        <Route path='/alterations/horn-drive' Component={HornDrive}></Route>
        <Route path='/alterations/cearn-drive' Component={CearnDrive}></Route>
        <Route path='/alterations/red-bridge-road' Component={RedBridgeRoad}></Route>
        <Route path='/commercial/migym' Component={MiGym}></Route>
        <Route path='/commercial/proposed-dentistry' Component={ProposedDentistry}></Route>
        <Route path='/commercial/rair-plett' Component={RairPlett}></Route>
        <Route path='/commercial/vehicle-testing-center' Component={VehicleTesting}></Route>
        <Route path='/educational/proposed-imad-center' Component={ProposedOakhillIMAD}></Route>
        <Route path='/educational/masefunde-library' Component={MasefundeLibrary}></Route>
        <Route path='/educational/proposed-osc-boarding-house' Component={ProposedOSCBoarding}></Route>
        <Route path='/educational/oakhill-music-room' Component={OakhillMusicRoom}></Route>
        <Route path='/educational/oakhill-learning-commons' Component={LearningCommons}></Route>
        <Route path='/small/osc-pavillion' Component={OSCPavillion}></Route>
        <Route path='/small/kennet-street-cottage' Component={KennetStreetCottage}></Route>
        <Route path='/small/noetzie' Component={Noetzie}></Route>
        <Route path='/small/dental-surgery' Component={DentalSurgery}></Route>
      </Routes>
    </Suspense>
  );
};

export default Router;

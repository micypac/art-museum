import { Switch, Route } from "react-router-dom";
import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";

function App() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />
      <Switch>
        <Route exact path="/">
          <>
            <h1>Harvard Art Museum</h1>
            <h3>Look, but Don't Touch.</h3>
          </>
        </Route>

        <Route path="/galleries/:galleryId">
          <GalleryView galleries={harvardArt.records} />
        </Route>

        <Route>
          <h2>Page Not Found</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

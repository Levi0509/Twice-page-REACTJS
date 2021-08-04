import "./App.css";
import Header from "./Components/Header";
import DefHeader from "./Default Components/Header";
import Header2 from "./Components/Header2";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./Pages/Profile";
import Discography from "./Pages/Discography";
import LandingPage from "./Pages/LandingPage";
import Discography2 from "./Pages/Discography2";
import Discography3 from "./Pages/Discography3";
import Gallery1 from "./Components/Gallery1";
import Gallery2 from "./Components/Gallery2";
import Gallery3 from "./Components/Gallery3";
import Gallery4 from "./Components/Gallery4";
import Gallery5 from "./Components/Gallery5";
import Gallery6 from "./Components/Gallery6";
import Gallery7 from "./Components/Gallery7";
import Gallery8 from "./Components/Gallery8";
import AOS from "aos";
import "aos/dist/aos.css";
import Videos from "./Pages/Videos";
import DefHome from "./Default Pages/Home";
import DefProfile from "./Default Pages/Profile";
import DefDiscography from "./Default Pages/Discography";
import DefGallery from "./Default Pages/Gallery";
import GalleryBoring from "./Default Pages/GalleryBoring";
import DefVideos from "./Default Pages/Video";

function App() {
  AOS.init({
    duration: 300,
  });
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/Mobile/Home">
            <Header />
            <Home />
          </Route>
          <Route path="/Default/Home">
            <DefHeader />
            <DefHome />
          </Route>
          <Route path="/Mobile/profile">
            <Header />
            <Profile />
          </Route>
          <Route path="/Default/profile">
            <DefHeader />
            <DefProfile />
          </Route>
          <Route path="/Mobile/discography/page-1">
            <div className="Discography">
              <Header2 />
              <Discography />
            </div>
          </Route>
          <Route path="/Mobile/discography/page-2">
            <div className="Discography">
              <Header2 />
              <Discography2 />
            </div>
          </Route>
          <Route path="/Mobile/discography/page-3">
            <div className="Discography">
              <Header2 />
              <Discography3 />
            </div>
          </Route>
          <Route path="/Default/Discography/">
            <DefHeader />
            <DefDiscography />
          </Route>
          <Route path="/Mobile/gallery/page-1">
            <Header2 />
            <Gallery1 />
          </Route>
          <Route path="/Mobile/Gallery/page-2">
            <Header2 />
            <Gallery2 />
          </Route>
          <Route path="/Mobile/Gallery/page-3">
            <Header2 />
            <Gallery3 />
          </Route>
          <Route path="/Mobile/Gallery/page-4">
            <Header2 />
            <Gallery4 />
          </Route>
          <Route path="/Mobile/Gallery/page-5">
            <Header2 />
            <Gallery5 />
          </Route>
          <Route path="/Mobile/Gallery/page-6">
            <Header2 />
            <Gallery6 />
          </Route>
          <Route path="/Mobile/Gallery/page-7">
            <Header2 />
            <Gallery7 />
          </Route>
          <Route path="/Mobile/Gallery/page-8">
            <Header2 />
            <Gallery8 />
          </Route>
          <Route path="/Default/Gallery/Boring">
            <DefHeader />
            <GalleryBoring />
          </Route>{" "}
          <Route path="/Default/Gallery">
            <DefHeader />
            <DefGallery />
          </Route>
          <Route path="/Mobile/Videos">
            <Header2 />
            <Videos />
          </Route>
          <Route path="/Default/Videos">
            <DefHeader />
            <DefVideos />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

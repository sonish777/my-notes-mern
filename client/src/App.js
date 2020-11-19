import { Route, Switch } from "react-router-dom";

import Documents from "./pages/Documents/Documents";
import Header from "./components/Header/Header";
import BreadcrumbLinksContext from "./context/BreadcrumbLinks";
import Semesters from "./pages/Semesters/Semesters";
import Subjects from "./pages/Subjects/Subjects";
import BackgroundSVG from "./Endless-Constellation1.svg";

function App() {
  return (
    <div
      style={{ backgroundImage: `url(${BackgroundSVG})`, minHeight: "100vh" }}
    >
      <BreadcrumbLinksContext.Provider
        value={{ links: [{ text: "ALL", route: "/" }] }}
      >
        <Header />
        <Switch>
          <Route path="/" exact component={Semesters} />
          <Route path="/:semId/:subId" exact component={Documents} />
          <Route path="/:semId" exact component={Subjects} />
        </Switch>
      </BreadcrumbLinksContext.Provider>
    </div>
  );
}

export default App;

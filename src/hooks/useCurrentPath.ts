import { ROUTES } from "../utils";
import { matchRoutes, useLocation } from "react-router-dom";

const routes = [
  { path: ROUTES.MAIN },
  { path: ROUTES.VIDEOS },
  { path: ROUTES.NEWS },
  { path: ROUTES.ARTICLE },
  { path: ROUTES.COMMUNITY },
];

const useCurrentPath = () => {
  const location = useLocation();
  const matchedRoutes = matchRoutes(routes, location);

  if (matchedRoutes && matchedRoutes.length > 0) {
    const currentRoute = matchedRoutes[0].route;
    return currentRoute.path;
  }

  return undefined;
};

export default useCurrentPath;

import { matchRoutes, useLocation } from "react-router-dom";

const routes = [{ path: "/" }];

const useCurrentPath = () => {
  const location = useLocation();
  const matchedRoutes = matchRoutes(routes, location);

  if (matchedRoutes && matchedRoutes.length > 0) {
    const currentRoute = matchedRoutes[0].route;
    return currentRoute.path;
  }

  return "";
};

export default useCurrentPath;

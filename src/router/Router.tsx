import { memo, VFC } from "react";
import { Switch, Route } from "react-router-dom";
import { Login } from "../componets/pages/Login";
import { Page404 } from "../componets/pages/Page404";
import { HomeRoutes } from "./HomeRoutes";
import { HeaderLayout } from "../componets/templates/HeaderLayout";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route
        path="/home"
        render={({ match: { url } }) => (
          <Switch>
            {HomeRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                <HeaderLayout>{route.children}</HeaderLayout>
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});

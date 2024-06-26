"use strict";

import routes from "./routes.js";
import Hapi from "@hapi/hapi";

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

init();

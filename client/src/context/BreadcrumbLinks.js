import React, { createContext } from "react";

const BreadcrumbLinksContext = createContext({
  links: [],
  pushLink: () => {},
});

export default BreadcrumbLinksContext;

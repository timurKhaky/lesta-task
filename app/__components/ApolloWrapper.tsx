'use client';

import { ApolloProvider } from "@apollo/client";
import client from "../__lib/apolloClient";
import { PropsWithChildren } from "react";

function ApolloWrapper({ children }: PropsWithChildren) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default ApolloWrapper;

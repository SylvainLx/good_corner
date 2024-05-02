import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: `http://localhost:8000/graphql`,
  cache: new InMemoryCache(),
});
function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Layout>
  );
}

// Disabling SSR
export default dynamic(() => Promise.resolve(App), { ssr: false });

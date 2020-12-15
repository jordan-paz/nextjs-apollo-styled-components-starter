import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../apolloClient";
import Layout from "../components/Layout";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);
  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

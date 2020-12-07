import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../apolloClient";
import Layout from "../components/Layout";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);
  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyles />
      <Typography />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

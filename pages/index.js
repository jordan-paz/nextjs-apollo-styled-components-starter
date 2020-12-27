import { initializeApollo } from "../apolloClient";
import { gql } from "@apollo/client";
import { Fragment } from "react";
import Hero from "../components/Hero";

export default function Home({ allPostData }) {
  return (
    <Fragment>
      <Hero />
    </Fragment>
  );
}

// This is an exmaple. Replace with you actual query
export async function getStaticProps() {
  const apolloClient = initializeApollo();
  const query = gql`
    query {
      allPostData: allPost {
        publishedAt
        title
        slug {
          current
        }
      }
    }
  `;
  const { data } = await apolloClient.query({ query });
  console.log(data);
  return {
    props: {
      allPostData: data.allPostData,
    },
  };
}

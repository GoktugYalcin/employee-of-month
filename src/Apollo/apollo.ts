import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

export const employeesQuery = gql`
  query Employees {
    getEmployees {
      id
      name
      age
      job
      photo
      votes
      desc
    }
  }
`;

const client = new ApolloClient({
  uri:
    !process.env.NODE_ENV || process.env.NODE_ENV === "development"
      ? "http://localhost:9002/graphql"
      : "http://localhost:9002/graphql",
  cache: new InMemoryCache(),
});

export default client;

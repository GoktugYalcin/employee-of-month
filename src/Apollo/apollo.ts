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
  uri: "http://localhost:9002/graphql",
  cache: new InMemoryCache(),
});

export default client;

import { gql } from "graphql-request";


export const PROJECTS_QUERY = gql`

query Projects {

  projects {

    id
    name
    description
    status

  }

}

`;
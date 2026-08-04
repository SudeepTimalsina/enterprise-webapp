import { gql } from "graphql-request";


export const CREATE_PROJECT =
gql`

mutation CreateProject(
  $name:String!,
  $description:String
){

 createProject(
   name:$name,
   description:$description
 ){
   id
   name
   description
   status
 }

}

`;



export const UPDATE_PROJECT_STATUS =
gql`

mutation UpdateProject(
$id:ID!,
$status:String!
){

updateProject(
 id:$id,
 status:$status
){

 id
 status

}

}

`;
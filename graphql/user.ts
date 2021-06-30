import gql from 'graphql-tag'

import { client } from '../lib/apollo-server-client'

export const findUserByExternalIdQuery = (externalId: string) => {
  return client.query({
    query: gql`
      query FindUserByExternalId($_eq: String = "") {
        users(where: {external_id: {_eq: $_eq}}) {
          external_id
          id
        }
      }
    `,
    variables: {
      _eq: externalId
    }
  })
}

export const createUserMutation = (role: string, externalId: string) => {
  return client.mutate({
    mutation: gql`
      mutation CreateUser($external_id: String = "", $role: String = "") {
        insert_users_one(object: {external_id: $external_id, role: $role}) {
          id
        }
      }
    `,
    variables: {
      external_id: externalId,
      role: role
    }
  })
}

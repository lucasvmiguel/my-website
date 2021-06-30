import { createUserMutation, findUserByExternalIdQuery } from '../graphql/user'

export const createOrFindUserIdByExternalId = async (externalId: string) => {
  const user = await findUserByExternalId(externalId)

  if (user) {
    return user.id
  }

  const { id } = await createUser(externalId)
  return id
}

const findUserByExternalId = async (externalId: string) => {
  const { data } = await findUserByExternalIdQuery(externalId)
  if (data.users.length > 0) {
    return data.users[0]
  }
  return null
}

const createUser = async (externalId: string) => {
  const { data: { insert_users_one: { id } } } = await createUserMutation('user', externalId)

  return { id }
}


import { createOrFindUserIdByExternalId } from '../../lib/user'
import * as userGraphql from '../../graphql/user'

const ID = 'foo-123'

it('when there is a user', async () => {
  /* eslint-disable no-import-assign */ // @ts-ignore
  userGraphql.findUserByExternalIdQuery = jest.fn().mockReturnValue({ data: { users: [{ id: ID }] } })

  const id = await createOrFindUserIdByExternalId(ID)
  expect(id).toBe(ID)
})

it('when there is no user', async () => {
  /* eslint-disable no-import-assign */ // @ts-ignore
  userGraphql.findUserByExternalIdQuery = jest.fn().mockReturnValue({ data: { users: [] } })
  /* eslint-disable no-import-assign */ // @ts-ignore
  userGraphql.createUserMutation = jest.fn().mockReturnValue({ data: { insert_users_one: { id: ID } } })

  const id = await createOrFindUserIdByExternalId(ID)
  expect(id).toBe(ID)
})

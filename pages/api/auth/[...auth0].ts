import type { NextApiRequest, NextApiResponse } from 'next'

import { handleAuth, handleCallback, Session } from '@auth0/nextjs-auth0'

import { createOrFindUserIdByExternalId } from '../../../lib/user'

export default handleAuth({
  async callback(req, res) {
    try {
      await handleCallback(req, res, { afterCallback })
    } catch (error) {
      res.status(error.status || 500).end(error.message)
    }
  }
})

const afterCallback = async (
  req: NextApiRequest,
  res: NextApiResponse,
  session: Session,
  state: { [key: string]: any }
) => {
  session.user.id = createOrFindUserIdByExternalId(session.user.sub)

  return session
}

import type { NextApiRequest, NextApiResponse } from 'next'
import { handleLogin } from '@auth0/nextjs-auth0'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await handleLogin(req, res, {
      authorizationParams: {
        screen_hint: 'signup'
      }
    })
  } catch (error) {
    res.status(error.status || 500).end(error.message)
  }
}

import type { NextApiRequest, NextApiResponse } from 'next'

import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0'

export default withApiAuthRequired(async (req: NextApiRequest, res: NextApiResponse) => {
  const session = getSession(req, res)

  if (session) {
    res.status(200).json({ token: session.idToken })
    return
  }

  res.status(404).end()
})

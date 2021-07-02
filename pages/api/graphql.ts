import type { NextApiRequest, NextApiResponse } from 'next'

import { getSession } from '@auth0/nextjs-auth0'

import request from 'request'
import util from 'util'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getSession(req, res)
  let headers = {}

  if (session?.idToken) {
    headers = { Authorization: `Bearer ${session?.idToken}` }
  }

  const asyncReq = util.promisify(request.post)
  const response = await asyncReq({
    url: process.env.HASURA_APOLLO_CLIENT_URI as string,
    headers,
    json: req.body,
    timeout: 5000,
    gzip: true
  })

  res.json(response.body)
}

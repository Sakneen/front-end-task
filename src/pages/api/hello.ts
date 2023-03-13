// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { fetchData } from '@/Store/filterReducer'
import {useDispatch} from 'react-redux'
type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if (req.method === 'GET') {
    const dispatch = useDispatch<any>()
    dispatch(fetchData())
  } else {
    // Handle any other HTTP method
  }
}

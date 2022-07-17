import { NextApiRequest, NextApiResponse } from "next";

import { fauna } from "../../../services/fauna";
import { query as q } from 'faunadb'

const data = async (req: NextApiRequest, res: NextApiResponse) => {

  const onibus = await fauna.query(
    q.Create(
      q.Collection('onibus'),
      { data: req.body }
    )
  )

  return res.status(200).json(onibus);
}

export default data;
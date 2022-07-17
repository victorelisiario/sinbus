import { NextApiRequest, NextApiResponse } from "next";

import { fauna } from "../../../services/fauna";
import { query as q } from 'faunadb'

type PontosProps = {
  data: {
    ref: string;
    ts: number;
    data: {
      nome: string;
      cidade: string;
      latitude: number;
      longitude: number;
    }
  }[]

}

const data = async (req: NextApiRequest, res: NextApiResponse) => {

  const pontos: PontosProps = await fauna.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection("pontos"))),
      q.Lambda("X", q.Get(q.Var("X")))
    )
  )

  return res.status(200).json(pontos);
}

export default data;
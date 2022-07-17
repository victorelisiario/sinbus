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

  console.log(req.body.data)
  const linhas_ponto: PontosProps = await fauna.query(
    q.Map(
      q.Paginate(
        q.Match(
          q.Index("linhas_by_ponto"),
          req.body.data
        )
      ),
      q.Lambda(
        "ponto",
        q.Get(q.Var("ponto")),
      )
    )
  )
  console.log(linhas_ponto)

  return res.status(200).json(linhas_ponto);
}

export default data;
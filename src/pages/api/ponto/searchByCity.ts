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
      q.Paginate(
        q.Match(
          q.Index("pontos_by_cidade"),
          req.body.nome
        )
      ),
      q.Lambda(
        "ponto",
        q.Get(q.Var("ponto")),
      )
    )
  )

  return res.status(200).json(pontos);
}

export default data;
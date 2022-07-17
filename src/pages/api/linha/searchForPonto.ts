import { NextApiRequest, NextApiResponse } from "next";

import { fauna } from "../../../services/fauna";
import { query as q } from 'faunadb'

type LinhaProps = {
  data: {
    ref: string;
    ts: number;
    data: {
      nome: string;
      empresa: string;
      cidade: string;
      horarios: string[];
      pontos: string[];
    }
  }[]

}
const data = async (req: NextApiRequest, res: NextApiResponse) => {

  console.log(req.body.nome)

  const pontos: LinhaProps = await fauna.query(
    q.Get(
      q.Ref(
        q.Collection('linhas'), '181388642046968320'))
  )

  console.log(pontos)
  return res.status(200).json(pontos);
}

export default data;
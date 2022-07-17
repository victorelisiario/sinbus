import { NextApiRequest, NextApiResponse } from "next";

import { fauna } from "../../../services/fauna";
import { query as q } from 'faunadb'

type UsuarioProps = {
  data: {
    ref: string;
    ts: number;
    data: {
      nome: string;
      sobrenome: string;
      email: string;
      role: string;
    }
  }[]

}

const data = async (req: NextApiRequest, res: NextApiResponse) => {
  const usuario: UsuarioProps = await fauna.query(
    /* q.Paginate(
      q.Match(
        q.Index("usuarios_by_email"),
        req.body.email
      )
    ),
   */

    q.Map(
      q.Paginate(
        q.Match(
          q.Index("usuarios_by_email"),
          req.body.email
        )
      ),
      q.Lambda(
        "usuario",
        q.Get(q.Var("usuario")),
      )
    )
  )

  return res.status(200).json(usuario.data[0].data.role);
}

export default data;
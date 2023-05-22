import type { NextApiRequest, NextApiResponse } from "next"

export const config = {
  api: {
    bodyParser: false,
  },
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.json({
      url: "http://localhost:3030/auth/gmail?code=code123456678945754&state=state12312124221515",
    })
  } else if (req.method === "POST") {
    return res.json({
      token: "jwt_token",
    })
  } else {
    throw new Error("Invalid method!")
  }
}

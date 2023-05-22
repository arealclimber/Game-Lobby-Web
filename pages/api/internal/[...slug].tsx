import type { NextApiRequest, NextApiResponse } from "next"
import { createProxyMiddleware } from "http-proxy-middleware"
// import getEnv from "@/utils/env";

const proxyMiddleware = createProxyMiddleware({
  // target: "https://api.gaas.waterballsa.tw",
  target: "http://localhost:3030",
  changeOrigin: true,
  pathRewrite: { "^/api/internal": "/api/mock" },
}) as any

export const config = {
  api: {
    bodyParser: false,
  },
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  proxyMiddleware(req, res, (result: unknown) => {
    if (result instanceof Error) {
      throw result
    }
  })
}

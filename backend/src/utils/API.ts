import { Response } from 'express'

interface IBuildResponse {
  statusCode: number
  success?: boolean
  data?: string | Object
  res: Response
}

export const buildResponse = ({
  statusCode,
  success = false,
  data = 'Unexpected error',
  res,
}: IBuildResponse) => {
  return res.status(statusCode).json({ success, data: data.toString() })
}

import { Request, Response } from 'express'

export const getUserPreferences = (req: Request, res: Response) => {
  return res.json({ hi: 'hello' })
}

export const updateUserPreferences = (req: Request, res: Response) => {
  return res.json({ hi: 'hello' })
}

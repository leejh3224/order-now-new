import { Request, Response, NextFunction } from 'express'
import Order from '../../db/models/Order'

export const listOrders = (req: Request, res: Response) => {
  res.send('orders')
}

export const getOrderDetail = (req: Request, res: Response) => {
  res.send('orders')
}

export const placeOrder = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { username, menu, is_packaged, quantity } = req.body

  try {
    const result = await Order.schema.methods.placeOrder({
      username,
      menu,
      is_packaged,
      quantity,
    })

    return res.json({
      result,
    })
  } catch (error) {
    next(error)
  }
}

export const updateOrder = (req: Request, res: Response) => {
  res.send('orders')
}

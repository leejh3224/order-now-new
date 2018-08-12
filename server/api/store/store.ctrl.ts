import { Request, Response, NextFunction } from 'express'
import Store from '../../db/models/Store'

export const listNearbyStores = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let { lat, lon } = req.query

  lat = Number(lat)
  lon = Number(lon)

  try {
    const stores = await Store.schema.methods.findNearbyStores(lat, lon)

    return res.json(stores)
  } catch (error) {
    next(error)
  }
}

export const listMenus = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { store_id } = req.params

  try {
    const menus = await Store.schema.methods.findAllMenus(store_id)

    return res.json(menus)
  } catch (error) {
    next(error)
  }
}

export const getMenuDetail = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { store_id, menu_id } = req.params

  try {
    const menu = await Store.schema.methods.getMenu(store_id, menu_id)

    return res.json(menu)
  } catch (error) {
    next(error)
  }
}

export const updateStoreInformation = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { store_id } = req.params

  try {
    await Store.findOneAndUpdate(store_id, req.body)

    res.send({ status: 'ok' })
  } catch (error) {
    next(error)
  }
}

import { Router } from 'express'
import {
  listOrders,
  getOrderDetail,
  placeOrder,
  updateOrder,
} from './order.ctrl'

const router: Router = Router()

router.get('/', listOrders)
router.get('/:order_id', getOrderDetail)
router.post('/', placeOrder)
router.put('/:order_id', updateOrder)

export default router

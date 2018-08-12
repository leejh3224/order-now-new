import { Router } from 'express'
import {
  listNearbyStores,
  listMenus,
  getMenuDetail,
  updateStoreInformation,
} from './store.ctrl'

const router: Router = Router()

router.get('/nearby', listNearbyStores)
router.get('/:store_id/menus', listMenus)
router.get('/:store_id/menus/:menu_id', getMenuDetail)
router.put('/:store_id', updateStoreInformation)

export default router

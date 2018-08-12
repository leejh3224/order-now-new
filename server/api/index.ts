import { Router } from 'express'
import orderRoutes from './order'
import storeRoutes from './store'
import userPreferencesRoutes from './userPreferences'

const router: Router = Router()

router.use('/orders', orderRoutes)
router.use('/stores', storeRoutes)
router.use('/userPreferences', userPreferencesRoutes)

export default router

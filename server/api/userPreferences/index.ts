import { Router } from 'express'
import {
  getUserPreferences,
  updateUserPreferences,
} from './userPreferences.ctrl'

const router: Router = Router()

router.get('/:username', getUserPreferences)
router.put('/:username', updateUserPreferences)

export default router

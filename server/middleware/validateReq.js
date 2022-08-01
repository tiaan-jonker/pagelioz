import { validationResult } from 'express-validator'

export const validateRequest = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    throw new Error(errors)
  }
  next()
}

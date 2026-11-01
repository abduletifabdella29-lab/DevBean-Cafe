import bcrypt from 'bcryptjs'
import pool from '../../../db/db.config'

const SALT_ROUNDS = 10

// Used to keep the login time the same when the email does not exist
const DUMMY_HUSH = bcrypt.hashSync('dummy-password',SALT_ROUNDS)

import localAPI from './local'
import serverAPI from './server'

const isLocal = import.meta.env.DEV
const tasksAPI = isLocal ? localAPI : serverAPI

export default tasksAPI
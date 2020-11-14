import { useApiHandler } from '@/actions'
import axios from 'axios'

const createPortfolio = (data) => axios.post('/api/v1/portfolios', data)

export const useCreatePortfolio = () => useApiHandler(createPortfolio)

import { fetcher } from 'actions'
import useSWR from 'swr'

export const useGetUser = (user) => {
  const { data, error, ...rest } = useSWR('/api/v1/me', fetcher)

  return { data, error, loading: !data && !error, ...rest }
}

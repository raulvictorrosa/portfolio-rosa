import BasePage from '@/components/BasePage'
import BaseLayout from '@/components/layouts/BaseLayout'
import axios from 'axios'

const Portifolio = ({ portifolio }) => (
  <BaseLayout>
    <BasePage>
      <h1>{portifolio.title}</h1>
      <p>{portifolio.body}</p>
      <p>{portifolio.id}</p>
    </BasePage>
  </BaseLayout>
)

Portifolio.getInitialProps = async ({ query }) => {
  let portifolio = {}
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${query.id}`
    )
    portifolio = res.data
  } catch (error) {
    console.error(error)
  }
  return { portifolio }
}

export default Portifolio

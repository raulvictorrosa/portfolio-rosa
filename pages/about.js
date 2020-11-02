import { useGetUser } from '@/actions/user'
import BasePage from '@/components/BasePage'
import BaseLayout from '@/components/layouts/BaseLayout'

const About = () => {
  const { data, loading } = useGetUser()
  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage className="about-page" title="I am About Page" />
    </BaseLayout>
  )
}

export default About

import BasePage from '@/components/BasePage'
// import withAuth from '@/components/hoc/withAuth'
import BaseLayout from '@/components/layouts/BaseLayout'

const About = () => (
  <BaseLayout>
    <BasePage className="about-page" title="I am About Page" />
  </BaseLayout>
)

// export default withAuth()(About)
export default About

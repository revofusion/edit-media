import { CallToAction } from '../../components/website/CallToAction'
import { Faqs } from '../../components/website/Faqs'
import { Footer } from '../../components/website/Footer'
import { Header } from '../../components/website/Header'
import { Hero } from '../../components/website/Hero'
import { Pricing } from '../../components/website/Pricing'
import { PrimaryFeatures } from '../../components/website/PrimaryFeatures'
import { SecondaryFeatures } from '../../components/website/SecondaryFeatures'
import { Testimonials } from '../../components/website/Testimonials'
import RootLayout from './layout'

export default function WebsiteHome() {
  return (
    <RootLayout>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </RootLayout>
  )
}

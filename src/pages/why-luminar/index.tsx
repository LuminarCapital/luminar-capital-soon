import Head from 'next/head'
import { useAppDispatch } from '@/hooks'
import Button from '@/ui/components/Button/Button'
import HeroDefault from '@/components/HeroDefault/HeroDefault'
import BoardOfCards from '@/components/BoardOfCards/BoardOfCards'
import { valuesData } from '@/routes/why-luminar/valuesData'
import BoardChessOrder from '@/components/BoardChessOrder/BoardChessOrder'
import { advantageData } from '@/routes/why-luminar/advantageData'
import CallToAction from '@/ui/components/CTA/CallToAction'
import { openModal } from '@/store/slices/modalSlice'

export default function WhyLuminar() {
  const dispatch = useAppDispatch()

  return (
    <>
      <Head>
        <title>Why Luminar Luminar</title>
        <meta
          name="description"
          content="Flexible financing options that fuel the growth of small businesses."
        />
      </Head>
      <HeroDefault
        title="Why Luminar Capital"
        description="There are many options when it comes to financing for your business, customers choose us as we seek long term partners, helping you to surpass your goals."
        banner="/banners/hero-why-luminar-banner.svg"
        actions={
          <>
            <Button
              variant="outlined"
              onClick={() =>
                dispatch(openModal({ modal: 'partner', size: 'lg' }))
              }
            >
              Become a Partner
            </Button>
            <Button
              onClick={() =>
                dispatch(openModal({ modal: 'financing', size: 'xl' }))
              }
            >
              Apply for Financing
            </Button>
          </>
        }
      />
      <BoardOfCards title="Our values" cards={valuesData} />
      <BoardChessOrder
        title="The Luminar Advantage"
        data={advantageData}
        order="odd"
        className="advantage"
      />
      <CallToAction
        title="Ready To Secure Business Financing?"
        description="Contact us and connect with one of our financing professionals that can help you navigate through the steps!"
        link={{ label: 'Get in Touch', href: '/contact' }}
      />
    </>
  )
}

export const getStaticProps = async () => {
  return {
    props: {},
  }
}

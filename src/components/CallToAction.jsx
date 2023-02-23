import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            It’s time to take control of your options. Buy or sell building materials with the clients that benefit you the most.
          </p>
          <Button href="https://ebp-phi.vercel.app/signin" color="white" className="mt-10">
            Sign up now
          </Button>
          {/* &ensp;&nbsp;
          <Button href="https://ebp-phi.vercel.app/signin" color="white" className="mt-10">
            I am a developer
          </Button>&ensp;&nbsp;
          <Button href="https://ebp-phi.vercel.app/signin" color="white" className="mt-10">
            I am a supplier
          </Button> */}
        </div>
      </Container>
    </section>
  )
}

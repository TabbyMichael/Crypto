import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { StatsSection } from "./components/stats-section"
import { FeaturesSection } from "./components/features-section"
import { LearnSection } from "./components/learn-section"
import { FreedomSection } from "./components/freedom-section"
import { PortfolioCTA } from "./components/portfolio-cta"
import { Footer } from "./components/footer"
import { SignInForm } from "./components/sign-in-form"
import { SignUpForm } from "./components/sign-up-form"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Banner */}
      <div className="bg-blue-600 p-3 text-center text-sm text-white">
        <Link href="#" className="hover:underline">
          Get up to $200 for getting started¹ →
        </Link>
      </div>

      {/* Navigation */}
      <header className="border-b">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold">
              Crypto
            </Link>
            <div className="hidden items-center gap-6 md:flex">
              <Link href="#" className="text-sm hover:text-blue-600">
                Cryptocurrencies
              </Link>
              <Link href="#" className="text-sm hover:text-blue-600">
                Learn
              </Link>
              <Link href="#" className="text-sm hover:text-blue-600">
                Individuals
              </Link>
              <Link href="#" className="text-sm hover:text-blue-600">
                Businesses
              </Link>
              <Link href="#" className="text-sm hover:text-blue-600">
                Developers
              </Link>
              <Link href="#" className="text-sm hover:text-blue-600">
                Company
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <SignInForm />
            <SignUpForm />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:gap-8 lg:gap-16">
            <div className="flex flex-col justify-center space-y-8">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                The future of money is here
              </h1>
              <p className="text-xl text-gray-600">
                We're the most trusted place for people and businesses to buy, sell, and use crypto.
              </p>
              <div className="space-y-4">
                <div className="flex max-w-md gap-4">
                  <Input
                    type="email"
                    placeholder="satoshi@nakamoto.com"
                    className="flex-1"
                  />
                  <SignUpForm />
                </div>
                <p className="text-sm text-gray-600">
                  Sign up and get up to $200 in crypto¹
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="relative aspect-[320/640] w-full max-w-[320px] overflow-hidden rounded-3xl border shadow-xl">
                  <Image
                    src="https://sjc.microlink.io/i4W-uFV-v9fAw87zp009qrJrHjsq69Rm5wnnXudNjDqYOo_QA94v_vCqHVGw1KROxvKY_EK8ETGTbd2jOV8oMQ.jpeg"
                    alt="Crypto mobile app showing portfolio"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative mt-8 aspect-[320/640] w-full max-w-[320px] overflow-hidden rounded-3xl border shadow-xl md:mt-16">
                  <Image
                    src="https://sjc.microlink.io/i4W-uFV-v9fAw87zp009qrJrHjsq69Rm5wnnXudNjDqYOo_QA94v_vCqHVGw1KROxvKY_EK8ETGTbd2jOV8oMQ.jpeg"
                    alt="Crypto mobile app showing Ethereum chart"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* USDC Section */}
        <div className="bg-black text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="relative aspect-square max-w-md">
                <Image
                  src="https://sjc.microlink.io/i4W-uFV-v9fAw87zp009qrJrHjsq69Rm5wnnXudNjDqYOo_QA94v_vCqHVGw1KROxvKY_EK8ETGTbd2jOV8oMQ.jpeg"
                  alt="USDC Coin illustration"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                  Earn 4.5% APY on USDC
                </h2>
                <p className="text-lg text-gray-400">
                  Join Crypto One today and get 4.5% APY on your first $30,000 USDC,
                  zero trading fees, priority support, and more.
                </p>
                <div>
                  <Button variant="outline" className="text-white">
                    Claim free trial →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <StatsSection />
        <FeaturesSection />
        <LearnSection />
        <FreedomSection />
        <PortfolioCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}


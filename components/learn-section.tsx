import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function LearnSection() {
  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">New to crypto? Learn some crypto basics</h2>
            <p className="text-gray-600 max-w-2xl">
              Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0">
            Read more
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-0">
              <div className="relative h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-17%20at%2022.00.56-voxhPDG58pvSkqR7sii0OAUlTginIF.png"
                  alt="USDC illustration"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">USDC: The digital dollar for the global crypto economy</h3>
                <p className="text-sm text-gray-600">
                  Coinbase believes crypto will be part of the solution to creating an open financial system that is both more efficient and more equitable.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-0">
              <div className="relative h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-17%20at%2022.00.56-voxhPDG58pvSkqR7sii0OAUlTginIF.png"
                  alt="Bank illustration"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Can crypto really replace your bank account?</h3>
                <p className="text-sm text-gray-600">
                  If you're a big enough fan of crypto, you've probably heard people talking about "banking" — the idea that your crypto can offer more control over your financial future.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-0">
              <div className="relative h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-17%20at%2022.00.56-voxhPDG58pvSkqR7sii0OAUlTginIF.png"
                  alt="Investment timing illustration"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">When is the best time to invest in crypto?</h3>
                <p className="text-sm text-gray-600">
                  Cryptocurrencies like Bitcoin can experience significant price volatility. With any kind of investment, volatility may cause uncertainty.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


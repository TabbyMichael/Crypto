import Image from "next/image"
import { Button } from "@/components/ui/button"

export function FreedomSection() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The freedom of crypto for everyone, everywhere
            </h2>
            <p className="text-gray-600 mb-8">
              We're committed to creating more economic freedom through accessible, safe, and secure financial tools for everyone.
            </p>
            <Button variant="outline">Learn more</Button>
          </div>
          <div className="relative aspect-square">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-17%20at%2022.00.56-voxhPDG58pvSkqR7sii0OAUlTginIF.png"
              alt="People walking"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}


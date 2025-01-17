import { Shield, Users, HelpCircle, CheckCircle } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { SignUpForm } from "./sign-up-form"

export function FeaturesSection() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">The most trusted cryptocurrency exchange</h2>
            <p className="text-gray-600 max-w-2xl">
              We're the most trusted place for people and businesses to buy, sell, and manage crypto.
            </p>
          </div>
          <SignUpForm />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <Users className="w-12 h-12 mb-4 text-blue-600" />
              <h3 className="text-lg font-semibold mb-2">The largest public crypto company</h3>
              <p className="text-sm text-gray-600">We operate with financial transparency.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <Shield className="w-12 h-12 mb-4 text-blue-600" />
              <h3 className="text-lg font-semibold mb-2">Your assets are protected</h3>
              <p className="text-sm text-gray-600">Our risk management measures are designed to protect your assets.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <HelpCircle className="w-12 h-12 mb-4 text-blue-600" />
              <h3 className="text-lg font-semibold mb-2">Get the help you need, when you need it</h3>
              <p className="text-sm text-gray-600">You can always contact our support team for quick solutions to common problems.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <CheckCircle className="w-12 h-12 mb-4 text-blue-600" />
              <h3 className="text-lg font-semibold mb-2">Industry best practices</h3>
              <p className="text-sm text-gray-600">Crypto supports a variety of the most popular digital assets.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


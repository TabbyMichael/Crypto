import { SignUpForm } from "./sign-up-form"

export function PortfolioCTA() {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Start your portfolio today</h2>
            <p className="text-gray-400">
              Sign up for a Crypto account today and see what the world of decentralized finance can do for you.
            </p>
          </div>
          <SignUpForm />
        </div>
      </div>
    </div>
  )
}


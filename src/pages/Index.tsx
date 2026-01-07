import { Link } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import { Button } from '@/components/ui/button'

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Welcome to IJAAE</h1>
          <p className="text-xl text-muted-foreground mb-8">
            International Journal of Advanced Applied Engineering
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/dashboard">
              <Button size="lg">Get Started</Button>
            </Link>
            <Link to="/auth">
              <Button size="lg" variant="outline">Sign In</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

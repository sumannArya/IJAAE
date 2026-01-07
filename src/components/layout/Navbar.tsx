import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import Logo from './Logo'
import NavLink from '../NavLink'
import { Button } from '../ui/button'

export default function Navbar() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOut()
    navigate('/auth')
  }

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Logo />
        
        <div className="flex items-center gap-4">
          <NavLink to="/">Home</NavLink>
          {user ? (
            <>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <Button onClick={handleSignOut} variant="outline" size="sm">
                Sign Out
              </Button>
            </>
          ) : (
            <NavLink to="/auth">Sign In</NavLink>
          )}
        </div>
      </div>
    </nav>
  )
}

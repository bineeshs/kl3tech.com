import { Outlet, Link, useNavigate } from 'react-router';
import { ShoppingCart, User, Package } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

export function CustomerLayout() {
  const { cart, isAdmin, isLoggedIn } = useApp();
  const navigate = useNavigate();
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Package className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-semibold">AudioHub</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="hover:text-blue-600 transition-colors">
              Products
            </Link>
            {isLoggedIn && (
              <Link to="/account" className="hover:text-blue-600 transition-colors">
                My Account
              </Link>
            )}
            <Link to="/cart" className="hover:text-blue-600 transition-colors">
              Cart
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            {isAdmin && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate('/admin')}
              >
                Admin Panel
              </Button>
            )}
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="w-5 h-5" />
                {cartItemCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {cartItemCount}
                  </Badge>
                )}
              </Button>
            </Link>
            {isLoggedIn ? (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('/account')}
              >
                <User className="w-5 h-5 fill-blue-600" />
              </Button>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('/login')}
              >
                <User className="w-5 h-5" />
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="min-h-[calc(100vh-4rem)]">
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Package className="w-6 h-6" />
                <span className="text-lg font-semibold">AudioHub</span>
              </div>
              <p className="text-gray-400">Premium custom-built audio electronics for music enthusiasts.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-white">Products</Link></li>
                <li><Link to="/cart" className="hover:text-white">Cart</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">Email: support@audiohub.com</p>
              <p className="text-gray-400">Phone: (555) 123-4567</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            © 2026 Kl3tech. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

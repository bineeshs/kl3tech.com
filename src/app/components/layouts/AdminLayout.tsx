import { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router';
import { LayoutDashboard, Package, ShoppingBag, LogOut, Home, Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { useApp } from '../../context/AppContext';

export function AdminLayout() {
  const navigate = useNavigate();
  const { logout } = useApp();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen w-full bg-slate-100">
      <header className="flex h-[72px] items-center justify-between bg-slate-950 px-4 text-white shadow-inner sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-300 ring-1 ring-cyan-500/30">
            <LayoutDashboard className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/80">Admin area</p>
            <h1 className="text-2xl font-semibold">Adminal</h1>
          </div>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-800 text-cyan-300 transition hover:bg-slate-700"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label={sidebarOpen ? "Close navigation" : "Open navigation"}
        >
          {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>

      <div className="relative flex min-h-[calc(100vh-72px)]">
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <aside className={`fixed top-[72px] left-0 z-40 h-[calc(100vh-72px)] w-[280px] overflow-y-auto bg-slate-950 text-white ring-1 ring-slate-800 transition-transform duration-300 ease-in-out lg:static lg:top-auto lg:left-auto lg:z-auto lg:h-auto lg:w-[300px] lg:overflow-visible lg:transition-none ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 ${!sidebarOpen ? 'lg:hidden' : ''}`}>
          <div className="flex items-center justify-between px-4 py-4 border-b border-slate-800 lg:hidden">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80">Navigation</span>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-800 text-white transition hover:bg-slate-700"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close navigation"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex-1 space-y-2 px-4 py-5 lg:px-4 lg:py-5">
            <Link to="/admin">
              <Button variant="ghost" className="w-full justify-start text-white hover:bg-slate-800 hover:text-white">
                <LayoutDashboard className="w-5 h-5 mr-3" />
                Dashboard
              </Button>
            </Link>
            <Link to="/admin/products">
              <Button variant="ghost" className="w-full justify-start text-white hover:bg-slate-800 hover:text-white">
                <Package className="w-5 h-5 mr-3" />
                Products
              </Button>
            </Link>
            <Link to="/admin/orders">
              <Button variant="ghost" className="w-full justify-start text-white hover:bg-slate-800 hover:text-white">
                <ShoppingBag className="w-5 h-5 mr-3" />
                Orders
              </Button>
            </Link>
          </nav>
          <div className="px-4 py-6 border-t border-slate-800">
            <Button
              variant="ghost"
              className="w-full justify-start text-white hover:bg-slate-800 hover:text-white"
              onClick={() => {
                setSidebarOpen(false);
                navigate('/');
              }}
            >
              <Home className="w-5 h-5 mr-3" />
              Back to Store
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-white hover:bg-slate-800 hover:text-white mt-2"
              onClick={() => {
                logout();
                navigate('/login');
              }}
            >
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </Button>
          </div>
        </aside>

        <main className="flex-1 overflow-auto p-4 transition-all duration-300 sm:p-6 lg:p-8">
          <div className="min-h-[calc(100vh-72px)] rounded-[2rem] bg-white p-6 shadow-lg ring-1 ring-slate-200 sm:p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

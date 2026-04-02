import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { RoleBadge } from './RoleBadge';

export const Layout: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="sidebar-header mb-6">
          <h1 className="text-xl font-bold tracking-tight text-primary">FinanceDash</h1>
          <div className="mt-2">
            <RoleBadge />
          </div>
        </div>

        <nav className="flex flex-col gap-2">
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            end
          >
            Dashboard
          </NavLink>
          <NavLink 
            to="/transactions" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Transactions
          </NavLink>
          <NavLink 
            to="/insights" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Insights
          </NavLink>
          <NavLink 
            to="/settings" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Settings
          </NavLink>
        </nav>

        <button 
          onClick={toggleTheme} 
          className="theme-toggle"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
              <span>Dark Mode</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="4.22" x2="19.78" y2="5.64"></line></svg>
              <span>Light Mode</span>
            </div>
          )}
        </button>
      </aside>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

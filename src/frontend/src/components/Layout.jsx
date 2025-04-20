import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './layout.css';
import { Outlet } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export default function Layout() {
  const [isOpen, setOpen] = useState(true);
  return (
    <div className="app-shell">
      <Sidebar isOpen={isOpen} />
      <div className="content-area">
        <header className="topbar">
          <button className="toggle-btn" onClick={() => setOpen(o => !o)}>
            <FaBars />
          </button>
        </header>
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
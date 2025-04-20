import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaHome,
  FaPlusCircle,
  FaListUl,
  FaCog
} from 'react-icons/fa';
import './sidebar.css';

const links = [
  { to: '/',        label: 'Home',        icon: <FaHome /> },
  { to: '/nova-entrega', label: 'Nova Entrega', icon: <FaPlusCircle /> },
  { to: '/entregas',    label: 'Entregas',    icon: <FaListUl /> },
  { to: '/settings',    label: 'Configurações', icon: <FaCog /> },
];

export default function Sidebar({ isOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="logo">
        {isOpen ? 'MotoFácil' : 'MF'}
      </div>
      <nav className="menu">
        {links.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            className="menu-item"
            activeClassName="active"
            exact
          >
            <span className="icon">{icon}</span>
            {isOpen && <span className="label">{label}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
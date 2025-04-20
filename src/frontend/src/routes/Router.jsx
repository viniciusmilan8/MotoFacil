import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import DeliveryForm from '../pages/DeliveryForm';
import DeliveriesList from '../pages/DeliveriesList';
import Settings from '../pages/Settings';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="nova-entrega" element={<DeliveryForm />} />
          <Route path="entregas" element={<DeliveriesList />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
import React from 'react'
import { Routes, Route } from "react-router";
import Store from './components/pages/Store';
import SKU from './components/pages/Sku';
import Planning from './components/pages/Planning';

export default function Routers() {
  return (
    <Routes>
      <Route path='' element={<Store />} />
      <Route path='/sku' element={<SKU />} />
      <Route path='/planning' element={<Planning />} />
    </Routes>
  )
}

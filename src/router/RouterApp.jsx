import { Route, Routes, Navigate } from 'react-router-dom';

import { TodosPage } from '../todos/pages';


export const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<TodosPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}

import React from 'react';
import { render, screen } from '@testing-library/react';
import {Catalog} from './components/Catalog';

// Prueba 1: Verificar la presencia del título "Catálogo" ===========================
test('renders app with correct title', () => {
  render(<Catalog />);
  const titleElement = screen.getByText(/Catalog/i);
  expect(titleElement).toBeInTheDocument();
});

// Prueba 2: Verificar la presencia de al menos un producto en el catálogo ==========
test('renders at least one product in the catalog', () => {
  render(<Catalog></Catalog>);
  const productElement = screen.getByText(/Add to Cart/i); 
  expect(productElement).toBeInTheDocument();
});

// Prueba 3: Verificar si un botón específico está presente =========================
test('renders a specific button in the app', () => {
  render(<Catalog></Catalog>);
  const specificButton = screen.getByRole('button', { name: /Add to Card/i }); 
  expect(specificButton).toBeInTheDocument();
});

// Prueba 4: Verificar que se rendericen todas las imágenes de los productos =========
test('renders all product images in the catalog', () => {
  render(<Catalog></Catalog>);
  const productImages = screen.getAllByRole('img');
  expect(productImages).toHaveLength(5);
});

// Prueba 5: Verificar el texto del botón de un producto específico ==================
test('verifies text of a specific product button', () => {
  render(<Catalog></Catalog>);
  const specificProductButton = screen.getByRole('button', { name: /Add to cart/i });
  expect(specificProductButton).toHaveTextContent('Add to cart');
});
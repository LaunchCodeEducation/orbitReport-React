import { render, screen } from '@testing-library/react';
import App from '../App';
import testData from './testData';
import Table from '../components/Table';

describe("Final App function should contain a BANNER with title", () => {

   test('renders Banner with h1 text', () => {
   render(<App />);
   const element = screen.getByText(/Orbit Report/i);
   expect(element).toBeInTheDocument();
   });
});

describe("Final App function should contain 4 BUTTONS: Low, Medium, High, and All orbits", () => {

   test('renders Low Orbit Button', () => {
   render(<App />);
   const element = screen.getByText(/Low Orbit/i);
   expect(element).toBeInTheDocument();
   });

   test('renders Medium Orbit Button', () => {
   render(<App />);
   const element = screen.getByText(/Medium Orbit/i);
   expect(element).toBeInTheDocument();
   });

   test('renders High Orbit Button', () => {
   render(<App />);
   const element = screen.getByText(/High Orbit/i);
   expect(element).toBeInTheDocument();
   });

   test('renders All Orbit Button', () => {
   render(<App />);
   const element = screen.getByText(/All Orbit/i);
   expect(element).toBeInTheDocument();
   });
});

describe("Final App function should contain a TABLE with values in both headers and cells", () => {

   test('renders Table Header', () => {
   render(<Table sat={testData} />);
   const element = screen.getByText(/Launch Date/i);
   expect(element).toBeInTheDocument();
   });

   test('renders Table Cells for Name', () => {
   render(<Table sat={testData} />);
   const element = screen.getByText(/Test 1/i);
   expect(element).toBeInTheDocument();
   });

   test('renders Table Cells for Launch Date', () => {
   render(<Table sat={testData} />);
   const element = screen.getByText(/2222-22-22/i);
   expect(element).toBeInTheDocument();
   });

   test('renders Table Cells for Type', () => {
   render(<Table sat={testData} />);
   const element = screen.getByText(/Test-Probe/i);
   expect(element).toBeInTheDocument();
   });
});


import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ClerkProvider } from '@clerk/clerk-react'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

//context
import { DataProvider } from './context/DataContext.tsx'
import { CartProvider } from './context/CartContext.tsx'
import { FavoriteProvider } from './context/FavoriteContext.tsx'
import { ToastProvider } from './context/ToastContext.tsx'


createRoot(document.getElementById('root')!).render(
 <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
  <DataProvider>
    <CartProvider>
      <FavoriteProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </FavoriteProvider>
    </CartProvider>
  </DataProvider>
</ClerkProvider>


)

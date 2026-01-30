import { migrateLegacyStorage } from './utils/migrate-legacy';

// Run migration BEFORE any Zustand stores are created
migrateLegacyStorage();

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

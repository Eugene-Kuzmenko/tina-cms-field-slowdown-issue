import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { TinaCMS, TinaProvider } from 'tinacms';

const TINA_CMS = new TinaCMS({
  enabled: true,
  sidebar: {
    position: 'displace',
    renderNav: false,
  },
  apis: {
    tina: {
      isLocalMode: true,
      schema: {},
    },
    admin: {
      fetchCollections: () => [],
    }
  }
});

if (TINA_CMS.sidebar) TINA_CMS.sidebar.isOpen = true;

TINA_CMS.flags.set("tina-admin", false);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TinaProvider cms={TINA_CMS}>
      <App />
    </TinaProvider>
  </React.StrictMode>,
)

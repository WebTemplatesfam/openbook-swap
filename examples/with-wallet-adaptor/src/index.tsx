import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const endpoint = 'https://mainnet.helius-rpc.com/?api-key=3fa7b09a-0f43-469a-a640-368f2ad29afe';
const wallets = [
  new PhantomWalletAdapter()
];

root.render(
  <ConnectionProvider endpoint={endpoint}>
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        <App />
      </WalletModalProvider>
    </WalletProvider>
  </ConnectionProvider>
);

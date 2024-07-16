import { Main_KV } from './Main_KV';

export const Portal = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Main_KV />
      <div
        style={{
          border: '2px solid #666',
          margin: '2px',
          padding: '10px',
          backgroundColor: 'lightblue',
          color: 'darkviolet',
          width: '100%',
        }}
      >
        推奨環境：Google Chrome
      </div>
    </div>
  );
};

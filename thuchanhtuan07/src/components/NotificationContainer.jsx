import React from 'react';
import { useRecoilValue } from 'recoil';
import { notifyState } from '../recoil/NotifyState';

const NotificationContainer = () => {
  const notifies = useRecoilValue(notifyState);

  const containerStyle = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    zIndex: 9999
  };

  return (
    <div style={containerStyle}>
      {notifies.map((n) => (
        <div 
          key={n.id} 
          style={{
            backgroundColor: n.type === 'success' ? '#4CAF50' : '#f44336',
            color: 'white',
            padding: '10px 20px',
            marginBottom: '10px',
            borderRadius: '4px'
          }}
        >
          {n.message}
        </div>
      ))}
    </div>
  );
};

export default NotificationContainer;
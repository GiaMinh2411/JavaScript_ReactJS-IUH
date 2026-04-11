import React from 'react';
import { useSetRecoilState } from 'recoil';
import { notifyState } from '../recoil/NotifyState';

const TestNotify = () => {
  const setNotifies = useSetRecoilState(notifyState);

  const handleShowNotify = (message, type) => {
    const id = Date.now();

    setNotifies((old) => [...old, { id, message, type }]);

    setTimeout(() => {
      setNotifies((old) => old.filter((n) => n.id !== id));
    }, 3000);
  };

  return (
    <div>
      <button onClick={() => handleShowNotify('Thao tác thành công!', 'success')}>
        Hiện thông báo Thành công
      </button>
      <button onClick={() => handleShowNotify('Có lỗi xảy ra!', 'error')} style={{ marginLeft: '10px' }}>
        Hiện thông báo Lỗi
      </button>
    </div>
  );
};

export default TestNotify;
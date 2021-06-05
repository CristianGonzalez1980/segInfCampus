import React, { useState } from 'react';
import Toast from 'react-toast-component';

function ToastMessage() {
  const [isOpen, setToast] = useState(true);
  return (
    <div className="ToastMessage">
      <Toast
        isOpen={isOpen}
        hasAutoDismiss={false}
        hasCloseBtn
        closeCallback={() => setToast(false)}
        description="There's some great info here."
        title="App Notification!!"
        duration={5000}
        classNames={['info']}  // 'success', 'info', 'warning', 'error'
      />
    </div>
  );
}

export default ToastMessage;
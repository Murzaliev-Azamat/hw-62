import React from 'react';

interface AlertProps extends React.PropsWithChildren{
  show: boolean;
  type: string;
  onDismiss?: React.MouseEventHandler;
}

const Alert: React.FC<AlertProps> = ({show,type, onDismiss, children}) => {
  const alertClass = "w-50 mt-3 alert-dismissible alert alert-" + type;

  return (
      <div className={alertClass} style={{display: show ? 'block' : 'none'}} role="alert">
        {children}
        {onDismiss ? (<button onClick={onDismiss} type="button" className="btn-close"></button>) : null}
      </div>
  );
};
export default Alert;
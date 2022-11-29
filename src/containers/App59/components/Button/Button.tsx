import React, {FC, PropsWithChildren, useEffect} from 'react';

interface ButtonProps extends PropsWithChildren{
  onClick: React.ReactEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = (props) => {
  useEffect(() => {
    console.log('[Button] component mounted or updated');
  }, );

  return (
    <button onClick={props.onClick} style={{marginTop: '10px'}}>{props.children}</button>
  );
}

export default React.memo(Button);
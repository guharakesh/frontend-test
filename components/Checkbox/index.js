import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Checkbox = ({ children, active, onClick }) => (
  <div className="container" onClick={onClick}>
    <div className="circle">
      {active ? (
        <FontAwesomeIcon
          icon={faCheck}
          color="white"
          size="xs"
        />
      ) : null}
    </div>
    {children}
    <style jsx>{`
      .container {
        display: flex;
        align-items: center;
        padding: 5px 16px;
        color: #606060;
        font-family: 'HelveticaNeue';
      }
      .container .circle {
        height: 16px;
        width: 16px;
        border-radius: 9px;
        border: 1px solid;
        border-color: ${active ? 'black' : '#C8C8C8'};
        background-color: ${active ? 'black' : 'white'};
        margin-right: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </div>
);

Checkbox.defaultProps = {
  children: "Checkbox",
  active: false,
  onClick: () => null,
};

export default Checkbox;
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Dropdown = ({ label, children }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(value => !value);

  return (
    <div className="container">
      <div className="header" onClick={toggle}>
        <label>{label}</label>
        <FontAwesomeIcon
          icon={open ? faAngleUp : faAngleDown}
          color="#969696"
          size="xs"
        />
      </div>
      <div className="dropdown">
        {children}
      </div>
      <style jsx>{`
        .container {
          align-items: center;
          position: relative;
          top: 4px;
          transform:translateY(calc(50% - 13.5px));
        }
        .container .header {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 8px;
          border-bottom: 1px solid;
          border-color: #C8C8C8;
        }
        .container .dropdown {
          background-color: white;
          border: 1px solid;
          border-color: #C8C8C8;
          visibility: ${open ? 'visible' : 'hidden'};
          top: 20px;
          box-shadow: 0px 6px 5px rgba(0, 0, 0, .1);
          padding: 11px 0px;
          max-height: 140px;
          overflow: scroll;
        }
        .container input {
          margin-right: 8px;
        }
      `}</style>
    </div>
  );
}

Dropdown.defaultProps = {
  children: "Dropdown",
};

export default Dropdown;

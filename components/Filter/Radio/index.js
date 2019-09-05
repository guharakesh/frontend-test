const Radio = ({ children, active, handleClick }) => (
  <div className="container">
    <input
      type="radio"
      readOnly
      onClick={handleClick}
      id={children}
      checked={active}
    />
    <label htmlFor={children}>{children}</label>
    <style jsx>{`
      .container {
        display: flex;
        align-items: center;
        border-bottom: 1px solid;
        border-color: #C8C8C8;
        padding-bottom: 8px;
        margin-top: 8px;
      }
      .container input {
        margin-right: 8px;
      }
    `}</style>
  </div>
);

Radio.defaultProps = {
  children: "Radio Button"
}

export default Radio;
const Dot = ({ large, closed }) => (
  <div className="dot">
    <style jsx>{`
      .dot {
        height: ${large ? 22 : 8}px;
        width: ${large ? 22 : 8}px;
        border-radius: ${large ? 11 : 4}px;
        background-color: ${closed ? '#FF3548' : '#00E8A4'};
        margin-right: ${large ? 8 : 4}px;
      }
    `}</style>
  </div>
);

Dot.defaultProps = {
  large: false,
  closed: false,
};

export default Dot;
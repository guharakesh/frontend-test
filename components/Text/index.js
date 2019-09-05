const Text = ({ children, size, color, font }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        font-size: ${size}px;
        color: ${color};
        font-family: ${font};
      }
    `}</style>
  </div>
);

Text.defaultProps = {
  children: 'Text',
  size: 54,
  color: '#333333',
  font: 'HelveticaNeue-Light',
};

export default Text;
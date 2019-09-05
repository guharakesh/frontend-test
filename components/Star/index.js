const Star = ({ fill, large }) => (
  <span>
    <img src={`/static/star-${fill}.svg`} />
    <style jsx>{`
      img {
        width: ${large ? '29.47px' : '19.52px'}
      }
    `}</style>
  </span>
);

Star.defaultProps = {
  fill: 'filled',
  large: false,
}

export default Star;
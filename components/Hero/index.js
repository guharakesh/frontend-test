import Header from '../Header';

const Hero = ({ children: { title, body }}) => (
  <div>
    <Header>{title}</Header>
    <p>{body}</p>
    <style jsx>{`
      p {
        max-width: 752px;
        font-size: 22px;
        color: #666666;
      }
    `}</style>
  </div>
);

Hero.defaultProps = {
  children: {
    title: 'Title',
    body: 'This is some body text',
  },
};

export default Hero;
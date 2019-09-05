import Text from '../../../Text';

const Title = ({ children }) => (
  <Text
    font="HelveticaNeue"
    size={20}
    color="black"
  >{children}</Text>
);

Title.defaultProps = {
  children: 'Title',
};

export default Title;
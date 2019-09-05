import Text from '../../Text';

const Header2 = ({ children }) => (
  <Text size={34}>{children}</Text>
);

Header2.defaultProps = {
  children: 'Header',
};

export default Header2;
import Text from '../Text';

const Header = ({ children }) => <Text>{children}</Text>;

Header.defaultProps = {
  children: 'Header',
};

export default Header;
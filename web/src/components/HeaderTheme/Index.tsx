import React, {useContext} from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { Container } from './styles';

interface Props {
  toggleTheme(): void,
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const {title} = useContext(ThemeContext);
  
  return (
    <Container>
      <h1>Developed with ❤ by <a target='blank' href="http://github.com/andrecampll">andrecampll</a> </h1>
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor="#ccc"
        onColor="#333"
      />
    </Container>
  );
}

export default Header;
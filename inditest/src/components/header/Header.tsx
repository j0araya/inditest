import { HeaderContainer, Underline } from './Header.styles';
import texts from './Header.texts';

const Header = () => (
    <HeaderContainer>
        {texts.title}
        <Underline />
    </HeaderContainer>
)


export default Header;
import { HeaderContainer, Underline } from './Header.styles';
import texts from './Header.texts';

const Header = ({ isLoading }: { isLoading: boolean }) => (
	<HeaderContainer>
		<div style={{ display: 'flex', justifyContent: 'space-between' }}>
			<span>
				{texts.title}
			</span>
			{isLoading && <span style={{ marginLeft: 'auto' }}>Loading...</span>}
		</div>
		<Underline />
	</HeaderContainer>
)


export default Header;
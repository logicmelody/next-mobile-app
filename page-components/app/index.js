import { startApp } from '../../ibear-react-mobile-navigation';

import Tabs from '../../navigation/tabs';
import Pages from '../../navigation/pages';
import { NavigationKeyEnums } from '../../navigation';

const {
	LAYOUT_ROUTE,
} = NavigationKeyEnums;

function App() {
	return startApp({
		tabs: Tabs,
		pages: Pages,
		rootRoute: LAYOUT_ROUTE,
	});
}

export default App;

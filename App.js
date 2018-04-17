import { StackNavigator } from 'react-navigation';
import {
  Favorites,
  MainScreen,
  PostDetails,
  PersonalHomepage,
  SystemSetting,
  PersonalSetting,
  DraftBox,
} from './src/screens';

export default StackNavigator({
  MainScreen: {
    screen: MainScreen,
    navigationOptions: {
      header: null,
    }
  },
  PostDetails: {
    screen: PostDetails,
  },
  PersonalHomepage: {
    screen: PersonalHomepage,
  },
  Favorites: {
    screen: Favorites,
  },
  PersonalSetting: {
    screen: PersonalSetting,
  },
  SystemSetting: {
    screen: SystemSetting,
  },
  DraftBox: {
    screen: DraftBox,
  },
});

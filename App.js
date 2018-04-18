import { StackNavigator } from 'react-navigation';
import {
  Favorites,
  IndexScreen,
  PersonalHomepage,
  SystemSetting,
  PersonalSetting,
  DraftBox,
  EditPost,
  PostDetails
} from './src/screens';

export default StackNavigator({
  MainScreen: {
    screen: IndexScreen,
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
  EditPost: {
    screen: EditPost,
  },
  PostDetails: {
    screen: PostDetails,
  }
});

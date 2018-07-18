import {
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import {
  Favorites,
  IndexScreen,
  PersonalHomepage,
  SystemSetting,
  PersonalSetting,
  DraftBox,
  EditPost,
  PostDetails,
  Following,
  Login,
  Registered,
  AuthLoading,
} from './screens';

const App = createStackNavigator(
  {
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
    Following: {
      screen: Following,
    },
  }, 
  {
    initialRouteName: 'MainScreen',
  }
);

const LoginFlow = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      }
    },
    Registered: {
      screen: Registered,
      navigationOptions: {
        title: '注册'
      }
    }
  },
  {
    initialRouteName: 'Login',
  }
);

export default Navigation = createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: App,
    LoginFlow: LoginFlow,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

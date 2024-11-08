import Splash from '@screens/auth/splash/Splash';
import screenName from '../screenName';
import Login from '@screens/auth/login/Login';

export const stackScreens = [
  {name: screenName.splash, component: Splash},
  {name: screenName.login, component: Login},
];

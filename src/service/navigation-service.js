/**
 * 代码来源: https://reactnavigation.org/docs/zh-Hans/navigating-without-navigation-prop.html
 */

import { NavigationActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

export {
  navigate,
  setTopLevelNavigator,
};

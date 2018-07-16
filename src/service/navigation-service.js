/**
 * 代码来源: https://reactnavigation.org/docs/zh-Hans/navigating-without-navigation-prop.html
 * 所要解决的问题: 在 react-navigation stack 之外调用导航.
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

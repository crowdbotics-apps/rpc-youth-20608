import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList106864Navigator from '../features/ArticleList106864/navigator';
import ArticleList106863Navigator from '../features/ArticleList106863/navigator';
import ArticleList106862Navigator from '../features/ArticleList106862/navigator';
import ArticleList106830Navigator from '../features/ArticleList106830/navigator';
import ArticleList106829Navigator from '../features/ArticleList106829/navigator';
import ArticleList106828Navigator from '../features/ArticleList106828/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList106864: { screen: ArticleList106864Navigator },
ArticleList106863: { screen: ArticleList106863Navigator },
ArticleList106862: { screen: ArticleList106862Navigator },
ArticleList106830: { screen: ArticleList106830Navigator },
ArticleList106829: { screen: ArticleList106829Navigator },
ArticleList106828: { screen: ArticleList106828Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

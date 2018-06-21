/**
 * navigationStack
 *
 * create by Conyarck
 * 2018/5/30 09:43
 * @flow
 */


import StackViewStyleInterpolator from "react-navigation/src/views/StackView/StackViewStyleInterpolator";

import MainView from '../components/MainView';
import OnePge from "../components/OnePgeView";
import TwoPge from "../components/TwoPgeView";
import ThreePge from "../components/ThreePgeView";

const routerMap = {
    AppMain: { screen: MainView },
    OnePge: { screen: OnePge },
    TwoPge: { screen: TwoPge },
    ThreePge: { screen: ThreePge },
};

const stackConfig = {
    headerMode: 'none',
    mode: 'card',
    initialRouteName: 'AppMain',
    transitionConfig: (configProps) => ({
        ...configProps,
        containerStyle: {
            backgroundColor: 'white',
        },
        screenInterpolator: (sceneProps) => {

            const {scene} = sceneProps;
            const {route} = scene;
            let direction = 'forHorizontal';
            if (route.routeName == 'AppMain') {
                direction = 'forFade';
            }
            const params = route.params || {};
            const transition = params.transition || direction;

            return StackViewStyleInterpolator[transition](sceneProps);
        },
    }),
}

export {routerMap, stackConfig}
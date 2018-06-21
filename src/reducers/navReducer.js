/**
 * navReducer
 *
 * create by Conyarck
 * 2018/5/30 09:34
 * @flow
 */

import { AppNavigator } from '../navigators';
const mainAction = AppNavigator.router.getActionForPathAndParams('AppMain');

const mainNavState = AppNavigator.router.getStateForAction(mainAction);
const initialNavState = AppNavigator.router.getStateForAction(
    mainAction,
    mainNavState
);

export default function nav(state = initialNavState, action) {
    let nextState;
    switch (action.type) {
        case 'backToMain': //
            nextState = AppNavigator.router.getStateForAction(
                AppNavigator.router.getActionForPathAndParams('AppMain', action.params),
                state,
            );
            break;
        case 'goOnePage': //
            nextState = AppNavigator.router.getStateForAction(
                AppNavigator.router.getActionForPathAndParams('OnePge', action.params),
                state,
            );
            break;
        case 'goTwoPage': //
            nextState = AppNavigator.router.getStateForAction(
                AppNavigator.router.getActionForPathAndParams('TwoPge', action.params),
                state,
            );
            break;
        case 'goThreePage': //
            nextState = AppNavigator.router.getStateForAction(
                AppNavigator.router.getActionForPathAndParams('ThreePge', action.params),
                state,
            );
            break;
        // case 'signCompleted':  // 登陆或
        //     if (action && action.targetRouterName) {
        //         nextState = AppNavigator.router.getStateForAction(
        //             AppNavigator.router.getActionForPathAndParams(action.targetRouterName, action.params),
        //             state,
        //         );
        //     } else {
        //         nextState = AppNavigator.router.getStateForAction(action, state)
        //     }
        //     break;
        // case 'backToHolidayOrderDetail': // 通过共享假期介绍页进入套餐创建后进入套餐支付页返回到套餐详情
        //     nextState = AppNavigator.router.getStateForAction(
        //         AppNavigator.router.getActionForPathAndParams('HolidayOrderDetail', action.params),
        //         AppNavigator.router.getStateForAction(
        //             AppNavigator.router.getActionForPathAndParams('HolidayOrder'),
        //             mainNavState,
        //         )
        //     );
        //     break;
        // case 'backToCarryOnPayOfHolidayOrder':
        //     nextState = AppNavigator.router.getStateForAction(
        //         AppNavigator.router.getActionForPathAndParams('HolidayOrderPay', action.params),
        //         state,
        //     );
        //     break;
        // case 'backToFreeTravelOrderDetail':
        //     nextState = AppNavigator.router.getStateForAction(
        //         AppNavigator.router.getActionForPathAndParams('FreeTravelOrderDetail', action.params),
        //         AppNavigator.router.getStateForAction(
        //             AppNavigator.router.getActionForPathAndParams('FreeTravelOrder'),
        //             mainNavState,
        //         ),
        //     );
        //     break;
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }
    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}
/**
 * AppMain
 *
 * create by Conyarck
 * 27/11/2017 14:46
 * @flow
 */

import React, {Component} from 'react';
import {View,TouchableOpacity,Text} from 'react-native';

export default class ThreePge extends Component<{}> {

    constructor(props) {
        super(props);
        this.inform = this.props.navigation.state.params.inform

    }

    /**
     * 第三页
     * */
    render() {
        return (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize:20}}>{this.inform}</Text>
                <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', height: 44,marginTop:20}}
                                  onPress={() => {
                                      this.goNextPage()
                                  }}>
                    <Text style={{fontSize:20}}>跳转到主页</Text>
                </TouchableOpacity>
            </View>

        );
    }
    goNextPage(){
        const {dispatch, state} = this.props.navigation;
        dispatch({type: 'backToMain', params:{test:'testParams'}});
    }
}

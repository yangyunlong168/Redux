/**
 * AppMain
 *
 * create by Conyarck
 * 27/11/2017 14:46
 * @flow
 */

import React, {Component} from 'react';
import {View,TouchableOpacity,Text} from 'react-native';

export default class MainView extends Component<{}> {

    constructor(props) {
        super(props);
        if(this.props.navigation.state.params)
            this.testText = this.props.navigation.state.params.test;
    }

    /**
     * 主界面
     * */
    render() {
        return (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize:20}}>主页</Text>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', height: 44,marginTop:20}}
                                  onPress={() => {
                                      this.goNextPage()
                                  }}>
                    <Text style={{fontSize:20}}>跳转到第一页</Text>
                </TouchableOpacity>
            </View>

        );
    }
    goNextPage(){
        const {dispatch, state} = this.props.navigation;
        dispatch({type: 'goOnePage', params:{inform:'我到第一页了'}});
    }
}

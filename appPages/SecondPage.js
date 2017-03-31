/**
 * Created by mymac on 2017/3/30.
 */

import React , {
    Component,
    PropTypes,
}from 'react';

import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    Navigator,
    TouchableOpacity,
    DeviceEventEmitter,//监听

}from 'react-native';


export default class SecondPage extends Component {

    constructor(props){
        super(props);

        this.state = {
            paramGet1:PropTypes.string,
            paramGet2:PropTypes.string,
        };
    }

    componentDidMount() {
        //这里获取从FirstPageComponent传递过来的参数
        this.setState({
            paramGet1: this.props.param1,
            paramGet2: this.props.param2,

        });

    }

    backPage1() {

        DeviceEventEmitter.emit('changeData','回传参数');

        //this.props.navigator.pop()
    }

    render() {
        return (
            <View style={firstPageStyle.viewStyleBase}>
                <TouchableOpacity onPress={() => this.backPage1()}>
                        <Text style={firstPageStyle.textStyleBase}>第二页,点击我向第一个页面传值</Text>

                </TouchableOpacity>

                <Text style={{backgroundColor:'red'}}>参数1：{this.state.paramGet1}</Text>
                <Text style={{backgroundColor:'red'}}>参数2：{this.state.paramGet2}</Text>
            </View>
        )

    }

}

const firstPageStyle = StyleSheet.create({
    textStyleBase:{
        marginTop:100,
        marginHorizontal:20,
        color:'green',
        textAlign:'center',
    },
    viewStyleBase:{
        backgroundColor:'blue',
        flex:1,
    },
});

AppRegistry.registerComponent('myFistReactNativeAPP',() => SecondPage);
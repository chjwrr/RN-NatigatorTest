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
    DeviceEventEmitter,

}from 'react-native';

import SecondPageComponent from './SecondPage'


export default class FirstPage extends Component {

    constructor(props){
        super(props);
        this.state = {

            paramData:PropTypes.string

        };


    }

    componentDidMount() {
        this.subscription = DeviceEventEmitter.addListener('changeData', (value) =>{
            this.setState({
                paramData:value,
            });
            console.log('传过来的值是:'+value);
        });
    }

    componentWillUnmount() {
        this.subscription.remove();
    }

    /*
    * 跳转到下一个页面，这里传了一个type的值,表示动画类型
    * 跳转的时候，会在configureScene(route)这个方法里面route.type得到传的值
    * 根据type可以返回不同的动画类型，参见HomePage.js 里面的configureScene(route){}方法
    * */
    goPage2(type) {
        this.props.navigator.push({
            component:SecondPageComponent,
            type:type,
            params:{//params 要和HomePage.js里面的 renderScene(route, navigator)里面设置的参数名一样
                param1:'第一个参数',
                param2:'第二个参数',
            }
        })
    }

    /*
    什么都不传，这是默认的动画效果（默认的在HomePage.js里面指定）
     goPage2 () {
         this.props.navigator.push({
              component:SecondPageComponent,
         })
     }
     */

    render() {
        return (
            <View style={firstPageStyle.viewStyleBase}>

                <TouchableOpacity style={firstPageStyle.opacityStyleBase} onPress={() => this.goPage2('normal')}>
                    <Text style={firstPageStyle.textStyleBase}>第一页</Text>
                </TouchableOpacity>

                <Text style={{backgroundColor:'yellow'}}>从第二个页面传过来的值：{this.state.paramData}</Text>
            </View>
        )

    }

}


const firstPageStyle = StyleSheet.create({
    textStyleBase:{
        color:'green',
        textAlign:'center',
    },
    viewStyleBase:{
        backgroundColor:'red',
        flex:1,
    },
    opacityStyleBase:{
        flex:1,
        marginTop:100,
    },
});

AppRegistry.registerComponent('myFistReactNativeAPP',() => FirstPage);
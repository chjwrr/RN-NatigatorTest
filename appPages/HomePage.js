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

}from 'react-native';

import FirstPageComponent from './FirstPage'


export default class HomePage extends Component {


    /**                 配置跳转动画
     *  - Navigator.SceneConfigs.PushFromRight (default)
     *  - Navigator.SceneConfigs.FloatFromRight
     *  - Navigator.SceneConfigs.FloatFromLeft
     *  - Navigator.SceneConfigs.FloatFromBottom
     *  - Navigator.SceneConfigs.FloatFromBottomAndroid
     *  - Navigator.SceneConfigs.FadeAndroid
     *  - Navigator.SceneConfigs.HorizontalSwipeJump
     *  - Navigator.SceneConfigs.HorizontalSwipeJumpFromRight
     *  - Navigator.SceneConfigs.VerticalUpSwipeJump
     *  - Navigator.SceneConfigs.VerticalDownSwipeJump
     */

    /** 返回方法
     * getCurrentRoutes()    该进行返回存在的路由列表信息
     * jumpBack()             该进行回退操作  但是该不会卸载(删除)当前的页面
     * jumpForward()          进行跳转到相当于当前页面的下一个页面
     * jumpTo(route)          根据传入的一个路由信息，跳转到一个指定的页面(该页面不会卸载删除)
     * push(route)            导航切换到一个新的页面中，新的页面进行压入栈。通过jumpForward()方法可以回退过去
     * pop()                  当前页面弹出来，跳转到栈中下一个页面，并且卸载删除掉当前的页面
     * replace(route)         只用传入的路由的指定页面进行替换掉当前的页面
     * replaceAtIndex(route,index)               传入路由以及位置索引，使用该路由指定的页面跳转到指定位置的页面
     * replacePrevious(route)                    传入路由，通过指定路由的页面替换掉前一个页面
     * resetTo(route)                            进行导航到新的界面，并且重置整个路由栈
     * immediatelyResetRouteStack(routeStack)   该通过一个路由页面数组来进行重置路由栈
     * popToRoute(route)                        进行弹出相关页面，跳转到指定路由的页面，弹出来的页面会被卸载删除
     * popToTop()                                进行弹出页面，导航到栈中的第一个页面，弹出来的所有页面会被卸载删除
     */

    //配置场景动画,可以返回上面的动画类型
    configureScene(route) {

        //其他页面点击按钮跳转方法传入参数，在这里通过route.type可以接收到，对参数进行动画的判断
        console.log('route.type is ='+route.type);
        console.log('route.name is ='+route.name);

        if (route.type == 'normal'){
            return Navigator.SceneConfigs.PushFromRight
        }
        return Navigator.SceneConfigs.FloatFromRight

        //直接用同一个动画跳转
        //return Navigator.SceneConfigs.FloatFromRight

    }
    //渲染
    renderScene(route, navigator) {
        //导航条跳转传递参数   params 为传递的参数 其他页面传值时的名字要和这里设置的一样
        return <route.component {...route.params} navigator={navigator}/>

        //没有参数
        // return <route.component navigator={navigator} />
    }


     render() {

            return (
            <Navigator
              initialRoute={{ name: 'FirstPageComponent', component: FirstPageComponent }}//默认加载的页面
              configureScene={this.configureScene}
              renderScene={this.renderScene}
              style={{flex:1}}
              navigationBar={
                  <Navigator.NavigationBar style={homePageStyle.navStyleBase}
                  routeMapper={NavigationBarRouteMapper}/>}
            />
            );
        }

}
var NavigationBarRouteMapper = {
    // 标题
    Title(route, navigator, index, navState) {
        return (
            <View>
                <Text style={homePageStyle.navTitleStyle}>
                    应用标题
                </Text>
            </View>
        );
    },
    // 左键
    LeftButton(route, navigator, index, navState) {
        if (index > 0) {
            return (
                <View>
                    <TouchableOpacity
                        underlayColor='transparent'
                        onPress={() => {
                            if (index > 0) {
                                navigator.pop()
                            }
                        }}>
                        <Text style={homePageStyle.navLeftButtonStyle}>
                            返回
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return null;
        }
    },
    RightButton(route, navigator, index, navState) {
        if (route.onPress)
            return (
                <View>
                    <TouchableOpacity
                        onPress={() => route.onPress()}>
                        <Text style={homePageStyle.navRightButtonStyle}>
                            right
                        </Text>
                    </TouchableOpacity>
                </View>
            );
    },

};

const homePageStyle = StyleSheet.create({
    textStyleBase:{
        marginTop:40,
        marginHorizontal:20,
        color:'red',
        textAlign:'center',
    },
    navStyleBase:{
      backgroundColor:'blue',
    },
    navTitleStyle:{
        color:'white',
        textAlign:'center',
        flex:1,
        fontSize:18,
        fontWeight:'bold',
        marginVertical:5,
    },
    navLeftButtonStyle:{
        color:'white',
        marginLeft:10,
        fontSize:15,
        marginTop:5,
    },
    navRightButtonStyle:{
        color:'black',
        marginRight:10,
        fontSize:15,

    },

});

AppRegistry.registerComponent('myFistReactNativeAPP',() => HomePage);
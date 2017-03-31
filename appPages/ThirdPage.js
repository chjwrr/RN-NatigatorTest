/**
 * Created by mymac on 2017/3/30.
 */
/*
* componentWillMount()该方法在完成首次渲染之前被调用，这也是在render方法调用前可以修改组件state的最后一次机会
 componentDidMount()在render方法成功调用并且真实的DOM已经被渲染之后
 componentWillUpdate(object nextProps, object nextState)和componentwillMount:方法类似，组建会在收到新的props或者state进行渲染之前调用该方法。
 注意：你不可以在该方法中更新huo或者props。而应该借助componentWillreceiveProps方法在运行时更新state
 componentDidUpdate(object prevProps, object prevState)和componentDidMount方法类似，该方法给我们更新已经渲染好的DOM机会
 componentWillUnmount()该方法会在组件被移除之前调用，让你有机会做一些清理工作

 此外，React 还提供两种特殊状态的处理函数。
 componentWillReceiveProps(object nextProps)：已加载组件收到新的参数时调用
 shouldComponentUpdate(object nextProps, object nextState)：组件判断是否重新渲染时调用
* */
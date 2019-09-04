import React from 'react'
import ReactDom from 'react-dom'
import PointEvent from './point-event'

const App = () => {
    return <PointEvent.div pointEvent='clickclick' onClick={() => alert('首页收到点击回调')}>点击发送埋点</PointEvent.div>
}

ReactDom.render(<App />, document.getElementById('root'))
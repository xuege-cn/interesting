import React from 'react'
import PropTypes from 'prop-types'

const target = {
    send({ pointEvent }){
        alert(`send：${pointEvent}`)
    }
}

const targetList = ['div', 'a', 'span']

targetList.forEach(key => {
    target[key] = props => <PointerEvent {...props} tag={key} ></PointerEvent>
})

class PointerEvent extends React.Component{
    static propTypes = {
        pointEvent: PropTypes.string,
        tag: PropTypes.string,
        onClick: PropTypes.func
    }

    static defaultProps = {
        tag: 'div'
    }

    onClick = () => {
        const { pointEvent, onClick } = this.props
        alert('point-ebent 点击了')
        target.send({
            pointEvent
        })
        onClick && onClick()
    }

    render(){
        const { tag } = this.props
        return React.createElement(tag, {
            ...this.props,
            onClick: this.onClick
        })
    }
}

export default target
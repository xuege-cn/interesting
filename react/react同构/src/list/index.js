const React = require('react')

class List extends React.Component{
    render(){
        return <div onClick={() => {
            alert('click')
        }}>Fuck List!!!</div>
    }
}

export default List
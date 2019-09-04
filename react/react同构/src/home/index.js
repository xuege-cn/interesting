const React = require('react')

class Home extends React.Component{
    render(){
        return <div onClick={() => {
            alert('click')
        }}>Hello Home!!!</div>
    }
}

export default Home
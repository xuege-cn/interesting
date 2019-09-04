const React = require('react')

class Login extends React.Component{
    render(){
        return <div onClick={() => {
            alert('click')
        }}>Hi Login!!!</div>
    }
}

export default Login
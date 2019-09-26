import React from 'react';
import '../style/Newsletter.css';

// let time =
class Newsletter extends React.Component {
    state = {
        mail: "",
        saveMail: [],
        class: "join",
        time: -1000 + "px",

    }
    positionChange() {
        setTimeout(() => {
            this.setState({
                time: 1 + "px"
            })
        }, 2000);
    }
    handleChangeMail = (e) => {
        this.setState({
            mail: e.target.value
        })
    }
    handleSubmit = () => {
        const newMail = this.state.mail;
        this.setState(prevState => ({
            saveMail: [...prevState.saveMail, newMail],
            mail: "",
            class: "none"
        }))
    }
    handleCloseClick = (event) => {
        event.preventDefault()
        this.setState({
            class: "none",
        })
    }
    componentDidMount() {
        this.positionChange();
    }
    render() {
        return (
            <div className={this.state.class} style={{ bottom: `${this.state.time}` }}>
                <form>
                    <p>Zapisz się do naszego Newslettera aby dowiedzieć się o najnowszzych promocjach!</p>
                    <button className="close" onClick={this.handleCloseClick}>X</button>
                    <input placeholder="Twój adres mailowy" value={this.state.mail} onChange={this.handleChangeMail}></input>
                </form>
                <button onClick={this.handleSubmit}>Zapisz</button>
            </div>
        );
    }
}

export default Newsletter;
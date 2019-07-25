import React, { Component } from "react";
import { Input, Button, Row, Col } from "antd";
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { email: "kosong", password: "kosongloh" };
    }
    handleChange = e => {
        console.log(e.target);
        if (e.target.id === "email") {
            this.setState({ email: e.target.value });
        }
        if (e.target.id === "password") {
            this.setState({ password: e.target.value });
        }
    };
    render() {
        const { email, password } = this.state;
        return (
            <React.Fragment>
                <div>
                    <Row>
                        <Col>
                            <span>Ini isi state email {email}</span>
                        </Col>
                        <Col>
                            <span>Ini isi state password {password}</span>
                        </Col>
                    </Row>
                    <Input
                        id="email"
                        onChange={this.handleChange}
                        placeholder="Email"
                    />{" "}
                    <Input
                        id="password"
                        type="password"
                        onChange={this.handleChange}
                        placeholder="Password"
                    />{" "}
                    <Button type="primary">Primary</Button>
                </div>
            </React.Fragment>
        );
    }
}

export default SignIn;

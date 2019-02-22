import React, { Component, Fragment } from 'react';
import { TextField, Button, createStyles } from '@material-ui/core';

class App extends Component<any, { firstname: string; lastname: string; phone: string }> {
    constructor(props: any) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            phone: '',
        };
    }

    render() {
        return (
            <div style={styles.root}>
                <TextField
                    name="firstname"
                    label="Firstname"
                    onChange={change => this.setState({ firstname: change.target.value })}
                />
                <TextField
                    name="lastname"
                    label="Lastname"
                    onChange={change => this.setState({ lastname: change.target.value })}
                />
                <TextField
                    name="phone"
                    label="Phone"
                    onChange={change => this.setState({ phone: change.target.value })}
                />
                <Button id="validate" onClick={() => alert(`Welcome ${this.state.firstname} ${this.state.lastname}!`)}>
                    Validate
                </Button>
            </div>
        );
    }
}

const styles = createStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
});

export default App;

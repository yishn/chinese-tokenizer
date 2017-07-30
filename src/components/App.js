import {h, Component} from 'preact'
import * as appState from '../appState'

import LoadScreen from './LoadScreen'
import TextInput from './TextInput'
import TextOutput from './TextOutput'

export default class App extends Component {
    constructor() {
        super()

        this.state = appState.initState
    }

    componentDidMount() {
        // Load dictionary

        fetch('./data/cedict_ts.u8')
        .then(res => res.ok ? res.text() : Promise.reject(new Error()))
        .then(data => this.setState(state => appState.commitDictionary(state, data)))
    }

    handleInputChange = evt => {
        this.setState(state => appState.updateInput(state, evt.value))
    }

    render() {
        return <section id="root">
            {this.state.loading && <LoadScreen/>}

            {!this.state.loading &&
                <main>
                    <TextInput
                        value={this.state.input}
                        onChange={this.handleInputChange}
                    />
                    <TextOutput
                        value={this.state.input}
                    />
                </main>
            }
        </section>
    }
}

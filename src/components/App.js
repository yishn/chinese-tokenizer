import {h, Component} from 'preact'
import * as appState from '../appState'

import LoadScreen from './LoadScreen'
import Introduction from './Introduction'
import TextInput from './TextInput'
import TypeChooser from './TypeChooser'
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

    handleTypeChooserChange = evt => {
        this.setState(state => appState.updateType(state, evt.value))
    }

    handleTokenClick = evt => {
        let token = evt
        let {highlight} = this.state

        if (highlight != null && highlight.simplified === evt.simplified)
            token = null

        this.setState(state => appState.updateHighlight(state, token))
    }

    handleOutputClick = evt => {
        this.setState(state => appState.clearHighlight(state))
    }

    render() {
        return <section id="root">
            {this.state.loading && <LoadScreen/>}

            {!this.state.loading &&
                <main>
                    <div id="input">
                        <Introduction/>
                        <TextInput
                            value={this.state.input}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div id="output">
                        <TypeChooser
                            value={this.state.type}
                            onChange={this.handleTypeChooserChange}
                        />
                        <TextOutput
                            value={this.state.input}
                            type={this.state.type}
                            highlight={this.state.highlight}

                            onClick={this.handleOutputClick}
                            onTokenClick={this.handleTokenClick}
                        />
                    </div>
                </main>
            }
        </section>
    }
}

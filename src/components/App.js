import {h, Component} from 'preact'
import * as appState from '../appState'

import LoadScreen from './LoadScreen'
import Introduction from './Introduction'
import TextInput from './TextInput'
import TypeChooser from './TypeChooser'
import TextOutput from './TextOutput'
import Dictionary from './Dictionary'

export default class App extends Component {
    constructor() {
        super()

        this.state = appState.initState
    }

    componentDidMount() {
        // Load dictionary

        let request = new XMLHttpRequest()

        request.addEventListener('progress', evt => {
            if (evt.lengthComputable) {
                let percent = evt.loaded / evt.total
                this.setState(state => appState.updateProgress(state, percent))
            }
        })

        request.addEventListener('load', evt => {
            let {responseText} = evt.currentTarget
            this.setState(state => appState.commitDictionary(state, responseText))
        })

        request.open('GET', './data/cedict_ts.u8')
        request.send()
    }

    handleInputChange = evt => {
        this.setState(state => appState.updateInput(state, evt.value))
    }

    handleTypeChooserChange = evt => {
        this.setState(state => appState.updateType(state, evt.value))
    }

    handleTokenClick = evt => {
        this.setState(state => appState.updateHighlight(state, evt))
    }

    handleClearHighlight = evt => {
        this.setState(state => appState.clearHighlight(state))
    }

    render() {
        return <section id="root">
            {this.state.loading <= 1 &&
                <LoadScreen progress={this.state.loading} />
            }

            {this.state.loading > 1 &&
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
                            tokenize={this.state.tokenize}
                            value={this.state.input}
                            type={this.state.type}
                            highlight={this.state.highlight}

                            onClick={this.handleClearHighlight}
                            onTokenClick={this.handleTokenClick}
                        />
                        <Dictionary
                            tokenize={this.state.tokenize}
                            data={this.state.highlight}
                            type={this.state.type}
                            onCloseClick={this.handleClearHighlight}
                        />
                    </div>
                </main>
            }
        </section>
    }
}

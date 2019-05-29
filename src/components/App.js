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

    handleGoBackHighlight = evt => {
        this.setState(state => appState.goBackHighlight(state))
    }

    handleGoForwardHighlight = evt => {
        this.setState(state => appState.goForwardHighlight(state))
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
                            highlight={this.state.highlightHistory[this.state.highlightIndex]}

                            onClick={this.handleClearHighlight}
                            onTokenClick={this.handleTokenClick}
                        />
                        <Dictionary
                            tokenize={this.state.tokenize}
                            enableBackButton={this.state.highlightIndex > 0}
                            enableForwardButton={this.state.highlightIndex < this.state.highlightHistory.length - 1}
                            data={this.state.highlightHistory[this.state.highlightIndex]}
                            type={this.state.type}

                            onTokenClick={this.handleTokenClick}
                            onBackButtonClick={this.handleGoBackHighlight}
                            onForwardButtonClick={this.handleGoForwardHighlight}
                            onCloseClick={this.handleClearHighlight}
                        />
                    </div>
                </main>
            }
        </section>
    }
}

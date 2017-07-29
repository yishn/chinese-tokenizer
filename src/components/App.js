import {h, Component} from 'preact'
import * as appState from '../appState'

import LoadScreen from './LoadScreen'

export default class App extends Component {
    constructor() {
        super()

        this.state = appState.initState
    }

    componentDidMount() {
        // Load dictionary

        fetch('./data/cedict_ts.u8')
        .then(res => res.ok ? res.text() : Promise.reject(new Error()))
        .then(data => this.setState(state => appState.loadDictionary(state, data)))
    }

    render() {
        return <section id="root">{
            this.state.loading
            ? <LoadScreen/>
            : null
        }</section>
    }
}

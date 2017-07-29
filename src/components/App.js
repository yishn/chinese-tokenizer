import {h, Component} from 'preact'
import * as appState from '../appState'

import LoadScreen from './LoadScreen'

export default class App extends Component {
    constructor() {
        super()

        this.state = appState.initState
    }

    render() {
        return <section id="root">{
            this.state.loading
            ? <LoadScreen/>
            : null
        }</section>
    }
}

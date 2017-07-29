import {h, Component} from 'preact'
import appState from '../appState'

export default class App extends Component {
    constructor() {
        super()

        this.state = appState.initState
    }

    render() {
        return <section id="root">
            <h1>Hello World!</h1>
        </section>
    }
}

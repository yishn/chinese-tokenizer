import {h, Component} from 'preact'

export default class LoadScreen extends Component {
    render() {
        return <section id="load-screen">
            <div class="throbber"/>
            <p>Loading dictionary…</p>
        </section>
    }
}

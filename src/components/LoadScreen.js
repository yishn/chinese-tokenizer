import {h, Component} from 'preact'

export default class LoadScreen extends Component {
    render() {
        let progress = Math.round(this.props.progress * 100)

        return <section id="load-screen">
            <div class="throbber"/>
            <p>{progress}% — Loading dictionary…</p>
        </section>
    }
}

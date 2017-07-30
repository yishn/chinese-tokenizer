import {h, Component} from 'preact'

export default class Dictionary extends Component {
    render() {
        if (this.props.data == null) return

        let {pinyin, english} = this.props.data

        return <section id="dictionary" class="show">
            <h1>{this.props.data[this.props.type]}</h1>

            <p class="pinyin">{pinyin}</p>

            <ul>
                {english.split('\n').map(line =>
                    <li>{line}</li>
                )}
            </ul>
        </section>
    }
}

import {h, Component} from 'preact'
import smartypants from '../smartypants'

export default class Dictionary extends Component {
    handleCloseClick = evt => {
        evt.preventDefault()

        let {onCloseClick = () => {}} = this.props
        onCloseClick()
    }

    render() {
        if (this.props.data == null) return

        let {pinyin, english} = this.props.data

        return <section id="dictionary" class="show">
            <a class="close" href="#" onClick={this.handleCloseClick}>Close</a>

            <h1>{this.props.data[this.props.type]}</h1>

            <p class="pinyin">{pinyin}</p>

            <ul>
                {english.split('\n').map(line =>
                    <li>{smartypants(line.replace(/\//g, ', '))}</li>
                )}
            </ul>
        </section>
    }
}

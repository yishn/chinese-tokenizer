import {h, Component} from 'preact'
import smartypants from '../smartypants'

let tokenEqual = (t1, t2) => t1 == null || t2 == null ? t1 == t2 : t1.traditional === t2.traditional

export default class Dictionary extends Component {
    shouldComponentUpdate(nextProps) {
        return !tokenEqual(nextProps.data, this.props.data)
            || nextProps.type !== this.props.type
            || nextProps.onCloseClick !== this.props.onCloseClick
    }

    handleCloseClick = evt => {
        evt.preventDefault()

        let {onCloseClick = () => {}} = this.props
        onCloseClick()
    }

    render() {
        if (this.props.data == null) return

        return <section id="dictionary" class="show">
            <h1>{this.props.data[this.props.type]}</h1>

            <ul>
                {this.props.data.matches.map(entry =>
                    <li>
                        <span class="pinyin">{entry.pinyinPretty}</span>{' '}
                        {smartypants(entry.english.replace(/\//g, ', '))}
                    </li>
                )}
            </ul>

            <a class="close" href="#" onClick={this.handleCloseClick}>Close</a>
        </section>
    }
}

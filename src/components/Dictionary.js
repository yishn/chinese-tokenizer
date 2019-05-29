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

    createTokenHandler(token) {
        return evt => {
            evt.preventDefault()

            let {onTokenClick = () => {}} = this.props
            onTokenClick(token)
        }
    }

    render() {
        if (this.props.data == null) return

        return <section id="dictionary" class="show">
            <h1>{this.props.data[this.props.type]}</h1>

            <ul>
                {this.props.data.matches.map(entry => {
                    let description = smartypants(entry.english.replace(/\//g, ', '))

                    return <li>
                        <span class="pinyin">{entry.pinyinPretty}</span>{' '}

                        {this.props.tokenize(description).map(token =>
                            token.matches.length > 0 && token.text.match(/^[a-z]$/i) == null
                            ? <a href="#" onClick={this.createTokenHandler(token)}>{token.text}</a>
                            : token.text
                        )}
                    </li>
                })}
            </ul>

            <a class="close" href="#" onClick={this.handleCloseClick}>Close</a>
        </section>
    }
}

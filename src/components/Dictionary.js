import {h, Component} from 'preact'
import smartypants from '../smartypants'

let tokenEqual = (t1, t2) => t1 == null || t2 == null ? t1 == t2 : t1.traditional === t2.traditional

export default class Dictionary extends Component {
    shouldComponentUpdate(nextProps) {
        return !tokenEqual(nextProps.data, this.props.data)
            || nextProps.type !== this.props.type
            || nextProps.enableBackButton !== this.props.enableBackButton
            || nextProps.enableForwardButton !== this.props.enableForwardButton
    }

    handleCloseClick = evt => {
        evt.preventDefault()

        let {onCloseClick = () => {}} = this.props
        onCloseClick()
    }

    handleBackButtonClick = evt => {
        evt.preventDefault()

        let {onBackButtonClick = () => {}} = this.props
        onBackButtonClick()
    }

    handleForwardButtonClick = evt => {
        evt.preventDefault()

        let {onForwardButtonClick = () => {}} = this.props
        onForwardButtonClick()
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

        let {tokenize, enableBackButton, enableForwardButton} = this.props

        return <section id="dictionary" class="show">
            <h1>{this.props.data[this.props.type]}</h1>

            <ul class="descriptions">
                {this.props.data.matches.map(entry =>
                    <li>
                        <span class="pinyin">{entry.pinyinPretty}</span>{' '}

                        {tokenize(smartypants(entry.english.replace(/\//g, ', '))).map(token =>
                            token.matches.length > 0 && token.text.match(/^[a-z]$/i) == null
                            ? <a href="#" onClick={this.createTokenHandler(token)}>{token.text}</a>
                            : token.text
                        )}
                    </li>
                )}
            </ul>

            <ul class="actions">
                <li>
                    <a
                        class={enableBackButton ? '' : 'disabled'}
                        href="#"
                        onClick={this.handleBackButtonClick}
                    >
                        Back
                    </a>
                </li>
                <li>
                    <a
                        class={enableForwardButton ? '' : 'disabled'}
                        href="#"
                        onClick={this.handleForwardButtonClick}
                    >
                        Forward
                    </a>
                </li>
                <li>
                    <a href="#" onClick={this.handleCloseClick}>Close</a>
                </li>
            </ul>
        </section>
    }
}

import {h, Component} from 'preact'
import WordToken from './WordToken'

let tokenEqual = (t1, t2) => t1 == null || t2 == null ? t1 == t2 : t1.text === t2.text

export default class TextOutput extends Component {
    constructor(props) {
        super(props)

        this.cache = [null, null]
    }

    shouldComponentUpdate(nextProps) {
        return !tokenEqual(nextProps.highlight, this.props.highlight)
            || nextProps.value !== this.props.value
            || nextProps.type !== this.props.type
            || nextProps.onClick !== this.props.onClick
            || nextProps.onTokenClick !== this.props.onTokenClick
    }

    getTokens() {
        if (this.cache[0] === this.props.value) return this.cache[1]

        let tokens = this.props.tokenize(this.props.value)
        this.cache = [this.props.value, tokens]

        return tokens
    }

    render() {
        let tokens = this.getTokens()

        return <section
            id="text-output"
            onClick={this.props.onClick}
        >
            {tokens.map(token =>
                token.matches.length > 0
                ? <WordToken
                    {...token}

                    highlight={tokenEqual(token, this.props.highlight)}
                    type={this.props.type}

                    onClick={this.props.onTokenClick}
                />
                : token.text === '\n' ? <br/>
                : token.text
            )}
        </section>
    }
}

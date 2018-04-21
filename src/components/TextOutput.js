import {h, Component} from 'preact'
import tokenizer from 'chinese-tokenizer'

import WordToken from './WordToken'

let tokenEqual = (t1, t2) => t1 == null || t2 == null ? t1 == t2 : t1.traditional === t2.traditional

export default class TextOutput extends Component {
    constructor(props) {
        super(props)

        // Load tokenizers

        this.cache = [null, null]
        this.tokenize = tokenizer.load(props.dictionary)
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

        let tokens = this.tokenize(this.props.value)
        this.cache = [this.props.value, tokens]

        return tokens
    }

    render() {
        let tokens = this.getTokens()

        return <section
            id="text-output"
            class={this.props.highlight != null ? 'stop-hover' : ''}
            onClick={this.props.onClick}
        >
            {tokens.map(token =>
                token.matches.length > 0 ?
                <WordToken
                    {...token}

                    highlight={tokenEqual(token, this.props.highlight)}
                    type={this.props.type}

                    onClick={this.props.onTokenClick}
                />
                : token[this.props.type] === '\n' ? <br/>
                : token[this.props.type]
            )}
        </section>
    }
}

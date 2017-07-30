import {h, Component} from 'preact'
import loadTokenizer from 'chinese-tokenizer'

import WordToken from './WordToken'

let tokenEqual = (t1, t2) => t1 == null || t2 == null ? t1 == t2 : t1.simplified === t2.simplified

export default class TextOutput extends Component {
    constructor() {
        super()

        // Load tokenizers

        this.cache = [null, null]
        this.types = ['simplified', 'traditional']
        this.tokenizers = this.types.map(t => loadTokenizer('../../data/cedict_ts.u8', t))
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

        let allTokens = this.tokenizers.map(t => t.tokenize(this.props.value))
        let errorCount = allTokens.map(tokens => tokens.filter(x => x.pinyin == null).length)
        let index = errorCount[1] < errorCount[0] ? 1 : 0
        let result = allTokens[index]

        this.cache = [this.props.value, result]
        return result
    }

    render() {
        let tokens = this.getTokens()

        return <section
            id="text-output"
            class={this.props.highlight != null ? 'stop-hover' : ''}
            onClick={this.props.onClick}
        >
            {tokens.map(token =>
                token.pinyin != null ?
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

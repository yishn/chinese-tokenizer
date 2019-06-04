import {h, Component} from 'preact'
import WordToken from './WordToken'

const prefixPunctuation = ['‘', '“', '《', '『', '【', '（']
const suffixPunctuation = ['’', '”', '》', '』', '】', '）', '、', '，', '…', '。', '：', '；', '！', '？']

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

    getProcessedTokens() {
        if (this.cache[0] === this.props.value) return this.cache[1]

        let processedIndices = []
        let tokens = this.props.tokenize(this.props.value)
        let processedTokens = tokens.map((token, i) => {
            if (
                prefixPunctuation.includes(token.text)
                || suffixPunctuation.includes(token.text)
            ) return

            let prefix = ''
            let suffix = ''

            for (let j = 1; i + j < tokens.length; j++) {
                if (suffixPunctuation.includes(tokens[i + j].text)) {
                    suffix += tokens[i + j].text
                    processedIndices.push(i + j)
                } else {
                    break
                }
            }

            for (let j = 1; i - j >= 0; j++) {
                if (prefixPunctuation.includes(tokens[i - j].text)) {
                    prefix = tokens[i - j].text + prefix
                    processedIndices.push(i - j)
                } else {
                    break
                }
            }

            processedIndices.push(i)
            return {token, prefix, suffix}
        }).map((x, i) => {
            if (x == null && !processedIndices.includes(i)) {
                return {
                    token: tokens[i],
                    prefix: '',
                    suffix: ''
                }
            }

            return x
        }).filter(x => !!x)

        this.cache = [this.props.value, processedTokens]

        return processedTokens
    }

    render() {
        let tokens = this.getProcessedTokens()

        return <section
            id="text-output"
            onClick={this.props.onClick}
        >
            {tokens.map(({token, prefix, suffix}) =>
                token.matches.length > 0
                ? <WordToken
                    {...token}

                    highlight={tokenEqual(token, this.props.highlight)}
                    type={this.props.type}
                    prefix={prefix}
                    suffix={suffix}

                    onClick={this.props.onTokenClick}
                />
                : prefix !== '' || suffix !== ''
                ? <span>{prefix}{token.text === '\n' ? <br/> : token.text}{suffix}</span>
                : token.text === '\n' ? <br/> : token.text
            )}
        </section>
    }
}

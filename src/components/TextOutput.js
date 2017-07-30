import {h, Component} from 'preact'
import loadTokenizer from 'chinese-tokenizer'

import WordToken from './WordToken'

export default class TextOutput extends Component {
    componentDidMount() {
        // Load tokenizers

        this.types = ['simplified', 'traditional']
        this.tokenizers = this.types.map(t => loadTokenizer('../../data/cedict_ts.u8', t))
    }

    render() {
        if (this.tokenizers == null) return

        let allTokens = this.tokenizers.map(t => t.tokenize(this.props.value))
        let errorCount = allTokens.map(tokens => tokens.filter(x => x.pinyin == null).length)
        let index = errorCount[1] < errorCount[0] ? 1 : 0
        let type = this.types[index]
        let tokens = allTokens[index]

        return <section id="text-output">
            {tokens.map(token =>
                token.pinyin != null ?
                <WordToken
                    {...token}
                    type={this.props.type}
                    onClick={this.propsTokenClick}
                />
                : token[type] === '\n' ? <br/>
                : token[type]
            )}
        </section>
    }
}

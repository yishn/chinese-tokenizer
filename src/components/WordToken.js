import {h, Component} from 'preact'

export default class WordToken extends Component {
    render() {
        return <span
            class="word"
            title={this.props.english}

            data-traditional={this.props.traditional}
            data-simplified={this.props.simplified}
            data-pinyin={this.props.pinyinPretty}
            data-english={this.props.english}
        >
            {this.props[this.props.type]}
        </span>
    }
}

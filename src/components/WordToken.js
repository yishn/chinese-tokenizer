import {h, Component} from 'preact'

export default class WordToken extends Component {
    handleClick = evt => {
        evt.stopPropagation()

        let {type, onClick = () => {}} = this.props
        let {traditional, simplified, pinyin, english} = evt.currentTarget.dataset

        onClick({traditional, simplified, pinyin, english, type})
    }

    render() {
        return <span
            class={['word', this.props.highlight ? 'highlight' : ''].join(' ').trim()}

            data-traditional={this.props.traditional}
            data-simplified={this.props.simplified}
            data-pinyin={this.props.pinyinPretty}
            data-english={this.props.english}

            onClick={this.handleClick}
        >
            {this.props[this.props.type]}
        </span>
    }
}

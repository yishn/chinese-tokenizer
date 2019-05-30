import {h, Component} from 'preact'

export default class WordToken extends Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.traditional !== this.props.traditional
            || nextProps.highlight !== this.props.highlight
            || nextProps.type !== this.props.type
            || nextProps.onClick !== this.props.onClick
    }

    handleClick = evt => {
        evt.stopPropagation()

        let {text, traditional, simplified, matches, type, onClick = () => {}} = this.props

        onClick({text, traditional, simplified, matches, type})
    }

    render() {
        let word = <span
            class={['word', this.props.highlight ? 'highlight' : ''].join(' ').trim()}
            data-pinyin={
                this.props.matches
                .map(x => x.pinyinPretty)
                .sort()
                .filter((x, i, a) => i === 0 || a[i - 1] !== x)
                .join('/')
            }

            onClick={this.handleClick}
        >
            {this.props[this.props.type]}
        </span>

        return this.props.prefix === '' && this.props.suffix === ''
            ? word
            : <span class="word-wrapper">
                {this.props.prefix}
                {word}
                {this.props.suffix}
            </span>
    }
}

import {h, Component} from 'preact'

export default class WordToken extends Component {
    handleClick = evt => {
        let {type, onClick = () => {}} = this.props
        onClick({...evt.currentTarget.dataset, type})
    }

    render() {
        return <span
            class="word"

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

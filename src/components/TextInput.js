import {h, Component} from 'preact'

export default class TextInput extends Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.value !== this.props.value
            || nextProps.onChange !== this.props.onChange
    }

    handleInput = evt => {
        let {onChange = () => {}} = this.props
        onChange({value: evt.currentTarget.value})
    }

    render() {
        return <section id="text-input">
            <textarea
                autofocus
                value={this.props.value}
                onInput={this.handleInput}
            />
        </section>
    }
}

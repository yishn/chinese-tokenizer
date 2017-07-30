import {h, Component} from 'preact'

export default class TextInput extends Component {
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

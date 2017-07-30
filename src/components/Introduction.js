import {h} from 'preact'

export default function Introduction() {
    return <section id="introduction">
        <h1>Chinese Tokenizer</h1>

        <p>{[
            'This is a tool that can tokenize Chinese texts into words using ',
            <a href="https://github.com/yishn/chinese-tokenizer">chinese-tokenizer</a>,
            '. Just paste your text down below:'
        ]}</p>
    </section>
}

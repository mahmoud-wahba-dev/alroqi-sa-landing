// Splits a string into word-level clip masks for reveal animations.
// Split by word, never by letter: letter splits break Arabic joining.
export default function Words({ text }) {
  return text.split(' ').map((word, i) => (
    <span key={i}>
      <span className="-my-[0.2em] inline-block overflow-hidden py-[0.2em] align-bottom">
        <span className="js-rw inline-block">{word}</span>
      </span>{' '}
    </span>
  ))
}

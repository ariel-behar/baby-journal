
interface Props {
    className?: string
    onClick?: () => void
}

function CancelButton({
    className = "btn-error",
    onClick,
}:Props) {
  return (
    <button type="button" className={`btn ${className} btn-sm btn-min-width`} onClick={onClick}>Cancel</button>
  )
}

export default CancelButton
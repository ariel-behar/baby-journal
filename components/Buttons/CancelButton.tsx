
interface Props {
    onClick?: () => void
}

function CancelButton({
    onClick,
}:Props) {
  return (
    <button type="button" className="btn btn-error btn-sm btn-min-width" onClick={onClick}>Cancel</button>
  )
}

export default CancelButton
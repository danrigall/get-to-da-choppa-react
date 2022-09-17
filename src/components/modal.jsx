const Modal: React.FC<any> = ({ foreground }) => {
	return (
		<div className="modal">
			<div className="modal-foreground">{foreground}</div>
			<div className="modal-bgd"></div>
		</div>
	)
}

export default Modal

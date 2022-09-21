const Modal: React.FC<any> = (props) => {
	return (
		<div className="modal">
			<div className="modal-foreground">{props.children}</div>
			<div className="modal-bgd"></div>
		</div>
	)
}

export default Modal

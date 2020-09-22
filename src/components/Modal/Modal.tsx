import React, { useRef, useState, useEffect } from "react";

import "./Modal.css";

import useOcd from "../../hooks/useOuterClickDetection/useOcd";

interface Props {
	show: boolean;
	children: JSX.Element | JSX.Element[];
}

export default function Modal(props: Props) {
	const [show, toggleShow] = useState<boolean>(props.show);

	const modalContentRef = useRef(null);
	useOcd(modalContentRef, () => toggleShow(false));

	useEffect(() => {
		toggleShow(props.show);
	}, [props.show, show]);

	const showHideClassName = show ? "modal display-block" : "modal display-none";

	return (
		<div className={showHideClassName}>
			<section ref={modalContentRef} className="modal-main">
				{props.children}
			</section>
		</div>
	);
}

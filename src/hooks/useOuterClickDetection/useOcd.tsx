import { RefObject, useEffect } from "react";

// type htmlRef = {
//   readonly current: HTMLElement | null;
// }

export default function useOutsideAlerter(ref: RefObject<any>, cb: Function) {
	useEffect(() => {
		function handleClickOutside(event: React.ChangeEvent<any>) {
			if (ref.current && !ref.current.contains(event.target)) {
				cb();
			}
		}

		document.addEventListener("mousedown", (e: any) => handleClickOutside(e));
		return () => {
			document.removeEventListener("mousedown", (e: any) =>
				handleClickOutside(e)
			);
		};
	}, [ref, cb]);
}

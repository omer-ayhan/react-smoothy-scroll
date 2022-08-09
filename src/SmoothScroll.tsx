import React, { memo } from "react";
import { scrollTo } from "./scrollTo";

interface Props {
	toId?: string;
	toRef?: React.RefObject<HTMLElement>;
	duration?: number;
	children: JSX.Element | JSX.Element[];
	allowScroll?: boolean;
	[rest: string]: any;
}

const SmoothScroll = ({
	toId,
	toRef = null,
	duration = 1000,
	children,
	allowScroll = true,
	...rest
}: Props) => {
	const handleClick = () =>
		scrollTo({ id: toId, ref: toRef, duration: duration });

	return (
		<span onClick={allowScroll ? handleClick : undefined} {...rest}>
			{children}
		</span>
	);
};

export default memo(SmoothScroll);

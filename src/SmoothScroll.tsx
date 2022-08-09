import React, { memo } from "react";
import { scrollTo } from "./scrollTo";

interface Props {
	toId?: string;
	toRef?: React.RefObject<HTMLElement>;
	duration?: number;
	children: JSX.Element | JSX.Element[];
	allowScroll?: boolean;
}

const SmoothScroll = ({
	toId,
	toRef,
	duration,
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

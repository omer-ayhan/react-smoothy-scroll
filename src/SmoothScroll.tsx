import { memo } from "react";
import { scrollTo } from "./scrollTo";

interface Props {
	toId?: string;
	toRef?: React.RefObject<HTMLElement>;
	duration?: number;
	children: JSX.Element | JSX.Element[];
	allowScroll?: boolean;
	sx?: object;
}

const SmoothScroll = ({
	toId,
	toRef,
	duration,
	children,
	allowScroll = false,
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

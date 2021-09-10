import { ReactNode } from "react";

interface Props {
	children?: ReactNode;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	onChange?: (e: React.ChangeEvent<HTMLButtonElement>) => void;
	name?: string;
	value?: string;
	className?: string;
}

const Button = (props: Props) => {
	return (
		<button
			name={props.name}
			onChange={props.onChange}
			type="submit"
			onClick={props.onClick}
			className={`bg-purple rounded-sm w-full h-14 active:bg-purple2 text-xs px-6 justify-between ${props.className}`}
		>
			{props.children}
		</button>
	);
};

export default Button;

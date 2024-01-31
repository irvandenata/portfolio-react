import { onMouseEnter, onMouseLeave } from "../../../functions/mouseHandler";

export default function TectStack(props: any) {
	const { id, title, icon } = props;
	return (
		<div
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			id={"titel-" + id}
			className="flex-row justify-center static"
		>
			<div className="icon-stack p-2 bg-background rounded-lg hover:border-primary hover:border-2 border-2 border-background cursor-pointer flex items-center justify-center">
				<div dangerouslySetInnerHTML={{ __html: icon }}></div>
			</div>
			<p
				id={id}
				className="icon-caption border border-gray text-sm absolute invisible  font-thin text-center mt-2 bg-background p-1 rounded"
			>
				{title}
			</p>
		</div>
	);
}

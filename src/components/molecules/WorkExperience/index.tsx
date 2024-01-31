import { WorkExpProps } from "../../../services/data-types";

export default function WorkExperience( props: WorkExpProps ) {
    const { title } = props;
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
}
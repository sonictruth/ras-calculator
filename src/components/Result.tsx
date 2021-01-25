import {
    useParams,
} from 'react-router-dom';

function Result() {
    const params: any = useParams();
    const value = params.value;
    return (
        <>
            {value && (
                <h1>Result</h1>
            )}
        </>
    );
}

export default Result;

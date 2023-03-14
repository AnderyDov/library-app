import { useRouteError } from 'react-router-dom';
import withLayout from './layout/Layout';

function Error() {
    const error: any = useRouteError();
    console.error(error);

    return (
        <div id='error-page'>
            <h1>Oops!</h1>
            <p>К сожалению, произошла непредвиденная ошибка.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}
export default withLayout(Error);

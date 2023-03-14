import { NewsProps } from './News.props';
import withLayout from '../../layout/Layout';

function News({ ...props }: NewsProps): JSX.Element {
    return (
        <div {...props}>
            <h1>Страница новостей библиотеки </h1>
        </div>
    );
}

export default withLayout(News);

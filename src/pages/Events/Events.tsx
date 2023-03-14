import { EventsProps } from './Events.props';
import withLayout from '../../layout/Layout';

function Events({ ...props }: EventsProps): JSX.Element {
    return (
        <div {...props}>
            <h1>Страница иероприятий библиотеки библиотеки </h1>
        </div>
    );
}

export default withLayout(Events);

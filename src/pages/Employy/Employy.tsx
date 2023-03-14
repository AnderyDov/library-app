import { EmployyProps } from './Employy.props';
import withLayout from '../../layout/Layout';

function Employy({ ...props }: EmployyProps): JSX.Element {
    return (
        <div {...props}>
            <h1>Страница сотрудников бибоиртеки библиотеки </h1>
        </div>
    );
}

export default withLayout(Employy);

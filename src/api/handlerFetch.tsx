import axios from 'axios';
import { SetterOrUpdater } from 'recoil';
import { IBook } from '../interfaces/Book.interface';

export async function handlerFetch(
    setBooks: SetterOrUpdater<IBook[]>,
    setCurrentBooks: SetterOrUpdater<IBook[]>,
) {
    try {
        const { data } = await axios.get<IBook[]>(
            'https://retoolapi.dev/FKUFlT/data',
        );

        setBooks(data);
        setCurrentBooks(data);
    } catch (err) {
        console.log(err);
    }
}

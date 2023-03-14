import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface BookProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    author: string;
    book: string;
    rating: string;
}

export function checkToEmpty(string: string) {
    return string !== '' && string ? string : 'неизвестно';
}

export function sortByField(field: string) {
    console.log(field);

    return (a: any, b: any) => (a[field] > b[field] ? 1 : -1);
}
export function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

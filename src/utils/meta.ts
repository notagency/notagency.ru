export interface TMeta {
    title: string;
    description: string;
    url: string;
    image: string;
}

let meta: TMeta = {
    title: '',
    description: '',
    url: '',
    image: '',
}

export const setMeta = (value: TMeta) => {
    meta = value;
}

export const getMeta = () => meta;

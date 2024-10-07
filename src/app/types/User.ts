export interface User {
    id: string;
    name: string;
    email: string;
    role: 'usr' | 'adm';
    phone: string;
    banned: boolean;
}
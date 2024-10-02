export interface Recipe<T = number> {
    id: number;
    title: string;
    description: string;
    image: string;
    time: number;
    additions: T;
    user_id: string;
    calories: number;
}
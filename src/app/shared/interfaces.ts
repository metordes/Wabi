export interface ItemMenu {
    name: string;
    id: number;
    parentId: number;
    children?: Array<ItemMenu>;
}
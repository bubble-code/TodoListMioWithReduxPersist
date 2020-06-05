
export type Datas = {
    title: string;
    date: string;
    key: string;
    complete: boolean;
    // dataIndex:number;
}
interface IRequest {
    status: 'ADD_TODO';
    data:Datas;
}
interface ICompleted {
    status: 'COMPLETE_TODO';
    data:Datas;
}
interface IDelete {
    status: 'DELETE_TODO';
    data:Datas;
}

export type TAction = | IRequest | ICompleted | IDelete;

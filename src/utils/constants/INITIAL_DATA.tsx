import {v4 as uuidv4} from 'uuid'
import { Datas } from '../Interfaces/Interface.d'

export const INITIAL_DATA:Datas[] = [
    {
        key: uuidv4(),
        title: 'Use Hook in react application',
        date: '2020-04-15',
        complete:false,
        // dataIndex: 0,
    }
]
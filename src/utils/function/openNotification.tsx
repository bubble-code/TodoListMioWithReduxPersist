import {notification} from 'antd'
import { NotificationPlacement } from 'antd/lib/notification'

export const openNotification = (placement:NotificationPlacement, text:string)=>{
    notification.info({
        message: `${text}`,
        placement
    })
}
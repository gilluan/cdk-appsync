import listUsers from './listUsers';
import User from './model/User';

type AppSyncEvent = {
   info: {
     fieldName: string
  },
   arguments: {
     userId: string,
     user: User
  }
}

exports.handler = async (event:AppSyncEvent) => {
    switch (event.info.fieldName) {
        case "listUsers":
            return await listUsers() as any;
        default:
            return null;
    }
}

import listUsers from './listUsers';
import UserFilterInput from './model/UserFilterInput'

type AppSyncEvent = {
   info: {
     fieldName: string
  },
   arguments: {
     page?: number,
     results?: number,
     filter?: UserFilterInput
  }
}

exports.handler = async (event:AppSyncEvent) => {

    const { page, results, filter } = event.arguments

    switch (event.info.fieldName) {
        case "listUsers":
            return await listUsers(page, results, filter)
        default:
            return null;
    }
}

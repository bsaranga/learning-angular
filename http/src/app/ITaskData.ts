export interface ITaskData {
    id: string,
    name: string,
    startTime: string,
    endTime: string,
    userDetails: {
      username: string
    }
}
import Bmob, { BmobPromise } from 'hydrogen-js-sdk';
import { ThoughtRecord } from '../model/ThoughtRecord';

export function createRecord() {

}

export const getRecords = () => {};

export const getRecordById = (recordId: string) => {
  const query = Bmob.Query("records"); // 暂时 Mock 为查询全部
  const queryPromise: BmobPromise<ThoughtRecord> = query.get(recordId);
  
  return queryPromise
    .then((res) => {
      // @ts-ignore
      return res;
    })
    .catch((err) => {
      console.error(err);
      return {
        userId: '1',
        content: '获取失败',
      };
    });
}
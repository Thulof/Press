import Bmob, { BmobPromise } from 'hydrogen-js-sdk';
import { ThoughtRecord } from '../model/ThoughtRecord';

export function createRecord() {
  // todo
}

export const delectRecords = (objectId: string) => {
  const query = Bmob.Query('records');
  query.destroy(objectId).then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  });
};

export const getAllRecords = () => {
  const query = Bmob.Query('records'); // 暂时 Mock 为查询全部
  query.order('-updatedAt'); // 按照发布时间倒序
  const queryPromise: BmobPromise<ThoughtRecord[]> = query.find();

  return queryPromise
    .then((res) => res)
    .catch((err) => {
      console.error(err);
      return [];
    });
};

export const getRecordById = (recordId: string) => {
  const query = Bmob.Query('records'); // 暂时 Mock 为查询全部
  const queryPromise: BmobPromise<ThoughtRecord> = query.get(recordId);

  return queryPromise
    .then((res) => ({ ...res }))
    .catch((err) => {
      console.error(err);
      return { userId: '1', content: '获取失败' };
    });
};

import { useState, useEffect } from "react";

import Bmob, { BmobPromise } from "hydrogen-js-sdk";
import { ThoughtRecord } from '../model/ThoughtRecord';
import { getRecordById } from '../dao/ThoughtRecord';

export const useRecords = (userId: number) => {
  const [records, setRecords] = useState<ThoughtRecord[]>([]);

  const query = Bmob.Query("records"); // 暂时 Mock 为查询全部
  query.order("-updatedAt"); // 按照发布时间倒序
  const queryPromise: BmobPromise<ThoughtRecord[]> = query.find();
  
  useEffect(() => {
    queryPromise
      .then((res) => {
        // @ts-ignore
        setRecords([...res]);
      })
      .catch((err) => {
        console.error(err);
        setRecords([]);
      });
  }, []);

  return { records, setRecords };
};

export const useCreateRecord = (userId: number) => {
  const [input, setInput] = useState('');
  const [newRecord, setNewRecord] = useState({
    userId: '1',
    content: '提交中',
  });
  useEffect(() => {
    if (input === '') return;

    const query = Bmob.Query("records");
    query.set("userId", userId.toString());
    query.set("content", input);

    query
      .save()
      .then( async (res) => {
        console.log('提交成功', res);
        // @ts-ignore
        const newRecord = await getRecordById(res.objectId);
        // @ts-ignore
        setNewRecord(newRecord);
      })
      .catch((err) => {
        console.log(err);
      });

  }, [input]);

  return {
    input,
    setInput,
    newRecord
  }
};

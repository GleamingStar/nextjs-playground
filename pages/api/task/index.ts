import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { mockTask } from '../../../config/mockup';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  console.log(session)
  if (!session) return res.status(401).json({message:'unauthorized request'})
  if (req.method === 'POST') {
    res.status(201);
    // 대충 post받으면 새id로 할당해서 db저장때리고 반환한다는 코드
    return;
  }
  const { sort } = req.query;
  switch (sort) {
    case 'todo':
      res.status(200).json({
        tasks: mockTask
          .filter(({ complete }) => !complete)
          .filter(({ body }) => body.filter(({ complete }) => complete).length === 0),
      });
      break;
    case 'doing':
      res.status(200).json({
        tasks: mockTask
          .filter(({ complete }) => !complete)
          .filter(({ body }) => body.filter(({ complete }) => complete).length !== 0),
      });
      break;
    case 'done':
      res.status(200).json({
        tasks: mockTask.filter(({ complete }) => complete),
      });
      break;
    default:
      res.status(200).json({ tasks: mockTask });
  }
};

import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { mockTask } from '../../../../config/mockup';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  console.log(session);
  if (!session) return res.status(401).json({ message: 'unauthorized request' });

  const { date } = req.query;

  const time = new Date(+date.slice(0, 4), +date.slice(4, 6), +date.slice(6, 8)).getTime();

  const tasks = mockTask.filter(({ start, end }) =>
    end ? start.getTime() <= time && end.getTime() >= time : start.getTime() === time
  );

  console.log(tasks, time, date);
  console.log(+date.slice(0, 4), +date.slice(4, 6), +date.slice(6, 8))
  return res.status(200).json({ tasks });
};

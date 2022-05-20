import styled from "styled-components";
import { TTask } from "../../config/types";

const TaskWrapper =styled.div``

const mockUp = {}

const Task = ({task}:{task:TTask}) => {



  return <TaskWrapper>
    <div>{task.title}</div>
    <div>{task.body.length}</div>
    <input type={'checkbox'} />
    <input type={'checkbox'} />
    <input type={'checkbox'} />
  </TaskWrapper>
}

export default Task
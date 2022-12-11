import { Input, Button, Space } from 'antd';
import { DeleteOutlined  } from '@ant-design/icons';

import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';


export const Item = ({id, value, deleteItem, changeItem}) => {
  const [task, setTask] = useState(value);
  const [item] = useDebounce(task, 1000);

  useEffect(() => {
    if (item !== value) {
      changeItem(id, item)
    }

  }, [item])
  
  return (
    <div>
      <li key={id}>
        <Space wrap>
          <Input value={task} onChange={(text) => setTask(text.target.value)} />
           <Button shape="circle" icon={<DeleteOutlined /> } onClick={() => deleteItem(id)} danger />
        </Space>
     </li>
    </div>
  )
}
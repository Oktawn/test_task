import { memo } from "react";
import { usePollStore } from "../../PollStore/usePollStore";


const Navigate = memo(() => {

  const updatePolls = usePollStore((state) => state.getPolls);

  const toggleUpdatePolls = () => {
    updatePolls();
  }

  return (
    <div >
      <button onClick={toggleUpdatePolls}>Обновить список</button>
      <button>Создать опрос</button>
      <button>Удалить опрос</button>
    </div>
  )
})

export default Navigate;
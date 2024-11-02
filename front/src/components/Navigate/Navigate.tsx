import { usePollStore } from "../../PollStore/usePollStore";
import { useModal } from "../Modals/ModalContext";


const Navigate = () => {

  const updatePolls = usePollStore((state) => state.getPolls);
  const { showModal } = useModal();

  const handleCreatePoll = () => {
    showModal({
      active: true,
      mode: 'create',
      onClose: () => { },
    });
  };

  const handleDeletePoll = () => {
    showModal({
      active: true,
      mode: 'delete',
      onClose: () => { },
    });
  };


  return (
    <div className="navigate">
      <button onClick={() => updatePolls()}>Обновить список</button>
      <button onClick={handleCreatePoll}>Создать опрос</button>
      <button onClick={handleDeletePoll}>Удалить опрос</button>
    </div>

  )
}

export default Navigate;
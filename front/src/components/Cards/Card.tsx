import { Poll } from "../../PollStore/PollStore"
import { usePollStore } from "../../PollStore/usePollStore";
import { useModal } from "../Modals/ModalContext"

function Card(poll: Poll) {

  const getSurvey = usePollStore((state) => state.getSurvey);
  const completedPolls = usePollStore((state) => state.completedPolls);
  const { showModal } = useModal();



  const handleClick = () => {
    getSurvey(poll.id, (updatedSurvey) => {
      showModal({
        active: true,
        mode: 'show',
        children: updatedSurvey,
        onClose: () => { },
      })
    });
  }


  const checkAccess = () => {
    return completedPolls.find(p => p.id === poll.id)
  }

  return (
    <button className={checkAccess() ? 'card-access' : ''} onClick={handleClick}>
      {poll.title}
    </button>
  )
}

export { Card }
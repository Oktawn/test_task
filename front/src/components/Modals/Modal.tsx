import React, { useState } from 'react';
import { usePollStore } from '../../PollStore/usePollStore';
import { Survey } from '../../PollStore/PollStore';
import './modal.css';
import CreatePollForm from './CreateFormPoll';

interface ModalProps {
  active?: boolean;
  onClose: () => void;
  mode?: string;
  children?: Survey | null;
}

export const Modal: React.FC<ModalProps> = ({ active, onClose, mode, children }) => {
  const [text, setText] = useState('');
  const [answer, setAnswer] = useState<number | null>(null);
  const remotePoll = usePollStore((state) => state.removePoll);
  const voteAnswer = usePollStore((state) => state.voteAnswer);

  const vote = (idP: number, idA: number) => {
    if (idA !== null) {
      voteAnswer(idP, idA);
    }
  };


  const modeModel = () => {
    switch (mode) {
      case 'show':
        return (
          <div>
            <div>
              <h2>{children?.poll.title}</h2>
            </div>

            {children?.ans.sort((a, b) => b.id - a.id).map((a) => (
              <p key={a.id}>
                <input
                  type="radio"
                  onClick={() => setAnswer(a.id)}
                  checked={answer === a.id}
                  onChange={() => { }}
                />
                {a.answer} - {a.ans_count} голосов</p>
            ))}
            <button type="submit" onClick={() => vote(children!.poll.id, answer!)}>Проголосовать</button>
          </div>
        );
      case 'create':
        return (
          <div>
            <CreatePollForm />
          </div>
        );
      case 'delete':
        return (
          <div>
            <h2>Удалить опрос</h2>
            <p>Введите название опроса</p>
            <input
              type="text"
              className='input-text'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button type="submit" onClick={() => remotePoll(text)}>Удалить</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={active ? 'modal active' : 'modal'} onClick={onClose}>
      <div className='modal-content' onClick={e => e.stopPropagation()}>
        {modeModel()}
      </div>
    </div>
  );
};
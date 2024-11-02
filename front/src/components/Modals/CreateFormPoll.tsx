import React, { useState } from 'react';
import './modal.css';
import { usePollStore } from '../../PollStore/usePollStore';


function CreatePollForm() {

  const [title, setTitle] = useState('');
  const [options, setOptions] = useState<string[]>([]);
  const createPoll = usePollStore((state) => state.createPoll);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const addOption = () => {
    setOptions([...options, '']);
  };

  const removeOption = (index: number) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
  };

  const handleSubmit = () => {
    createPoll({ title, answer: options });
    setTitle('');
    setOptions(['']);
  };

  return (
    <div>
      <div>
        <label>Название опроса</label>
        <input type="text"
          className='input-text' value={title} onChange={handleTitleChange} />
      </div>
      <div>
        {options.map((option, index) => (
          <div key={index} className="option">
            <input
              type="text"
              className='input-text'
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
            />
            <button type="button" onClick={() => removeOption(index)}>Удалить</button>
          </div>
        ))}
      </div>
      <button type="button" onClick={addOption}>Добавить вариант</button>
      <button type="submit" onClick={handleSubmit} >Создать опрос</button>
    </div>
  );
};

export default CreatePollForm;

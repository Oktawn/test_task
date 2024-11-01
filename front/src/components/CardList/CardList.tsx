import { useEffect } from "react";
import { usePollStore } from "../../PollStore/usePollStore";
import { Card } from "../Cards/Card";

function CardList() {
  const polls = usePollStore((state) => state.polls);
  const getPolls = usePollStore((state) => state.getPolls);

  useEffect(() => {
    if (!polls || polls.length === 0) {
      getPolls();
    }
  }, [polls, getPolls]);


  return (
    <div className="card-list">
      {
        polls.map((p) => (
          <div key={p.id}>
            <Card title={p.title} id={p.id} />
          </div>
        ))
      }
    </div>
  );
}

export { CardList }
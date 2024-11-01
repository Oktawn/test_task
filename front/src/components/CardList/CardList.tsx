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

  console.log("polls", polls)

  return (
    <div className="card-list">
      {
        polls && polls.length > 0 ? (
          polls.map((p) => (
            <div key={p.idPoll}>
              <Card title={p.title} idPoll={p.idPoll} />
            </div>
          ))
        ) : (
          <p>No polls available</p>
        )
      }
    </div>
  );
}

export { CardList }
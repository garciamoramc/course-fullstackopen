import { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const randomAnecdote = () => {

    let anecdote;

    do {

      anecdote = Math.floor(Math.random() * anecdotes.length);

      if (anecdote === selected) {
        console.log('Repeated anecdote, searching for another.');
      }

    } while (anecdote === selected);

    return anecdote;
  };

  const nextAnecdote = () => {

    if (votes[selected] > 0) {
      console.log(`Anecdote ${selected} has ${votes[selected]} votes.`);
    }

    const selectedAnecdote = randomAnecdote();        
    console.log('Anecdote position:', selectedAnecdote);
    setSelected(selectedAnecdote);
  };

  const vote = () => {

    const newVote = [...votes];    
    newVote[selected] += 1;
    setVotes(newVote);
    console.log(`The anecdote ${selected} has ${newVote[selected]} votes.`);
  };

  const mostVoted = () => {

    const max = Math.max(...votes);    
    const mostVotedPosition = votes.indexOf(max);

    return {
      text: anecdotes[mostVotedPosition],
      votes: max
    };
  };

  const mostVotedAnecdote = mostVoted();

  return (

    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={vote}>vote</button>
      
      <button onClick={nextAnecdote}>next Anecdote</button>
      {mostVotedAnecdote.votes > 0 && (
        <>
          <h2>Anecdote with most votes</h2>
          <p>{mostVotedAnecdote.text}</p>
          <p>has {mostVotedAnecdote.votes} votes</p>
        </>
      )}
    </div>
  );
};

export default App;

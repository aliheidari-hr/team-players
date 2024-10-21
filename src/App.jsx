import { useDispatch, useSelector } from "react-redux";
import { setMatches, setError } from "./redux/mainSlice";
import { createMatches } from "./utils/utils";
import Error from "./components/Error/Error";
import CreateMatches from "./components/CreateMatches/CreateMatches";
import Matches from "./components/Matches/Matches";
import Header from "./components/Header/Header";

const App = () => {
  const dispatch = useDispatch();
  const players = useSelector(store => store.main.players);
  const teams = useSelector(store => store.main.teams);
  const members = useSelector(store => store.main.members);
  const rounds = useSelector(store => store.main.rounds);

  const createHandle = () => {
    if (players.length < 2 || (teams * members - 1) > players.length) {
      return dispatch(setError('The number of players is not enough.'));
    }

    if (teams * members < players.length) {
      return dispatch(setError('There are many players.'));
    }

    const matches = createMatches(players, teams, members, rounds);
    dispatch(setMatches(matches));
  }

  return (
    <main className="w-full h-full flex min-h-screen max-h-screen overflow-hidden">
      <Error />
      <CreateMatches createHandle={createHandle} />
      <div className="w-full h-full min-h-screen max-h-screen overflow-hidden">
        <Header />
        <Matches />
      </div>
    </main>
  )
}

export default App;
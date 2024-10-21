import { useDispatch, useSelector } from "react-redux";
import Counter from "../Counter/Counter";
import SelectPlayer from "../SelectPlayer/SelectPlayer";
import { reset, setMembers, setOpenSide, setRounds, setTeams } from "./../../redux/mainSlice";
import { List } from "react-bootstrap-icons";


export default function CreateMatches({ createHandle }) {
    const dispatch = useDispatch();
    const teams = useSelector(store => store.main.teams);
    const members = useSelector(store => store.main.members);
    const rounds = useSelector(store => store.main.rounds);
    const openSide = useSelector(store => store.main.openSide);

    return (
        <div className={`${openSide ? '' : 'left-0 md:-ml-[390px]'} fixed z-10 top-0 -left-[390px] md:static md:top-auto md:left-auto transition-all duration-300 w-full h-full min-h-screen max-h-screen overflow-auto scrollbar-y max-w-[390px] p-6 flex flex-col gap-8 bg-slate-900`}>
            <button type="button" onClick={() => dispatch(setOpenSide())} className="w-full md:hidden flex justify-end text-2xl text-slate-300"><List /></button>
            <div className="w-full flex justify-center items-center py-3">
                <h1 className="text-3xl text-blue-400">TEAM PLAYERS</h1>
            </div>
            <div className="w-full flex-col flex gap-5">
                <SelectPlayer />
                <Counter
                    title='Teams'
                    vlaue={teams}
                    onChange={(e) => dispatch(setTeams(e))}
                    array={[2, 3, 4, 5]}
                />
                <Counter
                    title='Members'
                    vlaue={members}
                    onChange={(e) => dispatch(setMembers(e))}
                    array={[2, 3, 4, 5, 6, 7, 8, 9, 10]}
                />
                <Counter
                    title='Rounds'
                    vlaue={rounds}
                    onChange={(e) => dispatch(setRounds(e))}
                    array={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                />
                <div className="w-full flex gap-5 mt-2">
                    <button onClick={createHandle} className="w-full text-md text-blue-500 border border-solid border-blue-500 p-3 rounded-lg" type="button">Create Matches</button>
                    <button onClick={() => dispatch(reset())} className="w-full text-md text-red-500 border border-solid border-red-500 p-3 rounded-lg" type="button">Reset</button>
                </div>
            </div>
        </div>
    )
}

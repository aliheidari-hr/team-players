import { useRef, useState } from "react";
import { CheckLg, ChevronDown } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { setPlayers } from "../../redux/mainSlice";
import useOutsideClick from "../../hooks/useOutsideClick";

export default function SelectPlayer() {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);
    const dispatch = useDispatch();
    const playersArray = useSelector(store => store.main.playersArray);
    const players = useSelector(store => store.main.players);

    useOutsideClick(menuRef, () => setOpen(false));

    const activedNames = playersArray.filter(item => players.includes(item.id)).map(item => item.name);

    const clickHandle = (id) => {
        const isIt = players.some((item) => item === id);

        if (isIt) {
            const filtered = players.filter(item => item !== id);
            dispatch(setPlayers(filtered));
        } else {
            dispatch(setPlayers([...players, id]));
        }
    }

    return (
        <div ref={menuRef} className="w-full relative bg-slate-800 rounded-xl border border-solid border-slate-700">
            <div title={activedNames.join(' , ')} onClick={() => setOpen(prev => !prev)} className="w-full select-none h-full p-5 flex justify-between items-center text-slate-300 cursor-pointer">
                <div className="w-full max-w-[90%] overflow-hidden flex gap-[5px] flex-nowrap">
                    <span className="w-full min-w-fit max-w-fit">Players</span>
                    {activedNames.length > 0 ? ' : ' : ''}
                    {activedNames.map((name, i) => (
                        <span className="text-xs w-full min-w-fit max-w-fit p-[5px] pt-1 rounded-full text-slate-300 bg-slate-700" key={i}>{name}</span>
                    ))}
                </div>
                <span><ChevronDown /></span>
            </div>
            {open &&
                <div className="absolute z-50 top-[115%] -left-[2px] w-[101%] p-3 px-1 rounded-xl shadow-sm bg-slate-800 border border-solid border-slate-700">
                    <ul className="flex flex-col gap-4 p-2 h-full scrollbar-y min-h-[400px] max-h-[400px] overflow-auto">
                        {playersArray.map((player) => {
                            const checked = players.some((item) => item === player.id);
                            return (
                                <li key={player.id} onClick={() => clickHandle(player.id)} className={`${checked ? 'bg-slate-700' : null} flex p-3 rounded-lg items-center select-none justify-between cursor-pointer hover:bg-slate-700 transition-all`}>
                                    <div className="flex items-center gap-3 text-slate-300">
                                        <div>
                                            <img src={player.img} alt={player.name} />
                                        </div>
                                        <span>{player.name}</span>
                                    </div>

                                    {checked && <span className="text-blue-500 text-xl"><CheckLg /></span>}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            }
        </div>
    )
}
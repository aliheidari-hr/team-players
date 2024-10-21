import { useSelector } from "react-redux";

export default function Player({ player }) {
    const playersArray = useSelector(store => store.main.playersArray);

    return (
        <li className="flex flex-col gap-1 items-center" >
            <div>
                <img src={playersArray[player].img} alt={playersArray[player].name} />
            </div>
            <span className="text-xs text-slate-600">{playersArray[player].name}</span>
        </li>
    )
}

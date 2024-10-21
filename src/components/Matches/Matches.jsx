import { useSelector } from "react-redux";
import MatcheItem from "./MatcheItem";

export default function Matches() {
    const matches = useSelector(store => store.main.matches);
    const matchesGrid = useSelector(store => store.main.matchesGrid);

    const getGridClass = () => {
        switch (matchesGrid) {
            case 1: return "grid-cols-1";
            case 2: return "xl:grid-cols-2";
            case 3: return "lg:grid-cols-2 xl:grid-cols-3";
            default: return "grid-cols-1";
        }
    };

    return (
        matches.length > 0 ? (
            <div className="w-full p-[3px]">
                <div className={`w-full h-full matche_height overflow-auto scrollbar-y grid ${getGridClass()} gap-5 p-4`}>
                    {matches.map((matche, indexMatche) => (
                        <MatcheItem key={indexMatche} indexMatche={indexMatche} matche={matche} />
                    ))}
                </div>
            </div>) : (
            <div className="w-full h-full matche_height overflow-auto scrollbar-y flex flex-col justify-center items-center p-4">
                <img src="/images/no_match.png" alt="no matches is existe" />
                <span className="text-lg text-slate-600">no matches is existe.</span>
            </div>
        )
    )
}

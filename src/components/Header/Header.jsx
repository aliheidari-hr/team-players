import { List } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { setMatchesGrid, setOpenSide } from "../../redux/mainSlice";

export default function Header() {
    const dispatch = useDispatch();

    return (
        <header className="w-full sticky top-0 flex items-center justify-between left-0 p-5 bg-slate-50 border-b border-solid border-slate-300">
            <button type="button" onClick={() => dispatch(setOpenSide())} className="text-slate-600 text-2xl"><List /></button>
            <div className="flex items-center gap-2">
                <button type="button" onClick={() => dispatch(setMatchesGrid(1))} className="cursor-pointer"><img className="w-[22px] aspect-square object-cover" src="images/grid/1.png" alt="" /></button>
                <button type="button" onClick={() => dispatch(setMatchesGrid(2))} className="cursor-pointer"><img className="w-[25px] aspect-square object-cover" src="images/grid/2.png" alt="" /></button>
                <button type="button" onClick={() => dispatch(setMatchesGrid(3))} className="cursor-pointer"><img className="w-[25px] aspect-square object-cover" src="images/grid/3.png" alt="" /></button>
            </div>
        </header>
    )
}
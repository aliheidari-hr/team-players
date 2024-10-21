import { ExclamationCircle } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { setError } from "../../redux/mainSlice";

export default function Error() {
    const dispatch = useDispatch();
    const error = useSelector(store => store.main.error);

    return (
        error && <div className="w-full h-full min-h-screen backdrop-blur-sm bg-[rgba(0,0,0,0.03)] fixed top-0 right-0 flex justify-center items-center z-50">
            <div className="w-full max-w-[400px] border border-solid border-zinc-200 bg-white shadow-sm rounded-xl flex flex-col gap-5 p-5">
                <div className="flex items-center justify-center p-5 gap-2">
                    <span className="text-red-500 text-2xl"><ExclamationCircle /></span>
                    <p className="text-slate-600 text-sm">{error}</p>
                </div>
                <button onClick={() => dispatch(setError(''))} className="w-full text-md text-red-500 border border-solid border-red-500 p-2 rounded-lg" type="button">close</button>
            </div>
        </div>
    )
}

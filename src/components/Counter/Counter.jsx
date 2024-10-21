import { useRef, useState } from "react";
import { CheckLg, ChevronDown } from "react-bootstrap-icons";
import useOutsideClick from "../../hooks/useOutsideClick";

export default function Counter({ onChange, vlaue, title, array, styles }) {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    useOutsideClick(menuRef, () => setOpen(false));

    const clickHandle = (number) => {
        if (number === vlaue) return setOpen(false);
        onChange(number);
        setOpen(false)
    }

    return (
        <div ref={menuRef} className={`${styles} w-full select-none relative bg-slate-800 rounded-xl border border-solid border-slate-700`}>
            <div onClick={() => setOpen(prev => !prev)} className="flex gap-5 justify-between p-5 items-center text-slate-300 cursor-pointer">
                <div>{title} : <span className="text-blue-500 text-md">{vlaue}</span></div>
                <span><ChevronDown /></span>
            </div>
            {open &&
                <div className="absolute z-50 top-[115%] -left-[2px] w-[101%] p-2 rounded-xl shadow-sm bg-slate-800 border border-solid border-slate-700">
                    <ul className="flex flex-col gap-2 h-full  p-2  scrollbar-y min-h-[233px] max-h-[233px] overflow-auto">
                        {
                            Array.from(array, (item, index) => (
                                <li key={index} onClick={() => clickHandle(item)} className={`flex select-none cursor-pointer justify-between items-center p-3 hover:bg-slate-700 rounded-lg ${vlaue === item ? 'bg-slate-700' : null}`}>
                                    <span className="text-slate-300">{item}</span>
                                    {vlaue === item && <span className="text-blue-500 text-xl"><CheckLg /></span>}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            }
        </div >
    )
}
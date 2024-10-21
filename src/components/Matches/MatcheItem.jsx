import TeamItem from "./TeamItem";

export default function MatcheItem({ matche, indexMatche }) {
    return (
        <div className="w-full h-fit bg-slate-50 border border-solid border-slate-200 rounded-2xl p-3 pt-5 flex flex-col">
            <h1 className="text-center text-lg text-slate-700">Matche {indexMatche + 1}</h1>
            <ul className="flex flex-col p-2">
                {matche.map(((team, indexTeam) => (
                    <TeamItem key={indexTeam} indexTeam={indexTeam} team={team} />
                )))}
            </ul>
        </div>
    )
}

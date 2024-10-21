import Player from "./Player";

export default function TeamItem({ indexTeam, team }) {
    return (
        <li className="flex pt-5 mt-5 gap-5 items-center border-t border-solid border-slate-300" >
            <span className="text-md text-slate-600">Team {indexTeam + 1} : </span>
            <ul className="flex gap-5 items-center justify-center">
                {team.map((player, i) => (
                    <Player key={i} player={player} />
                ))}
            </ul>
        </li>
    )
}

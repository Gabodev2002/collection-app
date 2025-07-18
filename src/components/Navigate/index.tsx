import { NavLink } from "react-router"

export const Navigate = ({ text, path }: { text: string, path: string }) => {
    return(
        <NavLink to={path} className={({isActive}) => (
                isActive ? 'active' : ''
        )}>
            {text}
        </NavLink>
    )
}
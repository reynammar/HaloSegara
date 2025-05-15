import NavLink from "../atoms/NavLink"

const NavMenu = () => {
    const navItems = [
        {label: "Beranda", to: "/"},
        {label: "Leaderboard", to: "/leaderboard"},
        {label: "Mitra", to: "/mitra"},
        {label: "Pantai", to: "/pantai"},
        {label: "Tentang", to: "/about"},
    ]
    return (
        <div className="flex gap-6">
            {navItems.map((item) => (
                <NavLink key={item.to} label={item.label} to={item.to} />
            ))}
        </div>
    )
}

export default NavMenu
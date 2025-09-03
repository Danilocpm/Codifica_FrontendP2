export function Card({title, children}) {
    return (
        <div className="card">
            <h2 className="card_title">{title}</h2>
            <h2>{children}</h2>
        </div>
    )
}
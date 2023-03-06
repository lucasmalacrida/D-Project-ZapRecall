export default function Header({logo}) {
    return (
        <div className="container-header">
            <header>
                <img alt="logo" src={logo} />
                <h1>ZapRecall</h1>
            </header>
        </div>
    )
}
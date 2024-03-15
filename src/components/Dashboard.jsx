import Day from "./Day"
import Header from "./Header"
import List from "./List"
import '/src/App.css'
export const Dashboard = () => {
    return (
        <div>
            <div className="headerContainer">
                <Header />
            </div>
            <Day />
            <List />
        </div>
    )
}

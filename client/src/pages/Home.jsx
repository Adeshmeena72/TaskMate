import TaskForm from '../components/TaskForm';
import FilterSearch from '../components/FilterSearch';
import TaskList from '../components/TaskList';

const Home = () => {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-3xl font-bold text-center mb-8">Task Mate</h1>
            <TaskForm />
            <FilterSearch />
            <TaskList />
        </div>
    );
};

export default Home;
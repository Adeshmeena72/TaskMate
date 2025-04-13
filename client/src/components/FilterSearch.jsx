import TaskContext from '../contexts/TaskContext';
import { useContext } from 'react';

const FilterSearch = () => {
    const {
        searchTerm,
        setSearchTerm,
        selectedCategory,
        setSelectedCategory,
    } = useContext(TaskContext);

    const categories = ['All', 'General', 'Work', 'Personal', 'Shopping', 'Other'];

    return (
        <div className="mb-6 bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Filter Tasks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search by title or description"
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Category</label>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value === 'All' ? '' : e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default FilterSearch;
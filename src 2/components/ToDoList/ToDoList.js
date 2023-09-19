import React from 'react';
// Import the useState hook from the React package
import { useState, useEffect } from 'react';
import './ToDoList.css';
import Heading2 from '../Common/H2';
import Wrapper from './Wrapper/Wrapper';



const ToDoList = () =>
{

    // the state variable inputTask will hold the value of the todo
    // the function setInputTask will update the value of inputTask based on user input
    const [ inputTask, setInputTask ] = useState( "" );
    // list state will store an array of values based on tasks inputted. setList updates the value of this array.
    const [ list, setList ] = useState( [] ); // Initialise as empty array
    // completedList state will store the completed tasks
    const [ completedList, setCompletedList ] = useState( [] ); // Initialise as empty array

    useEffect( () =>
    {
        // Do something whenever the completedList changes
        console.log( 'completedList changed:', completedList );
    }, [ completedList ] );

    // event handler to update the inputTask state using the setInputTask function
    const handleInputChange = ( event ) =>
    {
        // event.target.value recuperates user input 
        // whenever the value of the input field changes
        setInputTask( event.target.value );
    };

    const handleAddTodo = ( todo ) =>
    {
        if (todo.trim() === "") {
            // Ignore empty or whitespace-only input
            return;
        }
        const newTask = {
            id: Math.random(), 
            todo: todo, // the todo property holds the input text.
            completed: false
        };
       
        setList( [ ...list, newTask ] );
        setInputTask( '' );
    };

    

    const handleDeleteTodo = ( id ) =>
    {
        // Check if the task is in the completedList and remove it if necessary
        const completedTask = completedList.find( ( task ) => task.id === id );
        if ( completedTask )
        {
            const newCompletedList = completedList.filter( ( task ) => task.id !== id );
            setCompletedList( newCompletedList );
        }

        // Remove the task from the list
        const newList = list.filter( ( todo ) => todo.id !== id );
        setList( newList );
    };

    // remove the task from the list and add it to the completedList
    const handleCompleteTodo = ( id ) =>
    {
        const completedTask = list.find( ( task ) => task.id === id );
        if ( completedTask )
        {
            const newCompletedTask = {
                ...completedTask,
                completed: true // Mark as completed
            };
            const newList = list.filter( ( task ) => task.id !== id );
            setList( newList );
            setCompletedList( [ ...completedList, newCompletedTask ] );
        }
    };



    return (
        <div className="Todo">


            {/* <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl"><span className="block text-indigo-600 overflow-ellipsis">Today's tasks</span></h2> */}
            <Heading2>To-do list</Heading2>
            <Wrapper>
                <h3 className="text-2xl font-extrabold text-slate-700 pb-4">Today's tasks</h3>
            <label className="block text-slate-500 mb-0.5" htmlFor="inputTask">Add a task:</label>
            <div className="Top justify-center mt-4 mb-4 flex gap-x-2">
                {/* value={inputTask}: This binds the value of the input field to the inputTask state variable, ensuring that it reflects the current value. */ }
                {/* onChange={handleInputChange}: This calls the handleInputChange function when the value of the input field changes, updating the inputTask state. */ }
                <input className="input border rounded py-2 px-3 w-full" id="inputTask" type="text" value={ inputTask }
                    onChange={ handleInputChange } placeholder="Answer emails" />
                {/* ADD button onClick triggers the handleAddTodo function, which adds a new task to the list state */ }
                <button className="rounded py-2 px-3 w-10 text-white text-xl bg-indigo-800" onClick={ () => handleAddTodo( inputTask ) }>+</button>
            </div>
            <ul>
                {/* Use the map method to iterate over each item in the list array and return a new array.  */ }
                { list.map( ( todo ) => (
                    <li className={ `task ${ todo.completed ? 'completed' : '' }` } key={ todo.id }>
                        <div className={ `justify-center my-3 flex ${ todo.completed ? 'completed-task' : '' }` }>
                            <div className={ `bg-slate-100 border rounded-l py-2 pl-3 w-full ${ todo.completed ? 'completed-text' : '' }` }>
                                { todo.todo }
                            </div>
                            <button
                                className={ `w-10 text-white text-xl bg-green-600 px-2 ${ todo.completed ? 'hidden' : '' }` }
                                id="completeButton"
                                onClick={ () => handleCompleteTodo( todo.id ) }
                            >
                                &#10003;
                            </button>
                            <button
                                className="rounded-r w-10 text-white text-xl bg-red-600 px-2"
                                id="deleteBtn"
                                onClick={ () => handleDeleteTodo( todo.id ) }
                            >
                                -
                            </button>
                        </div>
                    </li>
                ) ) }
            </ul>
            {/* Display completed tasks */ }
            <h3 className=" text-slate-500 mb-0.5">Completed:</h3>
            <ul>
                { completedList.map( ( completedTask ) => (
                    <li key={ completedTask.id } className={ `completed-task` }>
                        <div className={ `justify-center my-3 flex` }>
                            <div className={ `bg-slate-50 border rounded-l py-2 pl-3 w-full text-slate-400 text-decoration-line: line-through; opacity-60` }><span className=" text-slate-400 text-decoration-line: line-through">{ completedTask.todo }</span></div>
                            <button
                                className="rounded-r w-10 text-white text-xl bg-red-600 px-2"
                                onClick={ () => handleDeleteTodo( completedTask.id ) }
                            >
                                -
                            </button>
                        </div>
                    </li>
                ) ) }
            </ul>
            </Wrapper>
        </div>
    );
};

export default ToDoList;


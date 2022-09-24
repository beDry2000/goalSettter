import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {createGoal} from '../features/goals/goalSlice';

const GoalForm = () => {

    const [text, setText] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createGoal({text}));
        setText('');
    }

    return (
        <section className="form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="" className="text"></label>
                    <input 
                    type="text"
                    name="text"
                    id="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-block">
                        Add goal
                    </button>
                </div>
            </form>
        </section>
    )
}

export default GoalForm
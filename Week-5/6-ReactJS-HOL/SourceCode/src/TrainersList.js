import { Link } from "react-router-dom";
import { TrainersData } from "./TrainersMock";

function TrainersList() {

    return (

        <div>

            <h2>Trainers List</h2>

            <ul>

                {TrainersData.map((trainer) => (

                    <li key={trainer.trainerId}>

                        <Link to={`/trainer/${trainer.trainerId}`}>
                            {trainer.name}
                        </Link>

                    </li>

                ))}

            </ul>

        </div>

    );

}

export default TrainersList;
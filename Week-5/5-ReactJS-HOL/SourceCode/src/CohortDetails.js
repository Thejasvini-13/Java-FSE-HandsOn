function CohortDetails(props) {

    const headingColor =
        props.cohort.currentStatus === "Ongoing"
            ? "green"
            : "blue";

    return (
        <div className="cohort-card">

            <h3 className={headingColor}>
                {props.cohort.cohortCode} -
                <span>{props.cohort.technology}</span>
            </h3>

            <dl>
                <dt>Started On</dt>
                <dd>{props.cohort.startDate}</dd>

                <dt>Current Status</dt>
                <dd className={headingColor}>
                    {props.cohort.currentStatus}
                </dd>

                <dt>Coach</dt>
                <dd>{props.cohort.coachName}</dd>

                <dt>Trainer</dt>
                <dd>{props.cohort.trainerName}</dd>
            </dl>

        </div>
    );
}

export default CohortDetails;
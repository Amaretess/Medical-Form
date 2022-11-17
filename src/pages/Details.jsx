import { useParams } from "react-router-dom";

const Details = () => {

    const { data } = useParams()

    const person = JSON.parse(data)

    return (
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Date of Birth</th>
                    <th>Sex</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{person.firstName}</td>
                    <td>{person.lastName}</td>
                    <td>{person.dob}</td>
                    <td>{person.sex}</td>
                </tr>

            </tbody>

        </table>
    );
}

export default Details;
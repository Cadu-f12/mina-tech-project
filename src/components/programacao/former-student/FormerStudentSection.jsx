import "./FormerStudentSection.css";

import FormerStudent from "./FormerStudent";
import { formerStudents } from "./data-student";

export default function FormerStudentSection() {
    return (
        <>
            <section className="former-student-section">
                <h2>Depoimentos de ex-alunas</h2>

                {formerStudents.map((student) => (
                    <FormerStudent
                        key={student.id}
                        image={student.image}
                        title={student.title}
                        text={student.text}
                        reverse={student.reverse}
                    />
                ))}

            </section>
        </>
    );
}

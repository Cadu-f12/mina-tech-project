import "./ProgramacaoLayout.css";

import ProgrammingSection from "../programming/programming-section/ProgrammingSection";
import PastScheduleSection from "../past-schedule/PastScheduleSection";
import FormerStudentSection from "../former-student/FormerStudentSection";

export default function ProgramacaoLayout() {
    return (
        <>
            <main className="programacao-layout">
                <ProgrammingSection />
                <PastScheduleSection />
                <FormerStudentSection />
            </main>
        </>
    );
}

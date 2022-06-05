import React from "react";
import SubjectLists from "./children/SubjectLists";

const Subject = ({ subjects }) => {
    return (
        <section class="subject">
            <div class="container">
                <div class="row row-cols-2 g-0 align-items-center justify-content-center row-cols-sm-3 g-sm-5 ">
                    {subjects.map((subject) => (
                        <SubjectLists
                            cls={subject.cls}
                            image={subject.image}
                            title={subject.name}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Subject;

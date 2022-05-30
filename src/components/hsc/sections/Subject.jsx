import React from "react";
import SubjectLists from "./children/SubjectLists";
import science from "../../../img/Flaticons/science/microscope.png";
import Commerce from "../../../img/Flaticons/commerce/strategy.png";
import arts from "../../../img/Flaticons/arts/swatches.png";

const Subject = () => {
    return (
        <section class="subject">
            <div class="container">
                <div class="row row-cols-2 g-0 align-items-center justify-content-center row-cols-sm-3 g-sm-5 ">
                    <SubjectLists
                        cls="science"
                        image={science}
                        title="Science"
                    />
                    <SubjectLists
                        cls="commerce"
                        image={Commerce}
                        title="Commerce"
                    />
                    <SubjectLists cls="arts" image={arts} title="Arts" />
                </div>
            </div>
        </section>
    );
};

export default Subject;

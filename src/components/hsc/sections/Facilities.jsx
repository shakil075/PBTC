import React from "react";
import FacilityLists from "./children/FacilityLists";
import physics from "../../../img/pages/physics-lab.jpg";
import chemistry from "../../../img/pages/chemistry.webp";

const Facilities = () => {
    return (
        <section class="facility">
            <div class="container">
                <h2 class="text-center">Our Lab Facilities</h2>
                <div class="row justify-content-center align-items-center">
                    <FacilityLists
                        cls="green"
                        image={physics}
                        title="Physics-lab"
                    />
                    <FacilityLists image={chemistry} title="Chemistry-lab" />
                    <FacilityLists
                        cls="yellow-back"
                        image={physics}
                        title="Zoology-lab"
                    />
                    <FacilityLists image={chemistry} title="Botany-lab" />
                    <FacilityLists image={physics} title="Math-lab" />
                    <FacilityLists
                        cls="green"
                        image={chemistry}
                        title="Agriculture-lab"
                    />
                    <FacilityLists image={physics} title="ICT-lab" />
                    <FacilityLists
                        cls="yellow-back"
                        image={chemistry}
                        title="Statistics-lab"
                    />
                </div>
            </div>
        </section>
    );
};

export default Facilities;

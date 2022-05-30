import React from "react";
import AbilityLists from "./children/AbilityLists";
import communication from "../../../img/pages/communication.png";
import solving from "../../../img/pages/solving.png";
import interaction from "../../../img/pages/a1d8931530d2160cf6c549d43b313792.png";
import citizenship from "../../../img/pages/citizenship.png";
import analysis from "../../../img/pages/analysis.png";
import valuing from "../../../img/pages/valuing.png";
import engagement from "../../../img/pages/engagement.png";
import global from "../../../img/pages/global.png";

const Ability = () => {
    return (
        <section class="ability small-container">
            <div class="ability-head">
                <h2 class="text-center">
                    8 ABILITIES THAT
                    <br />
                    PREPARE YOU FOR LIFE
                </h2>
                <p class="text-center">
                    No matter what you study, you’ll get an education grounded
                    in the 8 Abilities that we believe
                    <br />
                    are essential to success at work and in life — real-world
                    skills like communication, analysis, problem solving,
                    developing a global perspective and more.
                </p>
                <p class="text-center">
                    These are the traits employers tell us make our college
                    grads stand out on day one.
                </p>
            </div>
            <div class="row">
                <AbilityLists image={communication} title="Communication" />
                <AbilityLists image={solving} title="Problem Solving" />
                <AbilityLists image={interaction} title="Social Interaction" />
                <AbilityLists
                    image={citizenship}
                    title="Effective Citizenship"
                />
                <AbilityLists image={analysis} title="Analysis" />
                <AbilityLists image={valuing} title="Valuing" />
                <AbilityLists image={engagement} title="Aesthetic Engagement" />
                <AbilityLists
                    image={global}
                    title="Developing a Global perspective"
                />
            </div>
        </section>
    );
};

export default Ability;

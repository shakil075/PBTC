import React from "react";
import { labLists } from "../../../lib/helper";
import LabList from "./LabList";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Facility = () => {
    return (
        <section class="subject">
            <div class="container">
                <h2 class="text-center">
                    Our Lab <span class="yellow">Facilities</span>
                </h2>
                <div class="row row-cols-1 row-cols-md-4 g-4">
                    <OwlCarousel
                        className="owl-theme"
                        loop
                        nav
                        autoplay
                        autoplayTimeout={1500}
                        autoplayHoverPause
                        margin={10}
                        responsive={{
                            0: {
                                items: 1,
                            },
                            576: {
                                items: 2,
                            },
                            768: {
                                items: 3,
                            },
                            1000: {
                                items: 4,
                            },
                        }}
                    >
                        {labLists.map((lab) => (
                            <LabList
                                lab={lab.name}
                                image={lab.image}
                                color={lab.color}
                            />
                        ))}
                    </OwlCarousel>
                </div>
            </div>
        </section>
    );
};

export default Facility;

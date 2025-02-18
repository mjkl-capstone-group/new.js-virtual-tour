"use client";

import { useEffect } from "react";
import pannellum from "pannellum";

const PanoramaViewer = () => {
    useEffect(() => {
        // Initialize Pannellum
        const viewer = pannellum.viewer("panorama", {
            default: {
                firstScene: "scene1",
                sceneFadeDuration: 1000,
                autoLoad: true,
            },
            scenes: {
                scene1: {
                    type: "equirectangular",
                    panorama: "/assets/equirectangular/pureshotsala.jpg",
                    yaw: -176,
                    hotSpots: [
                        {
                            pitch: -25,
                            yaw: -176,
                            type: "scene",
                            text: "Dining",
                            sceneId: "scene2",
                        },
                    ],
                },
                scene2: {
                    type: "equirectangular",
                    panorama: "/assets/equirectangular/nextstopsala_PureShot.jpg",
                    hotSpots: [
                        {
                            pitch: -25,
                            yaw: -10,
                            type: "scene",
                            text: "Sala",
                            sceneId: "scene1",
                        },
                    ],
                },
            },
        });
    }, []);

    return (
        <div>
            {/* Panorama Container */}
            <div id="panorama" style={{ width: "100%", height: "500px" }}></div>

            {/* Sample Navigation Button */}
            <button onClick={navigateToSample} className="btn btn-primary mt-3">
                Go to Sample Page
            </button>
        </div>
    );
};

// Navigation function
const navigateToSample = () => {
    window.location.href = "/sample";
};

export default PanoramaViewer;

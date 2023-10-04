import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { AiOutlineCheck } from "react-icons/ai";

const LifeTimeline = () => {
  return (
    <div className="">
      <p className="font-bold text-3xl text-center text-transparent bg-clip-text  bg-gradient-to-r from-primary to-gray-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl  ">
        A new life for this family
      </p>
      <VerticalTimeline lineColor="#000">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(38,61,114)", color: "#B6A3AF" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(38,61,114)" }}
          date="06/20/2018"
          iconStyle={{ background: "rgb(38,61,114)", color: "#000" }}
          icon={<AiOutlineCheck />}
        >
          <h3 className="text-2xl font-bold">LC Filed</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quis
            mollitia sequi dolorum iusto quos nemo ex a pariatur facilis.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(148,23,26)", color: "#B6A3AF" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(148,23,26)" }}
          date="12/12/2018"
          iconStyle={{ background: "rgb(148,23,26)", color: "#000" }}
          icon={<AiOutlineCheck />}
        >
          <h3 className="text-2xl font-bold">I-140 Filed</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quis
            mollitia sequi dolorum iusto quos nemo ex a pariatur facilis.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(38,61,114)", color: "#B6A3AF" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(38,61,114)" }}
          date="2/26/2019"
          iconStyle={{ background: "rgb(38,61,114)", color: "#000" }}
          icon={<AiOutlineCheck />}
        >
          <h3 className="text-2xl font-bold">I-140 Approved</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quis
            mollitia sequi dolorum iusto quos nemo ex a pariatur facilis.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(148,23,26)", color: "#B6A3AF" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(148,23,26)" }}
          date="10/15/2019"
          iconStyle={{ background: "rgb(148,23,26)", color: "#000" }}
          icon={<AiOutlineCheck />}
        >
          <h3 className="text-2xl font-bold">Visa Interview </h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quis
            mollitia sequi dolorum iusto quos nemo ex a pariatur facilis.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(38,61,114)", color: "#B6A3AF" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(38,61,114)" }}
          date="9/4/2021

          ‍"
          iconStyle={{ background: "rgb(38,61,114)", color: "#000" }}
          icon={<AiOutlineCheck />}
        >
          <h3 className="text-2xl font-bold">Visa approved</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quis
            mollitia sequi dolorum iusto quos nemo ex a pariatur facilis.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default LifeTimeline;

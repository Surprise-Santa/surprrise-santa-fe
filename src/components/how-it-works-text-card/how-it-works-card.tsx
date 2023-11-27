import { FC } from "react";

interface HowItWorksCardProps {
    title: string;
    description: string;
    backgroundImage: string;
}

const HowItWorksCard: FC<HowItWorksCardProps> = ({ title, description, backgroundImage }) => {
    return (
        <div
            className="w-4/5 md:w-2/5 my-auto"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "90% 50%",
            }}
        >
            <h3 className="font-bold text-[28px] mb-4">{title}</h3>
            <p className="text-lg">{description}</p>
        </div>
    );
};

export default HowItWorksCard;
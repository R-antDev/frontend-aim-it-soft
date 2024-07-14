import {SectionLabel} from "../SectionLabel.jsx";
import { SiWebmoney } from "react-icons/si";
import {ServiceCard} from "../Cards/ServiceCard.jsx";
import { SiSemanticweb } from "react-icons/si";
import { IoColorFilter } from "react-icons/io5";
import { FaHandsHelping } from "react-icons/fa";

export default function OurServiceLayout() {
    return (
        <div className={'container py-10'}>
            <SectionLabel
                description={'Delivering comprehensive solution for your online presence'}
                title={'Our services'}
            />

            <div className={'grid grid-cols-4 gap-10 place-items-center'}>
                <ServiceCard
                    description={'Building reliable and scalable software applications to meet your objectives.'}
                    title={'Web Application Development'}
                    icon={<SiWebmoney />}
                />
                <ServiceCard
                    description={'Creating a cutting-edge website that breeds modernism to your business goals'}
                    title={'Web Site Development'}
                    icon={<SiSemanticweb />}
                />
                <ServiceCard
                    description={'Offering appealing and functional UI/UX design services that attract and engage users'}
                    title={'UI/UX Design Development'}
                    icon={<IoColorFilter />}
                />
                <ServiceCard
                    description={'Securing your online presence and keeping it updated with innovative solutions'}
                    title={'Technical Service and Support'}
                    icon={<FaHandsHelping />}
                />
            </div>

        </div>
    )
}
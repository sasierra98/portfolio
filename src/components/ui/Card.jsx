import {
  Card as BaseCard,
  CardHeader,
  CardBody,
  Image,
} from "@nextui-org/react";

export const Card = ({ title, image, children }) => {
  return (
    <BaseCard className="py-4 bg-button rounded-none">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        {/* <p className="text-tiny uppercase font-bold">Daily Mix</p> */}
        <h3 className="text-white font-bold">Real Estate Agency Website</h3>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
    </BaseCard>
  );
};

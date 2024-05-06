import {
  Card as CardWrapper,
  CardHeader,
  CardBody,
  Image,
} from "@nextui-org/react";

type Props = {
  name: string;
  nation: string;
  level: number;
  description: string;
  image: string;
};

export default function Card({
  name,
  nation,
  level,
  description,
  image,
}: Props) {
  return (
    <CardWrapper radius="sm">
      <CardHeader className="overflow-hidden">
        <div className="relative aspect-[3/2]">
          <Image alt={name} className="object-cover" src={image} />
        </div>
      </CardHeader>
      <CardBody>
        <div className="flex flex-col gap-2">
          <b>{`${name} ${nation} ${level} уровень`}</b>
          <p className="text-default-500">{description}</p>
        </div>
      </CardBody>
    </CardWrapper>
  );
}

interface Props {
  title: string;
  description: string;
  image: string;
  isReversed?: boolean;
}

const FeatureCard = ({ title, description, image, isReversed }: Props) => (
  <div className="flex items-center gap-20 bg-slate-200 p-10 rounded-md shadow-lg">
    {!isReversed && <img src={image} className="rounded-lg shadow-md" />}
    <div className="flex flex-col">
      <p className="text-blue-700 font-bold text-3xl">{title}</p>
      <p className="font-semibold text-lg mt-2 max-w-md">{description}</p>
      <a className="btn btn-primary mt-5 w-full tracking-wide">LEARN MORE</a>
    </div>
    {isReversed && <img src={image} className="rounded-lg shadow-md" />}
  </div>
);

export default FeatureCard;
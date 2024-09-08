interface Props {
  title: string;
  description: string;
  image: string;
  isReversed?: boolean;
}

const FeatureCard = ({ title, description, image, isReversed }: Props) => (
  <div className="flex flex-col gap-8 sm:flex-row sm:gap-20 items-center bg-slate-200 p-10 rounded-md shadow-lg mx-5">
    <div className={`w-full sm:w-auto ${isReversed ? 'sm:order-2' : 'sm:order-1'}`}>
      <img src={image} className="rounded-lg shadow-md w-full" alt={title} />
    </div>
    <div className={`flex flex-col ${isReversed ? 'sm:order-1' : 'sm:order-2'}`}>
      <p className="text-blue-700 font-bold text-3xl">{title}</p>
      <p className="font-semibold text-lg mt-2 max-w-md">{description}</p>
      <a className="btn btn-primary mt-5 w-full tracking-wide">LEARN MORE</a>
    </div>
  </div>
);

export default FeatureCard;
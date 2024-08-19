interface ScamCardProps {
    title: string;
    image: string;
    showDetails: () => void;
  }
  
  const ScamCard = ({ title, image, showDetails }: ScamCardProps) => (
    <div className="flex flex-col items-center bg-slate-200 p-6 rounded-md shadow-lg min-w-48 w-full cursor-pointer hover:skeleton" onClick={showDetails}>
      <div className="w-full aspect-w-1 aspect-h-1 flex justify-center">
        <img src={image} className="rounded-lg shadow-md object-cover" alt={title} />
      </div>
      <p className="text-blue-500 font-semibold text-base lg:text-xl mt-4">{title}</p>
    </div>
  );
  
  export default ScamCard;  
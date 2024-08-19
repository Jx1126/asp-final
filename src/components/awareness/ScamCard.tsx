interface ScamCardProps {
    title: string;
    image: string;
  }
  
  const ScamCard = ({ title, image }: ScamCardProps) => (
    <div className="flex flex-col items-center bg-slate-200 p-6 rounded-md shadow-lg min-w-48 w-full">
      <div className="w-full aspect-w-1 aspect-h-1 flex justify-center">
        <img src={image} className="rounded-lg shadow-md object-cover" alt={title} />
      </div>
      <p className="text-blue-500 font-semibold text-base lg:text-xl mt-4">{title}</p>
    </div>
  );
  
  export default ScamCard;  
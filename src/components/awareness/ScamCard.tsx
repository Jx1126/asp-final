interface ScamCardProps {
    title: string;
    image: string;
  }
  
  const ScamCard = ({ title, image }: ScamCardProps) => (
    <div className="flex flex-col items-center bg-slate-200 p-6 rounded-md shadow-lg mx-5">
      <img src={image} className="rounded-lg shadow-md w-26 h-26 md:w-32 md:h-32" alt={title} />
      <p className="text-blue-700 font-bold text-xl mt-4">{title}</p>
    </div>
  );
  
  export default ScamCard;  
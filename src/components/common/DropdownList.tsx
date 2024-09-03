interface DropdownItem {
  title: string;
  description: string;
}

interface DropdownListProps {
  items: DropdownItem[];
}

function DropdownList({ items }: DropdownListProps) {

  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <div key={index} className="collapse border border-gray-200 shadow-md rounded-lg overflow-hidden bg-white">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium py-5">{item.title}</div>
          <div className="collapse-content">
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DropdownList;
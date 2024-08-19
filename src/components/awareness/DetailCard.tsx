interface Props {
  id: string;
  title: string;
  description: string;
}

const DetailCard = ({ id, title, description }: Props) => (
  <>
    <dialog id={id} className="modal">
      <div className="modal-box rounded-lg">
        <h3 className="font-bold text-xl text-blue-500">{title}</h3>
        <p className="py-4 font-semibold">{description}</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-primary">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  </>
);

export default DetailCard;  
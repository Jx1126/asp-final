interface Props {
  star: number;
  message: string;
  avatar: string;
  username: string;
}

const RatingCard = ({ star, message, avatar, username }: Props) => (
  <div className="flex justify-center bg-slate-200 border-slate-300 max-w-72 border-2 shadow-inner rounded-lg min-h-full">

    <div className="flex flex-col gap-3 my-5">

      <div className="flex items-center justify-center">
        <div className="rating my-2">
          {[1, 2, 3, 4, 5].map((value) => (
            <input
              key={value}
              type="radio"
              name={`rating-${username}`}
              className="mask mask-star-2 bg-orange-400"
              checked={value <= star}
              readOnly
            />
          ))}
        </div>
      </div>

      <p className="max-w-56 font-semibold">" {message} "</p>

      <div className="flex flex-row gap-4 items-center mt-3">
        <div className="avatar">
          <div className="w-8 rounded-full ring ring-offset-2 ring-green-400">
            <img src={avatar} />
          </div>
        </div>

        <p className="font-semibold text-black/60">{username}</p>
      </div>
    </div>

  </div>
);

export default RatingCard;
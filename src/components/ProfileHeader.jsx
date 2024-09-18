export default function ProfileHeader({url, name}) {
  return (
    <>
      <div className="flex-column items-center justify-center p-4">
        <div className="w-[150px] rounded-full overflow-hidden">
          <img src={url} alt="Avatar" />
        </div>
        <div className="text-center">{name}</div>
      </div>
    </>
  );
}

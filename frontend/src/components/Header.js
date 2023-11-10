export default function Header() {
  return (
    <div className="navbar bg-base-100 bg-white text-black">
      <div className="flex-1">
        {/* <a className="btn btn-ghost normal-case text-xl">WLB</a> */}
        <div className="w-10">
          <img src="/wlbIcon1.jpeg" />
        </div>
      </div>
      <div className="flex-none">
        <a className="btn btn-ghost normal-case text-xl">Contact</a>
      </div>
    </div>
  );
}
